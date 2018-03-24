import React, { PureComponent } from 'react';

import { View } from 'react-native';

import PropTypes from 'prop-types';

import SnapCarousel from 'react-native-snap-carousel';

import { KidDetailAvatarCarouselItem } from '../';

import styles, { carouselWidth } from './KidDetailAvatarCarousel.styles.js';

import { avatars } from '../avatars';

export default class KidDetailAvatarCarousel extends PureComponent {
    setCarouselRef = (ref) => (this.carousel = ref);

    renderCarouselItem = ({ item: avatar }) => {
        return <KidDetailAvatarCarouselItem avatar={avatar} />;
    };

    onSnapToItem = (i) => {
    };

    snapToPrev = () => {
        this.carousel.snapToPrev();
    };

    snapToNext = () => {
        this.carousel.snapToNext();
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <SnapCarousel
                        ref={this.setCarouselRef}
                        data={avatars}
                        renderItem={this.renderCarouselItem}
                        sliderWidth={carouselWidth}
                        itemWidth={carouselWidth / 2}
                        inactiveSlideOpacity={1}
                        onSnapToItem={this.onSnapToItem}
                        loop={true}
                        firstItem={2}
                        loopClonesPerSide={5}
                    />
                </View>
            </View>
        );
    }
}
