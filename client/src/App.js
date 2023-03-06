import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Box, MantineProvider } from '@mantine/core';

import TimeDate from './components/widgets/TimeDate';
import Weather from './components/widgets/Weather';
import CryptoPrices from './components/widgets/CryptoPrices';
import FormulaOne from './components/widgets/FormulaOne';
import Buttons from './components/widgets/Buttons';
import moment from 'moment';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 0.5rem;
`;

const App = () => {
  const [timeNow, setTimeNow] = useState(moment());
  const [settings, setSettings] = useState({
    crypto: {
      liveUpdate: true
    },
    weather: {
      lat: 3.158595,
      long: 101.705109,
      location: 'Kuala Lumpur, MY'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(moment());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <MantineProvider
      theme={{ fontFamily: 'Open Sans, sans-serif', colorScheme: 'dark' }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Box p="sm" sx={(theme) => ({ height: '100vh', color: theme.white })}>
        <Grid>
          <TimeDate timeNow={timeNow} />
          <Weather settings={settings?.weather} />
          <CryptoPrices settings={settings?.crypto} />
          <FormulaOne timeNow={timeNow} />
          <Buttons
            settings={settings}
            updateSettings={(updatedSettings) => setSettings(updatedSettings)}
          />
        </Grid>
      </Box>
    </MantineProvider>
  );
};

export default App;
