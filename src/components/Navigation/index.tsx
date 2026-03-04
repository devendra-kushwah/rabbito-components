"use client";
import React from 'react';
import Link from 'next/link';

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

// Simple navigation items array — map/extend as needed.
export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const linkBaseStyle: React.CSSProperties = {
  padding: '8px 12px',
  textDecoration: 'none',
  color: '#222',
  display: 'inline-block',
};

const activeStyle: React.CSSProperties = {
  fontWeight: 700,
  color: '#0b5fff',
};

const navWrapperStyle: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
};

export const Navigation: React.FC = () => {
  // Use window.location.pathname for active detection (works in Storybook + browser)
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <nav style={navWrapperStyle} aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ ...linkBaseStyle, ...(isActive ? activeStyle : {}) }}
          >
            {item.icon ? <span style={{ marginRight: 6 }}>{item.icon}</span> : null}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
