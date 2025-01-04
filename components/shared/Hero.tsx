import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative pt-32 w-full pb-48 ">
      <div className=" max-w-7xl  mx-auto px-4 md:px-8 ">
        {/* Floating Elements */}
        <div className="absolute left-5 top-10">
          <div className="relative h-44 w-44 rotate-[5deg] shadow-md shadow-gray-600">
            <div className="absolute inset-0 bg-yellow-200 p-4  transform-gpu">
              <p className="text-xs italic font-handwriting text-gray-700">
                Take notes to keep track of crucial details, and accomplish more
                tasks with ease.
              </p>
            </div>
          </div>
          <Card className="shadow-2xl border-2 border-gray-200 w-52 h-40 backdrop-blur-xl bg-transparent absolute -left-20 top-20 rotate-[20deg]">
            <div className="absolute rotate-[-20deg] top-4 right-10 h-16 w-16 backdrop-blur-xl bg-gray-50/70 rounded-lg shadow-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGLQdnzLo133Hxz3myH86JbfIdUfJU.png"
                alt="Checkmark"
                width={30}
                height={30}
              />
            </div>
          </Card>
        </div>
        <Card className="absolute -right-10 h-44 w-44 top-20 rotate-[15deg] bg-gray-50">
          <div className="relative w-full h-full ">
            <div className="absolute inset-0 dark:bg-gray-900 p-4 shadow-lg">
              <div className="space-y-2">
                <h4 className="font-semibold">Reminders</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Today &apos;s Meeting</p>
                  <p className="text-xs text-blue-500">13:00 - 13:45</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="absolute right-32 top-20 rotate-[-5deg] shadow-2xl bg-gray-100 rounded-lg ">
          <div className="w-20 h-20  flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXvFpUVjRwSv9cl8a5qGUK6LX61uVh.png"
              alt="Burning Clock"
              width={60}
              height={60}
              className="transform rotate-12"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Logo
              size={7}
              className={"shadow-2xl rounded-lg shadow-gray-500"}
              isTitled={false}
            />
          </div>
          <p className="text-4xl sm:text-7xl font-medium relative z-20 dark:text-gray-50 text-black pt-8">
            Think, plan, and track
          </p>
          <h1 className="text-6xl font-medium  tracking-tight mb-10 pt-6">
            <span className="block text-gray-400">all in one place</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Efficiently manage your tasks and boost productivity.
          </p>
          <Button
            className="bg-blue-500 hover:bg-blue-600 px-10 py-3 h-12
           rounded-lg"
          >
            Get free demo
          </Button>
        </div>

        {/* Bottom Floating Cards */}
        <div className=" absolute w-full left-0 -bottom-10 flex justify-between">
          <Card className="shadow-lg bg-gray-50 w-[270px] h-60 rotate-[-5deg]">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Today &apos;s tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div className="flex-1">
                    <div className="h-2 bg-blue-200 rounded-full w-3/5" />
                  </div>
                  <span className="text-xs text-gray-500">60%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div className="flex-1">
                    <div className="h-2 bg-blue-200 rounded-full w-4/5" />
                  </div>
                  <span className="text-xs text-gray-500">112%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-gray-50 w-[270px] h-60 rotate-[5deg]">
            <CardHeader>
              <CardTitle className="text-sm font-medium mb-6">
                100+ Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="flex">
              <div className=" rotate-[-15deg] shadow-2xl shadow-black bg-gray-50 rounded-lg ">
                <div className="w-20 h-20  flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXvFpUVjRwSv9cl8a5qGUK6LX61uVh.png"
                    alt="Burning Clock"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="relative z-20 right-2 -top-6 rotate-[-5deg] shadow-2xl shadow-black bg-gray-50 rounded-lg ">
                <div className="w-20 h-20  flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXvFpUVjRwSv9cl8a5qGUK6LX61uVh.png"
                    alt="Burning Clock"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="relative right-4 rotate-[10deg] shadow-2xl shadow-black bg-gray-50 rounded-lg ">
                <div className="w-20 h-20  flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXvFpUVjRwSv9cl8a5qGUK6LX61uVh.png"
                    alt="Burning Clock"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
