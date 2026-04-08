import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Zurich', visitors: 2.8 },
  { name: 'Geneva', visitors: 2.3 },
  { name: 'Lucerne', visitors: 1.9 },
  { name: 'Interlaken', visitors: 1.7 },
  { name: 'Zermatt', visitors: 1.5 },
  { name: 'Basel', visitors: 1.2 },
  { name: 'Lausanne', visitors: 1.0 },
  { name: 'St. Moritz', visitors: 0.9 },
];

const COLORS = ['#1e1e1e', '#2d2d2d', '#3c3c3c', '#4b4b4b', '#5a5a5a', '#696969', '#787878', '#878787'];

export function DestinationChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis 
          dataKey="name" 
          angle={-45} 
          textAnchor="end" 
          height={80}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
        />
        <YAxis 
          label={{ value: 'Visitors (millions)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
        />
        <Tooltip 
          contentStyle={{ fontFamily: 'Radio Canada Big, sans-serif', backgroundColor: 'white', border: '1px solid #d9d9d9' }}
          formatter={(value: number) => [`${value}M visitors`, 'Visitors']}
        />
        <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
