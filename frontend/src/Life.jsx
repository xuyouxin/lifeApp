import React, {Component} from 'react'
import * as css from './Life.css'
import {Flex} from 'antd-mobile'
import * as _ from 'lodash'
import Ongoing from './components/Ongoing.jsx'
import Items from  './components/Items.jsx'
import Analysis from './components/Analysis.jsx'

const tabDatas = [
    {
        title: '进行中',
        url: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedUrl: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        selected: false,
        content: <Ongoing />
    },
    {
        title: '项目',
        url: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selectedUrl: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
        selected: false,
        content: <Items />
    },
    {
        title: '数据分析',
        url: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selectedUrl: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
        selected: false,
        content: <Analysis />
    }
];

export default class Life extends Component {

    constructor(props) {
        super(props);
        _.set(tabDatas, [0, 'selected'], true);
        this.state = {tabDatas, selectedIndex: 0};
    }

    switchTab = (index) => {
        _.forEach(tabDatas, tabData => _.assign(tabData, {selected: false}));
        _.set(tabDatas, [index, 'selected'], true);
        this.setState({tabDatas, selectedIndex: index})
    };

    render() {
        const {tabDatas, selectedIndex} = this.state;
        const content = _.get(tabDatas, [selectedIndex, 'content']);
        return (
            <div>
                <div className={css.content}>{content}</div>
                <div className={css.items}>
                    <Flex>
                        {_.map(tabDatas, (tabData, index) => <TabItem {...tabData} index={index} key={index}
                                                                      switchTab={this.switchTab}/>)}
                    </Flex>
                </div>
            </div>
        )
    }

}

class TabItem extends Component {
    render() {
        const {url, selectedUrl, title, selected, switchTab, index} = this.props;
        return (
            <Flex.Item>
                <div className={css.item} onClick={() => switchTab(index)}>
                    {selected ? <Icon url={selectedUrl}/> : <Icon url={url}/>}
                </div>
                <div className={css.itemTitle}>{title}</div>
            </Flex.Item>
        )
    }
}

function Icon({url}) {
    return (
        <div style={{
            width: '82px',
            height: '82px',
            background: `url(${url}) center center /  80px 80px no-repeat`
        }}
        />
    )
}
