/**
 * 创建时间：2016年9月19日 14:21:06
 * 创建人：JaminHuang
 * 描述：百度绘图—饼图
 */

'use strict';
import React, { Component } from 'react';
import Echarts from 'echarts';

class MyPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option : {
                title : {
                    text: '百度绘图—饼图',
                    subtext: '虚构数据',
                    x: 'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: '{a} <br />{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['20岁以下','20-40岁','40-50岁','50-60岁','60岁以上']
                },
                series : [
                    {
                        name: '年龄层分析',
                        type: 'pie',
                        radius: '40%',
                        center: ['30%','30%'],
                        data: [
                            {value:560, name:'20岁以下'},
                            {value:2080, name:'20-40岁'},
                            {value:1040, name:'40-50岁'},
                            {value:800, name:'50-60岁'},
                            {value:3520, name:'60岁以上'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '地区层分析',
                        type: 'pie',
                        radius: '40%',
                        center: ['30%','75%'],
                        data: [
                            {value:2160, name:'四川'},
                            {value:3520, name:'重庆'},
                            {value:2320, name:'其他'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '用户分析',
                        type: 'pie',
                        radius: '40%',
                        center: ['75%','30%'],
                        data: [
                            {value:4800, name:'免费用户'},
                            {value:1200, name:'年付费3K'},
                            {value:2000, name:'年付费1K'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '系统分析',
                        type: 'pie',
                        radius: '40%',
                        center: ['75%','75%'],
                        data: [
                            {value:3720, name:'安卓'},
                            {value:3400, name:'IOS'},
                            {value:880, name:'其他'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        };
    }

    componentDidMount(){
        let myChart = Echarts.init(document.getElementById('pie'));
        myChart.setOption(this.state.option);
    }

    render() {
        return (
                <div id="pie" style={{width:'1000px',height:'800px'}}></div>
        )
    }
}

export default MyPie;