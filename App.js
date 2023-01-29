import React from 'react'
import { StyleSheet, View,FlatList,SafeAreaView } from 'react-native'
import ListeItem from './components/ListItem'
import articles from './dummies/article.json';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({ item }) => <ListeItem 
      imageUrl={item.imageUrl}
      title={item.title}
      author={item.author}      
      /> }
      keyExtractor={(item,index) => index.toString()}
      />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
