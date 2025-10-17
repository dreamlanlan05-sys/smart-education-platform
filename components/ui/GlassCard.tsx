'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-6
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-300
        relative
        overflow-hidden
        ${className}
      `}
    >
      {/* 背景光晕效果 */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}