import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-500 transition-transform duration-200" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 transition-transform duration-200" />
            )}
        </Button>
    );
};
