'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface SunData {
  id: string;
  name: string;
  color: string;
  position: { x: number; y: number };
  size: number;
  portfolioItems: PortfolioItem[];
}

interface ScreenPosition {
  x: number;
  y: number;
}

const suns: SunData[] = [
  {
    id: 'sun-1',
    name: 'Infrastructure',
    color: '#8B5CF6', // Purple
    position: { x: 75, y: 30 },
    size: 60,
    portfolioItems: [
      { id: 'p1', name: 'Phoenix VC Website', description: 'Corporate website built with modern web technologies', category: 'Web' },
      { id: 'p2', name: 'CloudNexus', description: 'Cloud infrastructure management platform', category: 'Cloud' },
    ],
  },
  {
    id: 'sun-2',
    name: 'AI & Data',
    color: '#3B82F6', // Blue
    position: { x: 25, y: 60 },
    size: 50,
    portfolioItems: [
      { id: 'p3', name: 'DataFlow Analytics', description: 'AI-powered data analytics platform', category: 'AI/ML' },
    ],
  },
  {
    id: 'sun-3',
    name: 'Security',
    color: '#10B981', // Green
    position: { x: 85, y: 70 },
    size: 45,
    portfolioItems: [
      { id: 'p4', name: 'SecureVault', description: 'Cybersecurity solutions for enterprises', category: 'Security' },
    ],
  },
];

// Generate planet color based on sun color with variation
function getPlanetColor(sunColor: string, index: number): string {
  const hex = sunColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const variation = (index * 30) % 60 - 30;
  const newR = Math.min(255, Math.max(0, r + variation));
  const newG = Math.min(255, Math.max(0, g + variation));
  const newB = Math.min(255, Math.max(0, b + variation));

  return `rgb(${newR}, ${newG}, ${newB})`;
}

// Convert viewBox coordinates to screen coordinates accounting for preserveAspectRatio="xMidYMid slice"
function viewBoxToScreen(
  viewBoxX: number,
  viewBoxY: number,
  containerWidth: number,
  containerHeight: number,
  viewBoxWidth: number = 100,
  viewBoxHeight: number = 100
): ScreenPosition {
  // Calculate scale factor for "slice" (cover) behavior - use the LARGER scale
  const scaleX = containerWidth / viewBoxWidth;
  const scaleY = containerHeight / viewBoxHeight;
  const scale = Math.max(scaleX, scaleY); // "slice" uses max to cover entire container

  // Calculate the actual rendered size of the viewBox content
  const renderedWidth = viewBoxWidth * scale;
  const renderedHeight = viewBoxHeight * scale;

  // Calculate offset to center the content (xMid, yMid)
  const offsetX = (containerWidth - renderedWidth) / 2;
  const offsetY = (containerHeight - renderedHeight) / 2;

  // Transform the viewBox coordinate to screen coordinate
  const screenX = offsetX + viewBoxX * scale;
  const screenY = offsetY + viewBoxY * scale;

  return { x: screenX, y: screenY };
}

export default function SolarSystem() {
  const [hoveredSun, setHoveredSun] = useState<string | null>(null);
  const [screenPositions, setScreenPositions] = useState<Record<string, ScreenPosition>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate screen positions for all suns
  const updateScreenPositions = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPositions: Record<string, ScreenPosition> = {};

    suns.forEach((sun) => {
      const screenPos = viewBoxToScreen(
        sun.position.x,
        sun.position.y,
        rect.width,
        rect.height
      );
      // Convert to percentage of container for CSS positioning
      newPositions[sun.id] = {
        x: (screenPos.x / rect.width) * 100,
        y: (screenPos.y / rect.height) * 100,
      };
    });

    setScreenPositions(newPositions);
  }, []);

  // Update positions on mount and resize
  useEffect(() => {
    updateScreenPositions();

    const handleResize = () => {
      updateScreenPositions();
    };

    window.addEventListener('resize', handleResize);
    // Also observe container size changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [updateScreenPositions]);

  const handleMouseEnter = useCallback((sunId: string) => {
    setHoveredSun(sunId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSun(null);
  }, []);

  // Interactive hit area radius - much larger than visual for easier hovering
  const hitAreaRadius = 8;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          {suns.map((sun) => (
            <radialGradient key={`gradient-${sun.id}`} id={`sunGlow-${sun.id}`}>
              <stop offset="0%" stopColor={sun.color} stopOpacity="0.8" />
              <stop offset="50%" stopColor={sun.color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={sun.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {suns.map((sun) => (
          <g key={sun.id}>
            {/* Orbit paths */}
            {sun.portfolioItems.map((_, index) => (
              <circle
                key={`orbit-${sun.id}-${index}`}
                cx={sun.position.x}
                cy={sun.position.y}
                r={(index + 1) * 8 + sun.size / 10}
                fill="none"
                stroke={sun.color}
                strokeOpacity="0.15"
                strokeWidth="0.3"
              />
            ))}

            {/* Sun glow */}
            <circle
              cx={sun.position.x}
              cy={sun.position.y}
              r={sun.size / 8}
              fill={`url(#sunGlow-${sun.id})`}
            />

            {/* Sun core (visual) */}
            <circle
              cx={sun.position.x}
              cy={sun.position.y}
              r={sun.size / 20}
              fill={sun.color}
              style={{ filter: `drop-shadow(0 0 ${sun.size / 30}px ${sun.color})` }}
            />

            {/* Invisible hit area (larger, for easier interaction) */}
            <circle
              cx={sun.position.x}
              cy={sun.position.y}
              r={hitAreaRadius}
              fill="transparent"
              className="cursor-pointer"
              style={{ pointerEvents: 'all' }}
              onMouseEnter={() => handleMouseEnter(sun.id)}
              onMouseLeave={handleMouseLeave}
              onPointerEnter={() => handleMouseEnter(sun.id)}
              onPointerLeave={handleMouseLeave}
            />

            {/* Planets - colors aligned with their sun */}
            {sun.portfolioItems.map((item, index) => {
              const orbitRadius = (index + 1) * 8 + sun.size / 10;
              const planetColor = getPlanetColor(sun.color, index);
              const animationDuration = 20 + index * 10;

              return (
                <circle
                  key={item.id}
                  r={1.5}
                  fill={planetColor}
                  style={{
                    filter: `drop-shadow(0 0 2px ${planetColor})`,
                  }}
                >
                  <animateMotion
                    dur={`${animationDuration}s`}
                    repeatCount="indefinite"
                    path={`M ${sun.position.x - orbitRadius} ${sun.position.y} A ${orbitRadius} ${orbitRadius} 0 1 1 ${sun.position.x + orbitRadius} ${sun.position.y} A ${orbitRadius} ${orbitRadius} 0 1 1 ${sun.position.x - orbitRadius} ${sun.position.y}`}
                  />
                </circle>
              );
            })}
          </g>
        ))}
      </svg>

      {/* Tooltips - positioned using calculated screen coordinates */}
      {suns.map((sun) => {
        const pos = screenPositions[sun.id];
        if (!pos) return null;

        return (
          <div
            key={`tooltip-${sun.id}`}
            className={`absolute z-[100] transition-all duration-200 ease-out ${
              hoveredSun === sun.id
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <div
              className="rounded-lg px-4 py-3 shadow-xl backdrop-blur-sm border min-w-[200px]"
              style={{
                backgroundColor: `${sun.color}15`,
                borderColor: `${sun.color}40`,
              }}
            >
              <h3
                className="font-semibold text-sm mb-1"
                style={{ color: sun.color }}
              >
                {sun.name}
              </h3>
              <p className="text-xs text-gray-300 mb-2">
                {sun.portfolioItems.length} investment{sun.portfolioItems.length !== 1 ? 's' : ''}
              </p>
              <ul className="space-y-1">
                {sun.portfolioItems.map((item) => (
                  <li key={item.id} className="text-xs text-gray-400">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
