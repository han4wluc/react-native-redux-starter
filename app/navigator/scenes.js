
import React, { Component } from 'react';

import {
  NavigationExperimental,
} from 'react-native';

import containers from '../containers';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class Scenes extends React.Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props: any, context: any) {
    super(props, context);

    this._renderScene = this._renderScene.bind(this);
  }

  // Now use the `NavigationCardStack` to render the scenes.
  render(): ReactElement {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        // style={styles.navigator}
        style={{flex:1,backgroundColor:'#fff'}}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  _renderScene(sceneProps: Object): ReactElement {

    const key = sceneProps.scene.route.key;
    const Comp = containers[key]
    return (
      <Comp onNavigate={this.props.onNavigate}/>
    )

  }
}

export default Scenes
