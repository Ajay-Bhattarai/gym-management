import { Card } from '../components/ui/Card';
import { Users, CreditCard, TrendingUp } from 'lucide-react';
import { members, revenueData } from '../data/dummyData';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Dashboard() {
    const { theme } = useTheme();

    const stats = [
        { label: 'Total Members', value: members.length.toString(), icon: Users, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/40' },
        { label: 'Active Plans', value: members.filter(m => m.status === 'Active').length.toString(), icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-900/40' },
        { label: 'Monthly Revenue', value: '$24,500', icon: TrendingUp, color: 'text-violet-600', bg: 'bg-violet-100 dark:bg-violet-900/40' },
    ];

    const chartData = {
        labels: revenueData.map(d => d.month),
        datasets: [
            {
                fill: true,
                label: 'Revenue Growth',
                data: revenueData.map(d => d.revenue),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
        scales: {
            y: {
                grid: { color: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' },
                ticks: { color: theme === 'dark' ? '#94a3b8' : '#64748b' }
            },
            x: {
                grid: { display: false },
                ticks: { color: theme === 'dark' ? '#94a3b8' : '#64748b' }
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={i} className="flex items-center p-6">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${stat.bg} mr-4`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue Overview</h3>
                <div className="h-[300px] w-full">
                    <Line options={chartOptions} data={chartData} />
                </div>
            </Card>
        </div>
    );
}
