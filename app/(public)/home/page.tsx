import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="container py-24 space-y-12">
          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Think, plan, and track{" "}
              <span className="text-gray-500">all in one place</span>
            </h1>
            <p className="text-xl text-gray-500">
              Efficiently manage your tasks and boost productivity.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
            >
              Get free demo
            </Button>
          </div>
          {/* Floating Elements */}
          <div className="relative h-96">
            <Image
              src="/icons/note.png"
              alt="Sticky Note"
              width={150}
              height={150}
              className="absolute left-72 top-40  rotate-[-12deg]"
            />
            <Image
              src="/icons/check.png"
              alt="Checkbox"
              width={150}
              height={150}
              className="absolute left-20 bottom-1/2 -translate-x-1/2"
            />
            <Image
              src="/icons/google-calendar.png"
              alt="Calendar Widget"
              width={150}
              height={150}
              className="absolute right-20 top-12 translate-x-1/2 rotate-[8deg]"
            />
            <Image
              src="/icons/tasks.png"
              alt="Task List"
              width={150}
              height={150}
              className="absolute right-72 bottom-0 -translate-x-1/2"
            />
          </div>
        </div>
      </section>

      {/* Keep everything in one place */}
      <section className=" py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Solve your team &apos;s biggest challenges
            </h2>
            <p className="text-xl text-gray-500">
              Keep everything organized and boost productivity across your
              entire team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/assets/dashboard.avif"
                alt="Dashboard Screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image
                    src="/icons/slack.png"
                    alt="Collaboration Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Seamless Collaboration
                  </h3>
                  <p className="text-gray-500">
                    Work together effortlessly with your team, no matter where
                    they are.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Image
                    src="/icons/project-management.png"
                    alt="Time Management Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Time Management Tools
                  </h3>
                  <p className="text-gray-500">
                    Track time, set deadlines, and optimize your workflow.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Image
                    src="/icons/analytics.png"
                    alt="Analytics Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Advanced task tracking
                  </h3>
                  <p className="text-gray-500">
                    Get insights into your team&apos;s performance and project
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple pricing plans</h2>
            <p className="text-xl text-gray-500">
              Choose the perfect plan for your team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card
                key={i}
                className={i === 1 ? "border-blue-500 shadow-xl" : ""}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-3xl font-bold">${plan.price}/mo</div>
                  <Button
                    className={`w-full ${
                      i === 1 ? "bg-blue-500 hover:bg-blue-600" : ""
                    }`}
                  >
                    Get started
                  </Button>
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Connect integrations you use every day
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-8 max-w-3xl mx-auto">
            {integrations.map((integration, i) => (
              <div key={i} className="flex items-center justify-center">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              People just like you are already using ChronoTask
            </h2>
          </div>
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
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Basic plan",
    price: "5",
    features: [
      "All product features",
      "Unlimited tasks & tasks",
      "Priority support",
      "Unlimited storage",
      "Unlimited projects",
    ],
  },
  {
    name: "Pro plan",
    price: "9",
    features: [
      "All product features",
      "Unlimited tasks & tasks",
      "Priority support",
      "Unlimited storage",
      "Unlimited projects",
      "Advanced analytics",
    ],
  },
  {
    name: "Advanced plan",
    price: "15",
    features: [
      "All product features",
      "Unlimited tasks & tasks",
      "Priority support",
      "Unlimited storage",
      "Unlimited projects",
      "Custom integrations",
    ],
  },
];

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
];

const testimonials = [
  {
    quote:
      "This task manager has completely transformed the way my team works. We now collaborate in real-time and always meet deadlines.",
    name: "Sarah Johnson",
    title: "Project Manager",
    avatar: "/avatars/girl.webp",
  },
  {
    quote:
      "ChronoTask's intuitive interface makes it easy for me to organize my freelance projects and track my time efficiently.",
    name: "Michael Chen",
    title: "Freelance Designer",
    avatar: "/avatars/men.webp",
  },
  {
    quote:
      "The analytics feature has given me valuable insights into our team's productivity. It's a game-changer for resource allocation.",
    name: "Emily Rodriguez",
    title: "Operations Manager",
    avatar: "/avatars/women.webp",
  },
];
