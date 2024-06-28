import { StyleSheet, View, useColorScheme } from 'react-native'
import { Text } from './Themed'
import { GraphPoint, LineGraph } from 'react-native-graph'

import timeSeries from '@/assets/data/timeseries.json'
import { MonoText } from './StyledText'
import { useState } from 'react'
import Animated, { FadeInUp } from 'react-native-reanimated'
const Graph = () => {
  const points: GraphPoint[] = timeSeries.values.map((item) => ({
    date: new Date(item.datetime),
    value: Number(item.close),
  }))
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(points[points.length - 1])
  const scheme = useColorScheme()

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point)
  }
  return (
    <Animated.View entering={FadeInUp.springify().duration(3000)}>
      <Text>Graph</Text>
      <MonoText style={{ color: 'green', fontSize: 20 }}>${selectedPoint?.value.toFixed(2)}</MonoText>
      <Text>{selectedPoint?.date.toDateString()}</Text>
      <LineGraph
        style={{ width: '100%', height: 300, backgroundColor: scheme === 'light' ? '#F5F7F8' : '#000' }}
        points={points}
        animated={true}
        color='#017560'
        gradientFillColors={['#0175605D', '#7476df00']}
        enablePanGesture
        onPointSelected={onPointSelected}
        indicatorPulsating
        enableIndicator
      />
    </Animated.View>
  )
}

export default Graph

const styles = StyleSheet.create({})
