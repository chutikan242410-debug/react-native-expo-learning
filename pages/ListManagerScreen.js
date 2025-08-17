import { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

const ListManagerScreen = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter item"
                value={inputValue}
                onChangeText={setInputValue}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="Add Item" onPress={addItem} />

            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                        <Text>{item}</Text>
                        <Button title="Remove" onPress={() => removeItem(index)} />
                    </View>
                )}
            />
        </View>
    );
};

export default ListManagerScreen;