export default function BlogPost({ params }: { params: { slug: string } }) {
  console.log(params)
  return <div>{params.slug}</div>
}
