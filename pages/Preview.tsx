import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Preview: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const waypoints = [
    { id: 1, title: 'Genesis', x: 15, y: 30, desc: "Initial concept exploration.", img: null },
    { id: 2, title: 'Sky Citadel', x: 35, y: 50, desc: "Refining the floating structures.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJ_2fB-yyQrY63Tf2bf63iLhC13MHP13OgRNQ1m_YI-h9olKCDjbUNTu66qMsKbAuMtscIDyoE9ZwyTgq9Ave9LNPcdnqqAn5Uw23yotqGGfwOYHPtz3YVGb1IjZ3A54oXx5dGVenuTrHPMZXg2pqYhwXyYm7dPC_E7NJv4oWGRxaiuucEJzgpmMmPRbE8a32L6ZfExNpT-CVW3j6BZQRcHn2m7JlxlNkygUj5gxHDx9wBL3_DSOWdaz50pDCpAp253H3Az66N58" },
    { id: 3, title: 'Crystal Caverns', x: 55, y: 40, desc: "Adding underground elements.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJ_2fB-yyQrY63Tf2bf63iLhC13MHP13OgRNQ1m_YI-h9olKCDjbUNTu66qMsKbAuMtscIDyoE9ZwyTgq9Ave9LNPcdnqqAn5Uw23yotqGGfwOYHPtz3YVGb1IjZ3A54oXx5dGVenuTrHPMZXg2pqYhwXyYm7dPC_E7NJv4oWGRxaiuucEJzgpmMmPRbE8a32L6ZfExNpT-CVW3j6BZQRcHn2m7JlxlNkygUj5gxHDx9wBL3_DSOWdaz50pDCpAp253H3Az66N58" },
    { id: 4, title: 'Final Scene', x: 75, y: 60, desc: "Polishing lighting and details.", img: null },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background text-foreground font-body">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA26xCB3k3rbT0UjVQp9asAghUwY13rvwaXwjpYfJhjePk0URstAx9nPtK-mOdDTAmal76BzfGcAo5w8zMkT2KZndaRNYSzIBWrrPHKGDmvqnSR53O2Ojo8NrGyIA-e_vJ2JBVyvuKSaSnRGsuFSJWoa1GanajbINqe4jLEB1-RgvBw3YK6Nj5JwAmD0BaA21ObSNaX2W5yY65kCd6wiwJtbtI8t0O9EhmgKHdyuxQT0DEhnetoAEvRhd-ryp69Gxvch86ArAE6JU")'}}>
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      <header className="absolute top-0 left-0 right-0 z-20 flex h-16 items-center justify-between bg-black/30 p-4 backdrop-blur-sm transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <Link to="/editor/1" className="flex h-10 w-10 items-center justify-center rounded-full bg-card/50 text-foreground hover:bg-card/80 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h1 className="font-heading text-xl font-bold text-foreground">Cosmic Nexus Query</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-background backdrop-blur-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-xl">ios_share</span>
            <span>Share</span>
          </button>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card/50 text-foreground hover:bg-card/80 transition-colors">
            <span className="material-symbols-outlined text-xl">info</span>
          </button>
        </div>
      </header>

      <main className="relative flex-1">
        {waypoints.map((wp) => (
          <div 
            key={wp.id} 
            className="absolute" 
            style={{left: `${wp.x}%`, top: `${wp.y}%`}}
            onClick={() => setActiveNode(wp.id)}
          >
            <div className="group relative cursor-pointer">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 whitespace-nowrap">
                {wp.title}
              </div>
              <div className={`h-8 w-8 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_5px_rgba(113,176,207,0.2)] transition-transform ${activeNode === wp.id ? 'scale-125 bg-primary' : ''}`}></div>
            </div>
          </div>
        ))}
        
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" style={{stopColor: 'var(--primary)', stopOpacity: 0.1}}></stop>
              <stop offset="50%" style={{stopColor: 'var(--primary)', stopOpacity: 0.8}}></stop>
              <stop offset="100%" style={{stopColor: 'var(--primary)', stopOpacity: 0.1}}></stop>
            </linearGradient>
          </defs>
          <path d="M 288 340 Q 480 436, 672 496" fill="none" stroke="url(#ribbonGradient)" strokeLinecap="round" strokeWidth="3"></path>
          <path d="M 688 512 Q 864 452, 1056 448" fill="none" stroke="url(#ribbonGradient)" strokeLinecap="round" strokeWidth="3"></path>
          <path d="M 1072 464 Q 1248 524, 1440 640" fill="none" stroke="url(#ribbonGradient)" strokeLinecap="round" strokeWidth="3"></path>
        </svg>

        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2">
          <div className="flex flex-col">
            <button className="flex h-10 w-10 items-center justify-center rounded-t bg-card/80 text-foreground shadow-lg backdrop-blur-sm hover:bg-card/95">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-b bg-card/80 text-foreground shadow-lg backdrop-blur-sm hover:bg-card/95">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded bg-card/80 text-foreground shadow-lg backdrop-blur-sm hover:bg-card/95">
            <span className="material-symbols-outlined">center_focus_strong</span>
          </button>
        </div>
      </main>

      <aside className={`absolute top-0 bottom-0 right-0 z-10 flex w-[380px] flex-shrink-0 flex-col gap-6 overflow-y-auto border-l border-border bg-background/80 p-6 pt-20 backdrop-blur-lg transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-bold text-foreground">Author</h3>
          <div className="flex items-center gap-3">
            <img alt="Author's avatar" className="h-12 w-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EE54gsKnx04i7b-E4xz3VhHUjQhcEOk7VudWxaTiLjvrWzA36OHgFgTsQvf-Sy_oTWcxccJmI3xFd-qzwBQ6H3mfIA0_Yw6JoVCmReO7AAKcSx_6H9EFLyyWA6-3V7AqSo_VgSJZJ2Zy9yRAxLscEMr3drJUyfBevurwVPSMh81YBJLqD3CyIelF3TgmojSNT2Pzs6dHuPz-eu6KHa1OtnL4iQkcxpY4zDvZ847wPJljbrXwRXhTZyIkeu5YPsbrJ5HN-YdFj8E"/>
            <div>
              <p className="font-bold text-foreground">Aelia Vance</p>
              <p className="text-sm text-foreground/70">@aelia_v</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-bold text-foreground">Description</h3>
          <p className="text-sm text-foreground/80">An exploration of celestial forms and cosmic phenomena, rendered through a series of iterative prompts to achieve a balance between scientific accuracy and artistic imagination.</p>
        </div>
        <div className="space-y-3 rounded border border-border bg-card/50 p-4">
          <h3 className="font-heading text-lg font-bold text-foreground">Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-foreground/70">Created</span>
              <span className="font-medium text-foreground">Oct 26, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Last Updated</span>
              <span className="font-medium text-foreground">Nov 03, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Waypoints</span>
              <span className="font-medium text-foreground">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Total Iterations</span>
              <span className="font-medium text-foreground">53</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-foreground">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-accent px-3 py-1 text-xs text-foreground">#spaceart</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs text-foreground">#nebula</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs text-foreground">#generative</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs text-foreground">#scifi</span>
          </div>
        </div>
      </aside>

      <div className={`absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-4xl transition-transform duration-300 ease-in-out ${activeNode ? 'translate-y-0' : 'translate-y-full'}`} id="bottom-sheet">
        <div className="m-4 rounded-lg border border-border bg-card/80 p-6 pb-4 shadow-2xl backdrop-blur-lg">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1 space-y-4">
              <h2 className="font-heading text-2xl font-bold text-primary">Waypoint 0{activeNode}: {waypoints.find(w => w.id === activeNode)?.title}</h2>
              <div className="prose prose-invert max-h-[40vh] overflow-y-auto pr-2 text-foreground/90">
                <p className="font-serif italic text-lg">"A vast, glowing cavern filled with giant, luminous crystals that pulse with a soft, inner light. The cavern walls are encrusted with smaller, glittering geodes. A serene, underground river flows through the center, its water clear and reflecting the crystal light. Cinematic lighting, hyper-realistic, ultra-detailed, fantasy art style."</p>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <img alt="AI generated image" className="h-48 w-48 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAJ_2fB-yyQrY63Tf2bf63iLhC13MHP13OgRNQ1m_YI-h9olKCDjbUNTu66qMsKbAuMtscIDyoE9ZwyTgq9Ave9LNPcdnqqAn5Uw23yotqGGfwOYHPtz3YVGb1IjZ3A54oXx5dGVenuTrHPMZXg2pqYhwXyYm7dPC_E7NJv4oWGRxaiuucEJzgpmMmPRbE8a32L6ZfExNpT-CVW3j6BZQRcHn2m7JlxlNkygUj5gxHDx9wBL3_DSOWdaz50pDCpAp253H3Az66N58"/>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={() => setActiveNode(null)} className="flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 hover:bg-accent hover:text-foreground">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
