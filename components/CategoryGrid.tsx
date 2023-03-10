import react from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Pressable } from 'react-native';

const CategoryGridTile = (props: any) => {

    return (
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={styles.gridItem}
            onPress={props.onSelect}
        >
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text style={styles.title}>{props.title}</Text>
            </View >
        </Pressable >
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        width: 150,
        padding: 10,
        margin: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        elevation: 5,
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Lato-BoldItalic',
        color: 'black',
        textAlign: 'right',
    }
});

export default CategoryGridTile;