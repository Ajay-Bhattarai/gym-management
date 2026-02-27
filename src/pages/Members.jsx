import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { members } from '../data/dummyData';
import { Search, Plus } from 'lucide-react';

export default function Members() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-sm outline-none transition-all dark:text-gray-100"
                    />
                </div>

                <Button className="shrink-0 flex items-center gap-2">
                    <Plus className="h-4 w-4" /> Add Member
                </Button>
            </div>

            <Card className="p-0 overflow-hidden">
                <Table headers={['Name', 'Plan', 'Joined Date', 'Status', 'Actions']}>
                    {filteredMembers.map(member => (
                        <TableRow key={member.id}>
                            <TableCell className="font-medium text-slate-900 dark:text-white">{member.name}</TableCell>
                            <TableCell>{member.plan}</TableCell>
                            <TableCell>{member.joined}</TableCell>
                            <TableCell>
                                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${member.status === 'Active'
                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                                    }`}>
                                    {member.status}
                                </span>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {filteredMembers.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                                No members found matching "{searchTerm}"
                            </TableCell>
                        </TableRow>
                    )}
                </Table>
            </Card>
        </div>
    );
}
