import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
//   IconSwitchHorizontal,
  IconMessage,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    path : string;  
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, path , active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <NavLink to={path} className={classes.link}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
            <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
        </NavLink>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Dashboard' , path: '/'},
  { icon: IconGauge, label: 'Activity Logs' , path: '/logs' },
  { icon: IconCalendarStats, label: 'Events' , path: '/events'},
  { icon: IconUser, label: 'Accounts' , path: '/account'},
//   { icon: IconDeviceDesktopAnalytics, label: 'Tickets' },
  { icon: IconMessage , label: 'Messages' , path: '/messages'},
  { icon: IconSettings, label: 'Settings' , path: '/settings'},
];

export default function AsideNav() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      path={link.path}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <img src="https://cdn.byteperks.com/assets/img/with-out-circle.png" alt="Mantine logo" className='w-full' style={{ filter : 'invert(1)'}} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        {/* <NavbarLink path='/' icon={IconSwitchHorizontal} label="Change account" /> */}
        <NavbarLink path='/' icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}