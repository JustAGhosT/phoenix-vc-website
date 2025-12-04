import { Card, Button } from '@phoenix-vc/design-system';
import Link from 'next/link';

const investments = [
  {
    id: 1,
    name: 'Phoenix VC Website',
    description: 'The official Phoenix VC corporate website built with modern web technologies.',
    category: 'Infrastructure',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient1)" />
        <path d="M24 12L32 20L24 28L16 20L24 12Z" fill="white" fillOpacity="0.9" />
        <path d="M24 20L32 28L24 36L16 28L24 20Z" fill="white" fillOpacity="0.6" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'DataFlow Analytics',
    description: 'AI-powered data analytics platform for enterprise decision making.',
    category: 'AI/ML',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient2)" />
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="4" fill="white" />
        <path d="M24 10V14M24 34V38M10 24H14M34 24H38" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient2" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'SecureVault',
    description: 'Next-generation cybersecurity solutions for financial institutions.',
    category: 'Security',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient3)" />
        <path d="M24 14L34 18V26C34 31.5 29.5 36 24 38C18.5 36 14 31.5 14 26V18L24 14Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M21 26L23 28L27 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="gradient3" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    name: 'CloudNexus',
    description: 'Scalable cloud infrastructure management and optimization platform.',
    category: 'Cloud',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient4)" />
        <path d="M34 28C36.2 28 38 26.2 38 24C38 21.8 36.2 20 34 20C33.9 20 33.8 20 33.7 20C33.2 16.1 29.9 13 26 13C22.7 13 19.8 15.2 18.8 18.2C18.5 18.1 18.3 18 18 18C15.2 18 13 20.2 13 23C13 25.8 15.2 28 18 28H34Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M20 32L24 36L28 32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="gradient4" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 5,
    name: 'HealthTech Pro',
    description: 'Digital health platform connecting patients with healthcare providers.',
    category: 'Healthcare',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient5)" />
        <path d="M24 34C24 34 34 28 34 21C34 17.1 31.3 14 28 14C26.1 14 24.4 15 24 16.5C23.6 15 21.9 14 20 14C16.7 14 14 17.1 14 21C14 28 24 34 24 34Z" stroke="white" strokeWidth="2" fill="none" />
        <defs>
          <linearGradient id="gradient5" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#EC4899" />
            <stop offset="1" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'FinanceFlow',
    description: 'Modern fintech solutions for seamless payment processing and banking.',
    category: 'Fintech',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="url(#gradient6)" />
        <path d="M24 14V34M18 20H30M18 28H30" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="2" fill="none" />
        <defs>
          <linearGradient id="gradient6" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Strategic investments in transformative technology companies
        </p>
      </header>
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <Card key={investment.id} className="p-6 hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {investment.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-white mb-2">{investment.name}</h2>
                  <p className="text-gray-400 text-sm mb-3">{investment.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {investment.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button variant="primary">Contact Us About Investment</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
