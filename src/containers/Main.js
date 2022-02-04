import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import List from '../components/list';
import { NOTION_API_KEY, NOTION_DB_ID } from '../constants';

const { Client } = require('@notionhq/client');


class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {db_data: {}}
        this.notion = new Client({ auth: NOTION_API_KEY });
    }

    componentDidMount() {
      this.doDbQuery()
    }

    doDbQuery = async () => {
        const response = await this.notion.databases.query({database_id: NOTION_DB_ID})
        this.setState({'db_data': response})
    }

    render() {
      return (
          <View>
            <List data={this.state.db_data.results}
                  onRefresh={this.doDbQuery}/>
          </View>
      )
    }
}

const s = StyleSheet.create({
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
    borderRadius: 80
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

export default Main;
