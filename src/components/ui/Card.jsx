import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Card = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700/50 transition-all",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
