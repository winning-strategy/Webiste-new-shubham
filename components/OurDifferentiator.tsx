import React from 'react';
import Image from 'next/image';

const OurDifferentiator: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  return (
    <div className={`bg-gray-900 py-10 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Differentiators
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Save thousands of hours by accelerating your market intelligence and due diligence, get instant answers to complex research, and generate polished reports and charts in a fraction of a minute with authentic insights.
            </p>
            
            {/* Book a Demo Button */}
            <div className="flex justify-start">
              <a
                href="https://calendly.com/gaurav-saha-winningstrategy/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#007770] hover:bg-[#00625b] md:py-4 md:text-lg md:px-10 font-poppins transition duration-150 ease-in-out"
              >
                Book a demo
              </a>
            </div>
            
            {/* Performance Comparison */}
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-5xl font-bold text-[#007770]">10x faster</div>
                <div className="text-sm text-gray-300">With AI-powered tools</div>
              </div>
              <div className="w-px h-16 bg-gray-600"></div>
              <div>
                <div className="text-4xl text-gray-300">4-5 weeks</div>
                <div className="text-sm text-gray-400">Current manual processes</div>
              </div>
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="border-b border-gray-600 pb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#007770] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7188 32.8125C11.926 32.8125 12.1247 32.7302 12.2712 32.5837C12.4177 32.4372 12.5 32.2385 12.5 32.0312V26.5625H37.5V32.0312C37.5 32.2385 37.5823 32.4372 37.7288 32.5837C37.8753 32.7302 38.074 32.8125 38.2812 32.8125C38.4885 32.8125 38.6872 32.7302 38.8337 32.5837C38.9802 32.4372 39.0625 32.2385 39.0625 32.0312V25.7812C39.0625 25.574 38.9802 25.3753 38.8337 25.2288C38.6872 25.0823 38.4885 25 38.2812 25H25.7812V18.75C25.7812 18.5428 25.6989 18.3441 25.5524 18.1976C25.4059 18.0511 25.2072 17.9688 25 17.9688C24.7928 17.9688 24.5941 18.0511 24.4476 18.1976C24.3011 18.3441 24.2188 18.5428 24.2188 18.75V25H11.7188C11.5115 25 11.3128 25.0823 11.1663 25.2288C11.0198 25.3753 10.9375 25.574 10.9375 25.7812V32.0312C10.9375 32.2385 11.0198 32.4372 11.1663 32.5837C11.3128 32.7302 11.5115 32.8125 11.7188 32.8125Z" fill="white"/>
                    <path d="M25.0664 14.1738C26.4223 14.1738 27.5215 13.0747 27.5215 11.7188C27.5215 10.3628 26.4223 9.26367 25.0664 9.26367C23.7105 9.26367 22.6113 10.3628 22.6113 11.7188C22.6113 13.0747 23.7105 14.1738 25.0664 14.1738Z" fill="#F7FCFF"/>
                    <path d="M7.94727 35.1563H2.34375V32.7149C2.34477 32.624 2.3637 32.5342 2.39945 32.4507C2.4352 32.3671 2.48708 32.2914 2.55211 32.2279C2.61715 32.1644 2.69406 32.1144 2.77845 32.0807C2.86285 32.0469 2.95307 32.0301 3.04395 32.0313H5.14551L7.94727 35.1563Z" fill="#F0A128"/>
                    <path d="M5.46875 30.4688H18.75V34.375H5.46875V30.4688Z" fill="#4A6DAD"/>
                    <path d="M18.7646 32.0313L15.6523 34.375H2.34375V46.6055C2.34452 46.8839 2.45548 47.1507 2.65237 47.3476C2.84926 47.5445 3.11608 47.6555 3.39453 47.6563H21.6104C21.8877 47.656 22.1535 47.5457 22.3496 47.3496C22.5457 47.1535 22.656 46.8877 22.6562 46.6104V33.0771C22.6555 32.7992 22.5444 32.5328 22.3473 32.3367C22.1503 32.1406 21.8835 32.0307 21.6055 32.0313H18.7646Z" fill="#FAC536"/>
                    <path d="M32.9473 35.1563H27.3438V32.7149C27.3448 32.624 27.3637 32.5342 27.3995 32.4507C27.4352 32.3671 27.4871 32.2914 27.5521 32.2279C27.6171 32.1644 27.6941 32.1144 27.7785 32.0807C27.8628 32.0469 27.9531 32.0301 28.0439 32.0313H30.1455L32.9473 35.1563Z" fill="#F0A128"/>
                    <path d="M30.4688 30.4688H43.75V34.375H30.4688V30.4688Z" fill="#4A6DAD"/>
                    <path d="M18.7646 32.0313L15.6523 34.375H2.34375V46.6055C2.34452 46.8839 2.45548 47.1507 2.65237 47.3476C2.84926 47.5445 3.11608 47.6555 3.39453 47.6563H21.6104C21.8877 47.656 22.1535 47.5457 22.3496 47.3496C22.5457 47.1535 22.656 46.8877 22.6562 46.6104V33.0771C22.6555 32.7992 22.5444 32.5328 22.3473 32.3367C22.1503 32.1406 21.8835 32.0307 21.6055 32.0313H18.7646Z" fill="#FAC536"/>
                    <path d="M13.2812 42.1875H19.5312V45.3125H13.2812V42.1875Z" fill="#F7FCFF"/>
                    <path d="M43.7646 32.0313L40.6523 34.375H27.3438V46.6055C27.3445 46.8839 27.4555 47.1507 27.6524 47.3476C27.8493 47.5445 28.1161 47.6555 28.3945 47.6563H46.6104C46.8877 47.656 47.1535 47.5457 47.3496 47.3496C47.5457 47.1535 47.656 46.8877 47.6562 46.6104V33.0771C47.6555 32.7992 47.5444 32.5328 47.3473 32.3367C47.1503 32.1406 46.8835 32.0307 46.6055 32.0313H43.7646Z" fill="#FAC536"/>
                    <path d="M38.2812 42.1875H44.5312V45.3125H38.2812V42.1875Z" fill="#F7FCFF"/>
                    <path d="M33.6602 12.9463V10.4912H30.4492C30.3115 9.88502 30.0714 9.30674 29.7393 8.78125L32.0117 6.50977L30.2734 4.77441L28.0039 7.0459C27.4784 6.71378 26.9001 6.47368 26.2939 6.33594V3.125H23.8389V6.33594C23.233 6.47361 22.655 6.71371 22.1299 7.0459L19.8574 4.77441L18.1221 6.50977L20.3936 8.78125C20.0614 9.30674 19.8213 9.88502 19.6836 10.4912H16.4727V12.9463H19.6836C19.8213 13.5525 20.0614 14.1308 20.3936 14.6562L18.1221 16.9277L19.8574 18.6631L22.1299 16.3916C22.655 16.7238 23.233 16.9639 23.8389 17.1016V20.3125H26.2939V17.1016C26.9001 16.9638 27.4784 16.7237 28.0039 16.3916L30.2734 18.6631L32.0098 16.9277L29.7373 14.6562C30.0694 14.1308 30.3095 13.5525 30.4473 12.9463H33.6602Z" fill="white"/>
                    <path d="M25.0664 14.1738C26.4223 14.1738 27.5215 13.0747 27.5215 11.7188C27.5215 10.3628 26.4223 9.26367 25.0664 9.26367C23.7105 9.26367 22.6113 10.3628 22.6113 11.7188C22.6113 13.0747 23.7105 14.1738 25.0664 14.1738Z" fill="#F7FCFF"/>
                    <path d="M5.46875 38.2812H10.1562C10.3635 38.2812 10.5622 38.1989 10.7087 38.0524C10.8552 37.9059 10.9375 37.7072 10.9375 37.5C10.9375 37.2928 10.8552 37.0941 10.7087 36.9476C10.5622 36.8011 10.3635 36.7188 10.1562 36.7188H5.46875C5.26155 36.7188 5.06284 36.8011 4.91632 36.9476C4.76981 37.0941 4.6875 37.2928 4.6875 37.5C4.6875 37.7072 4.76981 37.9059 4.91632 38.0524C5.06284 38.1989 5.26155 38.2812 5.46875 38.2812ZM30.4688 36.7188C30.2615 36.7188 30.0628 36.8011 29.9163 36.9476C29.7698 37.0941 29.6875 37.2928 29.6875 37.5C29.6875 37.7072 29.7698 37.9059 29.9163 38.0524C30.0628 38.1989 30.2615 38.2812 30.4688 38.2812H35.1562C35.3635 38.2812 35.5622 38.1989 35.7087 38.0524C35.8552 37.9059 35.9375 37.7072 35.9375 37.5C35.9375 37.2928 35.8552 37.0941 35.7087 36.9476C35.5622 36.8011 35.3635 36.7188 35.1562 36.7188H30.4688Z" fill="#F7FCFF"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Hyper-accelerated Research
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Accelerate your research with AI Agents to perform market research in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border-b border-gray-600 pb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#007770] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                    <path d="M19 8L21 10L23 8M23 6H19V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Top-tier consultants on demand
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We provide human in the loop (MBB consultants) approach to your research and advisory needs for best results
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="border-b border-gray-600 pb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#007770] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12L14.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Authenticity
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Authentic, source-backed insights from a Machine Analyst—not AI-generated guesswork—with full transparency
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="border-b border-gray-600 pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#007770] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17V7M15 17V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                    <path d="M7 7H17M7 17H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Refined deliverables
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every insights and charts are crafted with precision, backed by real-time data and authentic sources, and delivered with clarity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDifferentiator; 