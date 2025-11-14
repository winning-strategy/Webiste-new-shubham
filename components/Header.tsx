'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { 
  ChevronDownIcon, 
  TableCellsIcon, 
  PresentationChartLineIcon,
  ChartBarIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';
import ContactModal from './ContactModal';
import AgentLink from './AgentLink';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, signOut, loading } = useAuth();

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
  };

  const products = [
    {
      name: 'Spreadsheet Agent',
      href: '/products/spreadsheet-agent',
      description: 'Build complex spreadsheets with AI',
      icon: TableCellsIcon,
      color: 'text-blue-400'
    },
    {
      name: 'Slide Generation Agent',
      href: '/products/slide-generation-agent',
      description: 'Create professional presentations instantly',
      icon: PresentationChartLineIcon,
      color: 'text-purple-400'
    },
    {
      name: 'Data Analysis Agent',
      href: '/products/data-analysis-agent',
      description: 'Extract insights from your data',
      icon: ChartBarIcon,
      color: 'text-emerald-400'
    },
    {
      name: 'Report Generation Agent',
      href: '/products/report-generation-agent',
      description: 'Generate comprehensive reports automatically',
      icon: DocumentTextIcon,
      color: 'text-orange-400'
    }
  ];

  return (
    <header className="bg-dark-200 px-16 py-4 flex justify-between items-center border-b border-dark-100 relative z-50">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src="/logo.jpg"
            alt="WinningStrategy.ai Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold text-white">WinningStrategy.ai</span>
      </Link>
      
      <nav className="flex gap-8 items-center">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
          Home
        </Link>
        
        {/* Products Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <button 
            className={`flex items-center gap-1 transition-colors ${isProductsOpen ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Products
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          <div 
            className={`absolute top-full left-0 mt-3 w-72 transition-all duration-200 ${
              isProductsOpen 
                ? 'opacity-100 visible' 
                : 'opacity-0 invisible'
            }`}
          >
            <div className="bg-dark-200 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <Link
                    key={index}
                    href={product.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group border-b border-white/5 last:border-b-0"
                  >
                    <div className={`${product.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5 stroke-2" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
          Pricing
        </Link>
        <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
          Blog
        </Link>
        <button 
          onClick={() => setIsContactModalOpen(true)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Contact
        </button>
        
        {/* Auth Section */}
        {!loading && (
          <>
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 bg-dark-100 hover:bg-dark-300 text-white px-4 py-2 rounded-md font-medium transition-colors border border-white/10"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block">{user.email?.split('@')[0]}</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-dark-200 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-sm text-gray-400">Signed in as</p>
                      <p className="text-white font-medium truncate">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/5 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                      </Link>
                      <div className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                        Your Agents
                      </div>
                      <AgentLink
                        agentUrl="https://spreadsheet-agent.winningstrategy.ai/"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        <TableCellsIcon className="w-5 h-5 text-blue-400" />
                        Spreadsheet Agent
                      </AgentLink>
                      <AgentLink
                        agentUrl="https://presentation-agent.winningstrategy.ai/"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        <PresentationChartLineIcon className="w-5 h-5 text-purple-400" />
                        Presentation Agent
                      </AgentLink>
                      <AgentLink
                        agentUrl="https://data-analysis-agent.winningstrategy.ai/"
                        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-white/5 transition-colors"
                      >
                        <ChartBarIcon className="w-5 h-5 text-emerald-400" />
                        Data Analysis Agent
                      </AgentLink>
                    </div>
                    <div className="border-t border-white/10">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/auth/signin" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Sign In
              </Link>
            )}
          </>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}
