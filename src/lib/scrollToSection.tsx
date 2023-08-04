import type { MouseEvent } from "react";

export function scrollToSection(
  event: MouseEvent<EventTarget>,
  id: string,
  offset: number,
) {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: offsetTop + offset,
      behavior: "smooth",
    });
  }
}
