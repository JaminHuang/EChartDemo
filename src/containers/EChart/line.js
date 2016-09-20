/**
 * 创建时间：2016年9月19日 14:21:06
 * 创建人：JaminHuang
 * 描述：百度绘图—折线图
 */

'use strict';
import React, { Component } from 'react';
import Echarts from 'echarts';

class MyLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option : {
                title: {
                    text: '活跃度'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['用户活跃度','医生活跃度']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'用户活跃度',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'医生活跃度',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    }
                ]
            }
        };
    }

    componentDidMount(){
        let myLine = Echarts.init(document.getElementById('line'));
        myLine.setOption(this.state.option);
    }

    render() {
        return (
            <div id="line" style={{width:'1000px',height:'800px'}}></div>
        )
    }
}

export default MyLine;