"use client";
import { ReactChildren } from "@/types";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";

type RenderModelType = { className?: string } & ReactChildren;

export function RenderModel({ children, className }: RenderModelType) {
  return (
    <>
      <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </>
  );
}
