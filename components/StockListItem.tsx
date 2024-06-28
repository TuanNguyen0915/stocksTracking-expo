import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Feather from '@expo/vector-icons/Feather'
import TextCustom from './TextCustom'
import { AntDesign } from '@expo/vector-icons'
export interface Stock {
  symbol: string
  name: string
  open: string
  percent_change: string
}

interface StockListItemProps {
  stock: Stock
  index: number
}

const StockListItem = ({ stock, index }: StockListItemProps) => {
  const scheme = useColorScheme()
  const percentChange = Number(stock.percent_change)
  return (
    <Link href={`/${stock.symbol}`} asChild>
      <Pressable style={styles.container}>
        {/* LEFT SIDE CONTAINER */}
        <Animated.View entering={FadeInLeft.delay(index * 150).springify()} style={{ gap: 5 }}>
          <Text style={styles.textSymbol}>
            {stock.symbol}
            {'  '} <AntDesign name='staro' size={18} color='gray' />
          </Text>

          <Text style={{ color: 'gray' }}>{stock.name}</Text>
        </Animated.View>
        <Animated.View
          entering={FadeInRight.delay(index * 150).springify()}
          style={{
            alignItems: 'flex-end',
            gap: 5,
          }}>
          {/* <Text style={{ color: scheme === 'dark' ? 'white' : 'black' }}>${Number(stock.open).toFixed(2)}</Text> */}
          <TextCustom text={`$ ${Number(stock.open).toFixed(2)}`} />
          <View style={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
            <Feather
              name={percentChange > 0 ? 'arrow-up-right' : 'arrow-down-right'}
              size={16}
              color={percentChange > 0 ? 'green' : 'red'}
            />
            <Text style={{ color: percentChange > 0 ? 'green' : 'red' }}>{percentChange.toFixed(2)}%</Text>
          </View>
        </Animated.View>
      </Pressable>
    </Link>
  )
}

export default StockListItem

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSymbol: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4B70F5',
  },
})
