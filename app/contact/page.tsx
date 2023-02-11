"use client"

import { useRouter } from "next/navigation"

export default function Contact() {
    const router = useRouter()

    return <div>
        <h1>Reach out to Tina</h1>
        <button type="button" onClick={() => router.push("/blog")}>
      Blog
    </button>
        </div>
  }