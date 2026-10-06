import React from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] disabled:opacity-50 disabled:pointer-events-none select-none overflow-hidden group cursor-pointer whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm gap-2',
    md: 'text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm gap-2.5',
    lg: 'text-sm uppercase tracking-widest px-8 py-4 rounded-sm gap-3',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#A5782B] via-[#C59B46] to-[#966B22] text-[#FFFFFF] font-semibold hover:from-[#B88C3A] hover:via-[#D4AC57] hover:to-[#A5782B] shadow-[0_4px_16px_rgba(165,120,43,0.28)] hover:shadow-[0_8px_24px_rgba(165,120,43,0.38)] active:scale-[0.98]',
    secondary:
      'bg-[#FFFFFF] text-[#2A211D] border border-[#B88C3A]/30 hover:border-[#B88C3A] hover:bg-[#F9F5EE] shadow-[0_2px_8px_rgba(42,33,29,0.04)] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#2A211D] border border-[#B88C3A] hover:border-[#7A531E] hover:bg-[#B88C3A]/10 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#423934] hover:text-[#7A531E] hover:bg-[#B88C3A]/10 active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* VengenceUI subtle light sweep effect on hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
};
