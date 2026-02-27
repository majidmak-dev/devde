'use client';

import { motion } from 'framer-motion';
import {
    Users, DollarSign, Briefcase, Server, TrendingUp, TrendingDown,
    Search, Bell, Settings, PieChart, BarChart as BarChartIcon
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const data = [
    { name: 'Jan', revenue: 4000, users: 240 },
    { name: 'Feb', revenue: 3000, users: 198 },
    { name: 'Mar', revenue: 5000, users: 310 },
    { name: 'Apr', revenue: 4500, users: 280 },
    { name: 'May', revenue: 6000, users: 390 },
    { name: 'Jun', revenue: 7500, users: 450 },
];

const stats = [
    { label: 'Total Revenue', value: '$24,500', trend: '+12.5%', isUp: true, icon: DollarSign },
    { label: 'Active Users', value: '1,240', trend: '+18%', isUp: true, icon: Users },
    { label: 'New Projects', value: '45', trend: '-2%', isUp: false, icon: Briefcase },
    { label: 'Hosting Load', value: '62%', trend: 'Optimal', isUp: true, icon: Server },
];

export default function AdminDashboard() {
    return (
        <div className="pt-24 pb-10 px-6 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Enterprise Overview</h1>
                    <p className="text-muted-foreground font-medium">Real-time performance analytics for DevDesigns.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-border outline-none focus:ring-1 ring-primary w-64"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                    </Button>
                    <Button variant="ghost" size="icon"><Settings className="w-5 h-5" /></Button>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">A</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-6 rounded-2xl border border-white/5"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className={`flex items-center text-xs font-bold ${stat.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {stat.isUp ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {stat.trend}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                            <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 glass p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold flex items-center">
                            <BarChartIcon className="w-5 h-5 mr-2 text-primary" />
                            Revenue vs Growth
                        </h2>
                        <div className="flex space-x-2 text-xs">
                            <span className="flex items-center px-2 py-1 rounded-lg bg-primary/10 text-primary font-bold">Revenue</span>
                            <span className="flex items-center px-2 py-1 rounded-lg bg-white/5 text-muted-foreground font-bold">Users</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold flex items-center">
                            <PieChart className="w-5 h-5 mr-2 text-secondary" />
                            Service Distribution
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: 'Hosting', value: 45, color: 'bg-emerald-500' },
                            { name: 'Dev Services', value: 30, color: 'bg-blue-500' },
                            { name: 'Domains', value: 15, color: 'bg-amber-500' },
                            { name: 'Marketplace', value: 10, color: 'bg-accent' },
                        ].map(item => (
                            <div key={item.name} className="space-y-2">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>{item.name}</span>
                                    <span>{item.value}%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className={cn("h-full", item.color)} style={{ width: `${item.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-10 border-border hover:bg-white/5 rounded-xl font-bold">View Detailed Breakdown</Button>
                </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold mb-6">Recent Sales & Subscriptions</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border/50 text-muted-foreground text-sm">
                                <th className="pb-4 font-semibold">Order ID</th>
                                <th className="pb-4 font-semibold">Client</th>
                                <th className="pb-4 font-semibold">Service</th>
                                <th className="pb-4 font-semibold">Amount</th>
                                <th className="pb-4 font-semibold">Status</th>
                                <th className="pb-4 font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { id: '#ORD-9281', client: 'Majid Desk', service: 'Cloud VPS Pro', amount: '$124.00', status: 'PAID', date: 'Feb 18, 2026' },
                                { id: '#ORD-9280', client: 'Alice Smith', service: 'UI Design Pack', amount: '$599.00', status: 'PENDING', date: 'Feb 17, 2026' },
                                { id: '#ORD-9279', client: 'Bob Jonas', service: 'Domain Renewal', amount: '$15.00', status: 'PAID', date: 'Feb 16, 2026' },
                            ].map(order => (
                                <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 font-mono text-primary">{order.id}</td>
                                    <td className="py-4 font-bold">{order.client}</td>
                                    <td className="py-4">{order.service}</td>
                                    <td className="py-4 font-bold text-white">{order.amount}</td>
                                    <td className="py-4">
                                        <span className={cn(
                                            "px-2 py-1 rounded-full text-[10px] font-black tracking-widest",
                                            order.status === 'PAID' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                                        )}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-muted-foreground">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
