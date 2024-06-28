import { Text, View, useColorScheme } from 'react-native'
import React from 'react'

interface TextCustomProps {
  text: string
  dark?: string
  light?: string
}

const TextCustom = ({ text, dark, light }: TextCustomProps) => {
  const scheme = useColorScheme()

  return <Text style={{ color: scheme === 'dark' ? dark || 'white' : light || 'black' }}>{text}</Text>
}

export default TextCustom
