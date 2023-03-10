import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGrid";

const CategoriesScreen = (props: any) => {
    const renderGridItem = (itemdata: any) => {
        return (
            <CategoryGridTile
                title={itemdata.item.title}
                color={itemdata.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals',
                        { categoryId: itemdata.item.id })
                } 
                }
            />);
    };
    // const Screen1 = () => {
    //     const navigation = useNavigation();
    //     return (
    //         <Button
    //             title="Open drawer"
    //             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    //         />
    //     );
    // }
    return (

        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoriesScreen;