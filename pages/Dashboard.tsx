import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ODYSSEYS } from '../constants';
import { Layout } from '../components/Layout';

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 min-h-full">
        <div className="col-span-12 xl:col-span-9 2xl:col-span-10 pb-20">
          <section className="relative h-[450px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
            <div className="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
              <div className="max-w-2xl">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30">FEATURED ODYSSEY</span>
                <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">Cosmic Landing Page</h1>
                <p className="mt-2 text-lg text-foreground/80 line-clamp-2">Exploring vibrant and compelling copy for a new space-tech startup's digital forefront.</p>
                <div className="mt-6 flex items-center gap-4">
                  <Link to="/editor/1" className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-background transition-colors hover:bg-primary/90">Continue Odyssey</Link>
                  <div className="flex -space-x-2">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-background" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE")'}}></div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-background" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE")'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-6 lg:p-8">
            <div className="masonry-grid">
              {MOCK_ODYSSEYS.slice(1).map((odyssey) => (
                <Link to={`/editor/${odyssey.id}`} key={odyssey.id} className="masonry-item group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 block">
                  <div className="relative">
                    <div className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url('${odyssey.thumbnail}')`}}></div>
                    <div className="absolute top-2 right-2 flex items-center gap-2"><span className="flex items-center gap-1 rounded-full bg-card/60 px-2 py-0.5 text-xs backdrop-blur-sm"><span className="material-symbols-outlined text-[14px]">graphic_eq</span> {odyssey.progress}%</span></div>
                  </div>
                  <div className="flex flex-col p-4">
                    <h3 className="font-body text-lg italic text-foreground">{odyssey.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70 line-clamp-2">{odyssey.description}</p>
                    <div className="mt-3 text-xs text-foreground/60">{odyssey.waypoints}/{odyssey.totalWaypoints} Waypoints</div>
                  </div>
                </Link>
              ))}
              
              <div className="masonry-item group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex flex-col p-4">
                  <h3 className="font-body text-base italic text-foreground">Blog Post Ideas</h3>
                  <p className="mt-1 text-xs text-foreground/70">In Progress</p>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/80 backdrop-blur-sm hover:bg-accent"><span className="material-symbols-outlined text-base">more_horiz</span></button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="hidden xl:block col-span-3 2xl:col-span-2 border-l border-border h-[calc(100vh-70px)] sticky top-[70px] overflow-y-auto p-6">
          <h2 className="text-lg font-heading font-bold mb-4">Activity Feed</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center"><div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center ring-4 ring-background"><span className="material-symbols-outlined text-base text-background">publish</span></div><div className="flex-grow w-px bg-border/50"></div></div>
              <div><p className="text-sm"><span className="font-semibold">You</span> published <span className="font-semibold text-primary">Cosmic Creations v2.1</span></p><time className="text-xs text-foreground/50">3 hours ago</time></div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center"><div className="rounded-full bg-accent h-8 w-8 flex items-center justify-center ring-4 ring-background"><span className="material-symbols-outlined text-base">emoji_events</span></div><div className="flex-grow w-px bg-border/50"></div></div>
              <div><p className="text-sm"><span className="font-semibold">API Docs</span> reached a <span className="font-semibold text-primary">95% score</span></p><time className="text-xs text-foreground/50">8 hours ago</time></div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center"><div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 ring-4 ring-background" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAosjHB_TDHsXYaPfoFVhvDbMKhgaPeRz_waz-B-qYil0phCkS_DBDixKvELU3edkZcCKbnnqiBFD9-XYaaV9r1siUeU5RLGvL0GLp-EsEWPViZJXxjE3tqIUKfj-XOLUwh8G6pg3fyhE_4HI6YcMa6e_vBtk7uBBL0QMbZgzwp3PWoTxSj2NT0ZQCVSPQPv0lavFnwcVD4EO3nr4Vn8CE3-W_O0HhzF7HQ7-49FymLQ6IChZa6IlaWAt0fQmcM5TrX3gcFByS86CE")'}}></div><div className="flex-grow w-px bg-border/50"></div></div>
              <div><p className="text-sm"><span className="font-semibold">Sarah</span> joined <span className="font-semibold text-primary">Project Phoenix</span></p><time className="text-xs text-foreground/50">1 day ago</time></div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center"><div className="rounded-full bg-accent h-8 w-8 flex items-center justify-center ring-4 ring-background"><span className="material-symbols-outlined text-base">add_circle</span></div><div className="flex-grow w-px bg-border/50"></div></div>
              <div><p className="text-sm"><span className="font-semibold">You</span> started a new odyssey <span className="font-semibold text-primary">Project Phoenix</span></p><time className="text-xs text-foreground/50">2 days ago</time></div>
            </div>
          </div>
        </aside>
      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <div className="group relative flex items-center">
          <div className="absolute right-0 bottom-full mb-3 hidden w-max group-hover:block"><div className="rounded-lg border border-border bg-card/90 p-2 text-center text-sm text-foreground/80 shadow-lg backdrop-blur-md">Quick Actions</div></div>
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background shadow-lg transition-transform hover:scale-110"><span className="material-symbols-outlined text-3xl">add</span></button>
        </div>
      </div>
    </Layout>
  );
};
