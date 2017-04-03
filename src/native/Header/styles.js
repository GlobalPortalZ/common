
import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: (Platform.OS === 'ios') ? 15 + 5 : 0,
    height: (Platform.OS === 'ios') ? 70 : 56,
    position: 'relative',
    elevation: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ceced2',
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    height: (Platform.OS === 'ios') ? 70 : 56,
    elevation: 0,
    borderBottomWidth: 0,
    overflow: 'hidden',
  },
  title: {
    flex: 1,
    textAlign: (Platform.OS === 'ios') ? 'center' : undefined,
    color: '#000000',
    fontSize: (Platform.OS === 'ios') ? 17 : 19,
    fontWeight: (Platform.OS === 'ios') ? '500' : undefined,
    alignSelf: (Platform.OS === 'ios') ? 'center' : 'center',
  },
  sideWidth: {
    width: 50,
  },
});
