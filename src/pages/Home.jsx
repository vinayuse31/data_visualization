import React from 'react'
import LineChart from '../components/LineChart'
import BarCharts from '../components/BarCharts'
import Data from '../utils/data'

const Home = () => {
  let lineXAxis = []
  let lineYAxis = []
  let barXAxis = []
  let barYAxis = []
  // this function remove the duplicate the value of data 
  const barResult = Data.filter(
    (thing, index, self) =>
      index ===
      self.findIndex((t) => t.Alcohol === thing.Alcohol)
  );
  //    this is using for loop to push values from array 
  for (let el of Data) {
    lineXAxis.push(el.Flavanoids);
    lineYAxis.push(el.Ash)
  }
  for (let el of barResult) {
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