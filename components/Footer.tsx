import { SVGProps } from 'react'

const currentYear = new Date().getFullYear()

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

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav className="-mb-6 flex justify-center" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="p-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-slate-600 hover:text-slate-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">
          &copy;<span> {currentYear} </span>Christina Guliuzza, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
