import { Platform } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import messages from './src/constants/messages';


export default function Scrap() {
    return (
        <View style={style.container}>
            <View style={style.homeSearchParentInputStyle}>
                <TextInput style={style.searchInput} placeholder={messages.SEARCHBAR} />
                <Button color='green' title='Search' />
            </View>
            <View style={style.dataCards}>
                <Text> {messages.WELCOME} </Text>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
      backgroundColor: 'silver',
    },
    dataCards: {
      paddingTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    searchInput: {
      borderWidth: 1,
      borderColor: '#fff',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    homeSearchParentInputStyle: {
      borderBottomColor: '#DDDDDD',
      borderBottomWidth: 0.6,
      paddingVertical: Platform.OS == 'ios' ? 10 : 0,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    homeSearchInputStyle: {
      fontSize: 15,
      width: '90%',
    },
  });
  