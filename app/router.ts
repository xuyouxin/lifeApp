import homeRouter from './router/home';
import activityRouter from './router/activity';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  homeRouter(app);
  activityRouter(app);
};
