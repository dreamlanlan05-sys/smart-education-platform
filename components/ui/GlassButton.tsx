'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlassButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: GlassButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 hover:from-green-400/30 hover:to-emerald-500/30 border-green-400/50',
    secondary: 'bg-gradient-to-r from-blue-400/20 to-cyan-500/20 hover:from-blue-400/30 hover:to-cyan-500/30 border-blue-400/50',
    success: 'bg-gradient-to-r from-emerald-400/20 to-green-500/20 hover:from-emerald-400/30 hover:to-green-500/30 border-emerald-400/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        backdrop-blur-lg
        border-2
        rounded-2xl
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        active:shadow-md
        relative
        overflow-hidden
        ${className}
      `}
    >
      {/* 玻璃反光效果 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}