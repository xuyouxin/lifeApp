"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("egg-mock/bootstrap");
// import { setUp, tearDown } from '../../helper';
describe('test/app/controller/activity.test.js', () => {
    // beforeEach(async () => {
    //     await setUp(app);
    // });
    //
    // afterEach(async () => {
    //     await tearDown(app);
    // });
    it('should insert success', async () => {
        const result = await bootstrap_1.app.httpRequest()
            .post('/activity/start')
            .field('itemName', 'study')
            .field('userName', 'travis')
            .expect(200);
        bootstrap_1.assert(result.body.code === 200);
    });
    it('should can get result of ongoing', async () => {
        const result = await bootstrap_1.app.httpRequest()
            .get('/activity/ongoing')
            .field('userName', 'travis')
            .expect(200);
        bootstrap_1.assert(result.body.code === 200);
        console.log('result>>', result);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBaUQ7QUFDakQsa0RBQWtEO0FBRWxELFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7SUFDbEQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sRUFBRTtJQUNGLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsTUFBTTtJQUVOLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQUcsQ0FBQyxXQUFXLEVBQUU7YUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO2FBQzFCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBRyxDQUFDLFdBQVcsRUFBRTthQUNqQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7YUFDeEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7YUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9