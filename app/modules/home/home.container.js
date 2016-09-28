
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from './home.action';

import { Comps } from '../../.'
const {
  Button
} = Comps;

class HomeContainer extends Component {
  render() {

    const { onNavigate, state, actions } = this.props;

    const {
      increment,
      decrementAsync,
      goToDetail,
    } = actions;

    const { count } = state;

    return (
      <View style={{marginTop:20,flex:1}}>
        <Button
          onPress={goToDetail.bind(null, {onNavigate})}
          text='push'
        >
        </Button>
        <View
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Button
            onPress={decrementAsync}
            text='-'
            style={{
              width: 30,
              height: 30
            }}
          />
          <Text style={{marginLeft:10,marginRight:10,width:20,textAlign:'center'}} >{count}</Text>
          <Button
            onPress={increment}
            text='+'
            style={{
              width: 30,
              height: 30
            }}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.home
  }),
  (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
  })
)(HomeContainer);
