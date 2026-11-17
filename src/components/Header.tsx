import React from 'react';
import { Menu, X } from 'lucide-react';

export type AppView = 'curriculum' | 'simulations' | 'html-ref' | 'exam-guide' | 'sandbox';

interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  mobileSidebarOpen: boolean;
  onToggleMobileSidebar: () => void;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'simulations', label: 'Simulations' },
  { id: 'html-ref', label: 'HTML5 Reference' },
  { id: 'exam-guide', label: 'Exam Guide' },
];

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  mobileSidebarOpen,
  onToggleMobileSidebar,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--bg-surface)]/95 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Quantum Brand Logo + Wordmark + Mobile Sidebar Toggle */}
        <div className="flex items-center gap-3 min-w-0">
          {activeView === 'curriculum' && (
            <button
              type="button"
              onClick={onToggleMobileSidebar}
              aria-label={mobileSidebarOpen ? 'Close syllabus sidebar' : 'Open syllabus sidebar'}
              className="lg:hidden p-2 rounded-lg border border-[var(--border-hairline)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] shrink-0 cursor-pointer transition-colors"
            >
              {mobileSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}

          <button
            type="button"
            onClick={() => onNavigate('curriculum')}
            className="flex items-center gap-3 text-left bg-transparent border-0 p-0 min-w-0 cursor-pointer group"
          >
            {/* Quantum University Logo Badge */}
            <div className="h-9 px-2 py-1 rounded-md bg-white/95 border border-[var(--border-hairline)] shadow-xs flex items-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <img
                src="/quantum-university-logo.png"
                alt="Quantum University"
                className="h-6 w-auto object-contain"
                loading="eager"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                  CS35302 Web Technology
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-[var(--bg-subtle)] text-[var(--accent-primary)] border border-[var(--border-hairline)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Studio
                </span>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] whitespace-nowrap hidden sm:block">
                Quantum University · B.Tech CSE Curriculum
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Primary Navigation (Single-line) */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 shrink-0">
          {NAV_ITEMS.map((item) => {
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'text-[var(--accent-primary)] bg-[var(--bg-subtle)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-canvas)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary CTA */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('sandbox')}
            className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'sandbox'
                ? 'bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md scale-105'
                : 'bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            Code Sandbox
          </button>
        </div>
      </div>

      {/* Mobile Nav Strip */}
      <nav
        aria-label="Mobile Navigation"
        className="flex md:hidden items-center gap-1 px-4 py-2 border-t border-[var(--border-hairline)] overflow-x-auto bg-[var(--bg-canvas)]"
      >
        {NAV_ITEMS.map((item) => {
          const active = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded whitespace-nowrap shrink-0 cursor-pointer ${
                active
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-surface)] font-semibold'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
