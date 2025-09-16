import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SplashScreen component
 * This component renders the splash screen UI derived from the Figma extraction.
 * It uses Tailwind CSS utility classes for styling:
 * - Full-bleed background image
 * - Status bar time
 * - Headings: "Get\nCooking" and caption
 * - Middle brand logo with title "100K+ Premium Recipe"
 * - Primary CTA button "Start Cooking" with arrow icon
 * - Bottom iOS-like home indicator
 */
function SplashScreen() {
  // Local assets from the extracted static HTML/CSS notes
  // If these images are not available in public, we fallback to a neutral gradient.
  const bgImage = 'assets/figma_image_18_217.png'; // from assets/splash-screen-9-385.css reference
  const logoImage = 'assets/figma_image_10_200.png';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${bgImage})`,
        }}
        role="img"
        aria-label="Background image of food and cooking"
      />
      {/* Overlay fallback if image not found (subtle dark gradient for legibility) */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Status bar (time centered) */}
      <div className="absolute top-0 left-0 w-full h-11 flex items-center justify-center text-white">
        <span className="text-[15px] font-medium tracking-[-0.01em] drop-shadow-[0_0_1px_rgba(0,0,0,0.35)]">
          19:27
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full px-6 pt-11 pb-9 flex flex-col justify-between">
        {/* Top text group */}
        <section className="flex flex-col items-center gap-5" aria-label="Intro">
          <h1
            className="text-white text-center font-semibold leading-[1.2] whitespace-pre-line"
            style={{ fontSize: 'clamp(32px, 8vw, 50px)', lineHeight: 'clamp(40px, 9.6vw, 60px)' }}
          >
            {'Get\nCooking'}
          </h1>
          <p className="text-white/90 text-center text-[16px] leading-6 max-w-[275px]">
            Simple way to find Tasty Recipe
          </p>
        </section>

        {/* Middle brand block */}
        <section className="flex flex-col items-center gap-3 mt-4" aria-label="Brand highlight">
          <div
            className="w-[79px] h-[79px] rounded-[12px] bg-center bg-cover"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/${logoImage})`,
            }}
            role="img"
            aria-label="App brand logo"
          />
          <div className="text-white text-center font-semibold text-[18px] leading-[27px] max-w-[209px]">
            100K+ Premium Recipe
          </div>
        </section>

        {/* CTA */}
        <section className="flex items-center justify-center">
          <button
            className="inline-flex items-center justify-center gap-3 h-[54px] w-[243px] rounded-[10px] bg-primary text-white text-[16px] font-semibold leading-6 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent active:brightness-95 transition"
            type="button"
            aria-label="Start Cooking"
            onClick={() => {
              // Placeholder interaction: could navigate to onboarding/home later
              // eslint-disable-next-line no-console
              console.log('Start Cooking clicked');
            }}
          >
            <span>Start Cooking</span>
            {/* Arrow icon using borders to mimic chevron */}
            <i
              aria-hidden="true"
              className="relative inline-block w-5 h-5"
            >
              <span className="absolute left-1 right-1 top-1/2 h-[2px] -translate-y-1/2 bg-white" />
              <span className="absolute right-1 top-1/2 w-2 h-2 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-white" />
            </i>
          </button>
        </section>
      </div>

      {/* Home indicator */}
      <div className="absolute left-0 right-0 bottom-2 h-[34px] flex items-center justify-center" aria-hidden="true">
        <div className="w-[135px] h-[5px] bg-white rounded-[100px]" />
      </div>
    </div>
  );
}

export default SplashScreen;
