import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

interface StatCardProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCard: React.FC<StatCardProps> = ({ endValue, label, suffix = '+', duration = 2000 }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const count = useCounterAnimation({ endValue, duration, isVisible });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`
        flex flex-col items-center justify-center py-8 px-4
        transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div 
        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        style={{
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
        } as React.CSSProperties}
      >
        <span className="inline-block transition-transform duration-500">
          {count}
        </span>
        <span className="ml-1">{suffix}</span>
      </div>
      <p className="text-white text-lg md:text-xl lg:text-xl font-normal tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
