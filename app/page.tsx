import React from "react";
import { WaitlistForm } from "./components/waitlist-form";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-lg tracking-[0.3em] font-medium uppercase text-foreground hover:text-primary transition-colors"
            >
              SOLIFACET
            </a>
            <Badge variant="verified" className="hidden sm:inline-flex text-[11px] tracking-wider uppercase">
              Verified Marketplace
            </Badge>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <a href="#authentication" className="hover:text-foreground transition-colors">
              Authentication
            </a>
            <a href="#provenance" className="hover:text-foreground transition-colors">
              Provenance
            </a>
            <a href="#sellers" className="hover:text-foreground transition-colors">
              Founding Sellers
            </a>
            <a href="#waitlist" className="hover:text-primary transition-colors">
              Access
            </a>
          </nav>

          <div>
            <a
              href="#waitlist"
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "text-xs uppercase tracking-[0.15em] font-medium",
              })}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6 font-medium">
            Curated Fine Jewelry &amp; Precious Stones
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground font-serif leading-[1.1] mb-8">
            Every facet, <br className="hidden sm:inline" />
            <span className="italic font-serif text-primary">verified.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12 font-light">
            Solifacet is an editorial marketplace for high-jewelry collectors, independent
            ateliers, and master lapidaries. We unite authenticated fine jewelry and
            certified precious stones with escrow-protected custody and transparent provenance.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#waitlist"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "text-xs uppercase tracking-[0.2em] font-medium text-center",
              })}
            >
              Request Founding Access
            </a>
            <a
              href="#authentication"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-xs uppercase tracking-[0.2em] font-medium text-center",
              })}
            >
              Our Trust Architecture
            </a>
          </div>
        </div>

        {/* Editorial Metrics with Tooltips */}
        <div className="mt-24 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <Tooltip>
              <TooltipTrigger className="cursor-help text-left">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Certification
                </span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  GIA &amp; IGI Verified
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Independent gemological certification required on all qualifying stones.
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <Tooltip>
              <TooltipTrigger className="cursor-help text-left">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Settlement
                </span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Escrow-Protected
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Buyer capital is held safely until physical inspection and approval.
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <Tooltip>
              <TooltipTrigger className="cursor-help text-left">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Sellers
                </span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Vetted &amp; Screened
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Founding jewelers undergo white-glove manual provenance checks.
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <Tooltip>
              <TooltipTrigger className="cursor-help text-left">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Transit
                </span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Insured Courier
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Full replacement value transit insurance with signature verification.
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Trust Architecture Section */}
      <section id="authentication" className="py-20 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-primary block mb-3 font-medium">
              Trust By Design
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-foreground mb-4">
              Restoring certainty to fine stone acquisitions.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              In a market challenged by undisclosed treatments, synthetic confusion, and
              opaque pricing, Solifacet mandates rigorous verification before any asset
              changes hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="text-xs font-mono text-primary mb-2">01 / PROVENANCE</div>
                <CardTitle className="text-xl font-serif text-foreground">
                  Authenticated Listings
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Every listed gemstone and fine piece includes independently verifiable
                  laboratory reports, macroscopic imagery, and physical inspection notes.
                  No uncertified assertions.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                GIA, IGI, SSEF &amp; Gübelin documentation
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card id="sellers" className="flex flex-col justify-between">
              <CardHeader>
                <div className="text-xs font-mono text-primary mb-2">02 / INTEGRITY</div>
                <CardTitle className="text-xl font-serif text-foreground">
                  Verified Sellers
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Founding jewelers, dealers, and collectors undergo white-glove manual
                  verification by our team. We ensure established provenance, ethical
                  sourcing, and documented history.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                Strict peer vetting &amp; seller accreditation
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="text-xs font-mono text-primary mb-2">03 / SECURITY</div>
                <CardTitle className="text-xl font-serif text-foreground">
                  Escrow Settlement
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Client funds are placed in secure escrow custody. Capital is transferred
                  only when the buyer receives the shipment, completes personal or third-party
                  inspection, and approves the release.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                Manual release checks &amp; audit trails
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curation Categories */}
      <section id="provenance" className="py-20 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary block mb-3 font-medium">
              Curated Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-foreground">
              Selected disciplines.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Our catalog is strictly limited to verified categories that satisfy investment-grade
            and artisanal collector criteria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary block mb-1">
                Diamonds
              </span>
              <CardTitle className="text-lg font-serif text-foreground">
                Exceptional Natural Diamonds
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
                Type IIa stones, verified antique cuts, and certified natural fancy colors
                with complete GIA dossiers.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary block mb-1">
                Colored Stones
              </span>
              <CardTitle className="text-lg font-serif text-foreground">
                Precious Gemstones
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
                Unheated Kashmir &amp; Ceylon sapphires, Colombian emeralds with minor treatment
                declarations, and Burmese rubies.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary block mb-1">
                Fine Jewelry
              </span>
              <CardTitle className="text-lg font-serif text-foreground">
                Signed &amp; Estate Works
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
                Authenticated vintage works from historic Maisons alongside one-of-one
                creations by premier independent jewelers.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Founding Waitlist Section */}
      <section id="waitlist" className="py-20 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary block mb-3 font-medium">
            Founding Access
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif text-foreground mb-6">
            Join the founding cohort.
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light">
            We are admitting founding collectors, jewelers, and gemstone dealers in private
            review waves. Register your interest for early catalog access and private viewing.
          </p>

          <WaitlistForm />

          <p className="text-[12px] text-muted-foreground/70 mt-4">
            Direct communication only. No marketing spam, no automated notifications.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4">
            <span className="text-sm tracking-[0.3em] font-medium uppercase text-foreground">
              SOLIFACET
            </span>
            <span className="text-xs text-muted-foreground font-light italic font-serif">
              Every facet, verified.
            </span>
          </div>

          <div className="text-xs text-muted-foreground tracking-wider uppercase flex items-center space-x-6">
            <span>Escrow Settlement</span>
            <span>Independent Lab Reports</span>
            <span>Insured Transit</span>
          </div>

          <div className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Solifacet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
