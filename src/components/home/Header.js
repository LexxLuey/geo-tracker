import { Button, Text, TextInput, View } from 'react-native';
import messages from '../../constants/messages';

import styles from '../../styles/styles';



const Header = () => {

    return (
        <View style={styles.homeTextContainer}>
            <Text style={styles.homeTextStyle}>
                {messages.homeWorkTogether} {'\n'}
                <Text style={styles.homeTextStyleTwo}>
                    {messages.homeOpportunities}
                </Text>
            </Text>
            <View style={styles.homeSearchParentInputStyle}>

                <TextInput
                    style={styles.homeSearchInputStyle}
                    placeholderTextColor={'#999999'}
                    placeholder={messages.homeLookingFor}
                />
                <Button color='green' title='Search' />
            </View>
            <View style={{ marginVertical: 10 }}>
            </View>
        </View>
    )
};

export default Header;