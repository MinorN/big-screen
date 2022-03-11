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
                boundaryGap: [0, 0.01],
                splitLine:{show:false},
                axisLabel: {show:false}
            },
            yAxis: {
                type: 'category',
                axisTick:{show:false},
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
                    formatter(val) {
                        return val.replace('公安局','\n公安局')
                    }
                }
            },
            series: [
                {
                    name: '破案排名1',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6,7,8,9],
                    itemStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                            offset:0,
                            color:'#2034f9',
                        },{
                            offset:1,
                            color:'#04a1ff',
                        }]),
                    }
                },
                {
                    name: '破案排名',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6,7,8,9],
                    itemStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                            offset:0,
                            color:'#b92ae8',
                        },{
                            offset:1,
                            color:'#6773e7',
                        }]),
                    }
                }
            ]
        };
        myChart.setOption(createEchartsOptions(option));
    }, []);
    return(
        <div className="bordered 案件破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
                <div className="legend">
                    <span className="first"/>破案排名1
                    <span className="second"/>破案排名2
                </div>
        </div>
    )
}