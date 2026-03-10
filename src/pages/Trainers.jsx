import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { trainers } from '../data/dummyData';
import { Star, Mail, Phone, MoreHorizontal } from 'lucide-react';

export default function Trainers() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100 hidden sm:block">Our Team</h2>
                <Button>Add Trainer</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                    <Card key={trainer.id} className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center p-1">
                                <img
                                src={`https://api.dicebear.com/9.x/micah/svg?seed=${trainer.name}`}
                                alt={trainer.name}
                                    className="rounded-xl w-full h-full object-cover"
                                />
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="space-y-1 mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{trainer.name}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{trainer.specialty}</p>
                        </div>

                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-6 space-x-2">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span>{trainer.experience} Experience</span>
                        </div>

                        <div className="flex gap-2 border-t border-slate-100 dark:border-slate-700/50 pt-4">
                            <Button variant="secondary" className="flex-1 gap-2">
                                <Mail className="h-4 w-4" /> Message
                            </Button>
                            <Button variant="secondary" size="icon" className="shrink-0 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors">
                                <Phone className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
