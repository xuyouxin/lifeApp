import { Service } from 'egg';

export default class ActivityValidator extends Service {
    async checkBeforeStart(user: string) {
        const activities = await this.ongoing(user);
        if (activities.length > 0) {
            return false;
        }
        return true;
    }

    async ongoing(userName: string) {
        return this.ctx.model.Activity.find({ userName, stop: null });
    }

    checkBeforeStop(activity) {
        if (!activity) {
            return '找不到该项目！';
        }
        if (activity.stop) {
            return '该项目已结束！';
        }
    }
}
