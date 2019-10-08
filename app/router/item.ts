import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/item/insert', controller.item.insert);
  router.post('/item/delete', controller.item.delete);
  router.post('/item/update', controller.item.update);
  router.get('/item/query', controller.item.query);
};
