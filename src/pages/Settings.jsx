import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Camera, Mail, User, Shield, Bell } from 'lucide-react';
import { ThemeToggle } from '../components/layout/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
    const { theme } = useTheme();

    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Account Settings</h2>
                <p className="text-slate-500 dark:text-slate-400">Manage your profile and application preferences.</p>
            </div>

            <Card className="p-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Profile Information</h3>
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="relative group shrink-0">
                        <div className="h-28 w-28 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-sm">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Profile avatar" className="w-full h-full object-cover" />
                        </div>
                        <button className="absolute bottom-0 right-0 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                            <Camera className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex-1 space-y-4 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <User className="h-4 w-4 text-slate-400" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Admin User"
                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-sm outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-slate-400" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    defaultValue="admin@fitcore.com"
                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-sm outline-none transition-all dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button>Save Profile Updates</Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                            <Shield className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Security</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Manage password and 2FA</p>
                        </div>
                    </div>
                    <Button variant="secondary" className="w-full justify-center">Change Password</Button>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Bell className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Preferences</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Application theme and alerts</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Active Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                        </span>
                        <ThemeToggle />
                    </div>
                </Card>
            </div>
        </div>
    );
}
