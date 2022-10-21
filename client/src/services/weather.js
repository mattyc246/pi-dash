import { Box } from '@mantine/core';
import {
  IconCloud,
  IconCloudRain,
  IconCloudStorm,
  IconSun
} from '@tabler/icons';

export const renderWeatherIcon = (id, size) => {
  if (id.includes('01')) {
    return <IconSun size={size} />;
  } else if (id.includes('02')) {
    return (
      <Box sx={{ position: 'relative' }}>
        <IconSun
          size={size - 10}
          style={{ position: 'absolute', top: '0px', right: '-15px' }}
        />
        <IconCloud size={size} fill="white" />
      </Box>
    );
  } else if (id.includes('03')) {
    return <IconCloud size={size} />;
  } else if (id.includes('04')) {
    return (
      <Box sx={{ position: 'relative' }}>
        <IconCloud
          size={size - 10}
          style={{ position: 'absolute', top: '0px', right: '-15px' }}
        />
        <IconCloud size={size} fill="white" />
      </Box>
    );
  } else if (id.includes('09')) {
    return <IconCloudRain size={size} />;
  } else if (id.includes('10')) {
    return (
      <Box sx={{ position: 'relative' }}>
        <IconSun
          size={size - 10}
          style={{ position: 'absolute', top: '0px', right: '-15px' }}
        />
        <IconCloudRain size={size} fill="white" />
      </Box>
    );
  } else if (id.includes('11')) {
    return <IconCloudStorm size={size} />;
  } else {
    return <IconSun size={size} />;
  }
};
