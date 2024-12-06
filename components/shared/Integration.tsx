
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Integration = () => {
  return (
 
      <section id="integrations" className="py-20">
        <div className="container text-center">
          <Badge className="mb-8">Integrations</Badge>
          <h2 className="text-4xl font-bold mb-16">
            Connect integrations<br />you use every day
          </h2>
          <div className="grid grid-cols-7 gap-4 max-w-4xl mx-auto mb-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iGG0voaGJGCwDj25lsGfBOtazcHP16.png"
              alt="Messenger"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4yDIHcYproIky17oxaR9TKqnmdjIoL.png"
              alt="Figma"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-scDR54HKYpIFDlwCe6X1criygIWkOf.png"
              alt="Google Drive"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AfL9RRQHoHGBq8xxrIccFtuRReZydY.png"
              alt="Gmail"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-URqadtW4WOdfsN77anxEVHE7ORJZOe.png"
              alt="Adobe Creative Cloud"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EwIZdkd9jUCMKBAQ9hBOxK5ciWR2XV.png"
              alt="Google Calendar"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BsoOkd8mJDSBJZi4Ld2E5qJCQCqueF.png"
              alt="HubSpot"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h9TeGPxQbPgmCJudFtpNFZqvf8Nr84.png"
              alt="Discord"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1MNzXl0Uq5YSUrdVUWMaKJm0WfMjkr.png"
              alt="Spotify"
              width={64}
              height={64}
              className="aspect-square rounded-xl bg-white shadow-lg p-4"
            />
          </div>
          <Badge className="mb-8">Testimonials</Badge>
          <h2 className="text-4xl font-bold mb-16">
            People just like you<br />are already using ChronoTask
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="text-left">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    This task manager has completely transformed the way my team works.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Integration