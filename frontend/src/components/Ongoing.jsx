import React, {Component} from "react"
import {Button, Progress} from 'antd-mobile'
import * as css from './Content.css'
import Clock from 'react-clock';
import classNames from 'classnames'
import {ongoing, stop} from '../js/activity.js'
import * as util from '../js/util.js'

export default class Ongoing extends Component {

    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.interval = setInterval(
            () => {
                this.setState({date: new Date()});
                ongoing('travis').then(res => {
                    if (res) {
                        const start = util.parseDate(res.start);
                        const diff = util.dateDiff(new Date(), start);
                        this.setState({id: res.id, itemName: res.itemName, diff});
                    } else {
                        this.setState({id: undefined, itemName: undefined});
                    }
                });
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    closeItem = (id) => {
        stop(id);
        this.setState({id: undefined, itemName: undefined});
        alert('success');
    };

    render() {
        const {id, itemName, diff} = this.state;
        return (
            <div>
                <Clock size={600} className={css.clock}
                       value={this.state.date}
                />
                <div className={css.time}>{util.dateFormat(this.state.date)}</div>
                {id ? (
                    <div>
                        <div className={css.progressTitle}>已{itemName}{diff}</div>
                        <div className={css.stopBtn}>
                            <Button type="warning" size='large' className={classNames(css.btn)}
                                    onClick={() => this.closeItem(id)}>结束{itemName}</Button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}