import { NavLink } from 'react-router-dom';
import {
    Dumbbell,
    LayoutDashboard,
    Users,
    UserSquare,
    ClipboardList,
    CalendarCheck,
    CreditCard,
    TrendingUp,
    Settings
} from 'lucide-react';

const MENU_ITEMS = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Members', path: '/members', icon: Users },
    { name: 'Trainers', path: '/trainers', icon: UserSquare },
    { name: 'Plans', path: '/plans', icon: ClipboardList },
    { name: 'Attendance', path: '/attendance', icon: CalendarCheck },
    { name: 'Payments', path: '/payments', icon: CreditCard },
    { name: 'Analytics', path: '/analytics', icon: TrendingUp },
    { name: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed left-0 top-0 text-slate-700 dark:text-slate-300 transition-colors z-20">
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
                <Dumbbell className="h-8 w-8 text-blue-600 dark:text-blue-500 mr-3" />
                <span className="text-xl font-bold text-slate-900 dark:text-white">FitCore</span>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            <Icon className="h-5 w-5 mr-3 shrink-0" />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-3 px-2">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Admin User</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@fitcore.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
