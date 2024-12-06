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
        <div className="container">
          <Badge className="mb-8">Solutions</Badge>
          <h2 className="text-4xl font-bold mb-16 text-center">
            Solve your team&apos;s<br />biggest challenges
          </h2>
          <div className="relative">
            <Card className="shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hQezBA5KNyS7YVDCZnYBYWnnsx9xmI.png"
                  alt="Task Management Dashboard"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg w-full"
                  priority
                />
              </CardContent>
            </Card>
            {/* Floating Feature Icon */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mfyAPvIF6caRonMe2rnrOfimUu3yZs.png"
                alt="Verified"
                width={64}
                height={64}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Features