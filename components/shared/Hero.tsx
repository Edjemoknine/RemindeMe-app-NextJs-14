import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20">
    <div className="container relative">
      {/* Floating Elements */}
      <div className="absolute left-10 top-20">
        <div className="relative h-40 w-40 rotate-[-15deg]">
          <div className="absolute inset-0 bg-yellow-100 p-4 shadow-lg transform-gpu">
            <p className="text-sm font-handwriting text-gray-700">
              Take notes to keep track of crucial details, and accomplish more tasks with ease.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGLQdnzLo133Hxz3myH86JbfIdUfJU.png"
              alt="Checkmark"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-10 top-20">
        <div className="relative h-48 w-40 rotate-[15deg]">
          <div className="absolute inset-0 bg-white p-4 rounded-xl shadow-lg">
            <div className="space-y-2">
              <h4 className="font-semibold">Reminders</h4>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Today &apos;s Meeting</p>
                <p className="text-xs text-blue-500">13:00 - 13:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-40 top-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tXvFpUVjRwSv9cl8a5qGUK6LX61uVh.png"
          alt="Burning Clock"
          width={80}
          height={80}
          className="transform rotate-12"
        />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tight mb-4">
          Think, plan, and track
          <span className="block text-gray-400">all in one place</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Efficiently manage your tasks and boost productivity.
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          Get free demo
        </Button>
      </div>

      {/* Bottom Floating Cards */}
      <div className="mt-20 grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Today &apos;s tasks</CardTitle>
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
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm font-medium">100+ Integrations</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <div className="h-10 w-10 rounded-lg bg-red-100" />
            <div className="h-10 w-10 rounded-lg bg-blue-100" />
            <div className="h-10 w-10 rounded-lg bg-green-100" />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  )
}

export default Hero