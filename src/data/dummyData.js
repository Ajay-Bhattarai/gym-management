export const members = [
    { id: 1, name: 'Ajay Raj Bhattarai', plan: 'Pro', status: 'Active', joined: '2023-01-15' },
    { id: 2, name: 'Srijal Karki', plan: 'Basic', status: 'Inactive', joined: '2023-05-22' },
    { id: 3, name: 'Ram', plan: 'VIP', status: 'Active', joined: '2024-02-10' },
    { id: 4, name: 'Hari', plan: 'Pro', status: 'Active', joined: '2023-11-05' },
    { id: 5, name: 'Bishal', plan: 'Basic', status: 'Active', joined: '2024-01-18' },
];

export const trainers = [
    { id: 1, name: 'Ajay Raj Bhattarai', specialty: 'Weightlifting', experience: '5 Years' },
    { id: 2, name: 'Srijal Karki', specialty: 'Yoga & Pilates', experience: '8 Years' },
    { id: 3, name: 'Himal Shrestha', specialty: 'Cardio & HIIT', experience: '3 Years' },
];

export const plans = [
    { id: 1, name: 'Basic', price: '$299/mo', features: ['Access to gym equipment', 'Locker room access', '1 free pass/month'] },
    { id: 2, name: 'Pro', price: '$599/mo', features: ['All Basic features', 'Group classes included', 'Personal trainer advice'] },
    { id: 3, name: 'VIP', price: '$999/mo', features: ['All Pro features', 'Unlimited PT sessions', 'Spa & sauna access'] },
];

export const attendance = [
    { id: 1, memberName: 'Ajay Raj Bhattarai', date: '2024-02-27', time: '08:00 AM', status: 'Present' },
    { id: 2, memberName: 'Srijal Karki', date: '2024-02-27', time: '-', status: 'Absent' },
    { id: 3, memberName: 'Ram', date: '2024-02-27', time: '09:15 AM', status: 'Present' },
];

export const payments = [
    { id: 1, memberName: 'Ajay Raj Bhattarai', amount: '$59', date: '2024-02-01', status: 'Paid' },
    { id: 2, memberName: 'Srijal Karki', amount: '$29', date: '2024-02-15', status: 'Pending' },
    { id: 3, memberName: 'Ram', amount: '$99', date: '2024-02-10', status: 'Paid' },
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
