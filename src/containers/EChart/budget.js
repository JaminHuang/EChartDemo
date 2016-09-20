/**
 * 创建时间：2016年9月19日 14:21:06
 * 创建人：JaminHuang
 * 描述：百度绘图—柱形图111
 */

'use strict';
import React, { Component } from 'react';
import Echarts from 'echarts';

class MyBudget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option : {
                tooltip: {
                    trigger: 'item'
                },
                toolbox:{
                    show: true,
                    feature: {
                        mark: {show:true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                legend: {
                    data:['用户活跃度', '医生活跃度'],
                    itemGap: 5
                },
                grid: {
                    top: '12%',
                    left: '1%',
                    right: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type : 'category',
                        data : ['用户活跃度','医生活跃度']
                    }
                ],
                yAxis: [
                    {
                        type : 'value',
                        name : '人数',
                        axisLabel: {
                            formatter: function (a) {
                                a = +a;
                                return isFinite(a)
                                    ? Echarts.format.addCommas(+a)
                                    : '';
                            }
                        }
                    }
                ],
                dataZoom: [
                    {
                        show: true,
                        start: 0,
                        end: 100
                    },
                    {
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 30,
                        height: '80%',
                        left: '93%',
                        start: 1,
                        end: 100
                    }
                ],
                series : [
                    {
                        name: '用户活跃度',
                        type: 'bar',
                        data: ['1021522','951254','845625','1054625','1154982','984623','975546','966652','945256','1054268','1184562','987526','846523']
                    },
                    {
                        name: '医生活跃度',
                        type: 'bar',
                        data: ['2522','2410','2100','2300','2600','2900','1500','1700','2004','2016','3700','2500','2100']
                    }
                ]
            }
        };
    }

    componentDidMount(){
        let myBuget = Echarts.init(document.getElementById('budget'));
        myBuget.setOption(this.state.option);
    }

    render() {
        return (
            <div id="budget" style={{width:'1000px',height:'800px'}}></div>
        )
    }
}

export default MyBudget;
