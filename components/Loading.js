import React from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
    container:{
        postion:"absolute",
        top: 0,
        left:0,
        width: "100%",
        height: "100%",
        backgroundCollor: 'rgba(255,255,0.5)',
        alignItems:'center',
        justifyContent:'center',
    }
});


export const Loading = () => {
    return(
        <View sytle={styles.container}>
            <ActivityIndicator size="large"  />
        </View>
    )
}

