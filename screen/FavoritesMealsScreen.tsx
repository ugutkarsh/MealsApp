import React from "react";
import { View, Text, StyleSheet} from "react-native";

const FavoritesMealsScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text style={{color: 'black'}}>Favorites Meals Screen</Text>
        </View>
    );
};
FavoritesMealsScreen.navigationOptions ={
    headerTitle: 'Favorites Meals'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default FavoritesMealsScreen 