import type { FC, ReactNode } from "react"

interface ShouldRenderProps {
  if: unknown
  children: ReactNode
}

const ShouldRender: FC<ShouldRenderProps> = ({ if: condition, children }) => {
  return <>{condition ? children : null}</>
}

export default ShouldRender
