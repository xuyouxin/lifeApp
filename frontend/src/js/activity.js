import {get, post} from'./baseService.js'


export const start = (user, item) => post(`activity/start?user=${user}&item=${item}`);

export const stop = (id) => post(`activity/stop?id=${id}`);

export const ongoing = (user) => get(`activity/ongoing?user=${user}`);
