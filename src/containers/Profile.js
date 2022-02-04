import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

import InfoLine from '../components/infoLine';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: {string: "Стивен Кинг"},
            city: {string: "Портланд", icon: "map"},
            phoneNumber: {string: "79031234567", icon: "phone"},
            dateOfBirth: {string: "21.09.1947", icon: "event"},
            profilePictureUrl: "https://static.wikia.nocookie.net/stephenking/images/e/ee/MP-Stephen_King.png/revision/latest/scale-to-width-down/895?cb=20200515043349"
        }
    }

    render() {
      return (
          <View style={s.outer}>
            <View style={s.imageBox}>
              <Image style={s.image}
                     resizeMode="contain"
                     source={{uri: this.state.profilePictureUrl}}/>
            </View>
            <Text style={s.nameText}>{this.state.name.string}</Text>
            <View style={s.infoContainer}>
              <InfoLine style={s.infoLine}
                        textStyle={s.infoLineText}
                        item={this.state.city}
              />
              <InfoLine style={s.infoLine}
                        textStyle={s.infoLineText}
                        item={this.state.phoneNumber}
              />
              <InfoLine style={s.infoLine}
                        textStyle={s.infoLineText}
                        item={this.state.dateOfBirth}
              />
            </View>
          </View>
      )
    }
}

const s = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: "center"
  },
  imageBox: {
    width: "100%",
    height: "30%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "97%",
    height: "100%",
    borderRadius: 50
  },
  infoContainer: {
    width: "100%",
    alignItems: "center"
  },
  nameText: {
    fontSize: 25,
    marginTop: 20
  },
  infoLine: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  infoLineText: {
    fontSize: 20,
    marginLeft: 20
  }
});

export default Profile;
