import { View, Text } from 'react-native'
import React from 'react'

export const Center = ({children, style}) => {
  return (
    <View
      style={[
        {
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default Center