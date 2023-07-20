import React from 'react';
import { View, Dimensions,Text} from 'react-native';
import {
    LineChart,
  } from "react-native-chart-kit";

export default function Graphic() {
 return (

<View>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#f67c7c",
      decimalPlaces: 2, // optional, defaults to 2dp
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#fff",
      color: (opacity = 1) => `#04BFDA`,
      labelColor: (opacity = 1) => `#848A9C`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: ""
      }
    }}
    bezier
    style={{
      borderRadius: 16,
      padding: 5
    }}
  />
</View>  


);
}