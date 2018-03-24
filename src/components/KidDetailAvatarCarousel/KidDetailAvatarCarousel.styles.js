import { StyleSheet, Dimensions } from 'react-native';

const gutter = 16;
const windowWidth = Dimensions.get(`window`).width;

export const carouselWidth = windowWidth;
const carouselHeight = windowWidth * 0.565333333;
const carouselButton = {
    position: `absolute`,
    top: 0,
    bottom: 0,
    width: windowWidth / 3,
};

export default StyleSheet.create({
    container: {
        height: carouselHeight,
        width: windowWidth,
        flex: 1,
        position: `relative`,
        justifyContent: `space-between`,
    },
    linearGradient: {
        position: `absolute`,
        height: 106,
        bottom: 0,
        width: windowWidth,
        opacity: 1,
    },
    heading: {
        textAlign: `center`,
        marginTop: gutter * 1.5,
    },
    snapToPrev: {
        ...carouselButton,
        left: 0,
    },
    snapToNext: {
        ...carouselButton,
        right: 0,
    },
});
