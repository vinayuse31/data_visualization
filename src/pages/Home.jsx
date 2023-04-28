import React from 'react'
import LineChart from '../components/LineChart'
import BarCharts from '../components/BarCharts'
import Data from '../utils/data'

const Home = () => {
  let lineXAxis = []
  let lineYAxis = []
  let barXAxis = []
  let barYAxis = []
  //    this is using for loop to push values from array 
  for (let el of Data) {
    lineXAxis.push(el.Ash);
    lineYAxis.push(el.Flavanoids);
    barXAxis.push(el.Alcohol);
    barYAxis.push(el.Magnesium)
  }
  // making axisData object to export values 
  let axisData = {
    lineXAxis: lineXAxis,
    lineYAxis: lineYAxis,
    barXAxis: barXAxis,
    barYAxis: barYAxis
  }
  return (
    <>
    {/* pass the obeject as a props in the component */}
      <LineChart axisData={axisData} />
      <BarCharts axisData={axisData} />
    </>
  )
}

export default Home