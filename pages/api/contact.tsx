export default function handler(
  req: { method: string },
  res: { json: (arg0: { message: string }) => void }
) {
  if (req.method === 'POST') {
    // save to database
    console.log(handler)
    res.json({ message: 'Success' })
  }
}
