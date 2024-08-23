import React from "react";
import {
  useColorScheme,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from "react-native";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const isBackgroundDark = useColorScheme();
  //the default is light so (when we are comparing the ==="dark it
  // is giving us the false due to which hello world text is using the darkText")
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello world!!
        </Text>
      </View>
      <View
        style={[
          styles.container,
          isBackgroundDark ? styles.darkBackground : null
        ]}
      >
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello world!!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1 // Added flex style to SafeAreaView to fill the screen
  },
  container: {
    flex: 1,
    //flex default work top to bottom
    justifyContent: "center",
    //justify content work in top to bottom
    alignItems: "flex-start"
    //align Items work in left to right
  },
  whiteText: {
    color: "#ee1515" // Corrected hex color code
  },
  darkText: {
    color: "#000000"
  },
  darkBackground: {
    backgroundColor: "#000000"
  }
});
