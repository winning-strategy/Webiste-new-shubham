'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  ChevronDownIcon, 
  TableCellsIcon, 
  PresentationChartLineIcon,
  ChartBarIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
        <Link 
          href="/signin" 
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
