import { Stack, router, useLocalSearchParams } from 'expo-router'
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import top5 from '@/assets/data/top5.json'
import StockListItem from '@/components/StockListItem'
import Graph from '@/components/Graph'
const StockDetails = () => {
  const { symbol } = useLocalSearchParams()
  const scheme = useColorScheme()
  const stock = Object.values(top5).find((stock) => stock.symbol === symbol)
  if (!stock) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Err', headerBackTitle: 'Home' }} />
        <Text style={{ color: 'green' }}> Sorry, stock not found</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable
            style={[styles.button, { backgroundColor: scheme === 'dark' ? '#83B4FF' : 'blue' }]}
            onPress={() => router.push('/')}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Back Home</Text>
          </Pressable>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: stock.symbol, headerBackTitle: 'Stocks' }} />
        <StockListItem stock={stock} index={1} />
        <Graph />


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Pressable
            style={[styles.button, { backgroundColor: scheme === 'dark' ? '#83B4FF' : 'blue' }]}
            onPress={() => router.push('/')}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Back Home</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

export default StockDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '50%',
  },
})
