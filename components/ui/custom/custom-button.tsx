import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '../button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, iconPosition = "end", children, ...props }) => {
  return (
    <Button
      className={cn(
        props.className,
        "flex items-center gap-2",
      )}
      {...props}
    >
      {iconPosition === "start" && icon}
      {children}
      {iconPosition === "end" && icon}
    </Button>
  );
};

export default CustomButton;
