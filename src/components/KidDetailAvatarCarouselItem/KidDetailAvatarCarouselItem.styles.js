import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    avatarContainer: {
        width: Dimensions.get('window').width / 2,
        alignItems: `center`,
    },
    avatar: {
        height: 153,
        width: 109,
    },
});
