import React from 'react';
import { CURRENT_USER, MOCK_ODYSSEYS } from '../constants';
import { Layout } from '../components/Layout';

export const Profile: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-2xl mx-auto p-6 lg:p-10 space-y-10 pb-20">
        <section className="flex flex-col items-center text-center gap-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-secondary shadow-xl" style={{backgroundImage: `url("${CURRENT_USER.avatar}")`}}></div>
          <div>
            <h1 className="font-heading text-4xl font-bold">{CURRENT_USER.name}</h1>
            <p className="text-foreground/70 text-lg font-body italic mt-1">{CURRENT_USER.handle}</p>
          </div>
        </section>
        <div className="border-b border-border">
          <nav aria-label="Tabs" className="-mb-px flex justify-center space-x-8 overflow-x-auto">
            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm font-heading border-primary text-primary" href="#">
              Overview
            </a>
            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm font-heading border-transparent text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors" href="#">
              Your Odysseys
            </a>
            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm font-heading border-transparent text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors" href="#">
              Published
            </a>
            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm font-heading border-transparent text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors" href="#">
              Activity
            </a>
            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm font-heading border-transparent text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors" href="#">
              Settings
            </a>
          </nav>
        </div>
        <section id="overview-tab">
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start justify-between shadow-lg hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">flare</span>
                    <h3 className="text-lg font-heading font-bold">Odysseys Created</h3>
                  </div>
                  <p className="text-4xl font-heading font-bold mt-4">128</p>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Total projects started</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start justify-between shadow-lg hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">public</span>
                    <h3 className="text-lg font-heading font-bold">Published Works</h3>
                  </div>
                  <p className="text-4xl font-heading font-bold mt-4">24</p>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Shared with the community</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start justify-between shadow-lg hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                    <h3 className="text-lg font-heading font-bold">Likes Received</h3>
                  </div>
                  <p className="text-4xl font-heading font-bold mt-4">1,834</p>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Across all published work</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start justify-between shadow-lg hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">group</span>
                    <h3 className="text-lg font-heading font-bold">Followers</h3>
                  </div>
                  <p className="text-4xl font-heading font-bold mt-4">432</p>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Following your journey</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Pinned Odysseys</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_ODYSSEYS.slice(0,2).map(odyssey => (
                  <div key={odyssey.id} className="bg-card border border-border rounded-lg shadow-lg flex flex-col sm:flex-row items-center gap-6 p-6 group">
                    <div className="w-full sm:w-1/3 aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: `url('${odyssey.thumbnail}')`}}></div>
                    <div className="flex-1 space-y-3 text-center sm:text-left">
                      <h3 className="text-xl font-heading font-bold">{odyssey.title}</h3>
                      <p className="font-body text-foreground/80 text-sm line-clamp-2">A spiraling journey through nebulae and star clusters, exploring the vastness of generative space art.</p>
                      <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-foreground/70">
                        <span>Updated {odyssey.updatedAt}</span>
                        <span>·</span>
                        <span>{odyssey.waypoints} steps</span>
                      </div>
                      <div className="pt-2 flex gap-2 justify-center sm:justify-start">
                        <button className="bg-secondary hover:bg-accent text-foreground text-sm font-heading font-bold py-2 px-4 rounded-lg transition-colors">View</button>
                        <button className="bg-primary text-background text-sm font-heading font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
