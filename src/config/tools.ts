import { Icons } from "@/components/ui/Icons";
import type { LucideIcon } from "lucide-react";

interface ToolsProps {
  text: string;
  Icon: LucideIcon;
}
export const frontendTools: ToolsProps[] = [
  { text: "React", Icon: Icons.react },
  { text: "Next.js", Icon: Icons.next },
  { text: "Svelte", Icon: Icons.svelte },
];
export const backendTools: ToolsProps[] = [
  { text: "Mongo", Icon: Icons.mongodb },
  { text: "SQL", Icon: Icons.sql },
];
export const designTools: ToolsProps[] = [
  { text: "Figma", Icon: Icons.figma },
  { text: "Figma", Icon: Icons.figma },
];
