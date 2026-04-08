import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const topDestinations = [
  { name: 'France', visitors: 89.4 },
  { name: 'Spain', visitors: 83.5 },
  { name: 'Italy', visitors: 64.5 },
  { name: 'Turkey', visitors: 51.2 },
  { name: 'Germany', visitors: 39.6 },
  { name: 'UK', visitors: 36.3 },
  { name: 'Austria', visitors: 31.9 },
  { name: 'Greece', visitors: 31.3 },
  { name: 'Portugal', visitors: 27.0 },
  { name: 'Netherlands', visitors: 20.1 },
];

const COLORS = ['#1e1e1e', '#2d2d2d', '#3c3c3c', '#4b4b4b', '#5a5a5a', '#696969', '#787878', '#878787', '#969696', '#a5a5a5'];

export default function EuropePage() {
  return (
    <div className="bg-white relative min-h-screen">
      <div className="content-stretch flex flex-col items-center relative w-full">
        {/* Hero section */}
        <div className="content-stretch flex flex-col h-[500px] items-start relative shrink-0 w-full">
          <div className="absolute h-[600px] left-0 top-0 w-full">
            <div className="absolute bg-white inset-[0_0_16.67%_0]" />
            <Navigation />
          </div>
          <header className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[140px] pt-[190px] px-[20px] relative w-full">
                <div className="content-stretch flex flex-col items-center max-w-[1030px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                    <h1 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[100px] text-black text-center tracking-[-5px] w-full">
                      Tourism in Europe
                    </h1>
                    <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.8px] w-full">
                      Exploring the continent's most popular destinations and travel trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Main content */}
        <main className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[100px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 max-w-[800px]">
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-center w-full">
                  <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-full">
                    Top European Destinations
                  </h2>
                  <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] tracking-[-0.8px] w-full">
                    Annual international tourist arrivals (millions)
                  </p>
                </div>
              </div>
              
              <div className="content-stretch flex gap-[40px] items-center max-w-[1200px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
                  <div className="h-[600px] shrink-0 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topDestinations} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis 
                          dataKey="name"
                          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis 
                          label={{ value: 'Annual Visitors (millions)', angle: -90, position: 'insideLeft', style: { fontFamily: 'Radio Canada Big, sans-serif' } }}
                          tick={{ fontSize: 12, fontFamily: 'Radio Canada Big, sans-serif' }}
                        />
                        <Tooltip 
                          contentStyle={{ fontFamily: 'Radio Canada Big, sans-serif', backgroundColor: 'white', border: '1px solid #d9d9d9' }}
                          formatter={(value: number) => [`${value}M visitors`, 'Visitors']}
                        />
                        <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
                          {topDestinations.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] max-w-[1200px] w-full mt-[60px]">
                <div className="flex flex-col gap-[16px] p-[32px] border border-black">
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    700M+
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[16px] text-[#1e1e1e] leading-[1.4]">
                    International tourist arrivals to Europe annually
                  </p>
                </div>
                
                <div className="flex flex-col gap-[16px] p-[32px] border border-black">
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    51%
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[16px] text-[#1e1e1e] leading-[1.4]">
                    Share of global tourism arrivals
                  </p>
                </div>
                
                <div className="flex flex-col gap-[16px] p-[32px] border border-black">
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    €500B+
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[16px] text-[#1e1e1e] leading-[1.4]">
                    Annual tourism revenue across Europe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Country spotlights */}
        <section className="relative shrink-0 w-full bg-[#f5f5f5]">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[60px] items-center px-[20px] py-[100px] relative w-full max-w-[1200px]">
              <h2 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[48px] text-black text-center tracking-[-1.5px]">
                Country Spotlights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full">
                <Link 
                  to="/switzerland" 
                  className="bg-white p-[40px] border border-black hover:bg-[#f5f5f5] transition-colors group"
                >
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[32px] text-black tracking-[-1px] mb-[16px]">
                    Switzerland
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[18px] text-[#1e1e1e] leading-[1.4] mb-[24px]">
                    Discover the Alpine nation's tourism landscape, from mountain resorts to urban attractions.
                  </p>
                  <div className="flex items-center gap-[8px]">
                    <span className="font-['Geist_Mono',sans-serif] text-[14px] group-hover:underline">
                      View details
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>

                <div className="bg-white p-[40px] border border-black opacity-50">
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[32px] text-black tracking-[-1px] mb-[16px]">
                    More Coming Soon
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[18px] text-[#1e1e1e] leading-[1.4]">
                    Additional country profiles will be available soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}
