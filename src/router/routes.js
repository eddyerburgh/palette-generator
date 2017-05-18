import PaletteGenerator from '@/components/PaletteGenerator';

const routes = [
  {
    path: '/',
    component: PaletteGenerator,
  },
  {
    path: '/:hex',
    component: PaletteGenerator,
    props: true,
  },
];

export default routes;
