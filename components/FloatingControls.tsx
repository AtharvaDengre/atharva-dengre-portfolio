'use client';

export default function FloatingControls() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#160c1a]/90 border border-border-glass-light text-text-main flex items-center justify-center cursor-pointer backdrop-blur-xl transition-all hover:border-accent-red hover:text-accent-red hover:-translate-y-1 shadow-2xl"
        title="Scroll to Top"
        aria-label="Scroll to top of page"
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
    </div>
  );
}
