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
      <div className="mx-auto max-w-2xl py-24 px-6 lg:py-10">
        <nav
          className="flex flex-col md:flex-row items-center justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="p-4">
              <a
                href={item.href}
                className="text-sm leading-6 text-slate-500 hover:text-slate-900"
              >
                {item.name}
              </a>
            </div>
          ))}
          <div className="p-4">
            <a
              href="mailto:hello@christinaguliuzza.com"
              className="text-center text-sm leading-6 text-slate-500 hover:text-slate-900"
            >
              hello@christinaguliuzza.com
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-400">
          &copy;<span>{currentYear}</span> Christina Guliuzza. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
