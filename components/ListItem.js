import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View } from 'react-native';


const ListeItem = ({imageUrl,title,author}) => {

    return (
        <View style={styles.ItemContainer}>      
    
            <View style={styles.leftContainer}>      
                {!!imageUrl && (
                <Image 
                style={{width:100,height:100}}
                source={{uri:imageUrl}}
                />  
                )}
            </View>
            <View style={styles.rightContainer}>        
                <Text numberOfLines={3} style={styles.text}>{title}</Text>
                <Text style={styles.subText}>{author}</Text>
                <StatusBar style="auto" />
            </View>                
        </View>                
    );
  }

  export default ListeItem;
  

const styles = StyleSheet.create({

    ItemContainer: {
      height:100,
      width:'100%',
      borderColor:"gray",
      borderWidth:1,
      flexDirection:"row",
    },
    leftContainer: {
      width: 100
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
      justifyContent: "space-between",
  
    },
    text: {
      fontsize: 16
    },
    subText: {
      fontSize: 12,
      color: "gray"
    }
});

