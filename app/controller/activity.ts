import {Controller} from 'egg';
import Response from '../util/response';

export default class ActivityController extends Controller {

    public async start() {
        const {service, model, request} = this.ctx;
        const {itemName, userName} = request.body;

        if (!await service.activity.checkBeforeStart(userName)) {
            this.ctx.body = Response.fail0('已经有项目在进行中，请先完成项目！');
            return;
        }

        const activity = new model.Activity({itemName, userName, start: new Date()});
        const res = await activity.save();
        this.ctx.body = Response.ok(res);
    }

    public async stop() {
        const {service, model, request} = this.ctx;

        const {id} = request.query;

        const activity = await model.Activity.findById(id);
        const error = service.activity.checkBeforeStop(activity);
        if (error) {
            this.ctx.body = Response.fail0(error);
            return;
        }

        activity.stop = new Date();
        const res = await model.Activity.updateOne({_id: id}, activity);
        this.ctx.body = Response.ok(res);
    }

    public async ongoing() {
        const {service, request} = this.ctx;
        const {userName} = request.query;

        const activities = await service.activity.ongoing(userName);
        this.ctx.body = Response.ok(activities);
    }
}
