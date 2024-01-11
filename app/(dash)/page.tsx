import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
export default async function Home() {
  return (
    <>
      <Suspense fallback={"loading.."}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback="loading..">
        <CollectionList />
      </Suspense>
    </>
  );
}

import React, { Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CreateCollection from "@/components/Design/CreateCollection";
import CollectionCard from "@/components/Design/CollectionCard";
// import CreateCollection from "@/components/CreateCollection";

const WelcomeMsg = async () => {
  const user = await currentUser();
  if (!user) return <div>Error</div>;
  return (
    <main className="flex ">
      <h1 className="font-bold leading-normal text-4xl text-center text-gray-700 mb-10 dark:text-white">
        {" "}
        Welcome, <br /> {user.firstName} {user.lastName}
      </h1>
    </main>
  );
};

async function CollectionList() {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <Alert>
          <AlertTitle>There are no collection yet</AlertTitle>
          <AlertDescription>
            Create a collection to get started
          </AlertDescription>
        </Alert>
        <CreateCollection />
      </div>
    );
  }
  return (
    <>
      <CreateCollection />
      <div className="flex flex-col gap-4  mt-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </>
  );
}
