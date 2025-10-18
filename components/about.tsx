import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          <span className="text-primary font-mono text-lg">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Alex, a passionate computer science student with a love for creating things that live on the
              internet. My interest in web development started back in high school when I decided to customize my first
              HTML page — turns out hacking together a custom layout taught me a lot about web development!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on various projects ranging from e-commerce
              platforms to data visualization tools. My main focus these days is building accessible, inclusive products
              and digital experiences.
            </p>
            <p>
              I'm currently pursuing my Bachelor's degree in Computer Science, where I'm learning about algorithms, data
              structures, software engineering, and artificial intelligence.
            </p>
          </div>

          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>Bachelor's in Computer Science (Expected 2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>GPA: 3.8/4.0</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>Member of ACM and Computer Science Club</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>Teaching Assistant for Data Structures course</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>Hackathon enthusiast with 3 wins</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
