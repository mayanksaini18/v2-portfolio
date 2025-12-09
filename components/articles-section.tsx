import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Articles & News</h2>
          <Button
            variant="outline"
            className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Browse all articles
          </Button>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured article card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                Resources
              </span>
              <Image
                src="https://media.licdn.com/dms/image/v2/D5612AQHwQPMXpzO9Ug/article-cover_image-shrink_720_1280/B56ZnhTBL4JYAI-/0/1760421484054?e=1766620800&v=beta&t=4CmdFgdNkNqspJsjoQRHIkKXKmi13mDA58doqzM4GMw"
                alt="Design tools illustration"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Why REACT Is The Best?
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQGOcGxgtMGLSg/profile-displayphoto-scale_100_100/B56ZiP9_bxG4Ac-/0/1754762052136?e=1766620800&v=beta&t=CK4I5S3Nq0fwUH8akX5Zb5c8-nEHTHJspEBqhKfXlOs"
                    alt="John Carter"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg text-[#0B0B0B]">Mayank Saini</div>
                  <div className="text-sm md:text-base text-gray-600">October 14, 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Two smaller article cards */}
          <div className="space-y-6 md:space-y-8">
            {/* First smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Articles
                  </span>
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5612AQEhLMavM7kf0A/article-cover_image-shrink_720_1280/B56Zo5CzLTI0AI-/0/1761893627372?e=1766620800&v=beta&t=PfT8ud38Q_N6utQ2kQgq0XYPuktd2ecIVJIgC2Gz-Ig"
                    alt="Font sizes illustration"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                   Why did Facebook engineers create React?
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                   Back in the early 2010s, Facebook engineers faced a huge challenge: their user interface was getting increasingly complex. Data changed rapidly (likes, comments, notifications), and keeping the UI in sync with the data using traditional JavaScript or MVC frameworks became a nightmare.
                  </p>
                </div>
              </div>
            </div>

            {/* Second smaller card */}
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                {/* Image area */}
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    News
                  </span>
                  <Image
                    src="/images/article-exercises.png"
                    alt="Exercises illustration"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                {/* Content area */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    6 practical exercises to learn become a pro UI/UX designer
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
