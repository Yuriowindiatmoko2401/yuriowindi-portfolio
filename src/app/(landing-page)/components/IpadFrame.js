'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function IpadFrame({ gifSrc, gifAlt, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Check if it's the LinkedIn clone GIF to apply specific styling
  const isLinkedIn = gifSrc.includes('linkedin-clone');

  return (
    <div className={`relative w-full max-w-[800px] mx-auto ${className}`}>
      <div className="relative w-full" style={{ paddingTop: '75%' }}>
        {/* iPad Frame */}
        <div className="absolute inset-0">
          <Image
            src="/ipad-frame.png"
            alt="iPad frame"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain z-10"
            priority
          />
        </div>
        
        {/* GIF Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative overflow-hidden"
            style={{
              width: isLinkedIn ? '72%' : '79%',
              height: isLinkedIn ? '57%' : '62%',
              marginTop: isLinkedIn ? '0.5%' : '-0.4%'
            }}
          >
            <Image
              src={gifSrc}
              alt={gifAlt}
              fill
              sizes={isLinkedIn ? '(max-width: 768px) 76vw, 608px' : '(max-width: 768px) 82vw, 656px'}
              className={`
                ${isLinkedIn ? 'object-cover' : 'object-contain'}
                transition-all duration-700 ease-in-out
                ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
