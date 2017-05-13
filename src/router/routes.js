import PaletteGenerator from '@/components/PaletteGenerator';

const routes = [
  {
    path: '/',
    name: 'PaletteGenerator',
    component: PaletteGenerator,
  },
  {
    path: '/:hex',
    name: 'PaletteGenerator',
    component: PaletteGenerator,
    props: true,
  },
];

export default routes;
