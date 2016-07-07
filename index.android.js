import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  carbonStyles,
} from 'carbon-native';

import MainMenu from './screens/MainMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const cs = StyleSheet.create(carbonStyles);
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#3A3A3A',
  },
  navbarTitleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  navbarBackButton: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

function KitchenSink() {
  return (
    <View style={cs.container}>
      <StatusBar backgroundColor="#262626" />
      <Navigator
        style={cs.container}
        sceneStyle={{ paddingTop: 56 }}
        initialRoute={{
          component: MainMenu,
          title: 'Kitchen Sink',
          backButtonTitle: 'Back',
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
          return null;
        }}
        configureScene={() =>
          Navigator.SceneConfigs.FloatFromBottom
        }
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={{
              LeftButton: (route, navigator, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={styles.navbarBackButton}
                  >
                    <Icon name="arrow-back" size={28} color="#fff" />
                  </TouchableOpacity>
                );
              },
              RightButton: () => null,
              Title: (route) => (
                <View style={styles.navbarTitleWrap}>
                  <Text style={styles.navbarTitle}>
                    {route.title}
                  </Text>
                </View>
              ),
            }}
          />
        }
      />
    </View>
  );
}

AppRegistry.registerComponent('KitchenSink', () => KitchenSink);
