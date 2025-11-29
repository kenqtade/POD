import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-br from-[#1e2b30] to-[#385660] group/design-root text-foreground font-body">
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-transparent">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">auto_awesome</span>
            <span className="font-heading text-2xl font-bold italic text-foreground">Prompt Odyssey</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login" className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-bold leading-normal text-foreground transition-colors hover:bg-white/10">
              <span className="truncate">Log In</span>
            </Link>
            <Link to="/login" className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal text-background transition-colors hover:bg-primary/90">
              <span className="truncate">Sign Up</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="layout-container flex h-full grow flex-col pt-[72px]">
        <div className="flex flex-1 items-center justify-center p-6 md:p-8">
          <main className="layout-content-container flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="font-heading text-5xl font-bold italic text-foreground">Prompt Odyssey</h1>
              <p className="font-heading text-2xl font-bold text-foreground">Chart Your AI Prompt Journeys</p>
              <p className="max-w-xl text-base text-foreground/80">Create, visualize, and share your AI prompt iterations seamlessly. Discover the full potential of your creative process.</p>
            </div>
            <div className="flex w-full max-w-4xl flex-col items-start gap-8 md:flex-row md:gap-6">
              <div className="w-full flex-1 rounded-xl bg-card p-6 md:p-8 shadow-xl">
                <form className="flex flex-col gap-6" onSubmit={handleLogin}>
                  <h2 className="text-center font-heading text-2xl font-bold text-foreground">Log In to Your Account</h2>
                  <label className="flex flex-col">
                    <p className="pb-2 text-base font-medium leading-normal text-foreground">Email Address</p>
                    <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border bg-accent p-3 text-base font-normal leading-normal text-foreground placeholder-foreground/50 focus:border-primary focus:outline-0 focus:ring-0" placeholder="you@example.com" type="email" />
                  </label>
                  <label className="flex flex-col">
                    <p className="pb-2 text-base font-medium leading-normal text-foreground">Password</p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                      <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg rounded-r-none border border-r-0 border-border bg-accent p-3 pr-2 text-base font-normal leading-normal text-foreground placeholder-foreground/50 focus:border-primary focus:outline-0 focus:ring-0" placeholder="Enter your password" type="password" />
                      <div className="flex items-center justify-center rounded-l-none rounded-r-lg border border-l-0 border-border bg-accent pr-4 text-foreground/70">
                        <span className="material-symbols-outlined text-2xl">visibility</span>
                      </div>
                    </div>
                  </label>
                  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input className="form-checkbox h-4 w-4 rounded border-border bg-accent text-primary focus:ring-primary focus:ring-offset-background" type="checkbox"/>
                      <span className="text-sm text-foreground">Remember Me</span>
                    </label>
                    <a className="text-sm text-foreground hover:text-primary hover:underline" href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal text-background transition-colors hover:bg-primary/90">
                    <span className="truncate">Log In</span>
                  </button>
                  <p className="text-center text-sm text-foreground">
                    Don't have an account? <a class="font-bold text-primary hover:underline" href="#">Sign Up</a>
                  </p>
                </form>
              </div>
              <div className="flex w-full flex-col items-center justify-center rounded-xl bg-card p-6 text-center md:w-2/5 md:p-8 shadow-xl">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <span className="material-symbols-outlined text-4xl text-primary">star</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Begin Your Journey</h3>
                  <p className="text-sm text-foreground/80">Explore the app's features and see what's possible, no account needed.</p>
                  <button onClick={() => navigate('/dashboard')} className="mt-4 flex h-12 min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-border bg-accent px-5 text-base font-bold leading-normal text-foreground transition-colors hover:bg-border">
                    <span className="truncate">Explore as Guest</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="flex items-center justify-center p-6 text-center text-foreground">
          <div className="flex gap-6 text-sm">
            <a className="hover:text-primary hover:underline" href="#">Privacy Policy</a>
            <a className="hover:text-primary hover:underline" href="#">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
