import React, { PureComponent } from 'react';

import {
    View
} from 'react-native';

import {
    KidDetailAvatarCarousel
} from '../';

export default class Detail extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <KidDetailAvatarCarousel/>
            </View>
        );
    }
}
