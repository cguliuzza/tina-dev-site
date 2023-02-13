export async function getStaticParams() {
  return [
    { slug: 'hello-world' },
    { slug: 'hello-world-2' },
    { slug: 'hello-world-3' },
  ]

  // const posts = await getPosts();
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
}
