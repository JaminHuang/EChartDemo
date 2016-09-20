/**
 * 创建时间：2016年9月19日 14:21:06
 * 创建人：JaminHuang
 * 描述：用户数
 */

'use strict';
import React, { Component } from 'react';
import Echarts from 'echarts';

class MyUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                userCount : 1021522,
                doctorCount: 2522
            }
        };
    }

    render() {
        return (
            <div id="userInfo" style={{width:'1000px',height:'800px'}}>
                <span>用户数：{this.state.userInfo.userCount}</span>
                <br />
                <span>医生数：{this.state.userInfo.doctorCount}</span>
            </div>
        )
    }
}

export default MyUser;