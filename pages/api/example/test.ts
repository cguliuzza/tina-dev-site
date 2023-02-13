export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return res.end()
  }
  res.status(200).json({ data: { name: 'Simba' } })
}
