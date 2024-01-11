"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import CreateCollectionSheet from "./CreateCollectionSheet";

const CreateCollection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (open: boolean) => setOpen(open);

  return (
    <div className="w-full mb-6 rounded-md bg-gradient-to-r from-pink-500 via-red-500 p-[1px] to-yellow-500">
      <Button
        onClick={() => handleOpen(true)}
        variant={"outline"}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white"
      >
        <span className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent">
          Create Collection
        </span>
      </Button>
      <CreateCollectionSheet open={open} onOpenChange={handleOpen} />
    </div>
  );
};

export default CreateCollection;
