import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Mayank</span>, a 
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Web Developer</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Motivated tech student with hands-on experience in end-to-end project ownership, specializing in crafting
            and deploying user-centric web applications. Strong blend of technical knowledge, user-first thinking, and
            problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Mail className="w-5 h-5" />
              Get in touch
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <FolderOpen className="w-5 h-5" />
              View portfolio
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGOcGxgtMGLSg/profile-displayphoto-scale_200_200/B56ZiP9_bxG4AY-/0/1754762052136?e=1766620800&v=beta&t=i4rUOGj7nkYAf3YXYH8r7C-JW5iCYVJ9a7ZNM6rRr3w"
              alt="Mayank Saini - Web Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
