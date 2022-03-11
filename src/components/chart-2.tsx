import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOption} from '../shared/base-echart-option';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart2 =()=>{
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        let option = {
           ...baseEchartOption,
            grid: {
                x: px(100),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: [
                    '城关区公安局',
                    '七里河区公安局',
                    '西固区公安局',
                    '安宁区公安局',
                    '红古区公安局',
                    '永登县公安局',
                    '皋兰区公安局',
                    '榆中县公安局',
                    '新区公安局',
                ],
                axisLabel: {
                    fontSize: px(12),
                }
            },
            series: [
                {
                    name: '破案排名1',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '破案排名',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        myChart.setOption(createEchartsOptions(option));
    }, []);
    return(
        <div className="bordered 案件破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    )
}