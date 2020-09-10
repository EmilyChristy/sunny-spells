import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, Button, Alert, View } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>This is a headline</Text>
        <Text style={styles.body}>a text line goes here</Text>
        <Text style={styles.body}>another text line goes here</Text>
        <Text style={styles.body}>and the last text line goes here</Text>
        <Button
          title="Next >"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  headline: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
});
