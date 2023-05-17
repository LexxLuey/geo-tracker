import { StyleSheet, I18nManager, Platform, Dimensions } from 'react-native';
import * as CONSTANT from '../constants/globalConstants';
I18nManager.forceRTL(false);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    // home
    homeSearchParentInputStyle: {
        borderColor: '#DDDDDD',
        borderWidth: 0.6,
        // paddingVertical: Platform.OS == 'ios' ? 10 : 0,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginRight: 8,
        padding: 8,
    },
    homeSearchInputStyle: {
        // fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        color: CONSTANT.whiteColor,
        width: '70%',
        marginRight: 8,
    },
    homeTextContainer: {
        backgroundColor: CONSTANT.secondaryColor,
        width: '100%',
        // marginTop: '5%',
        padding: 15,
        justifyContent: 'space-between',

    },
    homeTextStyle: {
        // fontFamily: 'Urbanist-SemiBold',
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: 0.5,
        color: CONSTANT.primaryColorTwo,
        textAlign: 'left',
    },
    homeTextStyleTwo: {
        // fontFamily: 'Urbanist-Bold',
        fontSize: 28,
        lineHeight: 38,
        letterSpacing: 0.5,
        color: CONSTANT.primaryColorTwo,
    },

})