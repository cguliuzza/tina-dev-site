import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-32 sm:py-48 lg:py-24">
      {/* <div className="lg:px-8 mx-auto max-w-2xl py-32 sm:py-48 lg:py-24 flex flex-col gap-10 sm:flex-row"> */}
      <h2 className="text-2xl font-light tracking-normal text-slate-600">
        Christina Guliuzza
      </h2>
      <h1 className="py-6 text-3xl font-bold tracking-tight text-slate-900 md:text-6xl">
        React Product Engineer
      </h1>
      <p className="max-w-sm font-light text-base leading-8 text-slate-600">
        Hey, I’m Tina, I’m a likeable product and user-focused React Engineer
        with personable and empathetic communication skillz.
      </p>
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Tooltip bottom
      </button>
      <div
        id="tooltip-bottom"
        role="tooltip"
        className="absolute z-10  inline-block px-3 py-2 text-sm font-medium text-red-500 bg-slate-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-slate-700"
      >
        Tooltip on bottom
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      <SparklesIcon className="inline h-6 w-6" aria-hidden="true" />
      <button
        data-tooltip-target="tooltip-light"
        data-tooltip-style="light"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Light tooltip
      </button>
      <div
        id="tooltip-light"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>

      <p className="max-w-sm font-light text-xs leading-8 text-slate-600">
        * skillz with a z is 11.5x more than the normal level of skills.
      </p>
    </div>
  )
}
