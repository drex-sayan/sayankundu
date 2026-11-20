"use client";

import { TiltedCard } from "@/components/ui/tilted-card";

export default function TiltedCardDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a] text-white">
      <TiltedCard
        imageSrc="/profile_square.jpg"
        altText="Sayan Kundu - CSE Undergraduate"
        captionText="SAYAN KUNDU // 2024-2028"
        containerHeight="440px"
        containerWidth="360px"
        imageHeight="320px"
        imageWidth="320px"
        rotateAmplitude={12}
        scaleOnHover={1.08}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <p className="text-white text-xs font-mono tracking-widest uppercase">
              B.P. PODDAR // CSE
            </p>
          </div>
        }
      />
    </div>
  );
}
