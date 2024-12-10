import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl  mx-auto px-4 md:px-8">
          <div className='flex justify-center'>
          <Badge className="mb-8">Solutions</Badge>
          </div>
          {/* <h2 className="text-4xl font-bold mb-16 text-center">
            Solve your team&apos;s<br />biggest challenges
          </h2> */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Solve your team &apos;s biggest challenges</h2>
            <p className="text-xl text-gray-500">Keep everything organized and boost productivity across your entire team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Image src="/assets/dashboard.avif" alt="Dashboard Screenshot" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image src="/icons/slack.png" alt="Collaboration Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
                  <p className="text-gray-500">Work together effortlessly with your team, no matter where they are.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Image src="/icons/project-management.png" alt="Time Management Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time Management Tools</h3>
                  <p className="text-gray-500">Track time, set deadlines, and optimize your workflow.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Image src="/icons/analytics.png" alt="Analytics Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced task tracking</h3>
                  <p className="text-gray-500">Get insights into your team&apos;s performance and project progress.</p>
                </div>
              </div>    <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image src="/icons/slack.png" alt="Collaboration Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
                  <p className="text-gray-500">Work together effortlessly with your team, no matter where they are.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Image src="/icons/project-management.png" alt="Time Management Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time Management Tools</h3>
                  <p className="text-gray-500">Track time, set deadlines, and optimize your workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Features