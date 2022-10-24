import React, { useEffect, useState } from 'react';
import { isEqual } from 'lodash';

import {
  ActionIcon,
  Alert,
  Button,
  Divider,
  Group,
  Modal,
  Stack,
  Switch,
  Text,
  TextInput,
  Title
} from '@mantine/core';

import { IconAlertCircle, IconSettings } from '@tabler/icons';

const Settings = ({ settings, updateSettings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newSettings, setNewSettings] = useState({});

  useEffect(() => {
    setNewSettings(settings);
  }, [settings]);

  const handleUpdateSettings = (widget, name, value) => {
    const update = JSON.parse(JSON.stringify(newSettings));

    update[widget][name] = value;

    setNewSettings(update);
  };

  const handleSaveSettings = () => {
    updateSettings(newSettings);
    setIsOpen(false);
  };

  const hasUnsavedChanges = !isEqual(settings, newSettings);

  return (
    <>
      <ActionIcon
        onClick={() => setIsOpen(true)}
        color="blue"
        size="lg"
        radius="md"
        variant="light"
      >
        <IconSettings size={26} />
      </ActionIcon>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Settings"
        overflow="inside"
      >
        {hasUnsavedChanges && (
          <Alert
            icon={<IconAlertCircle size={16} />}
            color="red"
            variant="outline"
            mb="md"
          >
            Changes are not saved!
          </Alert>
        )}
        <Title order={6}>Cryptocurrency</Title>
        <Divider my="md" />
        <Group mb="md" position="apart">
          <Text>Show Live</Text>
          <Switch
            checked={newSettings?.crypto?.liveUpdate}
            onChange={(e) =>
              handleUpdateSettings('crypto', 'liveUpdate', e?.target?.checked)
            }
            size="md"
            color="orange"
          />
        </Group>
        <Title order={6}>Weather</Title>
        <Divider my="md" />
        <Stack>
          <TextInput
            placeholder="Weather location"
            label="Location"
            variant="filled"
            radius="md"
            value={newSettings?.weather?.location}
            onChange={(e) =>
              handleUpdateSettings('weather', 'location', e?.target?.value)
            }
          />
          <TextInput
            label="Latitude"
            variant="filled"
            radius="md"
            value={newSettings?.weather?.lat}
            onChange={(e) =>
              handleUpdateSettings('weather', 'lat', Number(e?.target?.value))
            }
          />
          <TextInput
            label="Longitude"
            variant="filled"
            radius="md"
            value={newSettings?.weather?.long}
            onChange={(e) =>
              handleUpdateSettings('weather', 'long', Number(e?.target?.value))
            }
          />
        </Stack>
        <Button
          mt="md"
          color="orange"
          variant="light"
          onClick={handleSaveSettings}
          disabled={!hasUnsavedChanges}
          fullWidth
        >
          Save Changes
        </Button>
      </Modal>
    </>
  );
};

export default Settings;
