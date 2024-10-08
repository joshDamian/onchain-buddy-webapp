import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        'bg-primaryGradient h-12 px-4 md:px-6 flex items-center justify-center text-center w-fit rounded-[32px] text-white font-nunitoSans font-semibold text-sm md:text-base',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
