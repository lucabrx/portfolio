import { ReactNode, type FC } from 'react';
import classNames from "classnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({children,className}) => {
  return (
<div className={classNames("mx-auto max-w-[120rem] px-8", className)}>
      {children}
    </div>
)
}

export default Container