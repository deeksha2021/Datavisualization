
import React from "react";
import ReactEcharts from "echarts-for-react"; 
import Records from './Wine-Data.json';
import BarChart from './Barchart'
function App() { 
  const { useState } = React;
  const [myColorArr, colorobj] = useState([]);
  const [myHueArr, hueobj] = useState([]);
 //Mapping the "color intensity" from ./Wine-Data-json 
  Records.map((item)=>{
    myColorArr.push(item["Color intensity"]);
    })
   
  //Mapping the "Hue" from ./Wine-Data-json 
  Records.map((item)=>{
    myHueArr.push(item.Hue);
   }) 
   console.log(myHueArr);
    
   const option = {

      xAxis: {name:"color intensity" },
      yAxis: {name:"Hue"},
      series: [
      {
        symbolSize: 20,
      
        data: [
       //using the 30 values of colorintensity and hue of ./Wine-data-json
        [myColorArr[0],myHueArr[0]],
        [myColorArr[1],myHueArr[1]],
        [myColorArr[2],myHueArr[2]],
        [myColorArr[3],myHueArr[3]],
        [myColorArr[4],myHueArr[4]],
        [myColorArr[5],myHueArr[5]],
        [myColorArr[6],myHueArr[6]],
        [myColorArr[7],myHueArr[7]],
        [myColorArr[9],myHueArr[9]],
        [myColorArr[8],myHueArr[8]],
        [myColorArr[10],myHueArr[10]],
        [myColorArr[11],myHueArr[11]],
        [myColorArr[12],myHueArr[12]],
        [myColorArr[13],myHueArr[13]],
        [myColorArr[14],myHueArr[14]],
        [myColorArr[15],myHueArr[15]],
        [myColorArr[16],myHueArr[16]],
        [myColorArr[17],myHueArr[17]],
        [myColorArr[18],myHueArr[18]],
        [myColorArr[19],myHueArr[19]],
        [myColorArr[20],myHueArr[20]],
        [myColorArr[21],myHueArr[21]],
        [myColorArr[22],myHueArr[22]],
        [myColorArr[23],myHueArr[23]],
        [myColorArr[24],myHueArr[24]],
        [myColorArr[25],myHueArr[25]],
        [myColorArr[26],myHueArr[26]],
        [myColorArr[27],myHueArr[27]],
        [myColorArr[28],myHueArr[28]],
        [myColorArr[29],myHueArr[29]],
        [myColorArr[30],myHueArr[30]],

        
        ],
        // type of chart as scatter chart
        type: 'scatter' , 
        itemStyle: {
          // Color of the point.
          color: 'red'
        },
      
      }
   ] 
 };
return(
<div>
   <h1 style={{color: "red" ,textAlign: "center"}}>
          Data Visualization
   </h1>
   
  <div comment="displaying barchart">
    <h2 style={{color: "red" }}>BAR - CHART</h2>
           
             <BarChart/>  
  </div>
  <div comment="displaying scatterchart">
   <h2 style={{color: "red" }}>SCATTER - CHART</h2>
        <ReactEcharts option={option } />
  </div>
</div>
)
}
export default App;



