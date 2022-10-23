import React from 'react';

import { ActionIcon, Box, Stack } from '@mantine/core';

import GridCol from '../GridCol';
import { IconSettings, IconSquareX } from '@tabler/icons';

const Buttons = () => {
  return (
    <GridCol colStart={12} colEnd={13} rowStart={5} rowEnd={10}>
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
        <Stack align="center" justify="space-evenly" sx={{ height: '100%' }}>
          <ActionIcon color="blue" size="lg" radius="md" variant="light">
            <IconSettings size={26} />
          </ActionIcon>
          <ActionIcon
            onClick={() => window.document.exitFullscreen()}
            color="red"
            size="lg"
            radius="md"
            variant="light"
          >
            <IconSquareX size={26} />
          </ActionIcon>
        </Stack>
      </Box>
    </GridCol>
  );
};

export default Buttons;
