import React from 'react'
import {View, Text, Image} from 'react-native'


export default function ListCard (props) {
    var imagePath = props.data.properties.Image ? props.data.properties.Image.files[0].file.url : null
    var image

    if ( imagePath ) {
      image = <View style={s.imageBox}>
                <Image style={s.image}
                       resizeMode="contain"
                       source={{uri: imagePath}}/>
              </View>
    } else {
      image = <View style={s.imagePlaceholderBox}>
                <View style={s.placeholderImage}>
                </View>
              </View>
    }

    const name = props.data.properties.Name.title[0].plain_text
    const tags = props.data.properties.Tags.multi_select
    const clients = props.data.properties.Clients.number
    const lastUpdate = props.data.properties.LastUpdate.date.start
    const renderedTags = tags.map((item) => {
                           return (
                             <View key={item.id}
                                   style={{...s.tagBubble, backgroundColor: item.color == "default" ? "lightblue" : item.color }}>
                               <Text style={s.text}>{item.name}</Text>
                             </View>
                           )
                         })

    return (
      <View style={s.bg}>
          {image}
          <Text style={s.name}>{name}</Text>
          <Text style={s.text}>{lastUpdate}</Text>
          <Text style={s.text}>{"Клиентов: " + clients}</Text>
          <View style={s.tagArea}>
            {renderedTags}
          </View>
     </View>
    )
  }

const s = {
  bg: {
    borderRadius: 15,
    width: "100%",
    height: 270,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 2
  },
  imageBox : {
    width: "50%",
    height: "50%",
    marginTop: 15,
    alignItems: "center"
  },
  image : {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  text: {
    color: "grey",
    fontSize: 14,
  },
  tagBubble: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 8,
    margin: 3
  },
  tagArea: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 8,
    marginBottom: 30
  },
  name: {
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',
  }
}


