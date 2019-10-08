import React, {Component} from "react"
import {Button, WhiteSpace, Modal} from 'antd-mobile'
import * as css from './Content.css'
import {start} from '../js/activity.js'

export default class Items extends Component {
    render() {
        return (<div>
            <MyEvent item='睡觉' stopName='起床'/>
            <MyEvent item='看书' stopName='结束看书'/>
            <MyEvent item='敲代码' stopName='结束敲代码'/>
            <MyEvent item='运动' stopName='结束运动'/>
            <MyEvent item='出门' stopName='回家'/>
            <MyEvent item='玩游戏' stopName='结束玩游戏'/>
        </div>)
    }
}

class MyEvent extends Component {
    render() {
        const {item} = this.props;
        return (
            <div>
                <Button type="primary" size='large' className={css.btn} onClick={() =>  startItem(item)}>开始{item}</Button>
                {/*<WhiteSpace size='sm'/>*/}
                {/*<Button type="warning" size='large' className={css.btn}>{stopName}</Button>*/}
                <WhiteSpace size='xl'/>
            </div>
        )
    }
}

function startItem(item) {
    start('travis', item).then(()=> alert('success'), ({message}) => alert(message))
    // start('travis', item).then(() => Modal.alert('提示', '操作成功', [{ text: '确定', onPress: () => console.log('确定'), style: 'default' }]),
    //     ({message}) => Modal.alert('提示', message, [{ text: '确定', onPress: () => console.log('确定'), style: 'default' }]))
}