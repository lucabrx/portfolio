export function scrollToSection(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string,
  offset: number,
) {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop + offset,
      behavior: "smooth",
    });
  }
}
