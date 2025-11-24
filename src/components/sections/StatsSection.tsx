import React from 'react';
import StatCard from '../shared/StatCard';

const statsData = [
  { value: 305, label: 'Luxury Rooms' },
  { value: 650, label: 'Regular Guests' },
  { value: 80, label: 'Team Member' },
  { value: 75, label: 'Beaches' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-primary py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              endValue={stat.value}
              label={stat.label}
              suffix="+"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
