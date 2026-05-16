"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { campusServices } from "@/lib/services";
import { ServiceDevDialog } from "@/components/service-dev-dialog";
import { cn } from "@/lib/utils";

const CARD_BASE =
  "relative flex aspect-[5/3] w-full flex-col justify-between overflow-hidden rounded-2xl border p-3.5 text-left shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98] active:duration-200";

function ServiceLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit max-w-full rounded-full border border-white/80 bg-white/85 px-2.5 py-1 text-[10px] font-semibold leading-none tracking-wide text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      {children}
    </span>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [devDialogOpen, setDevDialogOpen] = useState(false);

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return campusServices;
    return campusServices.filter(
      (service) =>
        service.title.toLowerCase().includes(q) ||
        service.subtitle?.toLowerCase().includes(q) ||
        service.badge?.toLowerCase().includes(q),
    );
  }, [query]);

  const openDevDialog = () => setDevDialogOpen(true);

  return (
    <div className="flex h-dvh flex-col bg-[#FAFAFC]">
      <div className="mx-auto flex h-full w-full max-w-lg flex-col">
        {/* Fixed: top bar → divider → search */}
        <div className="z-20 shrink-0 border-b border-slate-200/40 bg-[#FAFAFC]/95 px-5 pt-5 pb-4 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAFAFC]/90 sm:px-6">
          <header>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold tracking-wide text-slate-800">
                Jamia Hamdard
              </p>
              <button
                type="button"
                aria-label="HamdardAI Assistant"
                onClick={openDevDialog}
                className="flex h-9 w-9 items-center justify-center rounded-[14px] bg-[#5D53D6] shadow-md shadow-indigo-200/50 transition-all duration-200 hover:bg-[#4c44b5] active:scale-95"
              >
                <Sparkles
                  className="h-[18px] w-[18px] text-white"
                  strokeWidth={2.25}
                />
              </button>
            </div>
            <div
              role="presentation"
              className="mt-4 border-b border-slate-200/50"
            />
          </header>

          <div className="relative mt-5">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400/90"
              strokeWidth={2.25}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services"
              className="h-11 w-full rounded-full border border-slate-200/80 bg-slate-100/80 pl-10 pr-4 text-[15px] text-slate-800 shadow-[inset_0_1px_2px_rgba(15,23,42,0.05)] outline-none transition-all duration-200 placeholder:text-[13px] placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-200/80 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
            />
          </div>
        </div>

        {/* Scrollable: section title + grid */}
        <main className="flex-1 overflow-y-auto overscroll-contain px-5 pb-12 sm:px-6">
          <h1 className="mb-4 mt-5 text-lg font-bold tracking-tight text-slate-800">
            Hamdard services
          </h1>

          {filteredServices.length === 0 ? (
            <p className="py-12 text-center text-sm font-medium text-slate-400">
              No services match your search.
            </p>
          ) : (
            <ul className="grid grid-cols-2 gap-3.5">
              {filteredServices.map((service) => (
                <li key={service.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={openDevDialog}
                    className={cn(CARD_BASE, service.cardClass)}
                  >
                    <span className="text-[15px] font-semibold leading-tight text-slate-900">
                      {service.title}
                    </span>

                    <div className="flex flex-col items-start gap-2">
                      {service.badge && (
                        <ServiceLabel>{service.badge}</ServiceLabel>
                      )}
                      {service.subtitle && (
                        <ServiceLabel>{service.subtitle}</ServiceLabel>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>

      <ServiceDevDialog open={devDialogOpen} onOpenChange={setDevDialogOpen} />
    </div>
  );
}
