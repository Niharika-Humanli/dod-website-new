"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const industryLinks = [
  { href: "/industries/ecommerce", label: "E-Commerce" },
  { href: "/industries/fmcg", label: "FMCG" },
  { href: "/industries/logistics", label: "Logistics/ Supply Chain" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/power", label: "Power/Energy" },
  { href: "/industries/iot", label: "IOT(Industry 4.0)" },
  { href: "/industries/ev", label: "EV" },
  { href: "/industries/fintech", label: "Fintech" },
];

const resourceLinks = [
  { href: "/gtm-guides", label: "GTM Guides" },
  { href: "/gtm-metrics", label: "GTM Metrics Library" },
  { href: "/blog", label: "Blog" },
  { href: "/docs", label: "Documentation" },
];

const navTriggerClass =
  "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(true);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySrc, setOverlaySrc] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<"industries" | "resources" | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Dialog
      open={overlayOpen}
      onOpenChange={(open) => {
        setOverlayOpen(open);
        if (!open) setOverlaySrc(null);
      }}
    >
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/dodlogo.png"
              alt="Data On Demand"
              width={32}
              height={32}
              className="h-8 w-8 object-contain rounded"
            />
            <span className="text-xl font-bold text-foreground">Data On Demand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/product" className={navTriggerClass}>
              Product
            </Link>

            <Link
              href="/solutions"
              className={`${navTriggerClass} ${isActive("/solutions") ? "text-primary" : ""}`}
            >
              Solutions
            </Link>

            <DropdownMenu
              open={openMenu === "industries"}
              onOpenChange={(open) => setOpenMenu(open ? "industries" : null)}
            >
              <DropdownMenuTrigger
                className={`${navTriggerClass} group gap-1 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`}
              >
                Industries
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8} className="w-56 p-2">
                {industryLinks.map((item) => (
                  <DropdownMenuItem asChild key={item.href} className="p-0">
                    <Link
                      href={item.href}
                      className="block w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={openMenu === "resources"}
              onOpenChange={(open) => setOpenMenu(open ? "resources" : null)}
            >
              <DropdownMenuTrigger
                className={`${navTriggerClass} group gap-1 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`}
              >
                Resources
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8} className="w-56 p-2">
                {resourceLinks.map((item) => (
                  <DropdownMenuItem asChild key={item.href} className="p-0">
                    <Link
                      href={item.href}
                      className="block w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className={`${navTriggerClass} ${isActive("/about") ? "text-primary" : ""}`}
            >
              About Us
            </Link>

            <div className="flex items-center space-x-4 ml-6">
              <Button variant="outline" asChild>
                <Link href="/contact">Talk to us</Link>
              </Button>
              <Button asChild>
                <a href="https://dod.humanli.ai/login">Login</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="container py-4 space-y-4">
              <button
                className="block w-full text-left py-2 text-sm font-medium"
                onClick={() => {
                  setIsOpen(false);
                  setOverlaySrc("/product");
                  setOverlayOpen(true);
                }}
              >
                Product
              </button>

              <button
                className="block w-full text-left py-2 text-sm font-medium"
                onClick={() => {
                  setIsOpen(false);
                  setOverlaySrc("https://data-on-demand-8v9m4mj.gamma.site");
                  setOverlayOpen(true);
                }}
              >
                Solutions
              </button>

              <div>
                <div className="w-full flex items-center justify-between">
                  <span className="flex-1 text-left py-2 text-sm font-medium">Industries</span>
                  <button
                    className="py-2 px-2"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    aria-expanded={mobileIndustriesOpen}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        mobileIndustriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileIndustriesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {industryLinks.map((item) => (
                      <DialogTrigger asChild key={item.href}>
                        <button
                          className="block w-full text-left py-2 text-sm font-medium"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileIndustriesOpen(false);
                            setOverlaySrc(item.href);
                            setOverlayOpen(true);
                          }}
                        >
                          {item.label}
                        </button>
                      </DialogTrigger>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="w-full flex items-center justify-between">
                  <span className="flex-1 text-left py-2 text-sm font-medium">Resources</span>
                  <button
                    className="py-2 px-2"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    aria-expanded={mobileResourcesOpen}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileResourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm font-medium"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileResourcesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>

              <div className="pt-4">
                <div className="border-t border-muted" />
              </div>

              <div className="space-y-2 pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Talk to us
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <a href="https://dod.humanli.ai/login">Get started free</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {overlaySrc && (
        <DialogContent className="fixed inset-0 !left-0 !top-0 !translate-x-0 !translate-y-0 m-0 !w-screen !h-screen !max-w-none !rounded-none p-0 bg-black/80 z-[9999]">
          <div
            className="w-full h-full"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
              paddingLeft: "env(safe-area-inset-left)",
              paddingRight: "env(safe-area-inset-right)",
            }}
          >
            <iframe
              src={overlaySrc}
              className="w-full h-full"
              style={{ border: "none" }}
              title="Embedded Website"
              allowFullScreen
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};