import Image from 'next/image'
import rgelogo from '../public/images/rgelogo.jpeg'

/* eslint-disable react/no-unescaped-entities */
const featuredTestimonial = {
  body: "Skip the words below and go directly to hiring Tina. She's one of the most intelligent, thoughtful, and curious employees I've worked with. Her dedication to Really Good Emails was remarkable. Even as a new engineer Tina was able to handle work adeptly and with great insight and care for User Experience. She went from Jr developer to a solid player in very short time. I would hire her again and again for not only her React skills, but also for her attention to front end design details and her skill with people. I have no doubt that in time Tina will be at the highest levels of product dev because of her willingness to learn and grow. I can't wait to watch her journey. Please reach out if you'd like to discuss Tina directly. I'd be happy anytime to share more.",
  author: {
    name: 'Matthew Smith',
    handle: 'whale',
    image: 'matthewsmith.jpeg',
    logo: { rgelogo },
  },
}
const testimonials = [
  [
    [
      {
        body: "A developer that will go places. Tina is quite possibly one of, if not the best developers I've worked with - despite being junior in her experience. Her communication is impeccable, her eagerness to learn and her want to understand both product decisions and user experience set her apart from a sea of developers who just want to code.",
        author: {
          name: 'David Pomfret',
          handle: 'dpomfret',
          image: 'davidpomfret.jpeg',
        },
      },
    ],
    [
      {
        body: "Tina is one of the most flexible, personable, and technically dedicated engineers I've had the pleasure of working with. Grab her while you can, y'all!",
        author: {
          name: 'Alex Martin',
          handle: 'atmartin',
          image: 'alexmartin.jpeg',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <>
      <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <svg
            viewBox="0 0 1313 771"
            aria-hidden="true"
            className="ml-[max(50%,38rem)] w-[82.0625rem]"
          >
            <path
              id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
              fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
              d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
            />
            <defs>
              <linearGradient
                id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                x1="1313.17"
                x2="-88.881"
                y1=".201"
                y2="539.417"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
          <svg
            viewBox="0 0 1313 771"
            aria-hidden="true"
            className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          >
            <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              I've Worked with Amazing People
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 tracking-tight text-gray-900">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
                <Image
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={`/images/${featuredTestimonial.author.image}`}
                  alt="Matthew Smith"
                  width={180}
                  height={37}
                  priority
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <Image
                  className="h-10 w-auto flex-none"
                  src={rgelogo}
                  alt="Really Good Emails Logo"
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <Image
                            className="h-10 w-10 rounded-full bg-gray-50"
                            src={`/images/${testimonial.author.image}`}
                            alt=""
                            width={180}
                            height={37}
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}