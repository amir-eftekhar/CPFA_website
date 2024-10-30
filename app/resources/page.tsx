export default function ResourcesPage() {
  return (
    <div className="container section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Resources</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Free cybersecurity resources and tools to help protect you online.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
            <p className="text-muted-foreground mb-4">{resource.description}</p>
            <div className="flex justify-end">
              <a 
                href={resource.link} 
                className="text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const resources = [
  {
    title: "Security Guides",
    description: "Step-by-step guides for securing your devices and accounts.",
    link: "#"
  },
  {
    title: "Tool Directory",
    description: "Curated list of recommended security tools and software.",
    link: "#"
  },
  {
    title: "Learning Library",
    description: "Educational articles and videos about cybersecurity.",
    link: "#"
  },
  {
    title: "Security Checklist",
    description: "Essential security measures for individuals and organizations.",
    link: "#"
  },
  {
    title: "Incident Response",
    description: "Guidelines for responding to security incidents.",
    link: "#"
  },
  {
    title: "Community Forum",
    description: "Connect with others and share security knowledge.",
    link: "#"
  }
]