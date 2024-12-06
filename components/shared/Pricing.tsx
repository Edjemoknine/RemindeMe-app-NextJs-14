import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'

const plans = [
  {
    name: 'Basic plan',
    description: 'Perfect for individuals',
    price: 5,
    features: [
      'All product features',
      'Unlimited tasks & notes',
      'Priority support',
      'Unlimited tasks',
      'Unlimited file storage',
      'Unlimited projects',
    ],
  },
  {
    name: 'Pro plan',
    description: 'Best for small teams',
    price: 9,
    popular: true,
    features: [
      'All product features',
      'Unlimited tasks & notes',
      'Priority support',
      'Unlimited tasks',
      'Unlimited file storage',
      'Unlimited projects',
      'Unlimited teams',
    ],
  },
  {
    name: 'Advanced plan',
    description: 'Best for large organizations',
    price: 15,
    features: [
      'All product features',
      'Unlimited tasks & notes',
      'Priority support',
      'Unlimited tasks',
      'Unlimited file storage',
      'Unlimited projects',
      'Unlimited teams',
      'Advanced security',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple pricing plans</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-full md:w-1/3 max-w-sm rounded-lg  relative border border-blue-500 ${
                plan.popular
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-inherit'
              }`}
            >  {plan.popular && (
                <div className="absolute -top-4 right-4 rounded-full">
                  <Badge className="bg-yellow-200 rounded-full"> <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zMlLJZMEgwQ2kl0ybxER2NT4gfRxlw.png"
                    alt="Popular"
                    width={24}
                    height={24}
                  /> Popular</Badge>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`ml-1 ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    /mo
                  </span>
                </div>
                <Button
                  className={`w-full py-2 px-4 rounded ${
                    plan.popular ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                  }`}
                >
                  Get started
                </Button>
              </div>
              <div className={`px-8 pb-8 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className={`w-4 h-4 mr-2 ${
                          plan.popular ? 'text-blue-300' : 'text-green-500'
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block mt-4 text-sm ${
                    plan.popular ? 'text-blue-200' : 'text-blue-600'
                  }`}
                >
                  Learn more
                </a>
              </div>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

