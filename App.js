/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Router,
    Scene,
    Stack,
    Tabs,
} from 'react-native-router-flux';

import {
    Home,
    Detail
} from './src/components';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
<Router>
    <Stack key="root">
        <Tabs
            swipeEnabled={false}
            key={`tabs`}
        >
            <Scene key="Home" component={Home}/>
            <Scene key="Detail" component={Detail}/>
        </Tabs>
    </Stack>
</Router>
        );
    }
}
