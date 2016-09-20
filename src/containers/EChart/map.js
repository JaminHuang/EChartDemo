/**
 * 创建时间：2016年9月19日 14:21:06
 * 创建人：JaminHuang
 * 描述：百度绘图—地图
 */

'use strict';
import React, { Component } from 'react';
import Echarts from 'echarts';

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option : {

            }
        };
    }

    componentDidMount(){
        let myLine = Echarts.init(document.getElementById('map'));
        myLine.setOption(this.state.option);
    }

    render() {
        return (
            <div id="map" style={{width:'1000px',height:'800px'}}></div>
        )
    }
}

export default MyMap;