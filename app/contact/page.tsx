import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - repurposeX',
  description: 'Contact page for repurposeX',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Get in touch with our team for any inquiries or support.</p>
    </div>
  )
}