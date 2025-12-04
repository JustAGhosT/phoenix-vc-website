import { Button, Card } from '@phoenix-vc/design-system';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Shaping Tomorrow&apos;s Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Strategic investments and partnerships empowering innovation across the globe
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio">
            <Button variant="primary" className="min-w-[180px]">
              Our Focus Areas
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="min-w-[180px]">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              We invest in the future of technology, partnering with visionary founders
              to build transformative companies that shape industries and improve lives.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
