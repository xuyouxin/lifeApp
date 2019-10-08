"use strict";
module.exports = () => {
    return async function error(ctx, next) {
        try {
            await next();
        }
        catch (err) {
            console.error('error>>', err.message);
            ctx.status = err.status || 500;
            ctx.body = {
                success: false,
                errMsg: err.message,
            };
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDcEIsT0FBTyxLQUFLLFVBQVUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ25DLElBQUk7WUFDRixNQUFNLElBQUksRUFBRSxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0JBQ1QsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3BCLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9