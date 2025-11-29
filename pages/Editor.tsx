import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Editor: React.FC = () => {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState<string | null>('v2');
  const [nodes] = useState([
    { id: 'v1', title: 'v1 Basic', desc: '"A basic fantasy portrait..."', x: 10, y: 40, type: 'default', image: null },
    { id: 'v2', title: 'v2 +details', desc: '"An elven sorceress with..."', x: 35, y: 40, type: 'selected', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeZZONGhLxeCCWEoD7mPSVz9UVaWK63FQ2xnDqOa_-urxBCLBgtHuU3pEQJOUSawy6cWhOIt_lKkvWHAoFJaTjQbrk2Wah2Vz7vKJc3fCoFAIbuPEds9BeC-vu-1UpH7BeLRpaqruDdV8SOcU_B_VOIzLuc8ERJCmX5bXT_J0yMUuEvZvAdRCFdytlqHEzjAcgxV7qXo8xQqr9iUZiQhdt35Yvs7zQ3AeF8agkoqKH-WEf2JjAkMqke_hZT3M9ELCBq91V3yqPQos' },
    { id: 'v3', title: 'v3 Style change', desc: '"Change the style to oil painting..."', x: 60, y: 15, type: 'default', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6-UPBZzAMCxsfaiNZ04O7T6hXSbUfuRJR8rYKRNkyuX-GwwAwwdQn1ttgi6Vx3Q_rdSK8LmMabC6NIcTSRDPSHySe-CeTfBzD3UNwumNEvwCxnbfZJAdQsm_p_-oENe9-uk3LQXA6_SxH3jPq8VvYcODR9wdGjtCx9fhHPOWVNhi_zpmBp8z7eviKcYD9k9ee9RrkxhHNmVMaFIuhDOQPfr0LbRlXvOllpp5Nn5C-GFEVGyBFM_9ZivFcGZYMKF3SXqcrF-Bai44' },
    { id: 'v4', title: 'v4 Final Touches', desc: '"Add glowing runes to her staff..."', x: 60, y: 65, type: 'default', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBqgprTqo1iMW4EDJyWTVjZ0RQ1YFPsWeNnnf4VLchYnEOeoGfOj09oOGI3LTitbnqEoyfWXPtZfZUEvybnmjogVfHu0k1qUX4-pV5DYiXnX5lVpiWkAp7v5uFB6Nr1xD3b2J4R80lHcsevyEULwNBGBD_CALwjv9xuMgC3GEVnFcJvtfmhYcuKKabsHLT6UbDtmHhwSHvdN99Hg0WmjDtcD_lAQ1-_W31R69Ko_GI-pYIxEHw9B_2lcbpaeiPL4yQT4uMRHRum40' }
  ]);

  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground overflow-hidden font-body">
      <header className="fixed top-0 z-40 flex h-14 w-full flex-shrink-0 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="flex items-center gap-2 rounded-md py-1.5 px-3 text-sm text-foreground/70 hover:bg-accent hover:text-foreground transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-grow items-center justify-center gap-4">
          <h1 className="font-heading text-lg font-bold">Fantasy Portraits v12</h1>
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-foreground/80">Draft</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-9 items-center justify-center gap-1.5 rounded-md bg-secondary px-4 text-sm font-medium text-foreground hover:bg-accent transition-colors">
            <span className="material-symbols-outlined text-base">save</span>
            <span>Save</span>
          </button>
          <button 
            onClick={() => navigate('/share/1')}
            className="flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-4 text-sm font-bold text-background hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            <span>Preview</span>
          </button>
        </div>
      </header>

      <div className="flex h-full w-full pt-14">
        {/* Sidebar List */}
        <aside className="hidden lg:flex w-[360px] flex-shrink-0 flex-col border-r border-border bg-background/20">
          <div className="flex h-12 flex-shrink-0 items-center justify-between border-b border-border px-4">
            <h2 className="font-heading text-base font-bold">Waypoints</h2>
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/70 hover:bg-accent hover:text-foreground">
              <span className="material-symbols-outlined text-xl">unfold_less</span>
            </button>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto p-2">
            {nodes.map(node => (
              <div 
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`group flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors ${
                  selectedNode === node.id 
                  ? 'border-primary bg-accent/70 ring-1 ring-primary/50' 
                  : 'border-transparent hover:bg-accent/50'
                }`}
              >
                <span className={`material-symbols-outlined mt-1 text-lg ${selectedNode === node.id ? 'text-primary' : 'text-foreground/60'}`}>
                  {selectedNode === node.id ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
                <div className="flex-1">
                  <p className={`font-medium ${selectedNode === node.id ? 'text-primary' : ''}`}>{node.title}</p>
                  <p className="text-sm text-foreground/60">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="relative flex flex-1 flex-col overflow-hidden">
          <div className="relative flex-1 overflow-hidden" style={{backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
            <div className="absolute inset-0">
              {/* Branch Ribbons */}
              <div className="absolute" style={{left: '26%', top: '48%'}}>
                <div className="absolute bg-[rgba(53,72,78,0.5)] border border-border px-3 py-1 rounded-full text-xs text-foreground backdrop-blur-sm whitespace-nowrap">Initial Branch</div>
              </div>
              <div className="absolute" style={{left: '52%', top: '32%', transform: 'rotate(-35deg)'}}>
                <div className="absolute bg-[rgba(53,72,78,0.5)] border border-border px-3 py-1 rounded-full text-xs text-foreground backdrop-blur-sm whitespace-nowrap">Aesthetic Refinement</div>
              </div>
              <div className="absolute" style={{left: '52%', top: '64%', transform: 'rotate(35deg)'}}>
                <div className="absolute bg-[rgba(53,72,78,0.5)] border border-border px-3 py-1 rounded-full text-xs text-foreground backdrop-blur-sm whitespace-nowrap">Detail Enhancement</div>
              </div>

              {/* Nodes */}
              {nodes.map(node => (
                <div 
                  key={node.id}
                  className="absolute transition-all duration-300"
                  style={{left: `${node.x}%`, top: `${node.y}%`}}
                  onClick={() => setSelectedNode(node.id)}
                >
                  <div className={`relative h-40 w-56 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
                    selectedNode === node.id 
                    ? 'border-primary shadow-[0_0_15px_5px_rgba(113,176,207,0.4)] z-20' 
                    : 'border-border bg-card shadow-md z-10'
                  } ${!node.image ? 'bg-card p-3' : 'p-1'}`}>
                    
                    {node.image ? (
                      <>
                        <img alt={`${node.title} preview`} className="h-full w-full rounded-md object-cover" src={node.image}/>
                        <div className="absolute bottom-2 left-2 right-2 rounded-md bg-black/50 p-2 text-xs backdrop-blur-sm">
                          <p className="font-bold text-white">{node.title}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-bold">{node.title.replace(/v\d+ /, '')}</p>
                        <p className="mt-1 text-xs text-foreground/60">Initial prompt to begin the journey.</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-card p-1 shadow-lg">
            <button className="flex h-8 w-24 items-center justify-center gap-1 rounded-md text-foreground/70 hover:bg-accent transition-colors">
              <span className="material-symbols-outlined text-lg">timeline</span>
              <span className="text-sm">Timeline</span>
            </button>
            <button className="flex h-8 w-24 items-center justify-center gap-1 rounded-md bg-primary text-background transition-colors">
              <span className="material-symbols-outlined text-lg">share_location</span>
              <span className="text-sm">Constellation</span>
            </button>
          </div>

          {/* Bottom Panel */}
          {selectedNode && (
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[40vh] transform-none transition-transform duration-500">
              <div className="flex h-full flex-col rounded-t-xl border-t border-border bg-card/80 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <div className="flex h-12 flex-shrink-0 items-center justify-between border-b border-border px-4">
                  <h3 className="font-heading text-base font-bold text-primary">Selected Waypoint: {nodes.find(n => n.id === selectedNode)?.title}</h3>
                  <button onClick={() => setSelectedNode(null)} className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/70 hover:bg-accent transition-colors">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto p-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80" htmlFor="prompt">Prompt</label>
                    <textarea 
                      className="form-textarea h-full w-full resize-none rounded-lg border-border bg-accent p-3 font-mono text-sm text-foreground/90 focus:border-primary focus:ring-primary" 
                      id="prompt" 
                      defaultValue="An elven sorceress with silver hair and glowing blue eyes, wearing intricate robes, holding a crystal staff. Detailed, fantasy, oil painting, high resolution."
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80" htmlFor="notes">Notes</label>
                    <div className="h-full w-full rounded-lg border border-border bg-accent p-3 text-sm text-foreground/90 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary" contentEditable>
                      <p>Added more specific details about the character's appearance and the desired art style. This version produced much better results for the eyes and robes.</p>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 flex-shrink-0 items-center justify-end gap-2 border-t border-border px-4">
                  <button className="flex h-8 items-center justify-center gap-1.5 rounded-md bg-secondary px-3 text-sm font-medium hover:bg-accent transition-colors">
                    <span className="material-symbols-outlined text-base">difference</span>
                    <span>Diff</span>
                  </button>
                  <button className="flex h-8 items-center justify-center gap-1.5 rounded-md bg-secondary px-3 text-sm font-medium hover:bg-accent transition-colors">
                    <span className="material-symbols-outlined text-base">content_copy</span>
                    <span>Copy Prompt</span>
                  </button>
                  <button className="flex h-8 items-center justify-center gap-1.5 rounded-md bg-secondary px-3 text-sm font-medium text-red-400/80 hover:bg-red-900/40 hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined text-base">delete</span>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
