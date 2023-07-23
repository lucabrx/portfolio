"use client";
import { type FC } from "react";
import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";
import { socialApps } from "@/config/social-app";

// tooltip
let tooltip: HTMLDivElement;

document.addEventListener("mouseover", showTooltip);
document.addEventListener("mouseout", hideTooltip);

function showTooltip(event: MouseEvent) {
  let target = event.target as HTMLAnchorElement;
  let tooltipData = getTooltipData(target);
  if (!tooltipData) return;

  tooltip = document.createElement("div");
  tooltip.classList.add(
    "px-4",
    "py-2",
    "bg-grey-dark",
    "rounded-md",
    "text-off-white/80",
    "text-[14px]",
    "shadow",
    "fixed",
    "z-10",
    "transition",
    "duration-300",
  );
  tooltip.innerHTML = tooltipData;
  document.body.append(tooltip);

  let targetRect = target.getBoundingClientRect();
  let tooltipRect = tooltip.getBoundingClientRect();

  let left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
  if (left < 0) left = 0;
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width;
  }

  let top = targetRect.top - tooltipRect.height - 15;
  if (top < 0) {
    top = targetRect.bottom + 15;
  }

  tooltip.style.left = left + "px";
  tooltip.style.top = top + "px";
}

function getTooltipData(element: HTMLElement): string | null {
  if (element.dataset.tooltip) {
    return element.dataset.tooltip;
  } else if (element.parentElement) {
    return getTooltipData(element.parentElement);
  } else {
    return null;
  }
}

function hideTooltip() {
  if (!tooltip) return;
  if (tooltip) {
    tooltip.remove();
  }
}

const Footer: FC = () => {
  return (
    <footer className="border-t border-transparent-white py-4 text-sm">
      <div className="flex flex-col justify-between lg:flex-row container">
        <div className="flex h-full w-full justify-between  items-center gap-4 ">
          <div className="flex items-end text-grey gap-4">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            Luka Brkovic
          </div>
          <div className="mt-auto flex space-x-2 text-grey">
            {socialApps.map((item, i) => (
              <a
                key={i}
                data-tooltip={item.tooltip}
                href={item.href}
                className={buttonClasses({
                  variant: "icon",
                  size: "icon_md",
                })}
              >
                <item.Icon size="20" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
