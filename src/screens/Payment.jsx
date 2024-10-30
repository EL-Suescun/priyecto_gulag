import { View, FlatList,Text } from 'react-native'
import React from 'react'
import styles from '../styles/PaymentStyles'

const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerStart}>
        
      </View>
      <View style={styles.containerEnd}>
        <View style={styles.containerFirst}>
          <View style={styles.containerValue}>
            <Text>Valor: </Text>
            <Text>100000</Text>
          </View>
          <View style={styles.containerPaymentFormat}>
            
          </View>
        </View>
        <View style={styles.containerStart}>

        </View>
        <View style={styles.containerStart}>

        </View>
      </View>
    </View>
  )
}

export default Payment