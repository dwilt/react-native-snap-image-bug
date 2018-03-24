import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { Image, View } from 'react-native';

import styles from './KidDetailAvatarCarouselItem.styles';

export default class KidDetailAvatarCarouselItem extends PureComponent {
    static propTypes = {
        avatar: PropTypes.shape({
            id: PropTypes.string,
            happy: PropTypes.number,
            neutral: PropTypes.number,
            sad: PropTypes.number,
        }).isRequired,
    };

    render() {
        const { avatar } = this.props;

        const source = avatar.get(`happy`);

        return (
            <View style={styles.avatarContainer}>
                <Image source={source} style={styles.avatar} />
            </View>
        );
    }
}
