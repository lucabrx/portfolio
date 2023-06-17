import { ReactNode, type FC } from 'react';
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({children,className}) => {
  return (
<div className={classNames("mx-auto max-w-[1280px] px-4 xl:px-7", className)}>
      {children}
    </div>
)
}

export default Container