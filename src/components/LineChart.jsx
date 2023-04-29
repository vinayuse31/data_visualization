import ReactEcharts from "echarts-for-react"
function LineChart({axisData}) {
  // get the axisData as a props 
  // this is the linchart json and import wine data from axisData 
    const option = {
      xAxis: {
        type: 'category',
        data:axisData.lineXAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data:axisData.lineYAxis,
          type: 'line'
        }
      ]
    };
  return (
    // this is the echart component 
  <div className="container">
    <h1 className="container-head">Line Chart</h1>
      <ReactEcharts
      option={option}
      style={{ width:"100%", height: "600px",}}
    ></ReactEcharts>
  </div>
  )
}

export default LineChart