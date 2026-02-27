import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { attendance } from '../data/dummyData';
import { Calendar, CheckCircle2, XCircle } from 'lucide-react';

export default function Attendance() {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Daily Attendance</h2>

                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-sm outline-none transition-all text-slate-700 dark:text-gray-100 placeholder-slate-400"
                    />
                </div>
            </div>

            <Card className="p-0 overflow-hidden">
                <Table headers={['Member Name', 'Date', 'Time In', 'Status']}>
                    {attendance.map((record) => (
                        <TableRow key={record.id}>
                            <TableCell className="font-medium text-slate-900 dark:text-white">{record.memberName}</TableCell>
                            <TableCell>{record.date}</TableCell>
                            <TableCell className={record.time === '-' ? 'text-slate-400' : 'text-slate-700 dark:text-slate-300'}>
                                {record.time}
                            </TableCell>
                            <TableCell>
                                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium gap-1.5 ${record.status === 'Present'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                                        : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                                    }`}>
                                    {record.status === 'Present' ? (
                                        <CheckCircle2 className="h-3 w-3" />
                                    ) : (
                                        <XCircle className="h-3 w-3" />
                                    )}
                                    {record.status}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </Card>
        </div>
    );
}
