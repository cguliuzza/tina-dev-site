export default async function BlogPost({ params }) {
  console.log(params)

  return <div>{params.slug}</div>
}
