import { delay } from '../../../lib/delay'

const getData = async (slug) => {
  const post = await delay(5000)
  return { slug }
}

export default async function BlogPost({ params }) {
  console.log(params)
  const { slug } = params
  const post = await getData(slug)

  return <div>{post.slug}</div>
}
