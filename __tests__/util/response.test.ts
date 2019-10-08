import Response, {StatusEnums} from '../../app/util/response';

test('test/model/response.test.js', () => {
    console.log(Response.ok());
    console.log(Response.ok({name: 'travis'}));
    console.log(Response.fail0('network is wrong'));
    console.log(Response.fail(StatusEnums.code_500));
});
