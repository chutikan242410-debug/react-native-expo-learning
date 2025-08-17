import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ชุติกาญจน์ วุฒิไชย ทธด.102</Text>
      <Text> </Text>
      <Button
        title="ไปที่หน้าหลัก"
        onPress={() => navigation.navigate("ไปที่หน้าหลัก")}
      />
      <Text> </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Text> </Text>
      <Button
        title="กดสั่ง"
        onPress={() => navigation.navigate("Menu")}
      />
      <Text> </Text>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
        />
        <Text> </Text>
      <Button
        title="Go to List Manager"
        onPress={() => navigation.navigate("ListMangerScreen")}

      />
      <Button
        title="Go to stle Example"
        onPress={() => navigation.navigate("StyleExampleScreen")}
        />
      <Button
        title="Go to FlexboxExampleScreen"
        onPress={() => navigation.navigate("FlexboxExampleScreen")}
        />
        <Text> </Text>
        <Button
        title="Go to GirdExampleScreen"
        onPress={() => navigation.navigate("GridExampleScreen")}
        />
        <Text> </Text>
    </View>
  );
}
