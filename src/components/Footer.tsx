"use client";
import { type FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";
import { socialApps } from "@/config/social-app";

const Footer: FC = () => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const getTooltipData = useCallback((element: HTMLElement): string | null => {
    if (element.dataset.tooltip) {
      return element.dataset.tooltip;
    } else if (element.parentElement) {
      return getTooltipData(element.parentElement);
    } else {
      return null;
    }
  }, []);

  const showTooltip = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tooltipData = getTooltipData(target);
      if (!tooltipData) return;

      const tooltip = document.createElement("div");
      tooltip.classList.add(
        "px-4",
        "py-2",
        "bg-grey-dark",
        "rounded-md",
        "text-off-white/80",
        "text-sm",
        "shadow",
        "fixed",
        "z-10",
      );
      tooltip.innerHTML = tooltipData;
      document.body.append(tooltip);

      const targetRect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      let left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
      if (left < 0) left = 0;
      if (left + tooltipRect.width > window.innerWidth) {
        left = window.innerWidth - tooltipRect.width;
      }
      let top = targetRect.top - tooltipRect.height - 20;
      if (top < 0) {
        top = targetRect.bottom + 20;
      }

      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";

      tooltipRef.current = tooltip;
    },
    [getTooltipData],
  );

  const hideTooltip = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.remove();
      tooltipRef.current = null;
    }
  }, [tooltipRef]);

  useEffect(() => {
    document.addEventListener("mouseover", showTooltip);
    document.addEventListener("mouseout", hideTooltip);
    return () => {
      document.removeEventListener("mouseover", showTooltip);
      document.removeEventListener("mouseout", hideTooltip);
    };
  }, [showTooltip, hideTooltip]);

  return (
    <footer className="border-t border-transparent-white py-4 text-sm">
      <div className="flex flex-col justify-between lg:flex-row container">
        <div className="flex h-full w-full justify-between  items-center gap-4 ">
          <div className="flex items-end text-grey gap-4">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            Luka Brkovic
          </div>

          <div className="mt-auto flex space-x-2 text-grey">
            {socialApps.map((item) => (
              <a
                aria-label={`Link to my social media ${item.tooltip}`}
                key={item.id}
                data-tooltip={item.tooltip}
                href={item.href}
                className={buttonClasses({
                  variant: "icon",
                  size: "icon_md",
                })}
              >
                <item.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
