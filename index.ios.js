'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class TableTopHuD extends Component {


  render() {
    return (
        <View style={styles.container}>
          <Text>
            iOS Dev
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

AppRegistry.registerComponent('TableTopHuD', () => TableTopHuD);