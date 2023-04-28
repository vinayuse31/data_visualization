import React from 'react'
import ReactEcharts from "echarts-for-react"
const BarCharts = ({axisData}) => {
   // get the axisData as a props 
   // this is the linchart json and import wine data from axisData 
  const option = {
    xAxis: {
      type: 'category',
      data: axisData.barXAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: axisData.barYAxis,
        type: 'bar'
      }
    ]
  };
  return (
    // this is the echart component 
    <div className="container">
    <h1 className="container-head" style={{marginTop:"1rem"}}>Bar Chart</h1>
      <ReactEcharts
      option={option}
      style={{ width:"100%", height: "500px",}}
    ></ReactEcharts>
  </div>
  )
}

export default BarCharts