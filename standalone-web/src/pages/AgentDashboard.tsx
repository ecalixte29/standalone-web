import { useEffect } from 'react';
import io from 'socket.io-client';
import CallPanel from '../components/CallPanel';
import { AppShell, Navbar, Header, Title, ScrollArea } from '@mantine/core';
import { IconPhoneCall } from '@tabler/icons-react';
import ThemeToggle from '../components/ThemeToggle';

function AgentDashboard() {
  useEffect(() => {
    const socket = io('/');
    socket.on('connect', () => console.log('socket connected'));
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <AppShell
      navbar={<Navbar p="md" width={{ base: 220 }}>
        <Navbar.Section grow component={ScrollArea}>
          <Title order={4} mb="sm">Campaigns</Title>
          {/* TODO: campaign list */}
        </Navbar.Section>
      </Navbar>}
      header={<Header height={60} p="sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Title order={3} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconPhoneCall size={24} /> Agent Workspace
        </Title>
        <ThemeToggle />
      </Header>}
    >
      <CallPanel />
    </AppShell>
  );
}

export default AgentDashboard; 