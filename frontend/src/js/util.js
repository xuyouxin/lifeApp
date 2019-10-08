import _ from 'lodash';

export function dateFormat(date) {
    let fmt = "yyyy-MM-dd HH:mm:ss";
    const o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (const k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function parseDate(dateStr) {
    dateStr = dateStr.substring(0, 19).replace(/-/g, '/');
    return new Date(dateStr);
}

export function dateDiff(date1, date2) {
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();
    let diff = (timestamp1 - timestamp2) / 1000;
    const diffDesc = [];
    if (diff >= 3600) {
        diffDesc.push((diff/3600).toFixed(0) + '小时');
        diff = diff%3600;
    }
    if (diff >= 60) {
        diffDesc.push((diff/60).toFixed(0) + '分钟');
        diff = diff%60;
    }
    if (diff >= 0) {
        diffDesc.push(diff.toFixed(0) + '秒');
    }
    return diffDesc.join('')
}

export const toFix = (number, num = 2) => {
    return _.isNaN(number) ? number : _.toNumber(number.toFixed(num));
};
