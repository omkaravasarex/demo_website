import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import ClientEffects from '../components/ClientEffects';

export const metadata: Metadata = {
  title: 'CloutHR Solutions LLP',
  description: 'HR Solutions, HRMS Software, Payroll Outsourcing, and Statutory Compliance services across India & abroad.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'CloutHR Solutions LLP',
    description: 'HR Solutions, HRMS Software, Payroll Outsourcing, and Statutory Compliance services across India & abroad.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientEffects />
        <Header />
        <main className="min-h-screen bg-brand-radial">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-clouthr-indigo via-clouthr-purple to-clouthr-orange" />
          <span className="font-semibold text-xl">CloutHR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-clouthr-purple">About</Link>
          <Link href="/mission" className="hover:text-clouthr-purple">Mission</Link>
          <Link href="/approach" className="hover:text-clouthr-purple">Our Approach</Link>
          <Link href="/services" className="hover:text-clouthr-purple">Services</Link>
          <Link href="/blog" className="hover:text-clouthr-purple">Blog</Link>
          <Link href="/contact" className="btn-primary text-sm">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-responsive py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-clouthr-indigo via-clouthr-purple to-clouthr-orange mb-3" />
          <p className="text-sm text-slate-600">CloutHR Solutions LLP — Professional HR, Payroll & Labour Law expertise.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-clouthr-purple">Services</Link></li>
            <li><Link href="/approach" className="hover:text-clouthr-purple">Our Approach</Link></li>
            <li><Link href="/mission" className="hover:text-clouthr-purple">Mission</Link></li>
            <li><Link href="/contact" className="hover:text-clouthr-purple">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@clouthr.example</li>
            <li>Phone: +91 00000 00000</li>
            <li>India • Serving clients worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-responsive py-4 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} CloutHR Solutions LLP</span>
          <span>Privacy • Terms</span>
        </div>
      </div>
    </footer>
  );
}
