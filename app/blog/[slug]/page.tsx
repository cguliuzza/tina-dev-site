// const getData = async () => {
//   const post = await getDataFromCMS(slug)
//   return post
// }

// export default async function BlogPost({ params }) {

export default function BlogPost({ params }) {
  console.log(params)
  const { slug } = params
  //   const post = await getData(slug)

  return <div>Blog Slug: {slug}</div>
}
