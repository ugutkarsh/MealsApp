import React from "react";
import { View, Text, StyleSheet} from "react-native";

const FiltersScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text style ={{color:'black'}}>Filter Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default FiltersScreen