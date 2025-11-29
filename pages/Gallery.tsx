import React from 'react';
import { MOCK_TEMPLATES } from '../constants';
import { Layout } from '../components/Layout';

export const Gallery: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-2xl mx-auto p-6 lg:p-10 space-y-10 pb-20">
        <section className="space-y-4">
          <h3 className="font-heading text-2xl font-bold">Featured this week</h3>
          <div className="relative">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 -mx-10 px-10">
              {MOCK_TEMPLATES.map((template) => (
                <div key={template.id} className="w-full max-w-sm shrink-0 snap-center">
                  <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-4 shadow-md h-full">
                    <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
                      <div className="w-full h-full bg-center bg-cover transition-transform duration-500 hover:scale-105" style={{backgroundImage: `url('${template.thumbnail}')`}}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-foreground">
                        <h4 className="font-heading font-bold text-lg truncate">{template.title}</h4>
                        <p className="text-sm text-foreground/80 font-body truncate">An abstract nebula of swirling colors.</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-cover bg-center" style={{backgroundImage: `url('${template.author.avatar}')`}}></div>
                        <span className="text-sm font-body">{template.author.handle}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground/70">
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">visibility</span>{template.views > 1000 ? (template.views/1000).toFixed(1) + 'k' : template.views}</span>
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">favorite</span>{template.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="border-b border-border mb-6">
            <div className="flex items-center gap-6 overflow-x-auto">
              <button className="py-3 px-1 border-b-2 border-primary text-primary font-heading font-bold whitespace-nowrap">Community</button>
              <button className="py-3 px-1 border-b-2 border-transparent text-foreground/70 hover:text-foreground font-heading font-bold whitespace-nowrap">Your Remixes</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {MOCK_TEMPLATES.concat(MOCK_TEMPLATES).map((template, index) => (
              <div key={`${template.id}-${index}`} className="flex flex-col gap-4 group cursor-pointer">
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg" style={{backgroundImage: `url('${template.thumbnail}')`}}></div>
                <div>
                  <p className="text-foreground text-lg font-normal leading-normal italic font-body">{template.title}</p>
                  <p className="text-foreground/70 text-sm font-normal leading-normal font-body">by {template.author.handle}</p>
                  <div className="flex items-center gap-4 text-foreground/70 text-sm mt-1 font-body">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">visibility</span>{template.views}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">favorite</span>{template.likes}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">shuffle</span>{template.forks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center py-10 md:col-span-2">
            <div className="flex items-center justify-center gap-2 text-foreground/80">
              <svg className="animate-spin h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
              </svg>
              <span>Loading more...</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
