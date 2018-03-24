import React, { PureComponent } from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

export default class Home extends PureComponent {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={Actions.Detail}>
                    <Text>{`Go to Carousel`}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
