const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time)
  })

export const getAllPosts = async () => {
  await delay(3000)
  return new Array(10).fill(1).map((_, i) => {
    return {
      title: `Title here ${i}`,
      slug: `post-slug-${i}`,
      body: `Content here ${i}`,
    }
  })
}
