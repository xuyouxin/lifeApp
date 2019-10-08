"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    static ok(data) {
        return new Response(StatusEnums.code_200.code, StatusEnums.code_200.message, data);
    }
    static fail(status) {
        return new Response(status.code, status.message);
    }
    static fail0(message) {
        return new Response(StatusEnums.code_500.code, message);
    }
}
exports.default = Response;
class StatusEnum {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}
class StatusEnums {
}
exports.StatusEnums = StatusEnums;
StatusEnums.code_200 = new StatusEnum(200, 'success');
StatusEnums.code_500 = new StatusEnum(500, 'fail');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLFFBQVE7SUFDekIsWUFBbUIsSUFBWSxFQUFTLE9BQWUsRUFBUyxJQUFVO1FBQXZELFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFOUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFLO1FBQ1gsT0FBTyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFrQjtRQUMxQixPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQWU7UUFDeEIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUFkRCwyQkFjQztBQUVELE1BQU0sVUFBVTtJQUNaLFlBQW1CLElBQVksRUFBUyxPQUFlO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRXZELENBQUM7Q0FDSjtBQUVELE1BQWEsV0FBVzs7QUFBeEIsa0NBR0M7QUFGVSxvQkFBUSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxQyxvQkFBUSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyJ9