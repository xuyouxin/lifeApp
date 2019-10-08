import axios from 'axios';
import path from 'path'
import {browserHistory} from "react-router";

const baseUrl = "http://cdwc.top:8088/";

export function get(url) {
    return new Promise(function (resolve, reject) {
        axios.get(baseUrl + url)
            .then(res => {
                const {code, message, data} = res.data;
                if (code === 200) {
                    resolve(data)
                } else if (code === 301) {
                    browserHistory.push('/login')
                } else {
                    reject({code, message})
                }
            });
    });
}

export function post(url, params) {
    return new Promise(function (resolve, reject) {
        axios.post(baseUrl + url, params)
            .then(res => {
                const {code, message, data} = res.data;
                if (code === 200) {
                    resolve(data)
                } else {
                    reject({code, message})
                }
            });
    });
}