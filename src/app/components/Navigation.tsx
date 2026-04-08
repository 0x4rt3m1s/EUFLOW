import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="-translate-x-1/2 absolute backdrop-blur-[32px] bg-white content-stretch flex h-[60px] items-start justify-between left-1/2 p-[25px] text-black top-0 w-full max-w-[1280px] whitespace-nowrap z-50" data-name="Navigation">
      <Link to="/" className="font-['Radio_Canada_Big',sans-serif] font-bold leading-none relative shrink-0 text-[28px] tracking-[-1.4px] hover:opacity-70 transition-opacity">
        EUFlow
      </Link>
      <div className="content-stretch flex font-['Radio_Canada_Big',sans-serif] font-medium gap-[20px] items-center leading-[1.2] relative shrink-0 text-[16px]">
        <Link 
          to="/" 
          className={`relative shrink-0 hover:opacity-70 transition-opacity ${location.pathname === '/' ? 'underline' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/europe" 
          className={`relative shrink-0 hover:opacity-70 transition-opacity ${location.pathname === '/europe' ? 'underline' : ''}`}
        >
          Europe
        </Link>
        <Link 
          to="/switzerland" 
          className={`relative shrink-0 hover:opacity-70 transition-opacity ${location.pathname === '/switzerland' ? 'underline' : ''}`}
        >
          Switzerland
        </Link>
      </div>
    </nav>
  );
}
