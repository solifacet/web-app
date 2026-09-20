import React from "react";
import { WaitlistForm } from "./components/waitlist-form";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121110] text-[#F3F0EA] flex flex-col justify-between selection:bg-[#C9A876] selection:text-[#121110]">
      {/* Header */}
      <header className="border-b border-[#2A2723] sticky top-0 z-30 bg-[#121110]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-lg tracking-[0.3em] font-medium uppercase text-[#F3F0EA] hover:text-[#C9A876] transition-colors"
            >
              SOLIFACET
            </a>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] tracking-wider uppercase font-medium rounded-[0.3rem] bg-[#2C5D5C]/20 text-[#68ABA9] border border-[#2C5D5C]/40">
              Verified Marketplace
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] text-[#B8B4AC]">
            <a href="#authentication" className="hover:text-[#F3F0EA] transition-colors">
              Authentication
            </a>
            <a href="#provenance" className="hover:text-[#F3F0EA] transition-colors">
              Provenance
            </a>
            <a href="#sellers" className="hover:text-[#F3F0EA] transition-colors">
              Founding Sellers
            </a>
            <a href="#waitlist" className="hover:text-[#C9A876] transition-colors">
              Access
            </a>
          </nav>

          <div>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-[0.3rem] bg-[#C9A876] text-[#121110] hover:bg-[#D8B988] transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A876] mb-6 font-medium">
            Curated Fine Jewelry &amp; Precious Stones
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F3F0EA] font-serif leading-[1.1] mb-8">
            Every facet, <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#C9A876]">verified.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#B8B4AC] leading-relaxed max-w-2xl mb-12 font-light">
            Solifacet is an editorial marketplace for high-jewelry collectors, independent
            ateliers, and master lapidaries. We unite authenticated fine jewelry and
            certified precious stones with escrow-protected custody and transparent provenance.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-[0.3rem] bg-[#C9A876] text-[#121110] hover:bg-[#D8B988] transition-colors text-center"
            >
              Request Founding Access
            </a>
            <a
              href="#authentication"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-[0.3rem] border border-[#2A2723] bg-[#171512] text-[#F3F0EA] hover:bg-[#242019] transition-colors text-center"
            >
              Our Trust Architecture
            </a>
          </div>
        </div>

        {/* Minimal Editorial Summary */}
        <div className="mt-24 pt-8 border-t border-[#2A2723] grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#B8B4AC] mb-1">
              Certification
            </span>
            <span className="text-sm font-medium text-[#F3F0EA]">
              GIA &amp; IGI Verified
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#B8B4AC] mb-1">
              Settlement
            </span>
            <span className="text-sm font-medium text-[#F3F0EA]">
              Escrow-Protected
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#B8B4AC] mb-1">
              Sellers
            </span>
            <span className="text-sm font-medium text-[#F3F0EA]">
              Vetted &amp; Screened
            </span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#B8B4AC] mb-1">
              Transit
            </span>
            <span className="text-sm font-medium text-[#F3F0EA]">
              Insured Courier
            </span>
          </div>
        </div>
      </section>

      {/* Trust Architecture Section */}
      <section id="authentication" className="py-20 border-t border-[#2A2723] bg-[#171512]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A876] block mb-3 font-medium">
              Trust By Design
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-[#F3F0EA] mb-4">
              Restoring certainty to fine stone acquisitions.
            </h2>
            <p className="text-sm sm:text-base text-[#B8B4AC] leading-relaxed">
              In a market challenged by undisclosed treatments, synthetic confusion, and
              opaque pricing, Solifacet mandates rigorous verification before any asset
              changes hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-8 rounded-[0.3rem] border border-[#2A2723] bg-[#171512] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C9A876] mb-4">01 / PROVENANCE</div>
                <h3 className="text-xl font-serif text-[#F3F0EA] mb-3">
                  Authenticated Listings
                </h3>
                <p className="text-sm text-[#B8B4AC] leading-relaxed">
                  Every listed gemstone and fine piece includes independently verifiable
                  laboratory reports, macroscopic imagery, and physical inspection notes.
                  No uncertified assertions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2A2723]/60 text-xs text-[#B8B4AC]">
                GIA, IGI, SSEF &amp; Gübelin documentation
              </div>
            </div>

            {/* Pillar 2 */}
            <div id="sellers" className="p-8 rounded-[0.3rem] border border-[#2A2723] bg-[#171512] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C9A876] mb-4">02 / INTEGRITY</div>
                <h3 className="text-xl font-serif text-[#F3F0EA] mb-3">
                  Verified Sellers
                </h3>
                <p className="text-sm text-[#B8B4AC] leading-relaxed">
                  Founding jewelers, dealers, and collectors undergo white-glove manual
                  verification by our team. We ensure established provenance, ethical
                  sourcing, and documented history.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2A2723]/60 text-xs text-[#B8B4AC]">
                Strict peer vetting &amp; seller accreditation
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-[0.3rem] border border-[#2A2723] bg-[#171512] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C9A876] mb-4">03 / SECURITY</div>
                <h3 className="text-xl font-serif text-[#F3F0EA] mb-3">
                  Escrow Settlement
                </h3>
                <p className="text-sm text-[#B8B4AC] leading-relaxed">
                  Client funds are placed in secure escrow custody. Capital is transferred
                  only when the buyer receives the shipment, completes personal or third-party
                  inspection, and approves the release.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2A2723]/60 text-xs text-[#B8B4AC]">
                Manual release checks &amp; audit trails
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Categories */}
      <section id="provenance" className="py-20 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A876] block mb-3 font-medium">
              Curated Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-[#F3F0EA]">
              Selected disciplines.
            </h2>
          </div>
          <p className="text-sm text-[#B8B4AC] max-w-md">
            Our catalog is strictly limited to verified categories that satisfy investment-grade
            and artisanal collector criteria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-[#2A2723] bg-[#171512] p-6 rounded-[0.3rem]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A876] block mb-2">
              Diamonds
            </span>
            <h3 className="text-lg font-serif text-[#F3F0EA] mb-2">
              Exceptional Natural Diamonds
            </h3>
            <p className="text-sm text-[#B8B4AC] leading-relaxed">
              Type IIa stones, verified antique cuts, and certified natural fancy colors
              with complete GIA dossiers.
            </p>
          </div>

          <div className="border border-[#2A2723] bg-[#171512] p-6 rounded-[0.3rem]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A876] block mb-2">
              Colored Stones
            </span>
            <h3 className="text-lg font-serif text-[#F3F0EA] mb-2">
              Precious Gemstones
            </h3>
            <p className="text-sm text-[#B8B4AC] leading-relaxed">
              Unheated Kashmir &amp; Ceylon sapphires, Colombian emeralds with minor treatment
              declarations, and Burmese rubies.
            </p>
          </div>

          <div className="border border-[#2A2723] bg-[#171512] p-6 rounded-[0.3rem]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A876] block mb-2">
              Fine Jewelry
            </span>
            <h3 className="text-lg font-serif text-[#F3F0EA] mb-2">
              Signed &amp; Estate Works
            </h3>
            <p className="text-sm text-[#B8B4AC] leading-relaxed">
              Authenticated vintage works from historic Maisons alongside one-of-one
              creations by premier independent jewelers.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Waitlist Section */}
      <section id="waitlist" className="py-20 border-t border-[#2A2723] bg-[#171512]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A876] block mb-3 font-medium">
            Founding Access
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif text-[#F3F0EA] mb-6">
            Join the founding cohort.
          </h2>
          <p className="text-base text-[#B8B4AC] max-w-xl mx-auto mb-10 leading-relaxed font-light">
            We are admitting founding collectors, jewelers, and gemstone dealers in private
            review waves. Register your interest for early catalog access and private viewing.
          </p>

          <WaitlistForm />

          <p className="text-[12px] text-[#B8B4AC]/70 mt-4">
            Direct communication only. No marketing spam, no automated notifications.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2723] py-12 px-6 bg-[#121110]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4">
            <span className="text-sm tracking-[0.3em] font-medium uppercase text-[#F3F0EA]">
              SOLIFACET
            </span>
            <span className="text-xs text-[#B8B4AC] font-light italic font-serif">
              Every facet, verified.
            </span>
          </div>

          <div className="text-xs text-[#B8B4AC] tracking-wider uppercase flex items-center space-x-6">
            <span>Escrow Settlement</span>
            <span>Independent Lab Reports</span>
            <span>Insured Transit</span>
          </div>

          <div className="text-xs text-[#B8B4AC]/60">
            &copy; {new Date().getFullYear()} Solifacet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
