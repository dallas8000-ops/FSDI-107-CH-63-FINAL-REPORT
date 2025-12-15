  const catalog = [
  { id: 1, title: 'Mechanical Keyboard', image: '/images/keyboard.jpg' },
  { id: 2, title: '27" Sceptre Monitor',  image: '/images/monitor.jpg' },
  { id: 3, title: 'Gaming Mouse',          image: '/images/mouse.jpg' },
  { id: 4, title: 'USB-C Hub',             image: '/images/usbs.png' },
  { id: 5, title: 'Webcam',                image: '/images/webcam.png' },
  { id: 6, title: 'Smart-watch',           image: '/images/smartwatch.png' },
  { id: 7, title: '32 GB Memory',          image: '/images/memory.png' },
  { id: 8, title: 'Computer Desk',         image: '/images/computer desk.png' },
// etc…
];

export const getCatalog = () =>
  Promise.resolve(catalog);