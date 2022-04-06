import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.viewAlignment}>
        <Text style={styles.text}>New HomeScreen</Text>
      <Button
          onPress={()=>navigation.navigate("Component")}
          title={"Go to Component Screen"}
      />
          <Button
          onPress={()=>navigation.navigate("List")}
          title={"Go to List Screen"}
      />
          <Button
          onPress={()=>navigation.navigate("Image")}
          title={"Go to Image Screen"}
      />

      </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewAlignment :{
    marginVertical:50
  }
});

export default HomeScreen;
