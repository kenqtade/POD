import React from 'react';
import { MOCK_TEMPLATES } from '../constants';
import { Layout } from '../components/Layout';

export const Templates: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-screen-2xl mx-auto p-6 lg:p-10 space-y-10 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-heading font-bold">Templates</h1>
          <p className="text-foreground/70 font-body">Kickstart your odyssey with community-proven structures.</p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_TEMPLATES.concat(MOCK_TEMPLATES).map((template, index) => (
              <div key={`tpl-${index}`} className="relative flex flex-col gap-4 group cursor-pointer">
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg" style={{backgroundImage: `url('${template.thumbnail}')`}}></div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                  <button className="bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-background font-heading font-bold py-3 px-6 rounded-lg text-lg shadow-lg scale-95 group-hover:scale-100 transition-transform duration-300">Use Template</button>
                </div>
                <div className="mt-2">
                  <p className="text-foreground text-xl font-normal leading-normal italic font-body">{template.title}</p>
                  <p className="text-foreground/70 text-sm font-normal leading-normal font-body">by {template.author.handle}</p>
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
