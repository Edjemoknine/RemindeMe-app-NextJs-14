import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="flex flex-grow w-full justify-center ">
        <div className="max-w-[990px] flex flex-col flex-grow px-4 py-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
