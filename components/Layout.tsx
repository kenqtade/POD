import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CURRENT_USER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-border bg-background transition-transform duration-300 xl:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[70px] shrink-0 items-center border-b border-border px-6">
          <Link to="/" className="flex items-center gap-3 text-foreground">
            <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
            <h1 className="font-heading text-xl font-bold">Prompt Odyssey</h1>
          </Link>
        </div>
        
        <nav className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
          <div className="flex flex-col gap-6">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors relative ${
                    isActive('/dashboard') ? 'bg-accent text-foreground' : 'text-foreground/80 hover:bg-accent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">dashboard</span> 
                    Dashboard
                  </span> 
                  {isActive('/dashboard') && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-primary"></div>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/explore" 
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors relative ${
                    isActive('/explore') ? 'bg-accent text-foreground' : 'text-foreground/80 hover:bg-accent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">widgets</span> 
                    All Odysseys
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/templates" 
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors relative ${
                    isActive('/templates') ? 'bg-accent text-foreground' : 'text-foreground/80 hover:bg-accent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">grid_view</span> 
                    Templates
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors relative ${
                    isActive('/profile') ? 'bg-accent text-foreground' : 'text-foreground/80 hover:bg-accent'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">person</span> 
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
            
            <div>
              <h2 className="px-3 mb-2 text-sm font-semibold uppercase text-foreground/60 tracking-wider">Recent</h2>
              <ul className="space-y-1">
                <li>
                  <Link to="/editor/1" className="group flex items-center gap-3 rounded-lg p-2 text-foreground/80 hover:bg-accent transition-colors">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE")'}}></div>
                    <span className="text-sm line-clamp-1 flex-1">Cosmic Landing Page</span> 
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 transition-opacity">push_pin</span>
                  </Link>
                </li>
                <li>
                  <Link to="/editor/2" className="group flex items-center gap-3 rounded-lg p-2 text-foreground/80 hover:bg-accent transition-colors">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjQqUzNoYIRiyNgAGdoEBdfb0QI-j_1khCAVG9RR32RtX8EJzej4OzKseqzrlo1S0FOkF4omaZqDR-AgpOF8Ut_5Ct610ovzaJIJwS_OkZ62YOxcngja_0QjMxKhoymW4LLnuUbQTgIWyyU_FmIiFuYR8DRTzXKWwFpEnQel735NbuyUUAM2o3IJZsZTbDKMmRWUC7jugxDy2V7sHxKGFkWGV23yVbOukLCOlOXc6FXoJ59vEpDiJRwBlYrnU3CgE_0xuZiA7LjJo")'}}></div>
                    <span className="text-sm line-clamp-1 flex-1">API Documentation</span> 
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 transition-opacity">push_pin</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border p-3">
            <Link to="/profile" className="rounded-lg border border-border/70 bg-card/50 p-3 block hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url("${CURRENT_USER.avatar}")`}}></div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{CURRENT_USER.name}</p>
                  <p className="text-xs text-foreground/60">Pro Member</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md bg-accent/70 p-2 text-center"><p className="text-sm font-bold text-primary font-heading">7</p><p className="text-[10px] uppercase tracking-wider text-foreground/60">Streak</p></div>
                <div className="rounded-md bg-accent/70 p-2 text-center"><p className="text-sm font-bold text-primary font-heading">1.2k</p><p className="text-[10px] uppercase tracking-wider text-foreground/60">Pts</p></div>
                <div className="rounded-md bg-accent/70 p-2 text-center"><p className="text-sm font-bold text-primary font-heading">98.2</p><p className="text-[10px] uppercase tracking-wider text-foreground/60">Score</p></div>
              </div>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col transition-all duration-300 xl:pl-[280px] w-full">
        {/* Header */}
        <header className="fixed top-0 z-30 flex h-[70px] items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-sm w-full xl:w-[calc(100%-280px)]">
          <div className="flex items-center gap-4 xl:hidden">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/70 hover:bg-accent transition-colors"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60">search</span>
              <input className="form-input h-11 w-full rounded-lg border-none bg-accent pl-11 pr-4 text-foreground placeholder:text-foreground/60 focus:ring-2 focus:ring-primary/50" placeholder="Search all odysseys..."/>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border px-1.5 py-0.5 text-xs font-mono text-foreground/50">Cmd+K</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative group">
              <Link to="/editor/new" className="flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm font-bold leading-normal tracking-wide text-background transition-colors hover:bg-primary/90">
                <span className="material-symbols-outlined">add</span>
                <span className="hidden truncate sm:block">New Odyssey</span>
              </Link>
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-teal-400 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-75 animate-gradientRing pointer-events-none" style={{backgroundSize: '200% 200%', filter: 'blur(5px)'}}></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto mt-[70px] bg-background">
          {children}
        </main>
      </div>

       {/* Overlay for mobile sidebar */}
       {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 xl:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};
