import { FlatList, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { Stack } from 'expo-router'
import top5 from '@/assets/data/top5.json'
import StockListItem from '@/components/StockListItem'
export default function TabOneScreen() {
  const stocks = Object.values(top5)
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Stocks' }} />
      <FlatList
        contentContainerStyle={{ padding: 10, gap: 20 }}
        data={stocks}
        renderItem={({ item, index }) => <StockListItem stock={item} index={index} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
