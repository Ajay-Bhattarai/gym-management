import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = () => {
    const location = useLocation();
    const pathTitles = {
        '/': 'Dashboard',
        '/members': 'Members',
        '/trainers': 'Trainers',
        '/plans': 'Plans',
        '/attendance': 'Attendance',
        '/payments': 'Payments',
        '/analytics': 'Analytics',
        '/settings': 'Settings',
    };

    const title = pathTitles[location.pathname] || 'Dashboard';

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex transition-colors">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col min-w-0">
                <Header title={title} />
                <div className="p-8 flex-1 overflow-x-hidden">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
