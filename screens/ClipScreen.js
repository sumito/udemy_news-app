import React from 'react'
import { StyleSheet,SafeAreaView,FlatList } from 'react-native'
import { useSelector } from "react-redux";
import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
});


export default ClipScreen = ( ) => {
    const user = useSelector( (state) => state.user);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={user.clips}
        renderItem={( {item}) => (
            <ListItem 
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={()=> navigation.navigate("Article",{article:item})}
            /> 
        )}
        keyExtractor={(item,index) => index.toString()}
        />

      </SafeAreaView>
    );
  };
