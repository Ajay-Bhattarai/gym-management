export const members = [
    { id: 1, name: 'Alice Cooper', plan: 'Pro', status: 'Active', joined: '2023-01-15' },
    { id: 2, name: 'Bob Smith', plan: 'Basic', status: 'Inactive', joined: '2023-05-22' },
    { id: 3, name: 'Charlie Brown', plan: 'VIP', status: 'Active', joined: '2024-02-10' },
    { id: 4, name: 'Diana Prince', plan: 'Pro', status: 'Active', joined: '2023-11-05' },
    { id: 5, name: 'Evan Wright', plan: 'Basic', status: 'Active', joined: '2024-01-18' },
];

export const trainers = [
    { id: 1, name: 'John Doe', specialty: 'Weightlifting', experience: '5 Years' },
    { id: 2, name: 'Jane Smith', specialty: 'Yoga & Pilates', experience: '8 Years' },
    { id: 3, name: 'Mike Johnson', specialty: 'Cardio & HIIT', experience: '3 Years' },
];

export const plans = [
    { id: 1, name: 'Basic', price: '$29/mo', features: ['Access to gym equipment', 'Locker room access', '1 free pass/month'] },
    { id: 2, name: 'Pro', price: '$59/mo', features: ['All Basic features', 'Group classes included', 'Personal trainer advice'] },
    { id: 3, name: 'VIP', price: '$99/mo', features: ['All Pro features', 'Unlimited PT sessions', 'Spa & sauna access'] },
];

export const attendance = [
    { id: 1, memberName: 'Alice Cooper', date: '2024-02-27', time: '08:00 AM', status: 'Present' },
    { id: 2, memberName: 'Bob Smith', date: '2024-02-27', time: '-', status: 'Absent' },
    { id: 3, memberName: 'Charlie Brown', date: '2024-02-27', time: '09:15 AM', status: 'Present' },
];

export const payments = [
    { id: 1, memberName: 'Alice Cooper', amount: '$59', date: '2024-02-01', status: 'Paid' },
    { id: 2, memberName: 'Bob Smith', amount: '$29', date: '2024-02-15', status: 'Pending' },
    { id: 3, memberName: 'Charlie Brown', amount: '$99', date: '2024-02-10', status: 'Paid' },
];

// For charting
export const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 4500 },
    { month: 'Mar', revenue: 4800 },
    { month: 'Apr', revenue: 5100 },
    { month: 'May', revenue: 4900 },
    { month: 'Jun', revenue: 5500 },
];
