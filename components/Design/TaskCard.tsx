"use client";

import { Task } from "@prisma/client";
import { Checkbox } from "../ui/checkbox";
import { format } from "date-fns";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { updateTask } from "@/Actions/task";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  task: Task;
}
const TaskCard = ({ task }: Props) => {
  const getExpirationDate = (expire: Date) => {
    const days = Math.floor(expire.getTime() - Date.now()) / 1000 / 60 / 60;

    if (days < 0) return "text-gray-300 dark:text-red-400";
    if (days <= 3 * 24) return "text-red-500 dark:text-red-400 ";
    if (days <= 7 * 24) return "text-orange-500 dark:text-red-400";
    return "text-green-500 dark:text-green-400";
  };

  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className="flex items-start gap-2">
      <Checkbox
        id={task.id.toString()}
        className="w-5 h-5 "
        checked={task.done}
        disabled={task.done || isLoading}
        onCheckedChange={() => {
          startTransition(async () => await updateTask(task.id));
          router.refresh();
        }}
      />
      <label
        htmlFor={task.content}
        className={cn(
          "text-sm font-medium text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-1 dark:decoration-white",
          task.done && "line-through"
        )}
      >
        {task.content}

        {task.expiresAt && (
          <p
            className={cn(
              "text-xs text-neutral-500 dark:text-neutral-400",
              getExpirationDate(task.expiresAt)
            )}
          >
            {format(task.expiresAt, "dd/MM/yyyy")}
          </p>
        )}
      </label>
    </div>
  );
};

export default TaskCard;
