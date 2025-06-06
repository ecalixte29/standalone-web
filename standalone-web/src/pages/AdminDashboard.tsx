import { AppShell, Header, Title } from '@mantine/core';
import ThemeToggle from '../components/ThemeToggle';

function AdminDashboard() {
  return (
    <AppShell
      header={<Header height={60} p="sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Title order={3}>Admin Dashboard</Title>
        <ThemeToggle />
      </Header>}
    >
      <Title order={4}>Coming soon: live call monitoring, reports, and configuration screens.</Title>
    </AppShell>
  );
}

export default AdminDashboard; 