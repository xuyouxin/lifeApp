'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  static: true,

  view: {
    enable: true,
    package: 'egg-view',
  },

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
