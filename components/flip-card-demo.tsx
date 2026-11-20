"use client";

import * as React from "react";
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  ArrowRight
} from "lucide-react";

const contactItems = [
  {
    id: "phone",
    label: "TELEPHONE",
    value: "+91 9836716634",
    cta: "CALL NOW",
    href: "tel:+919836716634",
    icon: Phone,
  },
  {
    id: "email",
    label: "ELECTRONIC MAIL",
    value: "sayankundu094@gmail.com",
    cta: "SEND EMAIL",
    href: "mailto:sayankundu094@gmail.com",
    icon: Mail,
  },
  {
    id: "location",
    label: "LOCATION",
    value: "Kolkata, West Bengal",
    subValue: "TIMEZONE: IST (UTC+5:30)",
    cta: "REMOTE / HYBRID",
    href: "#",
    icon: MapPin,
  },
  {
    id: "github",
    label: "GITHUB",
    value: "@drex-sayan",
    cta: "VIEW REPOS",
    href: "https://github.com/drex-sayan",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "/in/sayan-kundu-drex",
    cta: "CONNECT",
    href: "https://www.linkedin.com/in/sayan-kundu-drex/",
    icon: Linkedin,
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    value: "@drex_sayan",
    cta: "VISIT PROFILE",
    href: "https://www.instagram.com/drex_sayan/",
    icon: Instagram,
  },
];

export function FlipCardDemo() {
  const row1 = contactItems.slice(0, 3);
  const row2 = contactItems.slice(3, 6);

  return (
    <div className="w-full py-12 px-6 flex flex-col items-center gap-6">
      {/* Centered container with space on left and right */}
      <div className="w-full max-w-[820px] flex flex-col items-center gap-6">
        {/* Row 1: 3 Cards with 3:4 Aspect Ratio */}
        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          {row1.map((item) => {
            const Icon = item.icon;
            return (
              <FlipCard
                key={item.id}
                className="w-[220px] aspect-[3/4] cursor-pointer rounded-[24px]"
              >
                {/* FRONT FACE: Ultra-clean 3:4 portrait (Icon + Channel Title ONLY) */}
                <FlipCardFront className="rounded-[24px] border border-white/10 bg-[#0d0d10] p-6 flex flex-col items-center justify-center gap-5 shadow-xl hover:border-emerald-400/50 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase text-center">
                    {item.label}
                  </h3>
                </FlipCardFront>

                {/* BACK FACE: Hover Reveal (Details & CTA Button) */}
                <FlipCardBack className="rounded-[24px] border border-emerald-500/40 bg-[#08080a] p-6 flex flex-col justify-between items-center shadow-2xl">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                    {item.label}
                  </span>

                  <div className="flex flex-col items-center justify-center gap-1 my-auto text-center px-1">
                    <span className="text-xs font-mono font-bold text-white break-all">
                      {item.value}
                    </span>
                    {item.subValue && (
                      <span className="text-[9px] font-mono text-zinc-400">
                        {item.subValue}
                      </span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full rounded-full font-mono text-[10px] tracking-wider uppercase bg-white/10 border-white/20 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all"
                    asChild
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      <span>{item.cta}</span>
                      {item.href.startsWith("http") ? (
                        <ExternalLink className="w-3 h-3 ml-1" />
                      ) : (
                        <ArrowRight className="w-3 h-3 ml-1" />
                      )}
                    </a>
                  </Button>
                </FlipCardBack>
              </FlipCard>
            );
          })}
        </div>

        {/* Row 2: 3 Cards with 3:4 Aspect Ratio */}
        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          {row2.map((item) => {
            const Icon = item.icon;
            return (
              <FlipCard
                key={item.id}
                className="w-[220px] aspect-[3/4] cursor-pointer rounded-[24px]"
              >
                {/* FRONT FACE: Ultra-clean 3:4 portrait (Icon + Channel Title ONLY) */}
                <FlipCardFront className="rounded-[24px] border border-white/10 bg-[#0d0d10] p-6 flex flex-col items-center justify-center gap-5 shadow-xl hover:border-emerald-400/50 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase text-center">
                    {item.label}
                  </h3>
                </FlipCardFront>

                {/* BACK FACE: Hover Reveal (Details & CTA Button) */}
                <FlipCardBack className="rounded-[24px] border border-emerald-500/40 bg-[#08080a] p-6 flex flex-col justify-between items-center shadow-2xl">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                    {item.label}
                  </span>

                  <div className="flex flex-col items-center justify-center gap-1 my-auto text-center px-1">
                    <span className="text-xs font-mono font-bold text-white break-all">
                      {item.value}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full rounded-full font-mono text-[10px] tracking-wider uppercase bg-white/10 border-white/20 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all"
                    asChild
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      <span>{item.cta}</span>
                      {item.href.startsWith("http") ? (
                        <ExternalLink className="w-3 h-3 ml-1" />
                      ) : (
                        <ArrowRight className="w-3 h-3 ml-1" />
                      )}
                    </a>
                  </Button>
                </FlipCardBack>
              </FlipCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
