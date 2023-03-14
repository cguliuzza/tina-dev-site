import '../styles/global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Christina Guliuzza | React Product Engineer',
  description:
    'Hey, I’m Tina, I’m a likeable product and user-focused React Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
