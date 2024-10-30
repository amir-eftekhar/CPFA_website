export default function ProgramsPage() {
  return (
    <div className="container section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Our Programs</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Comprehensive cybersecurity education and training programs for all skill levels.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {programs.map((program) => (
          <div key={program.title} className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
            <p className="text-muted-foreground mb-4">{program.description}</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {program.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const programs = [
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of cybersecurity and online safety.",
    features: [
      "Basic security principles",
      "Password management",
      "Safe browsing practices",
      "Social engineering awareness"
    ]
  },
  {
    title: "Advanced Security Training",
    description: "Deep dive into advanced cybersecurity concepts.",
    features: [
      "Network security",
      "Encryption methods",
      "Threat analysis",
      "Security auditing"
    ]
  },
  {
    title: "Community Workshops",
    description: "Hands-on workshops for practical security skills.",
    features: [
      "Live demonstrations",
      "Interactive exercises",
      "Real-world scenarios",
      "Group discussions"
    ]
  }
]