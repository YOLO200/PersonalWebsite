import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Startup Inc.",
    period: "Summer 2024",
    description: [
      "Developed and maintained React components for the company's main web application",
      "Collaborated with the design team to implement responsive UI/UX improvements",
      "Optimized database queries resulting in 40% faster page load times",
      "Participated in code reviews and contributed to technical documentation",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Teaching Assistant",
    company: "University Computer Science Department",
    period: "2023 - Present",
    description: [
      "Assist in teaching Data Structures and Algorithms course for 100+ students",
      "Hold weekly office hours to help students with assignments and concepts",
      "Grade assignments and provide detailed feedback on code quality",
      "Develop supplementary learning materials and practice problems",
    ],
    tags: ["Java", "Algorithms", "Teaching", "Mentoring"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - 2023",
    description: [
      "Built custom websites for local businesses and non-profit organizations",
      "Managed client relationships and project timelines",
      "Implemented SEO best practices and accessibility standards",
      "Provided ongoing maintenance and support for deployed applications",
    ],
    tags: ["Next.js", "WordPress", "SEO", "Client Management"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          <span className="text-primary font-mono text-lg">04.</span> Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
