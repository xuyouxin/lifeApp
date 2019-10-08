"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const response_1 = require("../util/response");
class ActivityController extends egg_1.Controller {
    async start() {
        const { service, model, request } = this.ctx;
        const { itemName, userName } = request.body;
        if (!await service.activity.checkBeforeStart(userName)) {
            this.ctx.body = response_1.default.fail0('已经有项目在进行中，请先完成项目！');
            return;
        }
        const activity = new model.Activity({ itemName, userName, start: new Date() });
        const res = await activity.save();
        this.ctx.body = response_1.default.ok(res);
    }
    async stop() {
        const { service, model, request } = this.ctx;
        const { id } = request.query;
        const activity = await model.Activity.findById(id);
        const error = service.activity.checkBeforeStop(activity);
        if (error) {
            this.ctx.body = response_1.default.fail0(error);
            return;
        }
        activity.stop = new Date();
        const res = await model.Activity.updateOne({ _id: id }, activity);
        this.ctx.body = response_1.default.ok(res);
    }
    async ongoing() {
        const { service, request } = this.ctx;
        const { userName } = request.query;
        const activities = await service.activity.ongoing(userName);
        this.ctx.body = response_1.default.ok(activities);
    }
}
exports.default = ActivityController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUMvQiwrQ0FBd0M7QUFFeEMsTUFBcUIsa0JBQW1CLFNBQVEsZ0JBQVU7SUFFL0MsS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNDLE1BQU0sRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNWO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJO1FBQ2IsTUFBTSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUUzQyxNQUFNLEVBQUMsRUFBRSxFQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUUzQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2hCLE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUVqQyxNQUFNLFVBQVUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGtCQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQXhDRCxxQ0F3Q0MifQ==