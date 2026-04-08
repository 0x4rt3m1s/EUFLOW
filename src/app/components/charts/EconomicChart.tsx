import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { gdp: 20000, visitors: 0.8 },
  { gdp: 30000, visitors: 1.2 },
  { gdp: 40000, visitors: 1.8 },
  { gdp: 50000, visitors: 2.3 },
  { gdp: 60000, visitors: 2.9 },
  { gdp: 70000, visitors: 3.2 },
  { gdp: 80000, visitors: 3.5 },
];

export function EconomicChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis 
          dataKey="gdp" 
          label={{ value: 'GDP per capita (USD)', position: 'bottom', offset: 40, style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <YAxis 
          label={{ value: 'Visitors to Switzerland (millions)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
        />
        <Tooltip 
          contentStyle={{ fontFamily: 'Radio Canada Big, sans-serif', backgroundColor: 'white', border: '1px solid #d9d9d9' }}
          formatter={(value: number, name: string) => {
            if (name === 'visitors') return [`${value}M visitors`, 'Visitors'];
            return [value, name];
          }}
          labelFormatter={(value) => `GDP: $${value.toLocaleString()}`}
        />
        <Legend 
          wrapperStyle={{ fontFamily: 'Radio Canada Big, sans-serif' }}
          formatter={() => 'Tourism Volume'}
        />
        <Line 
          type="monotone" 
          dataKey="visitors" 
          stroke="#1e1e1e" 
          strokeWidth={3}
          dot={{ fill: '#1e1e1e', r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
