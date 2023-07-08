import { cn } from '@/lib/classMerge';
import { type FC } from 'react';
import { type FieldError } from 'react-hook-form';
import ShouldRender from '../helpers/ShouldRender';

interface FieldProps {
    children: React.ReactNode;
    label: string;
    error?: FieldError;
    className?: string;
}

const Field: FC<FieldProps> = ({error, children,label,className}) => {
  return (
    <div className={cn("w-full flex flex-col space-y-2", className)}>
    <label className='text-lg'>{label}</label>
    {children}
    <ShouldRender if={error}>
     <p className="text-[#dc2626] text-sm">{error?.message}</p>
    </ShouldRender>
  </div>
)
}

export default Field