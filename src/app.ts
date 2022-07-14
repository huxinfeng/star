import NotFound from '@/components/NotFound';

const patchRoutes = ({ routes }: any) => {
  routes.at(-1).routes.push({
    path: '*',
    component: NotFound,
  });
};

export { patchRoutes };
