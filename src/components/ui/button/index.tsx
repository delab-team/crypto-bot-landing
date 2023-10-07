import { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import s from './button.module.scss';

const buttonVariant = {
    general: s.generalVariant,
    secondary: s.secondaryVariant,
    primary: s.primaryVariant,
};

interface ButtonProps
    extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * startIcon
     */
    startIcon?: string;
    /**
     * endIcon
     */
    endIcon?: string;
    /**
     * variant button
     */
    variant?: 'general' | 'secondary' | 'primary';
    /**
     * className button
     */
    className?: string;
    /**
     * children
     */
    children?: ReactNode;
    /**
     * disabled
     */
    disabled?: boolean;
}

export default function Button({
    variant = 'general',
    className,
    children,
    disabled,
    startIcon,
    endIcon,
    ...restProps
}: ButtonProps) {
    return (
        <button
            className={`
        ${s.btn}
        ${buttonVariant[variant]}
        ${disabled ? s.disabled : ''}
        ${inter.className}
      `}
            disabled={disabled}
            {...restProps}
        >
            {/* {!!startIcon && <Image src={startIcon} alt="start icon" />} */}
            {children}
            {/* {!!endIcon && <Image src={endIcon} alt="end icon" />} */}
        </button>
    );
}
