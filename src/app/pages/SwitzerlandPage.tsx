import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { DestinationChart } from "../components/charts/DestinationChart";
import { ProximityChart } from "../components/charts/ProximityChart";
import { EconomicChart } from "../components/charts/EconomicChart";

export default function SwitzerlandPage() {
  return (
    <div className="bg-white relative min-h-screen" data-name="Desktop/Switzerland">
      <div className="content-stretch flex flex-col items-center relative w-full">
        {/* Intro + Features section */}
        <div className="content-stretch flex flex-col h-[500px] items-start relative shrink-0 w-full" data-name="Intro + Features section">
          <div className="absolute h-[600px] left-0 top-0 w-full">
            <div className="absolute bg-white inset-[0_0_16.67%_0]" data-name="Gradient background" />
            <Navigation />
          </div>
          <header className="relative shrink-0 w-full" data-name="Intro section">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[140px] pt-[190px] px-[20px] relative w-full">
                <div className="content-stretch flex flex-col items-center max-w-[1030px] relative shrink-0 w-full" data-name="Intro content">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Header text">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header">
                      <h1 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[100px] text-black text-center tracking-[-5px] w-full">
                        Tourism in Switzerland
                      </h1>
                    </div>
                    <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.8px] w-full">
                      A closer look at tourism patterns and what drives visitors to Switzerland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Section 1: Destination Popularity */}
        <main className="relative shrink-0 w-full" data-name="1: Destination Popularity">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[100px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[612px]">
                <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#b3b3b3] text-[24px] text-center tracking-[-0.72px] w-[min-content]">
                  1
                </h2>
                <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[40px]" />
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-center w-full">
                  <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-full">
                    Destination within Switzerland
                  </h2>
                  <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] tracking-[-0.8px] w-full">
                    Where do tourists go in Switzerland?
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-center max-w-[1500px] relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Feature list">
                  <div className="h-[500px] shrink-0 w-full max-w-[858px]">
                    <DestinationChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Section 2: Geographic Proximity */}
        <main className="relative shrink-0 w-full" data-name="2: Geographic Proximity">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[100px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[612px]">
                <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#b3b3b3] text-[24px] text-center tracking-[-0.72px] w-[min-content]">
                  2
                </h2>
                <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[40px]" />
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-center w-full">
                  <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-full">
                    Geographic Proximity
                  </h2>
                  <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] tracking-[-0.8px] w-full">
                    Does distance matter?
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-center max-w-[1500px] relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Feature list">
                  <div className="h-[500px] shrink-0 w-full max-w-[858px]">
                    <ProximityChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Section 3: Economic Factors */}
        <main className="relative shrink-0 w-full" data-name="3: Economic Factors">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[100px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[612px]">
                <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#b3b3b3] text-[24px] text-center tracking-[-0.72px] w-[min-content]">
                  3
                </h2>
                <div className="bg-[#d9d9d9] h-[2px] shrink-0 w-[40px]" />
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-center w-full">
                  <h2 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-full">
                    Economic Factors
                  </h2>
                  <p className="font-['Source_Serif_Pro',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] tracking-[-0.8px] w-full">
                    Does wealth influence travel?
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-center max-w-[1500px] relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Feature list">
                  <div className="h-[500px] shrink-0 w-full max-w-[858px]">
                    <EconomicChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Call to action */}
        <aside className="bg-white relative shrink-0 w-full" data-name="Call to action">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] py-[120px] relative w-full">
              <h4 className="block font-['Radio_Canada_Big',sans-serif] font-medium leading-none max-w-[1500px] min-w-full relative shrink-0 text-[40px] text-black text-center tracking-[-1.2px] w-[min-content]">
                Explore broader tourism patterns in Europe
              </h4>
              <Link 
                to="/europe"
                className="bg-black content-stretch flex gap-[10px] items-center justify-center p-[16px] relative shrink-0 hover:bg-[#2d2d2d] transition-colors" 
                data-name="Button primary"
              >
                <div className="bg-white shrink-0 size-[4px]" data-name="Bullet" />
                <p className="font-['Geist_Mono',sans-serif] font-medium leading-none relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  Explore Europe
                </p>
              </Link>
            </div>
          </div>
        </aside>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}
