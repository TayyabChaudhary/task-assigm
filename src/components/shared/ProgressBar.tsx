import React from 'react';

interface ProgressBarProps {
    label: string;
    percentage: number;
    delay: number;
    isVisible: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, delay, isVisible }) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-700 font-medium">{label}</span>
                <span className="text-primary font-semibold">{percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        width: isVisible ? `${percentage}%` : '0%',
                        transitionDelay: `${delay}ms`
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
