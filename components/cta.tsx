import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="container section-padding">
      <div className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Ready to strengthen your cybersecurity?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join our community and get access to expert resources, training, and support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">Get Started</Button>
          <Button size="lg" variant="outline">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}