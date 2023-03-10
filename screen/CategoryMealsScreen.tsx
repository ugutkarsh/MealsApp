import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoriesMealsScreen = (props: any) => {
    const renderMealItem = (itemData: any) => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate("MealDetails",{mealId: itemData.item.id})
                 }}
            />
        );
    }
    const catId = props.navigation.state.params.categoryId;
    //const catId = props.navigation.getParam('CategoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList                       
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};
CategoriesMealsScreen.navigationOptions = (navigationData: any) => {
    // const catId = navigationData.navigation.getParam('categoryId');
    const catId = navigationData.navigation.state.params.categoryId;
    const selectedCategory: any = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default CategoriesMealsScreen