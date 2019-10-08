import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/activity/start', controller.activity.start);
  router.post('/activity/stop', controller.activity.stop);
  router.get('/activity/ongoing', controller.activity.ongoing);
};
