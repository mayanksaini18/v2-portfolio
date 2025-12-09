

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Built X – Modern Agency Website",
    description:
      "Responsive agency website built using Next.js with a focus on performance, smooth UX, and scalable architecture.",
    tag: "Next.js",
    image: "/images/venture-workspace.svg",
    link: "https://builtx.vercel.app/",
  },
  {
    title: "Thread Cut Media",
    description:
      "Creative studio website designed to communicate services clearly with bold visuals and fast navigation.",
    tag: "Next.js",
    image: "/images/threadcut-workspace.svg",
    link: "https://thread-cut-media.vercel.app/",
  },
  {
    title: "Smart Health Tracker",
    description:
      "Habit and health tracking app with progress visualization, streaks, and a clean dashboard UI.",
    tag: "Full-Stack App",
    image: "/images/sht-workspace.svg",
    link: "#",
  },
  {
    title: "do.able – To-Do Application",
    description:
      "Minimal productivity app to manage tasks with priorities and persistent storage.",
    tag: "Productivity",
    image: "/images/doable-workspace.svg",
    link: "#",
  },
  {
    title: "DSA Made Eazy",
    description:
      "Learning platform for practicing DSA concepts through structured quizzes and explanations.",
    tag: "Learning Platform",
    image: "/images/dsaeazy-workspace.svg",
    link: "#",
  },
  {
    title: "Code X",
    description:
      "Developer playground to experiment with code, features, and ideas in one place.",
    tag: "Dev Sandbox",
    image: "/images/codex-workspace.svg",
    link: "#",
  },
]

export default function PortfolioPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All <span className="bg-[#FFC224] px-3 py-1 inline-block">Projects</span>
          </h1>
          <p className="text-[#393939] text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my work in web development,
            UI/UX design, and problem solving.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="relative h-[220px]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>

                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#393939] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                >
                  View project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="flex justify-center mt-16">
          <Link
            href="/"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
