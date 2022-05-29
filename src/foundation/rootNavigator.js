import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text testID="homeTitle">Home</Text>
      <Button
        title="Go to store" testID="storeBtn"
        onPress={() => navigation.navigate("Store")}
      />
    </View>
  );
}

function Store({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text testID="storeTitle">Store</Text>
      <Button title="Go to cart" testID="cartBtn"  onPress={() => navigation.navigate("Cart")} />
      <Button title="Go back" testID="backBtn" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Cart({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text testID="cartTitle">Cart</Text>
      <Button title="Go back" testID="backBtn" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Store"} component={Store} />
        <Stack.Screen name={"Cart"} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
