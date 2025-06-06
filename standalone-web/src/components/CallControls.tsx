import { Group, ActionIcon, Tooltip } from '@mantine/core';
import { useState } from 'react';
import {
  PhoneIcon,
  PhoneXMarkIcon,
  MicrophoneIcon,
  PauseCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { SpeakerXMarkIcon } from '@heroicons/react/24/outline';

function CallControls() {
  const [inCall, setInCall] = useState(false);
  const [muted, setMuted] = useState(false);
  const [onHold, setOnHold] = useState(false);

  return (
    <Group position="center">
      {!inCall ? (
        <Tooltip label="Call">
          <ActionIcon size="lg" color="green" variant="filled" onClick={() => setInCall(true)}>
            <PhoneIcon width={20} />
          </ActionIcon>
        </Tooltip>
      ) : (
        <Tooltip label="Hang Up">
          <ActionIcon size="lg" color="red" variant="filled" onClick={() => {
            setInCall(false);
            setMuted(false);
            setOnHold(false);
          }}>
            <PhoneXMarkIcon width={20} />
          </ActionIcon>
        </Tooltip>
      )}

      <Tooltip label={muted ? 'Unmute' : 'Mute'}>
        <ActionIcon
          size="lg"
          color={muted ? 'yellow' : 'gray'}
          variant="light"
          disabled={!inCall}
          onClick={() => setMuted((m: boolean) => !m)}
        >
          {muted ? <SpeakerXMarkIcon width={20} /> : <MicrophoneIcon width={20} />}
        </ActionIcon>
      </Tooltip>

      <Tooltip label={onHold ? 'Resume' : 'Hold'}>
        <ActionIcon
          size="lg"
          color={onHold ? 'yellow' : 'gray'}
          variant="light"
          disabled={!inCall}
          onClick={() => setOnHold((h: boolean) => !h)}
        >
          <PauseCircleIcon width={20} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Transfer">
        <ActionIcon size="lg" color="blue" variant="light" disabled={!inCall}>
          <ArrowRightOnRectangleIcon width={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export default CallControls; 