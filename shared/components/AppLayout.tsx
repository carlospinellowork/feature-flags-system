"use client";

import { useFeatureFlags } from "@/features/feature-flags/hooks/useFeatureFlags";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppLayout({ children }: Props) {
  const { isEnabled } = useFeatureFlags();
  const isDark = isEnabled("dark_mode");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark ? "#111" : "#fafafa",
        color: isDark ? "#fff" : "#111",
        transition: "all 0.2s ease",
        padding: 24,
      }}
    >
      {children}
    </div>
  );
}
