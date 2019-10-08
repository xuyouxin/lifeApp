import React, {Component} from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Analysis extends Component {
    componentDidMount() {
        this.setActivity();
        this.setSleep();
    }

    setActivity() {
        // 基于准备好的dom，初始化echarts实例
        const activity = echarts.init(document.getElementById('activity'));
        // 绘制图表
        activity.setOption({
            title: {text: '活动花费时间'},
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            series: [{
                name: '活动',
                type: 'pie',
                data: [{
                    value: 100,
                    name: "看书"
                }, {
                    value: 60,
                    name: "写代码"
                }, {
                    value: 45,
                    name: "散步"
                }, {
                    value: 100,
                    name: "整理房间"
                }, {
                    value: 400,
                    name: "睡觉"
                }, {
                    value: 60,
                    name: "打游戏"
                }]
            }]
        });
    }

    setSleep() {
        // 基于准备好的dom，初始化echarts实例
        const sleep = echarts.init(document.getElementById('sleep'));
        // 绘制图表
        sleep.setOption({
            title: {text: '每天入睡时间'},
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c}"
            },
            xAxis: {
                data: ["1号", "2号", "3号", "4号", "5号", "6号", "1号", "2号", "3号", "4号"]
            },
            yAxis: {
                // type: 'value',
                // axisLabel: {
                //     formatter: '{value} 分钟'
                // }
            },
            series: [{
                name: '睡觉时间',
                type: 'line',
                // smooth: true,
                data: [130, 140, 150, 135, 160, 240, 130, 145, 110, 100]
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="activity" style={{width: 800, height: 800}}></div>
                <div id="sleep" style={{width: 1000, height: 600}}></div>
            </div>

        );
    }
}