import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const menuItems = [
  { id: 1, name: 'ยำหมูยอไข่แดงเค็ม', price: 89, image: 'https://i.ibb.co/ThPC2fS/yum1.jpg' },
  { id: 2, name: 'ยำแซลมอนปลาร้า', price: 119, image: 'https://i.ibb.co/tMY8L2s/yum2.jpg' },
  // เพิ่มรายการอื่น ๆ ได้ที่นี่
];

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>เมนูทั้งหมด</Text>
      {menuItems.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.foodImage} />
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>฿{item.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '500',
  },
  foodPrice: {
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 4,
  },
});
