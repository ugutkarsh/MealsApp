import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screen/CategoriesScreen';
import CategoriesMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailsScreen from '../screen/MealDetailsScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({

    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meals Categories',
        }
    },
    CategoryMeals: {
        screen: CategoriesMealsScreen,
    },
    MealDetails: {
        screen: MealDetailsScreen,
    },

},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
            },
            headerTintColor: '#ffffff',
        },
    }
);
// const Drawer = createDrawerNavigator();
// const MyDrawer=()=> {
//     return (
//       <Drawer.Navigator initialRouteName="Screen1">
//         <Drawer.Screen name="Screen1" component={MealsNavigator} />
//         <Drawer.Screen name="Screen2" component={FiltersScreen} />
//       </Drawer.Navigator>
//     );
//   }
// const FavNavigator = createStackNavigator({
//     Favorites: {
//         screen: FavoritesMealsScreen,
//     },
//     MealDetail: {
//         screen: MealDetailsScreen,
//     },
// },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: Colors.primaryColor,
//             },
//             headerTintColor: '#ffffff',
//         },
//     }
// );

export default createAppContainer(MealsNavigator);

