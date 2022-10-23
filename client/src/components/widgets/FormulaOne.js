import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';

import {
  Badge,
  Box,
  Center,
  Grid,
  Group,
  Image,
  Loader,
  Text
} from '@mantine/core';

import GridCol from '../GridCol';

import { races } from '../../services/formulaOne';

const FlexText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const to2Digits = (number) => {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
};

const FormulaOne = () => {
  const [loading, setIsLoading] = useState(true);
  const [timeNow, setTimeNow] = useState(moment());
  const [upcomingRace, setUpcomingRace] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const matchingRace = races.find((race) =>
      moment(race.date).isSameOrAfter(timeNow)
    );

    setUpcomingRace(matchingRace);
    setIsLoading(false);
  }, [timeNow]);

  const duration = moment.duration(
    Math.max(
      moment(upcomingRace?.date).unix() - Math.floor(Date.now() / 1000),
      0
    ),
    'seconds'
  );

  return (
    <GridCol colStart={5} colEnd={12} rowStart={5} rowEnd={10}>
      <Box
        p="xs"
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          backgroundColor: theme.colors.dark[5],
          display: 'flex',
          flexDirection: 'column'
        })}
      >
        {loading ? (
          <Center sx={{ height: '100%' }}>
            <Loader variant="dots" color="white" />
          </Center>
        ) : (
          <>
            <Grid sx={{ height: '100%' }}>
              <Grid.Col span={12}>
                <Group position="apart">
                  <Badge variant="filled" color="dark" size="md" radius="xs">
                    Round {upcomingRace?.round}
                  </Badge>
                  <Badge variant="filled" color="dark" size="md" radius="xs">
                    {upcomingRace?.track}
                  </Badge>
                  <Badge variant="filled" color="dark" size="md" radius="xs">
                    {upcomingRace?.season} Season
                  </Badge>
                </Group>
              </Grid.Col>
              <Grid.Col span={3}>
                <Center sx={{ height: '100%' }}>
                  <Box
                    sx={(theme) => ({
                      color: theme.white
                    })}
                  >
                    <Text align="center" size="xl" weight="bold">
                      {upcomingRace?.country}
                    </Text>
                    <Text align="center" size="2rem">
                      {upcomingRace?.flag}
                    </Text>
                  </Box>
                </Center>
              </Grid.Col>
              <Grid.Col span={3}>
                <Center sx={{ height: '100%' }}>
                  <Image
                    src={upcomingRace?.circuitDiagram}
                    alt={upcomingRace?.track}
                    width="100%"
                  />
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>
                <Center sx={{ height: '100%' }}>
                  <Box p="0">
                    <Text size="md" weight={600}>
                      Next race in:
                    </Text>
                    <Text align="center" size="2.25rem" weight={600}>
                      {to2Digits(duration.days())}:{to2Digits(duration.hours())}
                      :{to2Digits(duration.minutes())}:
                      {to2Digits(duration.seconds())}
                    </Text>
                    <FlexText>
                      <Text align="center">Days</Text>
                      <Text align="center">Hrs</Text>
                      <Text align="center">Mins</Text>
                      <Text align="center">Secs</Text>
                    </FlexText>
                  </Box>
                </Center>
              </Grid.Col>
            </Grid>
          </>
        )}
      </Box>
    </GridCol>
  );
};

export default FormulaOne;
