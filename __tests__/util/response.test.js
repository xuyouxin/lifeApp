"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../../app/util/response");
test('test/model/response.test.js', () => {
    console.log(response_1.default.ok());
    console.log(response_1.default.ok({ name: 'travis' }));
    console.log(response_1.default.fail0('network is wrong'));
    console.log(response_1.default.fail(response_1.StatusEnums.code_500));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc3BvbnNlLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBOEQ7QUFFOUQsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyJ9