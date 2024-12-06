import Features from '@/components/shared/Features'
import Hero from '@/components/shared/Hero'
import Integration from '@/components/shared/Integration'
import { PricingSection } from '@/components/shared/Pricing'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Integration />
        <PricingSection />


    </div>
  )
}

export default page