import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
const Header = () => {
  return (
 <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/chronotask-logo.png" alt="ChronoTask Logo" width={32} height={32} />
            <span className="font-bold">ChronoTask</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="#resources" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Resources
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Button variant="outline">Get demo</Button>
          </div>
        </div>
      </header> 

  )
}

export default Header