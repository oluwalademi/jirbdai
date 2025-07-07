"use client";

import { useEffect, useState } from "react";

export default function ZoomWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [zoomm, setZoomm] = useState<number | null>(null); // null to avoid SSR mismatch

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = document.documentElement.clientWidth;
      const newZoom = screenWidth < 520 ? screenWidth / 520 : 1;
      setZoomm(newZoom);
    };

    handleResize(); // Initial zoom calculation

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (zoomm === null) {
    // Avoid rendering until zoom is known to prevent mismatch
    return null;
  }

  return (
    <div
      style={{
        zoom: zoomm,
        width: "100%",
      }}
      className={"flex w-full"}
    >
      {children}
    </div>
  );
}
