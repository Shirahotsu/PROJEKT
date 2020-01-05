import React from "react"
import { Container, Text } from "native-base"
import DailyProducts from "./DailyProducts"
import { StyleSheet, ScrollView } from "react-native"

const ProductsList = () => {
	return (
    <ScrollView style={styles.listView}>

      <DailyProducts style={styles.dailyProductsView}></DailyProducts>
      <DailyProducts style={styles.dailyProductsView}></DailyProducts>
    </ScrollView>
	)
}
const styles = StyleSheet.create({
  listView:{
    padding:8
  },
  dailyProductsView:{
    paddingVertical:8
  }
})
export default ProductsList