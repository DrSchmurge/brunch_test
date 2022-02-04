import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function InfoLine (props) {
    return (
        <View style={props.style}>
          <Icon name={props.item.icon}
                size={20}
                color="gray"
          />
          <Text style={props.textStyle}>{props.item.string}</Text>
        </View>
      )
  }
