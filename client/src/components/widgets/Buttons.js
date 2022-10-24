import React from 'react';

import { ActionIcon, Box, Stack } from '@mantine/core';

import GridCol from '../GridCol';
import Settings from '../Settings';

import { IconSquareX } from '@tabler/icons';

const Buttons = ({ settings, updateSettings }) => {
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
          <Settings settings={settings} updateSettings={updateSettings} />
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
