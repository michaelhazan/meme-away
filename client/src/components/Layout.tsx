// src/components/layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div>
      layout
      <Outlet />
    </div>
  );
};
