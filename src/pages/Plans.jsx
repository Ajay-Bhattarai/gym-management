import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { plans } from '../data/dummyData';
import { Check } from 'lucide-react';

export default function Plans() {
    return (
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Membership Plans</h2>
                <p className="text-slate-500 dark:text-slate-400">Choose the perfect plan for your fitness journey. Upgrade or downgrade at any time with no extra fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <Card
                        key={plan.id}
                        className={`relative p-8 flex flex-col ${plan.name === 'Pro'
                                ? 'border-blue-500 dark:border-blue-500 shadow-xl dark:shadow-blue-900/20 shadow-blue-500/10 scale-105 z-10'
                                : 'hover:border-slate-300 dark:hover:border-slate-600'
                            }`}
                    >
                        {plan.name === 'Pro' && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Most Popular
                            </span>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                            <div className="flex justify-center items-baseline">
                                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price.split('/')[0]}</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium ml-1">/{plan.price.split('/')[1]}</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.name === 'Pro' ? 'primary' : 'secondary'}
                            className="w-full py-3"
                        >
                            Get Started
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
