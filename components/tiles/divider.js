import React from 'react';
import { cn } from '@/lib/utils';

const Divider = ({ ...props }) => {
  return (
    <div className={cn(
      props.className,
      "border-t-[1.5px]",
    )} >{props?.children}</div>
  );
};

export default Divider;