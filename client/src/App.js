import React from 'react';
import styled from '@emotion/styled';

import { Box, MantineProvider } from '@mantine/core';

import TimeDate from './components/widgets/TimeDate';
import Weather from './components/widgets/Weather';
import CryptoPrices from './components/widgets/CryptoPrices';
import FormulaOne from './components/widgets/FormulaOne';
import Buttons from './components/widgets/Buttons';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 0.5rem;
`;

const App = () => {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Open Sans, sans-serif', colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Box p="sm" sx={(theme) => ({ height: '100vh', color: theme.white })}>
        <Grid>
          <TimeDate />
          <Weather />
          <CryptoPrices />
          <FormulaOne />
          <Buttons />
        </Grid>
      </Box>
    </MantineProvider>
  );
};

export default App;
