export const navBarData = [
  {
    id: 1,
    title: 'Dashboard',
    link: '/',
    icon: 'layout',
  },
  {
    id: 2,
    title: 'Profile',
    link: '/profile',
    icon: 'user',
  },
  {
    id: 3,
    title: 'Parameters',
    link: '/parameters',
    icon: 'faders',
  },
  {
    id: 4,
    title: 'Contact',
    link: '/contact',
    icon: 'headphones',
  },
];

export const statusBarData = [
  {
    id: 1,
    icon: 'check-circle',
    notifications: 14,
    title: 'Active',
    color: 'green',
  },
  {
    id: 2,
    icon: 'info',
    notifications: 0,
    title: 'Acquit',
    color: 'blue',
  },
  {
    id: 3,
    icon: 'clock-countdown',
    notifications: 1,
    title: 'On Delay',
    color: 'yellow',
  },
];

export const userName = 'Elsa';

export const welcomeData = {
  greeting: 'Hi,',
  message: "Let's check out your farm metrics",
};

export const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Item 1',
      data: [65, 59, 80, 81, 56, 60, 69],
      fill: false,
      borderColor: 'rgb(242, 0, 168)',
      tension: 0.1,
    },

    {
      label: 'Item 2',
      data: [20, 83, 40, 50, 89, 23, 10],
      fill: false,
      borderColor: '#1700f4',
      tension: 0.1,
    },
  ],
};
