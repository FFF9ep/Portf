import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsSection = ({ analytics }) => {
    if (!analytics || !analytics.history) return null;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-lg font-bold">Visitor Trends (7 Days)</h3>

            <div className="h-64 w-full bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analytics.history}>
                        <defs>
                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" opacity={0.3} />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                borderRadius: '8px',
                                border: 'none',
                                color: '#f8fafc'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="views"
                            stroke="#3b82f6"
                            fillOpacity={1}
                            fill="url(#colorViews)"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="visitors"
                            stroke="#14b8a6"
                            fillOpacity={0}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Total Views</span>
                    <div className="text-2xl font-bold mt-1">{analytics.totalViews.toLocaleString()}</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Unique Visitors</span>
                    <div className="text-2xl font-bold mt-1">{analytics.uniqueVisitors.toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsSection;
