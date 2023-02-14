import styles from '../styles/home.module.css'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Hi, my name is Tina Guliuzza</h1>
        <div>
          <Link href="/blog">My Blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  )
}
