import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Company: ["About Us", "Contact", "What's New", "Careers"],
  Product: ["Solutions", "Integrations", "Price"],
};

const footerIcons = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h0DQhGjnIO3JkYPPQWOvvwM6OrK2c1.png",
    alt: "Clock",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB2Jkm8Kco0c4GiEdYbFvXXwpgBAml.png",
    alt: "Hourglass",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-igTWSAxRwcCenLpiRp2oCr9nOtQ7E7.png",
    alt: "Calendar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LREg3EH7KFs2L0T26xPsHQ1tJFZV6Q.png",
    alt: "Chat",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k4FXSbZDv3aHabahzx1YsX0JBfQV3Q.png",
    alt: "Chat Alternative",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AjFlYDV5kYb2KL1VDMUTOzOK1msfXC.png",
    alt: "Checkmark",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gO5R2IMhmc4IdLUiiuAPqCRfkMZfCa.png",
    alt: "Light Bulb",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5KYfYomOyusjbRuNKm6nx91DefQ9y.png",
    alt: "Lightning",
  },
];

export function Footer() {
  return (
    <footer className="px-4 w-full mt-20 ">
      <div className="w-full pb-10 pt-16 relative overflow-hidden bg-gray-100 dark:bg-gray-950 rounded-t-2xl ">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Logo size={2} />
              <h4 className="text-gray-900 font-medium text-3xl mt-4">
                Stay organized and
                <br />
                boost your productivity
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64">
            <div className="relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 xl:grid-cols-6 justify-items-center pt-10 ">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md   flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h0DQhGjnIO3JkYPPQWOvvwM6OrK2c1.png"
                  alt="Clock"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md   flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yB2Jkm8Kco0c4GiEdYbFvXXwpgBAml.png"
                  alt="Hourglass"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-igTWSAxRwcCenLpiRp2oCr9nOtQ7E7.png"
                  alt="Calender"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k4FXSbZDv3aHabahzx1YsX0JBfQV3Q.png"
                  alt="Chat Alternative"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LREg3EH7KFs2L0T26xPsHQ1tJFZV6Q.png"
                  alt="Calendar"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AjFlYDV5kYb2KL1VDMUTOzOK1msfXC.png"
                  alt="Checkmark"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gO5R2IMhmc4IdLUiiuAPqCRfkMZfCa.png"
                  alt="Light Bulb"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5KYfYomOyusjbRuNKm6nx91DefQ9y.png"
                  alt="Lightning"
                  width={30}
                  height={30}
                />
              </div>
              {/* èèèèèèèèèèèèèèèè */}
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LREg3EH7KFs2L0T26xPsHQ1tJFZV6Q.png"
                  alt="Calendar"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AjFlYDV5kYb2KL1VDMUTOzOK1msfXC.png"
                  alt="Checkmark"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gO5R2IMhmc4IdLUiiuAPqCRfkMZfCa.png"
                  alt="Light Bulb"
                  width={30}
                  height={30}
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5KYfYomOyusjbRuNKm6nx91DefQ9y.png"
                  alt="Lightning"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t border-gray-300 mt-6 ">
          <div className=" max-w-7xl  mx-auto px-4 md:px-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500  ">
            <p>© 2030 ChronoTask. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </footer>
  );
}
