export default function Hero() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-light tracking-normal">
                Christina Guliuzza
              </h2>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                React Product Engineer
              </h1>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                <span className="font-semibold">Product</span> and{' '}
                <span className="font-semibold">user-focused</span> React
                Engineer with <span className="font-semibold">personable</span>{' '}
                and{' '}
                <span className="font-semibold">
                  compassionate communication
                </span>{' '}
                skills.
              </p>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                I have developed and maintained end-to-end products using
                Javascript and React. I am particularly interested in
                programming{' '}
                <span className="font-semibold">
                  customer-centric SaaS applications,
                </span>{' '}
                with a focus on{' '}
                <span className="font-semibold">data-driven</span> decision
                making and rapid growth.
              </p>
              <p className="mt-6 font-light text-base leading-8 text-gray-600">
                My understanding of{' '}
                <span className="font-semibold">user experience</span> and{' '}
                <span className="font-semibold">data analysis</span> enables me
                to make informed product decisions. My colleagues have described
                me as{' '}
                <span className="font-semibold">
                  detail-oriented, patient, and reliable.
                </span>
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}
