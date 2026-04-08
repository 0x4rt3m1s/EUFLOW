import { Link } from "react-router";
import { Navigation } from "../components/Navigation";

export default function HomePage() {
  return (
    <div className="bg-white relative min-h-screen">
      <div className="content-stretch flex flex-col items-center relative w-full">
        {/* Hero section */}
        <div className="content-stretch flex flex-col min-h-screen items-start relative shrink-0 w-full">
          <div className="absolute h-full left-0 top-0 w-full">
            <div className="absolute bg-gradient-to-b from-white to-[#f5f5f5] inset-0" />
            <Navigation />
          </div>
          <header className="relative shrink-0 w-full flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative w-full h-full">
                <div className="content-stretch flex flex-col items-center max-w-[1200px] relative shrink-0 w-full gap-[48px]">
                  <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                    <h1 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-[0.95] relative shrink-0 text-[120px] text-black text-center tracking-[-6px] w-full">
                      EUFlow
                    </h1>
                    <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[28px] text-black text-center tracking-[-0.8px] max-w-[800px]">
                      Understanding European tourism through data and visualization
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col md:flex-row gap-[20px] items-center mt-[20px]">
                    <Link 
                      to="/europe"
                      className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[20px] relative shrink-0 hover:bg-[#2d2d2d] transition-colors min-w-[200px]"
                    >
                      <div className="bg-white shrink-0 size-[4px]" />
                      <p className="font-['Geist_Mono',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        Explore Europe
                      </p>
                    </Link>

                    <Link 
                      to="/switzerland"
                      className="bg-white border-2 border-black content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[20px] relative shrink-0 hover:bg-[#f5f5f5] transition-colors min-w-[200px]"
                    >
                      <div className="bg-black shrink-0 size-[4px]" />
                      <p className="font-['Geist_Mono',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-black whitespace-nowrap">
                        View Switzerland
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Features section */}
        <section className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-t border-black border-solid inset-x-0 top-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[80px] items-center px-[20px] py-[120px] relative w-full max-w-[1200px]">
              <h2 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[56px] text-black text-center tracking-[-2px]">
                What We Analyze
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] w-full">
                <div className="flex flex-col gap-[20px] p-[40px] border border-black">
                  <div className="text-[48px] leading-none">📍</div>
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    Destinations
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[18px] text-[#1e1e1e] leading-[1.4]">
                    Popular cities and regions that attract millions of visitors each year
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] p-[40px] border border-black">
                  <div className="text-[48px] leading-none">🌍</div>
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    Geographic Trends
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[18px] text-[#1e1e1e] leading-[1.4]">
                    How distance and proximity influence travel patterns across Europe
                  </p>
                </div>
                
                <div className="flex flex-col gap-[20px] p-[40px] border border-black">
                  <div className="text-[48px] leading-none">💰</div>
                  <h3 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[28px] text-black tracking-[-1px]">
                    Economic Impact
                  </h3>
                  <p className="font-['Source_Serif_Pro',sans-serif] text-[18px] text-[#1e1e1e] leading-[1.4]">
                    The relationship between wealth and tourism flows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="relative shrink-0 w-full bg-[#1e1e1e] text-white">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] py-[120px] relative w-full max-w-[900px]">
              <h2 className="font-['Radio_Canada_Big',sans-serif] font-medium text-[48px] text-center tracking-[-1.5px]">
                Data-Driven Tourism Insights
              </h2>
              <p className="font-['Source_Serif_Pro',sans-serif] text-[22px] text-center leading-[1.5] opacity-90">
                EUFlow transforms complex tourism data into clear, visual stories. We help you understand where people travel, why they choose certain destinations, and how economic factors shape tourism patterns across Europe.
              </p>
              <div className="flex gap-[40px] mt-[40px] flex-wrap justify-center">
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="font-['Radio_Canada_Big',sans-serif] font-medium text-[40px] tracking-[-1.5px]">50+</div>
                  <div className="font-['Source_Serif_Pro',sans-serif] text-[16px] opacity-80">Countries Analyzed</div>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="font-['Radio_Canada_Big',sans-serif] font-medium text-[40px] tracking-[-1.5px]">1B+</div>
                  <div className="font-['Source_Serif_Pro',sans-serif] text-[16px] opacity-80">Tourist Movements</div>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                  <div className="font-['Radio_Canada_Big',sans-serif] font-medium text-[40px] tracking-[-1.5px]">15+</div>
                  <div className="font-['Source_Serif_Pro',sans-serif] text-[16px] opacity-80">Data Sources</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
