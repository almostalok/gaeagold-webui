import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const APP_NAME = 'Sample App';

export const MENU_LIST = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    permission: 'view_dashbord',
    divider: true,
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: 10,
    title: 'Table',
    href: '/table',
    permission: 'view_table',
    divider: true,
    icon: <TocOutlinedIcon />,
  },
  {
    id: 2,
    title: 'Sample form',
    href: '/#',
    permission: 'view_form',
    icon: <FeedOutlinedIcon />,
    subItems: [
      {
        id: 3,
        title: 'Sample form 1',
        href: '/#',
        permission: 'view_form',
        subItems: [
          {
            id: 4,
            title: 'Sample form 1.1',
            href: '/sample-form',
            permission: 'view_form',
          },
          {
            id: 5,
            title: 'Sample form 1.2',
            href: '/#',
            permission: 'view_form',
            subItems: [
              {
                id: 6,
                title: 'Sample form 1.2.1',
                href: '/#',
                permission: 'view_form',
              },
              {
                id: 7,
                title: 'Sample form 1.2.2',
                href: '/#',
                permission: 'view_form',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Logout',
    clickEvent: true,
    icon: <LogoutOutlinedIcon />,
  },
];
