import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";

const MealDetailsScreen = (props: any) => {
    const mealID = props.navigation.state.params.mealId;
    const selectedMeal: any = MEALS.find(meal => meal.id === mealID);
    // function renderIngredients() {
    //     return selectedMeal.ingredients.map((ingredient: any) => (
    //         <Text key={ingredient} style={{ color: '#000', fontFamily: "Lato-Italic" }}>{ingredient}</Text>
    //     ));
    // }
    // function renderSteps() {
    //     return selectedMeal.recipe.map((step: any) => (
    //         <Text key={step} style={{ color: '#000', fontFamily: "Lato-Italic" }}>{step}</Text>
    //     ));
    // }
    const ListItems = (props: any) => {
        return <View style={styles.listItems}>
            <Text style={{ color: '#000', fontFamily: "Lato-Italic" }}>{props.children}</Text>
        </View>
    };

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={{ color: '#000', fontFamily: "Lato-Italic" }}>{selectedMeal.duration}mins</Text>
                <Text style={{ color: '#000', fontFamily: "Lato-Italic" }}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={{ color: '#000', fontFamily: "Lato-Italic" }}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>


            <Text style={styles.title} >Ingredients</Text>
            {/* <View>
                {renderIngredients()}
            </View> */}
            {selectedMeal.ingredients.map((ingredient: any) => (
                <ListItems key={ingredient}>{ingredient}</ListItems>
            ))}
            <Text style={styles.title}>Steps</Text>
            {/* <View>
                {renderSteps()}
            </View> */}
            {selectedMeal.recipe.map((step: any) => (
                <ListItems key={step}>{step}</ListItems>))}
        </ScrollView>

    );
};
MealDetailsScreen.navigationOptions = (navigationData: any) => {
    const mealID = navigationData.navigation.state.params.mealId;
    const selectedMeal: any = MEALS.find(meal => meal.id === mealID);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favourite'
                    iconName="star"
                    onPress={() => {
                        console.log('Mark as favorite')
                    }} />
            </HeaderButtons>

    };
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,
    },
    title: {
        color: '#000',
        fontFamily: "Lato-BoldItalic",
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: 'underline',
        padding: 10
    },
    listItems: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
});

export default MealDetailsScreen