import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>New HomeScreen</Text>
      <Button
          onPress={()=>navigation.navigate("Component")}
          title={"Go to Component Screen"}
      />
          <TouchableOpacity onPress={()=>console.log("touched the touchable")}>
              <Text>This is touchable</Text>
          </TouchableOpacity>
      </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
