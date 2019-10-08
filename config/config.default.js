"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1569726327483_2758';
    // add your middleware config here
    config.middleware = ['error'];
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.mongoose = {
        client: {
            url: 'mongodb://cdwc.top/life',
            options: {
                poolSize: 5,
                socketOptions: {
                    autoReconnect: true,
                },
                reconnectTries: 30,
                reconnectInterval: 10000,
            },
        },
    };
    config.static = {
        prefix: '/public/',
        dir: path.join(appInfo.baseDir, 'app/public'),
    };
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        },
    };
    config.alinode = {
        // 从 `Node.js 性能平台` 获取对应的接入参数
        enable: true,
        appid: '81960',
        secret: 'af0e08ba37f4c2122ef6f2f5e54c901d6e1e83aa',
    };
    // add your user config here
    const userConfig = {
    // myAppName: 'egg',
    };
    return Object.assign(Object.assign({}, config), userConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUc3Qjs7R0FFRztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDdkM7OztRQUdJO0lBQ0osTUFBTSxNQUFNLEdBQUcsRUFBZ0MsQ0FBQztJQUVoRCx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELGtDQUFrQztJQUNsQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUUsT0FBTyxDQUFFLENBQUM7SUFFaEMsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSztTQUNkO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFLHlCQUF5QjtZQUM5QixPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsYUFBYSxFQUFFO29CQUNiLGFBQWEsRUFBRSxJQUFJO2lCQUNwQjtnQkFDRCxjQUFjLEVBQUUsRUFBRTtnQkFDbEIsaUJBQWlCLEVBQUUsS0FBSzthQUN6QjtTQUNGO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsVUFBVTtRQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztLQUM5QyxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLGlCQUFpQixFQUFFLFVBQVU7UUFDN0IsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLDZCQUE2QjtRQUM3QixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLDBDQUEwQztLQUNuRCxDQUFDO0lBRUYsNEJBQTRCO0lBQzVCLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtLQUNyQixDQUFDO0lBRUYsdUNBQ0ssTUFBTSxHQUNOLFVBQVUsRUFDYjtBQUNKLENBQUMsQ0FBQyJ9