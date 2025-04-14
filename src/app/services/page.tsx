import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - repurposeX',
  description: 'Services page for repurposeX',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-lg">Explore our content repurposing services and features.</p>
    </div>
  )
}