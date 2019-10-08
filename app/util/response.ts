export default class Response {
    constructor(public code: number, public message: string, public data?: any) {}

    static ok(data?) {
        return new Response(StatusEnums.code_200.code, StatusEnums.code_200.message, data);
    }

    static fail(status: StatusEnum) {
        return new Response(status.code, status.message);
    }

    static fail0(message: string) {
        return new Response(StatusEnums.code_500.code, message);
    }
}

class StatusEnum {
    constructor(public code: number, public message: string) {

    }
}

export class StatusEnums {
    static code_200 = new StatusEnum(200, 'success');
    static code_500 = new StatusEnum(500, 'fail');
}

