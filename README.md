# react-native-snap-image-bug

To reproduce this bug, clone out the repo, install dependencies (yarn) and fire it up in a simulator on iOS (I was using an iPhone 6).

Notice that when you click on the Detail tab, the images in the carousel are missing until you begin to swipe. Then they instantly show up. 

Also, if you go into `App.js` and pull the 2 `<Scene>`s out of the `<Tabs>` component, and nest them directly in the `<Stack>`, the bug doesn't happen anymore:

```jsx
<Router>
    <Stack key="root">
        <Scene initial key="Home" component={Home}/>
        <Scene key="Detail" component={Detail}/>
    </Stack>
</Router>
```

Another thing that solves it is if you set the `Detail` scene as the initial one (even with the `<Tabs>`).

```jsx
<Router>
<Stack key="root">
    <Tabs
        swipeEnabled={false}
        key={`tabs`}
    >
        <Scene key="Home" component={Home}/>
        <Scene initial key="Detail" component={Detail}/>
    </Tabs>
</Stack
```
