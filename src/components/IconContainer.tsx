import { ReactNode, type FC } from 'react';

interface IconContainerProps {
  children: ReactNode;
}

const IconContainer: FC<IconContainerProps> = ({children}) => {
  return (
<div className='bg-transparent hover:bg-grey-dark rounded-md p-2 transition-[shadow,text-shadow] duration-300 cursor-pointer'> 
{children}
</div>
)
}

export default IconContainer