"use client";

import { BtnList } from "@/app/data";
import { NavButton } from "./nav-button";

type NavigationMainProps = {};

export function NavigationMain(props: NavigationMainProps) {
  const circleDegrees = 360;
  const numOfBtns = BtnList.length;
  const angleIncrement = circleDegrees / numOfBtns;

  return (
    <nav className="list-none fixed h-screen flex items-center justify-center w-full">
      {BtnList.map(({ icon, label, newTab, link }, btnIndex) => {
        const angleRadian = (btnIndex * angleIncrement * Math.PI) / 180;
        const radius = "calc(20vw - 1rem)";
        const x = `calc(${radius}*${Math.cos(angleRadian)})`;
        const y = `calc(${radius}*${Math.sin(angleRadian)})`;

        return (
          <div className="absolute cursor-pointer z-50  hover:pause animate-spin-slow group">
            <NavButton
              className="w-max flex items-center justify-center relative"
              key={`${btnIndex}-${label}-${x}-${y}`}
              x={x}
              y={y}
              icon={icon}
              label={label}
              link={link}
              newTab={newTab}
              {...props}
            />
          </div>
        );
      })}
    </nav>
  );
}
