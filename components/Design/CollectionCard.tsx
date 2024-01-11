"use client";

import { Collection, Task } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useMemo, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constant";
import {
  CaretDownIcon,
  CaretUpIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { toast } from "../ui/use-toast";
import { deleteCollection } from "@/Actions/collections";
import { useRouter } from "next/navigation";
import CreateCollection from "./CreateCollection";
import CreateTaskDialog from "./CreateTaskDialog";
import TaskCard from "./TaskCard";

interface props {
  collection: Collection & { tasks: Task[] };
}

const CollectionCard = ({ collection }: props) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();
  const tasks = collection?.tasks;

  const [showTaskModel, setShowTaskModel] = useState(false);

  const tasksDone = useMemo(() => {
    return collection.tasks.filter((task) => task.done === true).length;
  }, [collection.tasks]);

  const totalTasks = collection.tasks.length;
  const progress = totalTasks === 0 ? 0 : (tasksDone / totalTasks) * 100;

  const removeCollection = async () => {
    try {
      await deleteCollection(collection.id);
      toast({
        title: "Success",
        variant: "default",
        description: "Collection has been deleted successfuly!",
      });
      router.refresh();
    } catch (error: any) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Failed to remove",
      });
      throw new Error(error);
    }
  };

  return (
    <>
      <CreateTaskDialog
        open={showTaskModel}
        setOpen={setShowTaskModel}
        collection={collection}
      />
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "w-full flex justify-between p-6",
              isOpen && "rounded-b-none",
              CollectionColors[collection.color as CollectionColor]
            )}
          >
            <span className="font-bold text-white"> {collection.name}</span>
            {!isOpen ? (
              <CaretDownIcon className="h-6 w-6" />
            ) : (
              <CaretUpIcon className="h-6 w-6" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex rounded-md shadow-lg flex-col dark:bg-neutral-900 ">
          {tasks.length === 0 && (
            <Button
              onClick={() => setShowTaskModel(true)}
              variant={"ghost"}
              className="flex justify-center gap-2 p-8 rounded-none items-center"
            >
              <p>There are no tasks yet:</p>
              <span
                className={cn(
                  "text-sm bg-clip-text text-transparent",
                  CollectionColors[collection.color as CollectionColor]
                )}
              >
                Create one
              </span>
            </Button>
          )}
          {tasks.length > 0 && (
            <>
              <Progress className="rounded-none " value={progress} />
              <div className="p-4 flex flex-col gap-3 dark:bg-neutral-900 bg-slate-50">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </>
          )}
          <Separator />
          <footer className="flex dark:bg-neutral-900 bg-slate-50 justify-between items-center text-neutral-500 text-xs px-4 p-1 ">
            <p>Create at {collection.createAt.toDateString()}</p>
            {isLoading ? (
              <span>Deleting...</span>
            ) : (
              <div>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => setShowTaskModel(true)}
                >
                  <PlusIcon />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size={"icon"} variant={"ghost"}>
                      <TrashIcon />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>Are you absolutly sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannpot be undone. this will permanently
                      delete your collection and all tasks inside it.
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => startTransition(removeCollection)}
                      >
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </footer>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default CollectionCard;
