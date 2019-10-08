import { app, assert } from 'egg-mock/bootstrap';
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
        const result = await app.httpRequest()
            .post('/activity/start')
            .field('itemName', 'study')
            .field('userName', 'travis')
            .expect(200);
        assert(result.body.code === 200);
    });

    it('should can get result of ongoing', async () => {
        const result = await app.httpRequest()
            .get('/activity/ongoing')
            .field('userName', 'travis')
            .expect(200);
        assert(result.body.code === 200);
        console.log('result>>', result)
    });
});
