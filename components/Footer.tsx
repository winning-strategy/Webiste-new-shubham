import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
                W
              </div>
              <span>WinningStrategy.ai</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Transforming businesses through AI-powered strategy consulting that delivers insights faster and better.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strategy-consulting" className="text-gray-400 hover:text-white transition-colors">
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link href="/transaction-advisory" className="text-gray-400 hover:text-white transition-colors">
                  Transaction Advisory
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          © 2025 WinningStrategy.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

