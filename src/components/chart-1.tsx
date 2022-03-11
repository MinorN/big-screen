import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        let option = {
            textStyle: {
                fontSize: px(12),
                color: '#79839e',
            },
            tooltip: {},
            xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
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
            grid: {
                x: px(40),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            series: [
                {
                    type: 'bar',
                    data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
                }
            ]
        };
        myChart.setOption(option);
    }, []);
    return (
        <div className="bordered 案发派出所管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};