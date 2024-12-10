import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

const footerLinks = {
  Company: ['About Us', 'Contact', "What's New", 'Careers'],
  Product: ['Solutions', 'Integrations', 'Price'],
}

const footerIcons = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h0DQhGjnIO3JkYPPQWOvvwM6OrK2c1.png', alt: 'Clock' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB2Jkm8Kco0c4GiEdYbFvXXwpgBAml.png', alt: 'Hourglass' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-igTWSAxRwcCenLpiRp2oCr9nOtQ7E7.png', alt: 'Calendar' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LREg3EH7KFs2L0T26xPsHQ1tJFZV6Q.png', alt: 'Chat' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k4FXSbZDv3aHabahzx1YsX0JBfQV3Q.png', alt: 'Chat Alternative' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AjFlYDV5kYb2KL1VDMUTOzOK1msfXC.png', alt: 'Checkmark' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gO5R2IMhmc4IdLUiiuAPqCRfkMZfCa.png', alt: 'Light Bulb' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5KYfYomOyusjbRuNKm6nx91DefQ9y.png', alt: 'Lightning' },
]

export function Footer() {
  return (
    <footer className="w-full py-20 relative overflow-hidden ">
      <div className="max-w-7xl  mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
          <Logo size={2}/>
            <p className="text-gray-600 max-w-xs font-semibold text-lg mt-4">
              Stay organized and<br />boost your productivity
            </p>
          </div>
          <div className='relative flex-1'>
          {footerIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          </div>
        ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-600 hover:text-gray-900">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
          <p>© 2024 ChronoTask. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

