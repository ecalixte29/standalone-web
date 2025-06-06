import { Card, Title, Text, Stack } from '@mantine/core';
import CallControls from './CallControls';

function CallPanel() {
  return (
    <Card withBorder radius="md" shadow="sm" m="md">
      <Stack>
        <Title order={4}>Call Panel</Title>
        <Text size="sm" color="dimmed">
          Softphone controls will appear here.
        </Text>
        <CallControls />
      </Stack>
    </Card>
  );
}

export default CallPanel; 