import React from 'react';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';

export const Landing: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-10 py-4 bg-transparent transition-all duration-300">
        <div className="flex items-center gap-4 text-white">
          <div className="text-2xl">
            <span className="font-serif italic font-medium">Prompt</span> <span className="font-sans font-bold">Odyssey</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-foreground text-sm font-bold leading-normal tracking-[0.015em] border border-white/50 bg-white/10 hover:bg-white/20 transition-colors">
            <span className="truncate">Sign In</span>
          </Link>
          <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Start Free</span>
          </Link>
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative flex flex-col items-center h-screen min-h-[800px] overflow-hidden px-10 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#1E3A8A]"></div>
          <Particles />
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-4xl pt-[8vh] pb-[22vh]">
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight tracking-tighter">Turn every prompt experiment into a beautiful, shareable journey</h1>
            <h2 className="mt-6 max-w-3xl text-xl md:text-2xl font-serif text-gray-300">Stop losing your best iterations in chat history. Visualize, refine, and showcase your prompting skill.</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-primary text-primary-foreground text-xl font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_4px_rgba(113,176,207,0.4)] hover:scale-105 transition-transform">
                <span className="truncate">Start Free</span>
              </Link>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 border border-white/50 bg-white/10 text-white text-xl font-bold leading-normal tracking-[0.015em] backdrop-blur-sm hover:bg-white/20 transition-colors">
                <span className="truncate">Watch 45-sec Demo</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-[-15%] sm:bottom-[-20%] md:bottom-[-25%] lg:bottom-[-30%] left-0 right-0 z-20 flex justify-center items-end h-[50vh] w-full perspective-1000">
            <div className="relative w-full max-w-7xl h-full">
              <div className="absolute left-[5%] bottom-0 w-[28%] max-w-xs flex flex-col gap-4 rounded-xl bg-card/80 p-4 backdrop-blur-sm border border-border shadow-2xl transition-transform hover:-translate-y-4 hidden md:flex" style={{transform: 'rotateZ(-8deg)'}}>
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaN1ZzkcFuJs0ZmxDMHSw3g0Ivk93ssJpIHaZUrp_AC_bXNbDuKIYxYgaK4eymyV6W1ZMVgAojV2GSc-O3OnD11c6oER9QX8SXogf2J0uS6s9QMqbxeZtd_Ms7Lk70L4JiEkHSJWG3tm66OEqxX89QdsiuJs1G-nq_VRmryZ22wo9T1zkNRgpQ26jHnHjK7BR7pdf6X6888AZOmIzFaQhVDbpMWzNaeRZCH33-oGiOIUu52GoTSUevVi9Lc5pVinzjrlkoteocDxc")'}}></div>
                <div>
                  <p className="text-card-foreground text-lg font-serif font-medium leading-normal">Midjourney Fantasy Portraits</p>
                  <p className="text-muted-foreground text-sm font-serif leading-normal">8 waypoints</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[80%] md:w-[28%] max-w-xs flex flex-col gap-4 rounded-xl bg-card/80 p-4 backdrop-blur-sm border border-border shadow-2xl transition-transform hover:-translate-y-4 z-10">
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrgot5jmt8qekaSog2gQZ-O56_LWaEF88hLm6-SwQ4ny1lc5ockyCwmazEx_-sK5hGqxhp_BcK5ETg2WhCe-5hsYCGSqMGzioFkxQ3NwhjEqUZuQciibeSivNIjqkopG-T8EMruiMNsqCv0SM_QKsvEOezGKzCygq__zeo-FfKFF0JlH7v8wV0o_p4nFqCxi387eOGyEOD-rJ0t6wvQ5WNmYjShC_XmWXNi-FVHrvmxMRasdvIvSTiLHl4ecfZ5tvnERnHRVarJnY")'}}></div>
                <div>
                  <p className="text-card-foreground text-lg font-serif font-medium leading-normal">ChatGPT Story Arcs</p>
                  <p className="text-muted-foreground text-sm font-serif leading-normal">12 waypoints</p>
                </div>
              </div>
              <div className="absolute right-[5%] bottom-0 w-[28%] max-w-xs flex flex-col gap-4 rounded-xl bg-card/80 p-4 backdrop-blur-sm border border-border shadow-2xl transition-transform hover:-translate-y-4 hidden md:flex" style={{transform: 'rotateZ(6deg)'}}>
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex flex-col" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjQqUzNoYIRiyNgAGdoEBdfb0QI-j_1khCAVG9RR32RtX8EJzej4OzKseqzrlo1S0FOkF4omaZqDR-AgpOF8Ut_5Ct610ovzaJIJwS_OkZ62YOxcngja_0QjMxKhoymW4LLnuUbQTgIWyyU_FmIiFuYR8DRTzXKWwFpEnQel735NbuyUUAM2o3IJZsZTbDKMmRWUC7jugxDy2V7sHxKGFkWGV23yVbOukLCOlOXc6FXoJ59vEpDiJRwBlYrnU3CgE_0xuZiA7LjJo")'}}></div>
                <div>
                  <p className="text-card-foreground text-lg font-serif font-medium leading-normal">Claude 3 Code Refactors</p>
                  <p className="text-muted-foreground text-sm font-serif leading-normal">5 waypoints</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-card pt-32 pb-12">
          <div className="container mx-auto px-10 text-center">
            <p className="text-muted-foreground text-sm font-serif leading-normal pb-3 pt-1">Used by 12,000+ creators</p>
            <div className="flex items-center py-3 justify-center">
              <div className="flex -space-x-4">
               {/* Avatars would go here - simplified for brevity */}
               <div className="bg-center bg-no-repeat aspect-square bg-cover border-card rounded-full flex items-center justify-center size-11 border-4 bg-gray-500"></div>
               <div className="bg-center bg-no-repeat aspect-square bg-cover border-card rounded-full flex items-center justify-center size-11 border-4 bg-gray-600"></div>
               <div className="bg-center bg-no-repeat aspect-square bg-cover border-card rounded-full flex items-center justify-center size-11 border-4 bg-gray-700"></div>
               <div className="bg-center bg-no-repeat aspect-square bg-cover border-card rounded-full flex items-center justify-center size-11 border-4 bg-gray-800"></div>
               <div className="bg-center bg-no-repeat aspect-square bg-cover border-card rounded-full flex items-center justify-center size-11 border-4 bg-gray-900"></div>
              </div>
            </div>
            <blockquote className="mt-8 max-w-2xl mx-auto">
              <p className="text-lg text-foreground font-serif">"Prompt Odyssey finally gives my AI explorations a permanent, shareable home. It's an indispensable tool for any serious prompt engineer."</p>
              <footer className="mt-4 text-sm text-muted-foreground font-serif">- Lead AI Artist, FutureScape Studios</footer>
            </blockquote>
          </div>
        </section>
        <section className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center size-14 rounded-xl bg-accent text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">timeline</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground">Visual timeline + branching</h3>
                <p className="mt-2 text-muted-foreground font-serif">Never lose a creative spark. See your entire prompt history at a glance and explore alternative paths without losing your main thread.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center size-14 rounded-xl bg-accent text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">ios_share</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground">One-click beautiful exports</h3>
                <p className="mt-2 text-muted-foreground font-serif">Turn your complex journeys into stunning, professional case studies. Share your process on social media or in your portfolio with a single click.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center size-14 rounded-xl bg-accent text-primary mb-4">
                  <span className="material-symbols-outlined text-4xl">browse_gallery</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground">Public gallery + earn from templates</h3>
                <p className="mt-2 text-muted-foreground font-serif">Publish your best odysseys to our community gallery. Gain recognition and even earn by creating templates for others to use.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 lg:py-32 bg-primary">
          <div className="container mx-auto px-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-sans font-bold text-primary-foreground">Start documenting your prompt mastery today.</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80 font-serif">It's free to start. Turn your fleeting experiments into lasting assets.</p>
            <div className="mt-8 flex justify-center">
              <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary-foreground text-primary text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                <span className="truncate">Create Free Account</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
