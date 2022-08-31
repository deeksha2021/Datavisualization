import React from 'react'
import ReactEcharts from "echarts-for-react"; 
import Records from './Wine-Data.json';
function BarChart() { 
    
    const { useState } = React;
    const [myAlcohol, alcoholobj] = useState([]);
    const [myMalicAcid, malicobj] = useState([]);
    Records.map((item)=>{
        
        myAlcohol.push(item.Alcohol);
       }) 
      // console.log(myAlcohol)
    Records.map((item)=>{
         
        myMalicAcid.push(item['Malic Acid']);
       })  
   
    const average = myMalicAcid.reduce((a, b) => a + b, 0) / myAlcohol.length;
    //console.log(average);

    const option = {
        color: [
            '#c23531',
            '#2f4554',
            '#61a0a8',
            '#d48265',
            '#91c7ae',
            '#749f83',
            '#ca8622',
            '#bda29a',
            '#6e7074',
            '#546570',
            '#c4ccd3'
          ],
        
        xAxis: {
         type: 'category',
         data: [myAlcohol],
        name:'Alcohol'
         },
        yAxis: {
          type: 'value',
          name:'Malic Acid'
         },
         series: [
          {
          
         data:[average],
         type: 'bar',
         showBackground: true,
       
         backgroundStyle: {
         color: 'rgba(180, 180, 180, 0.2)'
          
         }
       }
    ]
  };
//export default BarChart

return <ReactEcharts option={option } />;} 
export default BarChart;