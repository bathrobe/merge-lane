/**
 * TitleLayout - Title screen composition
 * Centered Frame with corner rivets, cream Viewport for content
 */

import type { ReactNode } from "react";
import { Frame, Viewport, HardwareBar } from "../components/ui";

interface TitleLayoutProps {
  topHardwareBar?: ReactNode;
  bottomHardwareBar?: ReactNode;
  children: ReactNode; // Viewport content
}

export function TitleLayout({
  topHardwareBar,
  bottomHardwareBar,
  children,
}: TitleLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#1a2f2f]">
      <Frame>
        {topHardwareBar && (
          <HardwareBar
            centerSlot={topHardwareBar}
          />
        )}
        <Viewport>
          <div className="p-8">
            {children}
          </div>
        </Viewport>
        {bottomHardwareBar && (
          <HardwareBar
            centerSlot={bottomHardwareBar}
          />
        )}
      </Frame>
    </div>
  );
}
