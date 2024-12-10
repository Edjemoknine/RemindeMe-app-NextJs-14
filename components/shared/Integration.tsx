
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Integration = () => {
  return (
 
      <section id="integrations" className="py-20">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 text-center">
          <Badge className="mb-8">Integrations</Badge>
          <h2 className="text-4xl font-bold mb-16">
            Connect integrations<br />you use every day
          </h2>
          <div className="grid grid-cols-7 gap-8 max-w-4xl mx-auto mb-20">
          {integrations.map((integration, i) => (
              <div key={i} className="flex items-center justify-center ">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={48}
                  height={48}
                  className="rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
          <Badge className="mb-8">Testimonials</Badge>
          <h2 className="text-4xl font-bold mb-16">
            People just like you<br />are already using ChronoTask
          </h2>
          {/* <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"> */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover h-10 w-10"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        {/* </div> */}
      </section>
  )
}

export default Integration


const integrations = [
  { name: "Google Drive", logo: "/icons/google-drive.png" },
  { name: "Creative Cloud", logo: "/icons/creative-cloud.png" },
  { name: "Google Docs", logo: "/icons/docs.png" },
  { name: "Google Calendar", logo: "/icons/google-calendar.png" },
  { name: "Hubspot", logo: "/icons/hubspot.png" },
  { name: "Dropbox", logo: "/icons/dropbox.png" },
  { name: "Slack", logo: "/icons/slack.png" },
  { name: "Gmail", logo: "/icons/gmail.png" },
  { name: "Jira", logo: "/icons/jira.png" },
  { name: "Figma", logo: "/icons/figma.png" },
  { name: "Discord", logo: "/icons/discord.png" },
  // { name: "Notion", logo: "/icons/notion.png" },
  { name: "Salesforce", logo: "/icons/salesforce.png" },
  { name: "WhatsApp", logo: "/icons/whatsapp.png" },
  { name: "Trello", logo: "/icons/trello.png" },
]
const testimonials = [
  {
    quote: "This task manager has completely transformed the way my team works. We now collaborate in real-time and always meet deadlines.",
    name: "Sarah Johnson",
    title: "Project Manager",
    avatar: "/avatars/girl.webp"
  },
  {
    quote: "ChronoTask's intuitive interface makes it easy for me to organize my freelance projects and track my time efficiently.",
    name: "Michael Chen",
    title: "Freelance Designer",
    avatar: "/avatars/men.webp"
  },
  {
    quote: "The analytics feature has given me valuable insights into our team's productivity. It's a game-changer for resource allocation.",
    name: "Emily Rodriguez",
    title: "Operations Manager",
    avatar: "/avatars/women.webp"
  }
]