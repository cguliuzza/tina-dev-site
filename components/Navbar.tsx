'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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
    <header className="relative py-4 z-50 bg-white border-b border-solid border-slate-500/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="menu hidden lg:flex lg:gap-x-12">
          <span className="text-slate-500 text-base font-bold">Christina Guliuzza</span>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel={item.rel}
              target={item.target}
              className="menu-link text-sm font-normal leading-6 text-slate-500 hover:text-slate-900 hover:color-teal-500"
            >
              {item.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 152.9 43.4"
                xmlSpace="preserve"
              >
                <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
              </svg>
            </a>
          ))}
        </div>
        <button className="group block ml-auto items-center justify-end rounded-full text-white text-opacity-90 text-base font-normal leading-6 bg-teal-900 py-2 px-6 shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-opacity-90">
          <a
            href="mailto:hello@christinaguliuzza.com"
          >
            hello@christinaguliuzza.com{' '}
          </a>
        </button>
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center gap-x-6">
            <button className="group block ml-auto items-center justify-end rounded-full text-white text-opacity-90 bg-teal-900 py-2 px-6 shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-opacity-90">
              <a
                href="mailto:hello@christinaguliuzza.com"
                className="text-sm font-medium"
              >
                hello@christinaguliuzza.com{' '}
              </a>
            </button>
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
                    className="-mx-3 block text-center rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-500 hover:text-slate-900 hover:bg-slate-50"
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
