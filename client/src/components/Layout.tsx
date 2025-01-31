// src/components/layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { OpenChatBtn } from './OpenChatBtn';

export const Layout: React.FC = () => {
  return (
    <div>
      layout
      <Outlet />
      <OpenChatBtn />
    </div>
  );
};
