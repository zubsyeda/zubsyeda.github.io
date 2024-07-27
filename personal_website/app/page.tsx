/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2vps0zqQkEq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CodeIcon className="w-6 h-6" />
          <span className="font-semibold text-lg">Zubiya Syeda</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="hidden lg:inline-flex">Download CV</Button>
      </header>
      <main className="flex-1">
        <section id="hero" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Zubiya Syeda</h1>
              <p className="text-muted-foreground md:text-xl">
                I'm a passionate Computer Science student with a strong interest in web development and software
                engineering.
              </p>
              <div className="flex gap-4">
                <Button>View Projects</Button>
                <Button variant="secondary">Contact Me</Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img src="/placeholder.svg" width={600} height={600} alt="Hero" className="aspect-square object-cover" />
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <img src="/placeholder.svg" width={600} height={600} alt="About" className="aspect-square object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a Computer Science student with a passion for web development and software engineering. I have
                experience building responsive and user-friendly web applications using modern technologies and
                frameworks.
              </p>
              <p className="text-muted-foreground md:text-xl">
                In my free time, I enjoy exploring new technologies, working on personal projects, and contributing to
                open-source communities. I'm always eager to learn and grow as a developer.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="text-muted-foreground md:text-xl">
                Here are some of the technologies and tools I'm proficient with.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <HashIcon className="w-12 h-12" />
                <div className="text-sm font-medium">HTML</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[90%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12" />
                <div className="text-sm font-medium">CSS</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[85%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12" />
                <div className="text-sm font-medium">JavaScript</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[90%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CodepenIcon className="w-12 h-12" />
                <div className="text-sm font-medium">React</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[80%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <NetworkIcon className="w-12 h-12" />
                <div className="text-sm font-medium">Node.js</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[75%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TypeIcon className="w-12 h-12" />
                <div className="text-sm font-medium">TypeScript</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[80%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitGraphIcon className="w-12 h-12" />
                <div className="text-sm font-medium">Git</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[90%]" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DatabaseIcon className="w-12 h-12" />
                <div className="text-sm font-medium">Databases</div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[75%]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-muted-foreground md:text-xl">Check out some of the projects I've worked on.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Project 1"
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A responsive web application built with React and TypeScript.</CardDescription>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <span>View Project</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Project 2"
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>A full-stack web application built with Node.js and MongoDB.</CardDescription>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <span>View Project</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Project 3"
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>A mobile-friendly web application built with React Native.</CardDescription>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                      prefetch={false}
                    >
                      <span>View Project</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Feel free to reach out to me for any inquiries or opportunities.
              </p>
            </div>
            <form className="mx-auto max-w-md space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CodeIcon className="w-5 h-5" />
            <span className="text-sm">Zubiya Syeda &copy; 2024</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}