import { Bell, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/Button';

export const Header = ({ title }) => {
    return (
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>

            <div className="flex items-center space-x-4">
                <div className="relative group hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500/20 rounded-full text-sm outline-none transition-all dark:text-gray-100"
                    />
                </div>

                <Button variant="ghost" size="icon" className="relative group text-slate-600 dark:text-slate-300">
                    <Bell className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
                </Button>
                <ThemeToggle />
            </div>
        </header>
    );
};
