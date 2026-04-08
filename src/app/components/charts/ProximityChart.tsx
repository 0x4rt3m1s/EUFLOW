import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Cell } from 'recharts';

const data = [
  { country: 'Germany', distance: 250, visitors: 3.2, size: 320 },
  { country: 'France', distance: 300, visitors: 2.8, size: 280 },
  { country: 'Italy', distance: 280, visitors: 2.5, size: 250 },
  { country: 'Austria', distance: 220, visitors: 1.8, size: 180 },
  { country: 'Netherlands', distance: 650, visitors: 1.2, size: 120 },
  { country: 'Belgium', distance: 580, visitors: 0.9, size: 90 },
  { country: 'UK', distance: 780, visitors: 1.5, size: 150 },
  { country: 'Spain', distance: 920, visitors: 0.8, size: 80 },
  { country: 'USA', distance: 6500, visitors: 1.1, size: 110 },
  { country: 'China', distance: 7800, visitors: 0.7, size: 70 },
  { country: 'India', distance: 6200, visitors: 0.5, size: 50 },
];

const COLORS = ['#1e1e1e', '#2d2d2d', '#3c3c3c', '#4b4b4b', '#5a5a5a', '#696969', '#787878', '#878787', '#969696', '#a5a5a5', '#b4b4b4'];

export function ProximityChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis 
          type="number" 
          dataKey="distance" 
          name="Distance"
          label={{ value: 'Distance from Switzerland (km)', position: 'bottom', offset: 40, style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
        />
        <YAxis 
          type="number" 
          dataKey="visitors" 
          name="Visitors"
          label={{ value: 'Annual Visitors (millions)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
        />
        <ZAxis type="number" dataKey="size" range={[50, 400]} />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{ fontFamily: 'Radio Canada Big, sans-serif', backgroundColor: 'white', border: '1px solid #d9d9d9' }}
          formatter={(value: number, name: string) => {
            if (name === 'Distance') return [`${value} km`, 'Distance'];
            if (name === 'Visitors') return [`${value}M`, 'Visitors'];
            return [value, name];
          }}
          labelFormatter={(value) => data.find(d => d.distance === value)?.country || ''}
        />
        <Scatter name="Countries" data={data}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}
