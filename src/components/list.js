import React from 'react'
import {View, FlatList} from 'react-native'
import ListCard from './listCard';


export default function List (props) {
    renderItem = ({item, index, separators}) => {
      return (
        <ListCard data={item}/>
      )
    }

    extractKey = (item, index) => index

    return (
      <View>
        <FlatList data={props.data}
                  renderItem={renderItem}
                  keyExtractor={extractKey}
                  onRefresh={props.onRefresh}
                  refreshing={false}  /* не стал заморачиваться с прокидыванием статуса загрузки */
        />
      </View>
    )
}

