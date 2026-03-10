import { Card } from '../components/ui/Card';
import { useTheme } from '../context/ThemeContext';
import { revenueData } from '../data/dummyData';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Analytics() {
    const { theme } = useTheme();

    const getChartOptions = (showLegend = false) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: showLegend,
                labels: {
                    color: theme === 'dark' ? '#cbd5e1' : '#475569'
                }
            },
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
    });

    const memberGrowthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'New Members',
                data: [65, 59, 80, 81, 56, 120],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderRadius: 4,
            },
            {
                label: 'Canceled',
                data: [28, 48, 40, 19, 20, 15],
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderRadius: 4,
            },
        ],
    };

    const revenueChartData = {
        labels: revenueData.map(d => d.month),
        datasets: [
            {
                fill: true,
                label: 'Revenue Overview',
                data: revenueData.map(d => d.revenue),
                borderColor: 'rgb(139, 92, 246)',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Analytics Overview</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track your gym's performance metrics</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="flex flex-col h-[400px]">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue Trend</h3>
                    <div className="flex-1 relative">
                        <Line options={getChartOptions()} data={revenueChartData} />
                    </div>
                </Card>

                <Card className="flex flex-col h-[400px]">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Member Growth & Retention</h3>
                    <div className="flex-1 relative">
                        <Bar options={getChartOptions(true)} data={memberGrowthData} />
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Total Lifetime Members", val: "1,245", trend: "+12.5%" },
                    { title: "Average Retention Rate", val: "94%", trend: "+2.1%" },
                    { title: "Avg. Revenue Per User", val: "$50.50", trend: "+4.3%" },
                    { title: "CAC", val: "$30.00", trend: "-1.5%" },
                ].map((item, idx) => (
                    <Card key={idx} className="p-6">
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{item.title}</h4>
                        <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">{item.val}</span>
                            <span className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-emerald-500'}`}>{item.trend}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
