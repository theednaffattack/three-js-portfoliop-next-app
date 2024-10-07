"use client";

import { BtnList } from "@/app/data";
import { NavButton } from "./nav-button";

type NavigationMainProps = {};

export function NavigationMain(props: NavigationMainProps) {
  const circleDegrees = 360;
  const numOfBtns = BtnList.length;
  const angleIncrement = circleDegrees / numOfBtns;

  const buttonList = BtnList.map(({ icon, label, newTab, link }, btnIndex) => {
    const angleRadian = (btnIndex * angleIncrement * Math.PI) / 180;
    const radius = "calc(20vw - 1rem)";
    const x = `calc(${radius}*${Math.cos(angleRadian)})`;
    const y = `calc(${radius}*${Math.sin(angleRadian)})`;

    return (
      <NavButton
        className="flex items-center justify-between relative"
        key={`${btnIndex}-${label}-${x}-${y}`}
        x={x}
        y={y}
        icon={icon}
        label={label}
        link={link}
        newTab={newTab}
      />
    );
  });
  return (
    <nav>
      <ul className="list-none fixed h-screen flex items-center justify-center w-full">
        {buttonList}
      </ul>
    </nav>
  );
}
