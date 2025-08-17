import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GridExampleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}><Text style={styles.text}>เมนู 1</Text></View>
      <View style={styles.item}><Text style={styles.text}>เมนู 2</Text></View>
      <View style={styles.item}><Text style={styles.text}>เมนู 3</Text></View>
      <View style={styles.item}><Text style={styles.text}>เมนู 4</Text></View>
      <View style={styles.item}><Text style={styles.text}>เมนู 5</Text></View>
      <View style={styles.item}><Text style={styles.text}>เมนู 6</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',       // เรียงแนวนอน
    flexWrap: 'wrap',           // ให้สามารถตัดขึ้นบรรทัดใหม่ได้
    justifyContent: 'space-around', // กระจายองค์ประกอบให้เว้นระยะเท่าๆ กัน
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    width: '40%',               // กำหนดให้ใกล้เคียง 2 คอลัมน์ (เหลือระยะห่าง)
    height: 100,
    backgroundColor: '#4CAF50',
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GridExampleScreen;