import { DotBackgroundDemo } from "@/components/bg/DottedBg";
import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Integration from "@/components/shared/Integration";
import { PricingSection } from "@/components/shared/Pricing";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <DotBackgroundDemo>
        <Hero />
      </DotBackgroundDemo>
      <Features />
      <Integration />
      <PricingSection />
    </div>
  );
};

export default page;
