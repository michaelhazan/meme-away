import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';

export const CSSPrioritize: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};
