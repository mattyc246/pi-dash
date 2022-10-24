import React from 'react';
import moment from 'moment';

import { Box, Group, Text } from '@mantine/core';
import { IconClock } from '@tabler/icons';

import GridCol from '../GridCol';

const TimeDate = ({ timeNow }) => {
  return (
    <GridCol colStart={1} colEnd={6} rowStart={1} rowEnd={5}>
      <Box
        sx={(theme) => ({
          height: '100%',
          width: '100%',
          backgroundColor: theme.colors.dark[5],
          display: 'flex',
          flexDirection: 'column'
        })}
      >
        <Group p="sm">
          <IconClock size={30} />
          <Text sx={{ flex: 1 }} size="xl" weight="bold" align="center">
            {moment(timeNow).format('ddd Do MMM YYYY')}
          </Text>
        </Group>
        <Box sx={{ flex: 1 }}>
          <Text size="3rem" weight={800} align="center">
            {moment(timeNow).format('h:mm:ss A')}
          </Text>
        </Box>
      </Box>
    </GridCol>
  );
};

export default TimeDate;
