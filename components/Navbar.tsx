'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/cguliuzza',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tinaguliuzza',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christina-guliuzza-668354133/',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-solid border-slate-500/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel={item.rel}
              target={item.target}
              className="text-sm font-normal leading-6 text-slate-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end">
          <a
            href="/#contact"
            className="rounded-md bg-cyan-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Contact Me{' '}
            <span className="wave">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
            </span>
          </a>
        </div>
        <Image
          className="relative w-20 h-20 pt-2 object-top object-cover overflow-hidden"
          src={`/images/tinabgremoved.png`}
          alt=""
          width={180}
          height={37}
        />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 pb-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center gap-x-6">
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="ml-auto rounded-md bg-cyan-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Contact Me
            </a>
            <div className="flex">
              <Image
                className="relative w-20 h-20 pt-2 object-top object-cover overflow-hidden"
                src={`/images/tinabgremoved.png`}
                alt=""
                width={180}
                height={37}
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
