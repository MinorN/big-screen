import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart1 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
    const data = [
        {name: '兰州新区', number: 10},
        {name: '榆中区', number: 10},
        {name: '皋兰区', number: 10},
        {name: '永登区', number: 10},
        {name: '红谷区', number: 10},
        {name: '安宁区', number: 10},
        {name: '西固区', number: 10},
        {name: '七里河区', number: 10},
        {name: '城关区', number: 10},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '兰州新区', number: getRandomInt(0,10)},
                {name: '榆中区', number: getRandomInt(0,10)},
                {name: '皋兰区', number: getRandomInt(0,10)},
                {name: '永登区', number: getRandomInt(0,10)},
                {name: '红谷区', number: getRandomInt(0,10)},
                {name: '安宁区', number: getRandomInt(0,10)},
                {name: '西固区', number: getRandomInt(0,10)},
                {name: '七里河区', number: getRandomInt(0,10)},
                {name: '城关区', number: getRandomInt(0,10)},
            ];
            x(newData);
        }, 1500);
    }, []);

    const x = (data) => {
        let option = {
            ...baseEchartOption,
            xAxis: {
                data: data.map(item => item.name),
                axisTick: {show: false},
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        }
                        return val;
                    }
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#093a70'}
                },
                axisLabel: {
                    fontSize: px(12),
                }
            },
            series: [
                {
                    type: 'bar',
                    data: data.map(item => item.number)
                }
            ]
        };
        myChart.current.setOption(createEchartsOptions(option));
    };

    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);
    return (
        <div className="bordered 案发派出所管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"/>
        </div>
    );
};