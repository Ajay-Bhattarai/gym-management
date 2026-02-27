import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { payments } from '../data/dummyData';
import { Download, FileText } from 'lucide-react';

export default function Payments() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Payment History</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage all transactions and invoices</p>
                </div>
                <Button variant="outline" className="gap-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                    <Download className="h-4 w-4" /> Export CSV
                </Button>
            </div>

            <Card className="p-0 overflow-hidden">
                <Table headers={['Invoice ID', 'Member', 'Amount', 'Date', 'Status', 'Invoice']}>
                    {payments.map((payment) => (
                        <TableRow key={payment.id}>
                            <TableCell className="font-mono text-xs text-slate-500 dark:text-slate-400">
                                #INV-{payment.id.toString().padStart(4, '0')}
                            </TableCell>
                            <TableCell className="font-medium text-slate-900 dark:text-white">{payment.memberName}</TableCell>
                            <TableCell className="font-semibold text-slate-900 dark:text-white">{payment.amount}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>
                                <div className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${payment.status === 'Paid'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                                    }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 self-center ${payment.status === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500'
                                        }`}></span>
                                    {payment.status}
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                                    <FileText className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </Card>
        </div>
    );
}
