import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from "../constants/Colors";

const CustomHeaderButton = (props: any) => {
    return (
        <HeaderButton {...props}
            IconComponent={AntDesign}
            iconSize={23}
            color='#ffd700'/>
    );
};

export default CustomHeaderButton;