import React, { ReactNode } from "react";

export function DotBackgroundDemo({ children }: { children: ReactNode }) {
  return (
    <div className="h-full max-w-7xl  mx-auto px-4 md:px-8 overflow-hidden  dark:bg-black bg-white border-2 rounded-3xl dark:border-neutral-900 border-neutral-300  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]" />
      {children}
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      </p> */}
    </div>
  );
}
