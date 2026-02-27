import { cn } from './Card';

export const Table = ({ headers, children, className }) => {
    return (
        <div className={cn("overflow-x-auto w-full", className)}>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700/50 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold bg-slate-50 dark:bg-slate-800/50">
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-4">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export const TableRow = ({ children, className }) => {
    return (
        <tr className={cn("hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group", className)}>
            {children}
        </tr>
    );
};

export const TableCell = ({ children, className }) => {
    return (
        <td className={cn("px-6 py-4 text-sm text-slate-700 dark:text-slate-300", className)}>
            {children}
        </td>
    );
};
