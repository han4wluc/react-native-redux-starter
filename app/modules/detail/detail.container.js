
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as detailActions from './detail.action';

import { Comps } from '../../.'
const {
  Button
} = Comps;


class DetailContainer extends Component {
  render(){

    const { count } = this.props.state;

    return (
      <View style={{marginTop:20,flex:1}}>
        <Button
          onPress={() => {
            this.props.onNavigate({
              type: 'pop',
            })
          }}
          text='pop'
        />
        <View
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Text>{count}</Text>
        </View>
      </View>
    )
  }
}

export default connect(state => ({
    state: state.detail
  }),
  (dispatch) => ({
    actions: bindActionCreators(detailActions, dispatch)
  })
)(DetailContainer);
