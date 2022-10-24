import React, { useEffect, useState } from 'react';

import { Box, Center, Text, Group } from '@mantine/core';

import GridCol from '../GridCol';

import { fetchWeatherData } from '../../api/weather';
import { renderWeatherIcon } from '../../services/weather';

const Weather = ({ settings }) => {
  const [description, setDescription] = useState('Thunderstorm');
  const [temperature, setTemperature] = useState(30);
  const [iconId, setIconId] = useState('10d');

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetchWeatherData(settings?.lat, settings?.long);

      if (response?.isSuccess) {
        setDescription(response?.data?.weather[0]?.description);
        setTemperature(response?.data?.main.temp / 10);
        setIconId(response?.data?.weather[0]?.icon);
      }
    };

    const interval = setInterval(() => {
      getWeather();
    }, 300000);

    getWeather();

    return () => clearInterval(interval);
  }, [settings]);

  return (
    <GridCol colStart={1} colEnd={5} rowStart={5} rowEnd={13}>
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          backgroundColor: theme.colors.dark[5]
        })}
      >
        <Center sx={{ height: '100%', width: '100%' }}>
          <Box>
            <Text align="center" weight={600} size="xl">
              {settings?.location}
            </Text>
            <Group position="center" py="xs">
              {renderWeatherIcon(iconId, 60)}
            </Group>
            <Text weight={600} align="center" size="3rem">
              {temperature.toFixed(1)}°C
            </Text>
            <Text weight={600} align="center" px="md" transform="capitalize">
              {description}
            </Text>
          </Box>
        </Center>
      </Box>
    </GridCol>
  );
};

export default Weather;
