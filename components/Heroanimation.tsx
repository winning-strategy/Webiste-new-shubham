"use client";

import React, { useState, useEffect } from 'react';

const ANIMS = ["anim-float", "anim-pop", "anim-wipe", "anim-slide"];

const scenarios = [
  {
    title: "Market Research",
    insights: ["Market Size Calculations", "Growth Trends", "Excel Model Generated", "Report Citations"],
    prompts: ["Identify Top Growth Opportunities", "Design GTM Strategy"],
    stackedBarData: {
      data: [
        [8, 5, 2],     // 2025: 15B total
        [12, 7, 3],    // 2026: 22B total
        [18, 10, 5],   // 2027: 33B total  
        [28, 15, 7],   // 2028: 50B total
        [38, 20, 10],  // 2029: 68B total
        [52, 26, 13]   // 2030: 91B total
      ],
      years: ['2025', '2026', '2027', '2028', '2029', '2030'],
      segmentCagr: [25.1, 27.8, 22.4]
    },
    chartType: "stackedBar",
    placeholder: "Analyze EV charging infrastructure Market Size in USA",
    status: "Market Research Report Generated"
  },
  {
    title: "Competition Analysis",
    insights: ["Product Benchmarking","Pricing Strategy", "Gap Analysis", "Sales and Marketing Strategy"],
    prompts: ["Identify Product Innovation Opportunities", "Develop a Pricing Strategy"],
    chartType: "bubble",
    placeholder: "Prepare a Product Benchmarking Report of Top 5 Smartphone Brands",
    status: "Competitive Landscape Report Generated"
  },
  {
    title: "Data Analysis",
    insights: ["Revenue Projections", "P&L Projections", "Financial Ratio Analysis", "Valuation Metrics"],
    prompts: ["Generate 5-year P&L Projections", "Research Valuation Multiples for SaaS Industry"],
    linePath: "M0,60 C30,40 60,50 90,35 120,20 150,30 160,22",
    chartType: "line",
    placeholder: "Build 5-year Financial Projections Model",
    status: "5-Year Financial Projections Model Generated"
  },
  // {
  //   title: "Survey Analysis",
  //   insights: ["Response patterns", "Sentiment analysis", "Key preferences", "Action items"],
  //   prompts: ["Response rates", "Sentiment scoring", "Preference mapping", "Recommendations"],
  //   pieData: [65, 30, 5],
  //   pieLabels: ["Promoters", "Passives", "Detractors"],
  //   chartType: "pie",
  //   placeholder: "Analyze customer satisfaction survey...",
  //   status: "Survey insights ready"
  // },
  // {
  //   title: "Financial Modelling",
  //   insights: ["Revenue Projections", "P&L Projections", "Financial Ratio Analysis", "Valuation Metrics"],
  //   prompts: ["Generate 5-year P&L Projections", "Research Valuation Multiples for SaaS Industry"],
  //   multiLineData: {
  //     line1: [30, 45, 55, 40, 60, 50, 65],
  //     line2: [25, 35, 30, 45, 40, 55, 45]
  //   },
  //   chartType: "multiArea",
  //   placeholder: "Build 5-year Financial Projections Model",
  //   status: "Generated 5-Year Financial Projections Model"
  // },
  // {
  //   title: "HR Strategy",
  //   insights: ["Talent gaps", "Retention risks", "Skill development", "Culture metrics"],
  //   prompts: ["Workforce planning", "Skills assessment", "Retention analysis", "Culture survey"],
  //   chartType: "orgChart",
  //   placeholder: "Plan workforce expansion strategy...",
  //   status: "HR strategy developed"
  // },
  {
    title: "Presentation Generation",
    insights: ["Research Completed", "Storyboard Generated", "Visual Design Finalised", "Key Insights Generated"],
    prompts: ["Create a Sales Pitch Deck", "Create a Report for Marketing Team"],
    chartType: "slides",
    placeholder: "Create an Investor Pitch Deck for B2B SaaS Startup",
    status: "Pitch Deck Successfully Generated"
  }
];

// Doughnut Chart Component
const createDoughnutPath = (value: number, total: number, innerRadius: number, outerRadius: number, startAngle: number = 0) => {
  const angle = (value / total) * 360;
  const endAngle = startAngle + angle;
    
    const x1 = Math.cos((startAngle - 90) * Math.PI / 180);
    const y1 = Math.sin((startAngle - 90) * Math.PI / 180);
    const x2 = Math.cos((endAngle - 90) * Math.PI / 180);
    const y2 = Math.sin((endAngle - 90) * Math.PI / 180);
    
    const largeArc = angle > 180 ? 1 : 0;
    
  return [
    "M", x1 * outerRadius, y1 * outerRadius,
    "A", outerRadius, outerRadius, 0, largeArc, 1, x2 * outerRadius, y2 * outerRadius,
    "L", x2 * innerRadius, y2 * innerRadius,
    "A", innerRadius, innerRadius, 0, largeArc, 0, x1 * innerRadius, y1 * innerRadius,
      "Z"
    ].join(" ");
};

const PieChart = ({ data, labels, size = 140 }: { data: number[], labels: string[], size?: number }) => {
  const total = data.reduce((sum: number, value: number) => sum + value, 0);
  const colors = ['#00B3A6', '#007770', '#00A39A']; // Consistent theme colors
  const iconColors = ['#00B3A6', '#007770', '#00A39A'];
  
  // Large doughnut chart paths
  let currentAngle = 0;
  const mainPaths = data.map((value: number, index: number) => {
    const path = createDoughnutPath(value, total, 0.6, 1, currentAngle);
    currentAngle += (value / total) * 360;
    
    return (
      <path
        key={index}
        d={path}
        fill={colors[index % colors.length]}
        className="pie-segment"
        style={{ 
          animationDelay: `${index * 150}ms`,
          transformOrigin: '0 0'
        }}
      />
    );
  });
  
  return (
    <div className="w-full h-full flex items-center gap-6">
      {/* Left Section - Large Doughnut Chart */}
      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="-1.2 -1.2 2.4 2.4"
        className="pie-chart"
      >
            {mainPaths}
      </svg>
          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">60%</div>
            </div>
          </div>
        </div>
        {/* Response count */}
        <div className="text-sm text-gray-400 font-medium">200 responses</div>
      </div>
      
      {/* Right Section - Legend and Small Charts */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Legend with Icons */}
        <div className="space-y-2">
          {labels.map((label: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-[11px]">
              {/* Modern Person Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
                <defs>
                  <linearGradient id={`personGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: iconColors[index], stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: iconColors[index], stopOpacity: 0.7}} />
                  </linearGradient>
                </defs>
                {/* Head */}
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  fill={`url(#personGradient${index})`}
                  stroke={iconColors[index]}
                  strokeWidth="0.5"
                />
                {/* Body */}
                <path
                  d="M12 14C8.5 14 6 16.5 6 20V22C6 22.5 6.5 23 7 23H17C17.5 23 18 22.5 18 22V20C18 16.5 15.5 14 12 14Z"
                  fill={`url(#personGradient${index})`}
                  stroke={iconColors[index]}
                  strokeWidth="0.5"
                />
                {/* Shoulders highlight */}
                <path
                  d="M12 14C9.5 14 7.5 15.5 7 17.5C7.5 16 9.5 15 12 15C14.5 15 16.5 16 17 17.5C16.5 15.5 14.5 14 12 14Z"
                  fill="white"
                  opacity="0.2"
                />
              </svg>
              <span className="text-white font-medium">{data[index]}%</span>
              <span className="text-gray-300">{label}</span>
          </div>
        ))}
        </div>
        
        {/* Small Doughnut Charts - 3 in a row */}
        <div className="flex justify-between gap-2 w-full">
          {[
            { value: 45, label: "Aspirers" },
            { value: 39, label: "Affluent" },
            { value: 37, label: "Elite" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div className="relative">
                <svg width="45" height="45" viewBox="-1.2 -1.2 2.4 2.4">
                  {/* Background ring - full circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r="0.8"
                    fill="none"
                    stroke="#4B5563"
                    strokeWidth="0.3"
                    opacity="0.5"
                  />
                  {/* Progress ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="0.8"
                    fill="none"
                    stroke={colors[index % colors.length]}
                    strokeWidth="0.3"
                    strokeDasharray={`${(item.value / 100) * 2 * Math.PI * 0.8} ${2 * Math.PI * 0.8}`}
                    strokeDashoffset={-2 * Math.PI * 0.8 * 0.25}
                    className="pie-segment"
                    style={{ animationDelay: `${index * 100 + 800}ms` }}
                  />
                </svg>
                {/* Center value */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] font-bold text-white">{item.value}</span>
                </div>
              </div>
              {/* Label below chart */}
              <span className="text-[10px] text-gray-300 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
  </div>
);
};

// Multi-Line Area Chart Component
interface MultiAreaChartProps {
  data: {
    line1: number[];
    line2: number[];
  };
  size?: {
    width: number;
    height: number;
  };
}

const MultiAreaChart = ({ data, size = { width: 300, height: 120 } }: MultiAreaChartProps) => {
  const { line1, line2 } = data;
  const maxValue = Math.max(...line1, ...line2);
  const points = line1.length;
  
  // Generate path for line 1 (dark)
  const generatePath = (lineData: number[], height: number) => {
    const stepX = size.width / (points - 1);
    return lineData
      .map((value: number, index: number) => {
        const x = index * stepX;
        const y = height - (value / maxValue) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  // Generate area path (includes bottom line for fill)
  const generateAreaPath = (lineData: number[], height: number) => {
    const stepX = size.width / (points - 1);
    const linePath = lineData
      .map((value: number, index: number) => {
        const x = index * stepX;
        const y = height - (value / maxValue) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
    
    // Close the area by going to bottom corners
    return `${linePath} L ${size.width} ${height} L 0 ${height} Z`;
  };

  const line1Path = generatePath(line1, size.height);
  const line2Path = generatePath(line2, size.height);
  const area1Path = generateAreaPath(line1, size.height);
  const area2Path = generateAreaPath(line2, size.height);

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-xl border border-gray-600/20 shadow-lg backdrop-blur-sm">
        <svg 
          width={size.width} 
          height={size.height} 
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#007770', stopOpacity:0.6}} />
              <stop offset="100%" style={{stopColor:'#007770', stopOpacity:0.1}} />
            </linearGradient>
            <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#00B3A6', stopOpacity:0.4}} />
              <stop offset="100%" style={{stopColor:'#00B3A6', stopOpacity:0.05}} />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={`grid-${i}`}
              x1="0"
              y1={i * (size.height / 4)}
              x2={size.width}
              y2={i * (size.height / 4)}
              stroke="#007770"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}
          
          {/* Area fills */}
          <path
            d={area1Path}
            fill="url(#areaGradient1)"
            className="area-fill-1"
            style={{ animationDelay: '500ms' }}
          />
          <path
            d={area2Path}
            fill="url(#areaGradient2)"
            className="area-fill-2"
            style={{ animationDelay: '800ms' }}
          />
          
          {/* Line strokes */}
          <path
            d={line1Path}
            fill="none"
            stroke="#007770"
            strokeWidth="3"
            className="multi-line-draw"
            style={{ animationDelay: '200ms' }}
          />
          <path
            d={line2Path}
            fill="none"
            stroke="#00B3A6"
            strokeWidth="3"
            className="multi-line-draw"
            style={{ animationDelay: '400ms' }}
          />
        </svg>
      </div>
      <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-400 font-medium px-4">
        <span>2025</span>
        <span>2026</span>
        <span>2027</span>
        <span>2028</span>
        <span>2029</span>
        <span>2030</span>
      </div>
    </div>
  );
};

// Bubble Chart Component for Competitive Analysis
interface BubbleChartProps {
  size?: {
    width: number;
    height: number;
  };
}

const BubbleChart = ({ size = { width: 300, height: 100 } }: BubbleChartProps) => {
  const bubbles = [
    { x: 75, y: 25, size: 12, color: '#00B3A6' }, // Top left - Higher Quality, Lower Price
    { x: 225, y: 25, size: 12, color: '#00B3A6' }, // Top right - Higher Quality, Higher Price
    { x: 60, y: 75, size: 12, color: '#00B3A6' }, // Bottom left - Lower Quality, Lower Price
    { x: 170, y: 75, size: 12, color: '#00B3A6' }, // Bottom center - Lower Quality, Higher Price
    { x: 210, y: 75, size: 12, color: '#00B3A6' }, // Bottom right - Lower Quality, Highest Price
  ];

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-xl border border-gray-600/20 shadow-lg backdrop-blur-sm">
        <svg 
          width={size.width} 
          height={size.height} 
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="overflow-visible"
        >
          
          {/* Grid lines */}
          <line x1="0" y1={size.height/2} x2={size.width} y2={size.height/2} stroke="#007770" strokeWidth="1" opacity="0.3"/>
          <line x1={size.width/2} y1="0" x2={size.width/2} y2={size.height} stroke="#007770" strokeWidth="1" opacity="0.3"/>
          
          {/* Axis labels */}
          <text x={size.width-10} y={size.height/2-5} fontSize="8" fill="#FFFFFF" textAnchor="end">
            Higher Price
          </text>
          <text x={size.width/2+5} y="10" fontSize="8" fill="#FFFFFF" textAnchor="start">
            Higher Quality
          </text>
          <text x="10" y={size.height/2-5} fontSize="8" fill="#FFFFFF" textAnchor="start">
            Lower Price
          </text>
          <text x={size.width/2+5} y={size.height-5} fontSize="8" fill="#FFFFFF" textAnchor="start">
            Lower Quality
          </text>
          
          {/* Bubbles */}
          {bubbles.map((bubble, index) => (
            <circle
              key={index}
              cx={bubble.x}
              cy={bubble.y}
              r={bubble.size / 2}
              fill={bubble.color}
              className="bubble-animate"
              style={{ animationDelay: `${index * 200}ms` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

// Organizational Chart Component for HR Strategy
interface OrgChartProps {
  size?: {
    width: number;
    height: number;
  };
}

const OrgChart = ({ size = { width: 300, height: 100 } }: OrgChartProps) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-xl border border-gray-600/20 shadow-lg backdrop-blur-sm">
        <svg 
          width={size.width} 
          height={size.height} 
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="overflow-visible"
        >
          {/* Director (top) */}
          <rect x="130" y="5" width="40" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '0ms' }} />
          
          {/* VP level */}
          <rect x="70" y="25" width="40" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '200ms' }} />
          <rect x="190" y="25" width="40" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '300ms' }} />
          
          {/* Manager level */}
          <rect x="50" y="45" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '400ms' }} />
          <rect x="90" y="45" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '500ms' }} />
          <rect x="200" y="45" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '600ms' }} />
          
          {/* Staff level */}
          <rect x="40" y="65" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '700ms' }} />
          <rect x="65" y="65" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '800ms' }} />
          <rect x="90" y="65" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '900ms' }} />
          <rect x="200" y="65" width="20" height="12" fill="#00B3A6" rx="2" className="org-box" style={{ animationDelay: '1000ms' }} />
          
          {/* Lines connecting the hierarchy */}
          {/* Director to VP level */}
          <line x1="150" y1="17" x2="150" y2="22" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '100ms' }} />
          <line x1="90" y1="22" x2="210" y2="22" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '150ms' }} />
          <line x1="90" y1="22" x2="90" y2="25" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '200ms' }} />
          <line x1="210" y1="22" x2="210" y2="25" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '250ms' }} />
          
          {/* VP Administration to Managers */}
          <line x1="90" y1="37" x2="90" y2="42" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '350ms' }} />
          <line x1="60" y1="42" x2="100" y2="42" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '400ms' }} />
          <line x1="60" y1="42" x2="60" y2="45" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '450ms' }} />
          <line x1="100" y1="42" x2="100" y2="45" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '500ms' }} />
          
          {/* VP Research to Research Coordinator */}
          <line x1="210" y1="37" x2="210" y2="42" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '550ms' }} />
          <line x1="210" y1="42" x2="210" y2="45" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '600ms' }} />
          
          {/* Manager to Staff connections - aligned */}
          {/* Left branch - Financial Officer */}
          <line x1="60" y1="57" x2="60" y2="62" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '650ms' }} />
          <line x1="50" y1="62" x2="75" y2="62" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '700ms' }} />
          <line x1="50" y1="62" x2="50" y2="65" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '750ms' }} />
          <line x1="75" y1="62" x2="75" y2="65" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '800ms' }} />
          
          {/* Middle branch - Project Manager */}
          <line x1="100" y1="57" x2="100" y2="65" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '850ms' }} />
          
          {/* Right branch - Research Coordinator */}
          <line x1="210" y1="57" x2="210" y2="62" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '950ms' }} />
          <line x1="210" y1="62" x2="210" y2="65" stroke="#007770" strokeWidth="1" className="org-line" style={{ animationDelay: '1000ms' }} />
          

        </svg>
      </div>
    </div>
  );
};

// Stacked Bar Chart Component
const StackedBarChart = ({ data, years, segmentCagr }: { data: number[][], years: string[], segmentCagr: number[] }) => {
  const colors = ['#00B3A6', '#007770', '#00A39A'];
  const segmentLabels = ['Premium Markets', 'Growth Markets', 'Emerging Markets'];
  const maxValue = Math.max(...data.map(yearData => yearData.reduce((sum, val) => sum + val, 0)));

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-xl border border-gray-600/20 shadow-lg backdrop-blur-sm">
        <div className="flex items-end justify-center gap-3 h-25 relative" style={{ height: '100px' }}>
          {data.map((yearData, yearIndex) => {
            const total = yearData.reduce((sum, val) => sum + val, 0);
            
            return (
              <div key={yearIndex} className="flex flex-col items-center">
                <div 
                  className="w-8 flex flex-col justify-end bg-gray-800/30 rounded-sm border border-gray-600/40 overflow-hidden relative group"
                  style={{ height: '100px' }}
                >
                  {/* Total value label on top */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[10px] font-medium text-gray-200">
                    ${total}B
                  </div>
                  
                  {yearData.map((value, segmentIndex) => {
                    const segmentHeightPx = (value / maxValue) * 100;
                    const percentage = Math.round((value / total) * 100);
                    return (
                      <div
                        key={segmentIndex}
                        className="w-full relative bar-segment flex items-center justify-center"
                        style={{ 
                          height: `${segmentHeightPx}px`,
                          backgroundColor: colors[segmentIndex],
                          animationDelay: `${yearIndex * 200 + segmentIndex * 100}ms`
                        }}
                      >
                        
                      </div>
                    );
                  })}
                  
                  {/* Hover tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] text-gray-300 bg-gray-800/90 px-2 py-1 rounded whitespace-nowrap z-10">
                    ${total}B
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Year labels below chart - consistent with MultiAreaChart */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-400 font-medium px-4">
        {years.map((year, index) => (
          <span key={year} style={{ marginLeft: index === 0 ? '0' : '-6px' }}>{year}</span>
        ))}
      </div>
    </div>
  );
};

// PowerPoint-style Interface Component for Pitch Decks
const PowerPointInterface = () => {
  return (
          <div className="relative bg-gray-800 rounded-lg overflow-hidden powerpoint-interface" style={{ width: '300px', height: '140px', animationDelay: '0ms' }}>
      {/* Top toolbar */}
      <div className="h-4 flex items-center px-1 toolbar-appear" style={{ backgroundColor: '#007770', animationDelay: '200ms' }}>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white/20 rounded flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-sm"></div>
          </div>
          <span className="text-white text-[6px] font-medium">AI-Generated Presentation - Investor Pitch Deck</span>
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          <div className="w-1.5 h-1.5 bg-white/20 rounded-sm"></div>
          <div className="w-1.5 h-1.5 bg-white/20 rounded-sm"></div>
          <div className="w-1.5 h-1.5 bg-white/20 rounded-sm"></div>
        </div>
      </div>



            <div className="flex" style={{ height: 'calc(100% - 25px)' }}>
        {/* Left sidebar - Slide thumbnails */}
        <div className="w-10 bg-gray-700 border-r border-gray-600 p-0.5 sidebar-appear" style={{ animationDelay: '600ms' }}>
          <div className="space-y-0.5">
            {[1, 2, 3].map((slide, i) => (
              <div 
                key={slide} 
                className={`w-full aspect-[16/9] rounded border slide-thumb ${slide === 2 ? 'border-[#00B3A6] bg-gray-600' : 'border-gray-500 bg-gray-800'} p-0.5 cursor-pointer hover:border-[#00B3A6] transition-colors`}
                style={{ animationDelay: `${800 + i * 100}ms` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 rounded-sm flex items-center justify-center">
                  <span className="text-[4px] text-gray-300">{slide}</span>
                </div>
              </div>
            ))}
          </div>
              </div>
              
        {/* Main slide area */}
        <div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
          {/* Slide container */}
          <div className="flex-1 flex items-center justify-center p-0.5 main-slide-appear" style={{ animationDelay: '800ms' }}>
            <div className="w-full max-w-[240px] aspect-[16/9] bg-gray-600 rounded shadow-sm overflow-hidden relative">
              
              
              
                            {/* Main slide content */}
              <div className="flex-1 p-1 relative">
                <div className="flex gap-2 h-full">
                  
                  {/* Left side - Text content */}
                  <div className="w-3/5 flex flex-col justify-start slide-content-left" style={{ animationDelay: '1200ms' }}>
                    {/* Title */}
                    <div className="mb-1">
                      <h3 className="text-[6px] font-bold text-gray-200 slide-title" style={{ animationDelay: '1400ms' }}>
                        Market Analysis
                      </h3>
                    </div>
                    
                    {/* Bullet points with checkmarks */}
                    <div className="space-y-1 mb-1">
                      <div className="flex items-start gap-1 slide-text" style={{ animationDelay: '1600ms' }}>
                        <div className="w-1.5 h-1.5 bg-[#00B3A6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-[3px]">✓</span>
                        </div>
                        <span className="text-[4px] text-gray-400 leading-tight">Expanding digital payments market drives strong demand for SaaS platforms.</span>
                      </div>
                      <div className="flex items-start gap-1 slide-text" style={{ animationDelay: '1700ms' }}>
                        <div className="w-1.5 h-1.5 bg-[#00B3A6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-[3px]">✓</span>
                        </div>
                        <span className="text-[4px] text-gray-400 leading-tight">Cloud-native software scales efficiently to serve diverse institutional client needs.</span>
                      </div>
                      <div className="flex items-start gap-1 slide-text" style={{ animationDelay: '1800ms' }}>
                        <div className="w-1.5 h-1.5 bg-[#00B3A6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-[3px]">✓</span>
                        </div>
                        <span className="text-[4px] text-gray-400 leading-tight">Subscription-based solutions capture value from rapid global financial transformation.</span>
                </div>
              </div>
              
                    {/* Bottom paragraph */}
                    <div className="mt-1">
                      <p className="text-[4px] text-gray-400 leading-tight slide-text" style={{ animationDelay: '1900ms' }}>
                        By understanding the market landscape, we can develop a winning strategy for selling our new saas product, productteam.
                      </p>
            </div>
                  </div>
                  
                  {/* Right side - Area chart */}
                  <div className="w-2/5 flex flex-col slide-content-right" style={{ animationDelay: '1400ms' }}>
                    {/* Chart legend/labels */}
                    <div className="flex justify-end gap-1 mb-1 chart-legend" style={{ animationDelay: '2600ms' }}>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-[#00B3A6] rounded"></div>
                        <span className="text-[4px] text-gray-300">Enterprise Segment</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-[#007770] rounded"></div>
                        <span className="text-[4px] text-gray-300">SMB Segment</span>
                      </div>
                    </div>
                    
                    {/* Chart container */}
                    <div className="flex-1 relative">
                      <svg width="100%" height="100%" viewBox="0 0 60 45" className="presentation-chart">
                        <defs>
                          <linearGradient id="pptGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor:'#8B5CF6', stopOpacity:0.6}} />
                            <stop offset="100%" style={{stopColor:'#8B5CF6', stopOpacity:0.1}} />
                          </linearGradient>
                          <linearGradient id="pptGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:0.4}} />
                            <stop offset="100%" style={{stopColor:'#3B82F6', stopOpacity:0.1}} />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4].map(i => (
                          <line
                            key={`grid-${i}`}
                            x1="6"
                            y1={4 + i * 8}
                            x2="54"
                            y2={4 + i * 8}
                            stroke="#E5E7EB"
                            strokeWidth="0.1"
                          />
                        ))}
                        
                        {/* Area fills */}
                        <path
                          d="M6,37 Q12,33 18,30 Q24,27 30,29 Q36,30 42,25 Q48,21 52,23 L52,37 L6,37 Z"
                          fill="url(#pptGradient1)"
                          className="area-fill-1"
                          style={{ animationDelay: '2200ms' }}
                        />
                        <path
                          d="M6,37 Q12,35 18,34 Q24,31 30,33 Q36,34 42,30 Q48,27 52,29 L52,37 L6,37 Z"
                          fill="url(#pptGradient2)"
                          className="area-fill-2"
                          style={{ animationDelay: '2400ms' }}
                        />
                        
                        {/* Line strokes */}
                        <path
                          d="M6,37 Q12,33 18,30 Q24,27 30,29 Q36,30 42,25 Q48,21 52,23"
                          fill="none"
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          className="presentation-line-draw"
                          style={{ animationDelay: '2000ms' }}
                        />
                        <path
                          d="M6,37 Q12,35 18,34 Q24,31 30,33 Q36,34 42,30 Q48,27 52,29"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="0.5"
                          className="presentation-line-draw"
                          style={{ animationDelay: '2100ms' }}
                        />
                        
                        {/* Y-axis labels */}
                        <text x="4" y="6" fontSize="1.5" fill="#6B7280" textAnchor="end">100</text>
                        <text x="4" y="14" fontSize="1.5" fill="#6B7280" textAnchor="end">75</text>
                        <text x="4" y="22" fontSize="1.5" fill="#6B7280" textAnchor="end">50</text>
                        <text x="4" y="30" fontSize="1.5" fill="#6B7280" textAnchor="end">25</text>
                        <text x="4" y="38" fontSize="1.5" fill="#6B7280" textAnchor="end">0</text>
                        
                        {/* X-axis labels */}
                        <text x="10" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Pre</text>
                        <text x="18" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Q2</text>
                        <text x="26" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Q3</text>
                        <text x="34" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Q4</text>
                        <text x="42" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Q1</text>
                        <text x="48" y="42" fontSize="1.5" fill="#6B7280" textAnchor="middle">Tgt</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Generate Button positioned at bottom-right corner of entire slide */}
              <div className="absolute bottom-1 right-1">
                <button className="bg-blue-600 text-white text-[4px] px-1 py-0.5 rounded hover:bg-blue-700 transition-colors cursor-pointer font-medium" style={{ animationDelay: '3000ms', animation: 'slideUp 0.5s ease-out forwards' }}>
                  Generate with AI
                </button>
              </div>
            </div>
          </div>

          {/* Bottom toolbar */}
          <div className="h-3 bg-gray-100 border-t border-gray-200 flex items-center justify-between px-0.5 bottom-toolbar" style={{ animationDelay: '2800ms' }}>
            <div className="flex items-center gap-0.5 text-[3px] text-gray-600">
              <span>🔍 Style</span>
              <span>🎨 Color</span>
              <span>🖼️ Bg</span>
            </div>
            <div className="text-[3px] text-gray-500">Slide 2/3</div>
          </div>
        </div>
    </div>
  </div>
);
};

const Heroanimation = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [animIdx, setAnimIdx] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [allDone, setAllDone] = useState(false);
  const [running, setRunning] = useState(false);
  const [typed, setTyped] = useState("");

  const runSequence = () => {
    if (running) return;
    setRunning(true);
    setDoneCount(0);
    setAllDone(false);
    
    // Specific timing intervals: 0-200, 200-400, 400-800, 800-1000, 1000-1200
    setTimeout(() => setDoneCount(1), 200);
    setTimeout(() => setDoneCount(2), 400);
    setTimeout(() => setDoneCount(3), 800);
    setTimeout(() => setDoneCount(4), 1000);
    setTimeout(() => {
      setAllDone(true);
      setRunning(false);
    }, 1200);
  };

  // Continuous cycling through scenarios
  useEffect(() => {
    const cycleScenarios = () => {
      // Change scenario
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      setAnimIdx((prev) => (prev + 1) % ANIMS.length);
      
      // Reset and run new sequence
      setDoneCount(0);
      setAllDone(false);
      setRunning(true);
      
      // Get current scenario to check if it's data analysis
      const nextScenarioIndex = (currentScenario + 1) % scenarios.length;
      const nextScenario = scenarios[nextScenarioIndex];
      const isDataAnalysis = nextScenario.chartType === "line";
      
      // Specific timing intervals: 0-200, 200-400, 400-800, 800-1000, 1000-1200
      // Data analysis gets extra time (1000ms extra)
      const extraTime = isDataAnalysis ? 1000 : 0;
      
      setTimeout(() => setDoneCount(1), 200 + extraTime);
      setTimeout(() => setDoneCount(2), 400 + extraTime);
      setTimeout(() => setDoneCount(3), 800 + extraTime);
      setTimeout(() => setDoneCount(4), 1000 + extraTime);
      setTimeout(() => {
        setAllDone(true);
        setRunning(false);
      }, 1800 + extraTime);
    };

    // Initial run
    runSequence();
    
    // Set up continuous cycling - matches specific timing intervals with repeat after 1200ms
    const interval = setInterval(cycleScenarios, 4000); // Increased to 4 seconds to accommodate data analysis extra time
    
    return () => clearInterval(interval);
  }, []);

  const scenario = scenarios[currentScenario];

  // Safety check to prevent errors during initialization
  if (!scenario) {
    return <div className="relative w-full h-full min-h-[400px] overflow-hidden p-4 bg-gray-900">Loading...</div>;
  }

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden p-4 -mt-2.5">
      {/* Output canvas */}
      <div
        className={`relative h-100 rounded-2xl border border-gray-700/50 bg-gray-800/80 backdrop-blur p-4 ring-1 ring-gray-700/20 overflow-hidden ${ANIMS[animIdx]}`}
        data-oid="ys7giss">

        {/* Single big box */}
        <div
          className="relative h-full w-full rounded-xl border border-gray-600/30 bg-gray-700/50 p-4 shadow-sm"
          data-oid="0ona.n5">

          {/* Header */}
          <div className="flex items-center justify-between" data-oid="08sjtgw">
            <p
              className="text-xs font-medium text-gray-200"
              data-oid="b8oc_kj">

              {scenario.title}
            </p>
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${allDone ? "bg-emerald-900/40 text-emerald-300" : "bg-[#007770]/20 text-[#00B3A6]"}`}
              data-oid="8evh2h3">

              {allDone ? "✓" : "•"}
            </span>
          </div>

          {/* Charts layer */}
          <div className="mt-3 flex justify-center items-center h-40" data-oid="_r1jmo6">
            {scenario.chartType === "multiArea" && (
              /* Multi-Line Area Chart */
              <div className="w-full h-full flex justify-center items-center">
                <MultiAreaChart 
                  data={('multiLineData' in scenario && scenario.multiLineData) ? scenario.multiLineData as { line1: number[], line2: number[] } : { line1: [20, 30, 25, 35], line2: [15, 25, 20, 30] }}
                  size={{ width: 300, height: 100 }}
                />
              </div>
            )}
            
            {scenario.chartType === "stackedBar" && (
              /* Stacked Bar Chart */
              <div className="w-full h-full flex justify-center items-center">
                <StackedBarChart 
                  data={scenario.stackedBarData?.data || [[10, 5, 3], [15, 8, 4], [20, 12, 6]]}
                  years={scenario.stackedBarData?.years || ['2025', '2026', '2027']}
                  segmentCagr={scenario.stackedBarData?.segmentCagr || [15.0, 18.0, 12.0]}
                />
              </div>
            )}
            
            {scenario.chartType === "line" && (
              /* Data Analysis - Graph Fades, Insights Appear */
              <div className="w-full h-full relative">
                {/* Base Chart - Full Width */}
                <div className="absolute inset-0 chart-container">
                  <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-xl border border-gray-600/20 shadow-lg backdrop-blur-sm h-32">
                    <svg viewBox="0 0 320 100" className="w-full h-full">
                    <defs>
                        {/* Grid pattern */}
                        <pattern id="salesGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#007770" strokeWidth="0.3" opacity="0.2"/>
                      </pattern>
                        <linearGradient id="salesLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'#007770', stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:'#00B3A6', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'#37C6BD', stopOpacity:1}} />
                        </linearGradient>
                        <linearGradient id="salesAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#00B3A6', stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:'#00B3A6', stopOpacity:0.05}} />
                      </linearGradient>
                    </defs>
                    
                      <rect width="320" height="100" fill="url(#salesGrid)" rx="4" />
                      
                      {/* Axis lines */}
                      <line x1="20" y1="90" x2="300" y2="90" stroke="#6B7280" strokeWidth="1" opacity="0.5" />
                      <line x1="20" y1="10" x2="20" y2="90" stroke="#6B7280" strokeWidth="1" opacity="0.5" />
                    
                    {/* Area fill under the line */}
                    <path
                        d="M20,80 C60,75 100,65 140,55 C180,45 220,35 260,25 C280,20 300,15 320,12 L 320,90 L 20,90 Z"
                        fill="url(#salesAreaGradient)"
                        className="sales-area-fill"
                      />
                      
                      {/* Main sales line */}
                    <path
                        d="M20,80 C60,75 100,65 140,55 C180,45 220,35 260,25 C280,20 300,15 320,12"
                      fill="none"
                        stroke="url(#salesLineGradient)"
                        strokeWidth="3"
                        className="sales-line-draw"
                      />
                    
                    {/* Data points */}
                    {[
                        {x: 220, y: 35, value: '$25M', month: 'Jun'},
                        {x: 300, y: 15, value: '$25M', month: 'Jul'}
                    ].map((point, i) => (
                        <g key={i}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                            r="3"
                        fill="#00B3A6"
                        stroke="#ffffff"
                            strokeWidth="2"
                            className="sales-data-point"
                        style={{ animationDelay: `${i * 500 + 1500}ms` }}
                      />
                        </g>
                    ))}
                  </svg>
                  </div>
                </div>
                
                {/* Insights Panel - Appears after graph fades */}
                <div className="absolute top-0 right-0 w-1/2 h-full insights-overlay">
                  <div className="bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-gray-700/20 p-4 rounded-r-xl border border-gray-600/20 shadow-lg backdrop-blur-sm h-32">
                    <div className="h-full flex flex-col relative">
                      {/* Header */}
                      <div className="mb-2">
                        <h3 className="text-xs font-semibold text-white insights-title" style={{ animationDelay: '2500ms' }}>
                          Insights
                        </h3>
                        <div className="text-[8px] text-gray-400 insights-subtitle" style={{ animationDelay: '2600ms' }}>
                          Sales insights by Months
                        </div>
                      </div>
                      
                      {/* Bullet points with insights */}
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-1 insight-item" style={{ animationDelay: '2800ms' }}>
                          <div className="w-0 h-0 border-l-[3px] border-l-[#00B3A6] border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent mt-1 flex-shrink-0"></div>
                          <span className="text-[9px] text-gray-400 leading-tight">Sales increased by 12% in 2025</span>
                          <div className="flex items-center gap-1 ml-1">
                            <div className="bg-teal-600/80 text-white text-[7px] px-1.5 py-0.5 rounded-sm font-medium pointer-events-none">
                              Diagnose
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-1 insight-item" style={{ animationDelay: '3000ms' }}>
                          <div className="w-0 h-0 border-l-[3px] border-l-[#00B3A6] border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent mt-1 flex-shrink-0"></div>
                          <span className="text-[9px] text-gray-400 leading-tight">Max Sales $25M in Jun 2025</span>
                        </div>
                        
                        <div className="flex items-start gap-1 insight-item" style={{ animationDelay: '3200ms' }}>
                          <div className="w-0 h-0 border-l-[3px] border-l-[#00B3A6] border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent mt-1 flex-shrink-0"></div>
                          <span className="text-[9px] text-gray-400 leading-tight">Total Jan-July 2025: $248M</span>
                        </div>
                      </div>
                      
                      {/* Mouse cursor at bottom right */}
                      <svg width="10" height="14" viewBox="0 0 10 14" className="absolute bottom-1 right-1 pointer-events-none">
                        <path d="M0 0L0 10L3 7L5 9L7 7L3 3L0 0Z" fill="white" stroke="black" strokeWidth="0.5"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {scenario.chartType === "pie" && (
              /* Pie Chart */
              <div className="w-full h-full flex justify-center items-center">
                <PieChart 
                  data={('pieData' in scenario && scenario.pieData) ? scenario.pieData as number[] : [25, 25, 25, 25]} 
                  labels={('pieLabels' in scenario && scenario.pieLabels) ? scenario.pieLabels as string[] : ["A", "B", "C", "D"]}
                  size={120}
                />
              </div>
            )}

            {scenario.chartType === "bubble" && (
              /* Bubble Chart */
              <div className="w-full h-full flex justify-center items-center">
                <BubbleChart size={{ width: 300, height: 100 }} />
              </div>
            )}

            {scenario.chartType === "orgChart" && (
              /* Organizational Chart */
              <div className="w-full h-full flex justify-center items-center">
                <OrgChart size={{ width: 300, height: 100 }} />
              </div>
            )}

            {scenario.chartType === "slides" && (
              /* Pitch Deck - PowerPoint Interface Only */
              <div className="w-full h-full flex justify-center items-center">
                <PowerPointInterface />
              </div>
            )}
          </div>

          {/* Insights list */}
          <ul className="mt-8 ml-20 grid grid-cols-2 gap-2" data-oid="yw-p1pq">
            {scenario.insights && Array.isArray(scenario.insights) && scenario.insights.map((it, i) =>
            <li
              key={it}
              className={`w-full flex items-center gap-2 fade-up ${doneCount > i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              data-oid="iz0-uj5">

                <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full flex-shrink-0 ${doneCount > i ? "bg-emerald-500 text-white" : "bg-[#007770]/20 text-[#00B3A6]"}`}
                data-oid="7u-rpvr">

                  {doneCount > i ? "✓" : "•"}
                </span>
                <span
                className="text-[11px] text-gray-300 leading-tight"
                data-oid="r-sp-54">

                  {it}
                </span>
              </li>
            )}
          </ul>

          {/* Status row below chart */}
          <div
            className="mt-6 flex items-center justify-between rounded-lg border border-gray-600/30 bg-gray-600/20 px-3 py-2 text-[11px] text-gray-300"
            data-oid="qutcu74">

            <span data-oid="zfmxr.f">
              {allDone ?
              scenario.status :
              "Generating report…"}
            </span>
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${allDone ? "bg-emerald-500 text-white" : "bg-[#007770]/20 text-[#00B3A6]"}`}
              data-oid="dqj-p-u">

              {allDone ? "✓" : "•"}
            </span>
          </div>
        </div>
      </div>
      
      {/* Chat box (fixed within card area) */}
      <div
        className="mt-3 rounded-2xl border border-[#007770]/30 bg-gray-700/60 backdrop-blur p-3 ring-1 ring-gray-700/20 shadow-sm"
        data-oid="2z6d8.e">

        <div className="flex flex-wrap gap-2" data-oid="rv4rwui">
          {scenario.prompts && Array.isArray(scenario.prompts) && scenario.prompts.map((p) =>
          <span
            key={p}
            className="inline-flex items-center rounded-full border border-[#007770]/30 px-2 py-1 text-[10px] text-[#00B3A6] bg-[#007770]/10"
            data-oid="h:y3c1_">

              {p}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2" data-oid="csnx3jk">
          <div
            className="flex-1 rounded-lg border border-gray-600/30 bg-gray-600/20 px-3 py-2 text-xs text-gray-200 flex items-center gap-1"
            role="textbox"
            aria-label="Prompt input"
            data-oid="bt7tbp0">

            <span
              className="text-gray-400"
              data-oid="qjarcba">

              /
            </span>
            <span className="whitespace-nowrap" data-oid="bfoffjj">
              {typed || scenario.placeholder}
            </span>
            <span
              className="ml-0.5 inline-block h-3 w-[1px] bg-gray-300 caret-blink"
              data-oid=".wr87j4" />

          </div>
          <button
            disabled={true}
            className="inline-flex items-center gap-2 rounded-lg bg-[#007770]/60 text-white/70 px-3 py-2 text-xs font-medium shadow cursor-not-allowed"
            data-oid="_46iod1">

            Search
          </button>
        </div>
      </div>
      
      <style jsx data-oid="n6lhc61">{`
        /* Canvas animations */
        @keyframes floatIn { 0% { transform: translateY(12px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes popIn { 0% { transform: scale(0.96); opacity: 0; filter: blur(2px); } 100% { transform: scale(1); opacity: 1; filter: blur(0); } }
        @keyframes wipeIn { 0% { clip-path: inset(0 100% 0 0); opacity: .4; } 100% { clip-path: inset(0 0 0 0); opacity: 1; } }
        @keyframes slideInRight { 0% { transform: translateX(24px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        .anim-float > .grid > div { animation: floatIn .7s var(--d,0ms) ease-out both; }
        .anim-pop > .grid > div { animation: popIn .6s var(--d,0ms) ease-out both; }
        .anim-wipe > .grid > div { animation: wipeIn .7s var(--d,0ms) ease-out both; }
        .anim-slide > .grid > div { animation: slideInRight .6s var(--d,0ms) ease-out both; }

        /* Bar Chart Animations */
        @keyframes barGrow { 
          from { 
            transform: translateY(100%) scaleY(0); 
            opacity: 0; 
          } 
          50% {
            transform: translateY(20%) scaleY(0.8);
            opacity: 0.7;
          }
          to { 
            transform: translateY(0%) scaleY(1); 
            opacity: 1; 
          } 
        }
        .bar-grow { 
          animation: barGrow 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }
        
        /* Stacked Bar Chart Animations */
        @keyframes stackedBarGrow { 
          from { 
            height: 0%;
            opacity: 0; 
          } 
          to { 
            opacity: 1; 
          } 
        }
        .bar-segment { 
          animation: stackedBarGrow 0.8s ease-out both;
        }
        
        /* Line Chart Animations */
        @keyframes dash { to { stroke-dashoffset: 0; } }
        .line-draw { 
          stroke-dasharray: 300; 
          stroke-dashoffset: 300; 
          animation: dash 2s ease-in-out forwards; 
        }
        
        /* Area fill animation */
        @keyframes areaFill {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 0.2; transform: scaleY(1); }
        }
        .area-fill { 
          animation: areaFill 1.5s ease-out 0.5s both;
          transform-origin: bottom;
        }
        
        /* Data points animation */
        @keyframes dataPointPop {
          from { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          to { transform: scale(1); opacity: 1; }
        }
        .data-point { 
          animation: dataPointPop 0.6s ease-out both;
        }
        
        /* Multi-Line Area Chart Animations */
        @keyframes multiLineDraw {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        .multi-line-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: multiLineDraw 2s ease-out both;
        }
        
        @keyframes areaFillIn {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 1; transform: scaleY(1); }
        }
        .area-fill-1, .area-fill-2 {
          animation: areaFillIn 1.5s ease-out both;
          transform-origin: bottom;
        }
        
        /* Pie Chart Animations */
        @keyframes pieGrow { 
          from { transform: scale(0) rotate(0deg); opacity: 0; } 
          to { transform: scale(1) rotate(360deg); opacity: 1; } 
        }
        .pie-segment { 
          animation: pieGrow 0.8s ease-out both;
          transform-origin: center;
        }
        .pie-chart {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* PowerPoint Interface Animations */
        @keyframes powerpointFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .powerpoint-interface { animation: powerpointFadeIn 0.8s ease-out both; }
        
               /* PowerPoint Container Animation - Appears and stays visible */
       @keyframes powerpointContainerSequence {
         0% { opacity: 0; transform: scale(0.95); }
         100% { opacity: 1; transform: scale(1); }
       }
        .powerpoint-container { 
          animation: powerpointContainerSequence 1.5s ease-out both;
        }
        
        @keyframes toolbarSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .toolbar-appear { animation: toolbarSlideDown 0.6s ease-out both; }
        
        @keyframes ribbonSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ribbon-appear { animation: ribbonSlideDown 0.5s ease-out both; }
        
        @keyframes sidebarSlideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .sidebar-appear { animation: sidebarSlideRight 0.7s ease-out both; }
        
        @keyframes slideThumbPop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .slide-thumb { animation: slideThumbPop 0.4s ease-out both; }
        
        @keyframes mainSlideZoom {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .main-slide-appear { animation: mainSlideZoom 0.8s ease-out both; }
        
        @keyframes slideHeaderSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-header { animation: slideHeaderSlide 0.6s ease-out both; }
        
        @keyframes slideContentLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-content-left { animation: slideContentLeft 0.7s ease-out both; }
        
        @keyframes slideContentRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-content-right { animation: slideContentRight 0.7s ease-out both; }
        
        @keyframes slideTitleFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-title { animation: slideTitleFade 0.5s ease-out both; }
        
        @keyframes slideTextReveal {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-text { animation: slideTextReveal 0.4s ease-out both; }
        
        @keyframes presentationChartGrow {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .presentation-chart { animation: presentationChartGrow 0.8s ease-out both; }
        
        @keyframes presentationLineDraw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        .presentation-line-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: presentationLineDraw 2s ease-out both;
        }
        
        @keyframes chartLegendFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chart-legend { animation: chartLegendFade 0.5s ease-out both; }
        
        @keyframes bottomToolbarSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bottom-toolbar { animation: bottomToolbarSlide 0.6s ease-out both; }

        @keyframes slideUp {
          0% { 
            opacity: 0;
            transform: translateY(10px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Bubble Chart Animations */
        @keyframes bubbleGrow {
          from { transform: scale(0); }
          50% { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .bubble-animate { animation: bubbleGrow 0.6s ease-out both; }
        
        @keyframes bubbleTextFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .bubble-text { animation: bubbleTextFade 0.5s ease-out both; }
        
        /* Organizational Chart Animations */
        @keyframes orgBoxGrow {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .org-box { animation: orgBoxGrow 0.4s ease-out both; }
        
        @keyframes orgLineDraw {
          from { stroke-dasharray: 20; stroke-dashoffset: 20; }
          to { stroke-dasharray: 20; stroke-dashoffset: 0; }
        }
        .org-line { 
          stroke-dasharray: 20; 
          animation: orgLineDraw 0.6s ease-out both; 
        }
        
        @keyframes orgTextFade {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .org-text { animation: orgTextFade 0.5s ease-out both; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Insights Paper Animations */
        @keyframes insightsHeaderFade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .insights-header { animation: insightsHeaderFade 0.6s ease-out both; }
        
        /* Sales Chart Animations */
        @keyframes salesLineDraw {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        .sales-line-draw {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: salesLineDraw 2s ease-out 0.5s both;
        }
        
        @keyframes salesAreaFill {
          from { opacity: 0; transform: scaleY(0); }
          to { opacity: 1; transform: scaleY(1); }
        }
        .sales-area-fill { 
          animation: salesAreaFill 1.5s ease-out 1s both;
          transform-origin: bottom;
        }
        
        @keyframes salesDataPointPop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        .sales-data-point { 
          animation: salesDataPointPop 0.6s ease-out both;
        }
        
        /* Chart Container Animation - Appears then fades to 20% */
        @keyframes chartContainerSequence {
          0% { opacity: 0; transform: scale(0.95); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .chart-container { 
          animation: chartContainerSequence 2.5s ease-out both;
        }
        

        /* Insights Overlay Animation - Appears after chart fades */
        @keyframes insightsOverlayAppear {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .insights-overlay { 
          animation: insightsOverlayAppear 0.8s ease-out 2.2s both;
        }
        
        /* Legacy panel animation for compatibility */
        @keyframes insightsPanelSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .insights-panel { animation: insightsPanelSlide 0.8s ease-out 0.3s both; }
        
        @keyframes insightsTitleFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .insights-title { animation: insightsTitleFade 0.6s ease-out both; }
        .insights-subtitle { animation: insightsTitleFade 0.6s ease-out both; }
        
        @keyframes insightItemSlide {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .insight-item { animation: insightItemSlide 0.6s ease-out both; }
        
        /* Legacy insights animations */
        @keyframes insightsLineDraw {
          from { width: 0; opacity: 0; }
          to { opacity: 1; }
        }
        .insights-line { animation: insightsLineDraw 0.8s ease-out both; }

        /* Insights */
        .fade-up { transition: transform .4s ease, opacity .4s ease; }

        /* Prompt caret */
        @keyframes caretBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .caret-blink { animation: caretBlink 1s step-end infinite; }
      `}</style>
    </div>
  );
};

export default Heroanimation;
function ChatMarketDemo() {
  const msgs = [
  {
    role: "user",
    text: "Estimate EV charging infrastructure market in USA"
  },
  { role: "bot", text: "Scanning 48 trusted sources…" },
  { role: "bot", text: "Extracting KPIs (revenue, stations, CAGR)…" },
  { role: "bot", text: "Synthesizing findings and drafting slides…" },
  { role: "bot", text: "Report ready ✓" }];


  const outputs = ["Executive summary", "KPI table", "Citations"];

  const [visible, setVisible] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    let t: number | undefined;
    let o: number | undefined;
    // reveal messages quickly
    t = window.setInterval(() => {
      setVisible((v) => {
        const next = Math.min(msgs.length, v + 1);
        if (next === msgs.length) window.clearInterval(t);
        return next;
      });
    }, 650);
    // reveal outputs with ticks
    o = window.setInterval(() => {
      setDoneCount((c) => {
        const next = Math.min(outputs.length, c + 1);
        if (next === outputs.length) window.clearInterval(o);
        return next;
      });
    }, 900);
    return () => {
      if (t) window.clearInterval(t);
      if (o) window.clearInterval(o);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md" data-oid="yddxrck">
      <div
        className="mb-2 flex items-center justify-between"
        data-oid="namkkcv">

        <div
          className="text-[11px] uppercase tracking-widest text-[#007770]/80"
          data-oid="3_0b.y8">

          Market research
        </div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full bg-[#007770]/10 text-[#007770]"
          data-oid="7t_-eso">

          seconds
        </span>
      </div>

      <div
        className="relative rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur p-4 ring-1 ring-black/5 shadow-xl"
        data-oid="4js8xa.">

        {/* Chat area */}
        <div className="space-y-2" data-oid="k1h8osj">
          {msgs.slice(0, visible).map((m, i) =>
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            data-oid="fuhzhqd">

              <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs shadow ${m.role === "user" ? "bg-[#007770] text-white" : "bg-white/80 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-800 dark:text-gray-200"}`}
              data-oid="sycvgg4">

                {m.text}
              </div>
            </div>
          )}
          {/* Typing indicator for next bot message */}
          {visible < msgs.length && msgs[visible]?.role === "bot" &&
          <div className="flex justify-start" data-oid="41r06k3">
              <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs bg-white/80 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-gray-800 dark:text-gray-200`}
              data-oid="m20obs5">

                <span className="typing-dots" data-oid="y.t92jd">
                  <span data-oid="8xku_e5"></span>
                  <span data-oid="41tj.8h"></span>
                  <span data-oid="gzwibag"></span>
                </span>
              </div>
            </div>
          }
        </div>

        {/* Side rail */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 flex w-36 flex-col items-end justify-center pr-2"
          data-oid="y_1uamu">

          <div
            className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-2 border border-white/20 text-[10px] text-[#005a55] dark:text-[#9be3de] shadow"
            data-oid="jd1vax:">

            Done in minutes
          </div>
          <div
            className="mt-2 space-y-1 text-[10px] text-gray-600 dark:text-gray-400"
            data-oid="w7bv_y9">

            {outputs.map((o, i) =>
            <div
              key={o}
              className="flex items-center gap-1"
              data-oid="4anlecc">

                <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${doneCount > i ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-500 dark:bg-white/10 dark:text-gray-300"}`}
                data-oid="m7ef.za">

                  {doneCount > i ? "✓" : ""}
                </span>
                <span className="truncate max-w-[7.5rem]" data-oid="7g-z.xk">
                  {o}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Outputs strip */}
        <div className="mt-3 grid grid-cols-3 gap-2" data-oid="3yiyri9">
          {outputs.map((o, i) =>
          <div
            key={o}
            className={`rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-[10px] text-gray-800 dark:text-gray-200 flex items-center justify-between transition-all duration-700 ${doneCount > i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            data-oid="y4t:umx">

              {o}
              <span
              className={`ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full ${doneCount > i ? "bg-emerald-500 text-white" : "bg-[#007770]/10 text-[#007770]"}`}
              data-oid="rl8l1ez">

                {doneCount > i ? "✓" : "•"}
              </span>
            </div>
          )}
        </div>

        {/* Typing dots styles */}
        <style jsx>{`
          .typing-dots span {
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #6b7280;
            margin: 0 1px;
            animation: typing 1.4s infinite ease-in-out both;
          }
          .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
          .typing-dots span:nth-child(2) { animation-delay: -0.16s; }
          @keyframes typing {
            0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
            40% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}

