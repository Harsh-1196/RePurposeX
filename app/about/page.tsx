import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - repurposeX',
  description: 'About page for repurposeX',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About repurposeX</h1>
      <p className="text-lg">Learn more about our content repurposing platform.</p>
    </div>
  )
}