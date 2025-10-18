import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
          <span className="text-primary font-mono text-lg">05.</span> Get In Touch
        </h2>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just
          want to say hi, I'll try my best to get back to you!
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="mailto:alex@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </CardContent>
        </Card>

        <Button size="lg" asChild>
          <a href="mailto:alex@example.com">Say Hello</a>
        </Button>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS • © 2025 Alex Johnson</p>
        </footer>
      </div>
    </section>
  )
}
