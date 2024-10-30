"use client"

import { FadeIn, FadeInStagger } from "@/components/animations"
import { Shield, Heart, Target } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vivaan Warrier",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Hey everyone! My name is Vivaan Warrier, and I am the Founder of this Cyber Security Non Profit. Helping our society impede these viruses and cyber security attacks is something that I have always been passionate about and strived to achieve."
  },
  {
    name: "Siddharth Alluri",
    role: "Co-Founder & CFO",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bio: "My name is Siddharth Alluri and I am one of the co-founders of the CPFA initiative. As a contributor to this non-profit, I plan to try my very best to spread awareness on cyberattacks to the most vulnerable of people."
  },
  {
    name: "Shanay Gaitonde",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop",
    bio: "Hello! My name is Shanay Gaitonde and I am one of the co-founders of this nonprofit organization. My goal with this nonprofit is to help educate those who are vulnerable to cybersecurity attacks."
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto">
              Dedicated professionals working towards a safer digital future.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="container">
        <FadeInStagger>
          <div className="grid gap-12 md:grid-cols-3">
            {team.map((member) => (
              <FadeIn key={member.name}>
                <div className="group relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* Values Section */}
      <section className="container pb-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To protect and educate our community about cybersecurity threats.
                </p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A digitally secure future for everyone in our community.
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, education, and community service.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}