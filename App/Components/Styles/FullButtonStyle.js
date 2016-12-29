// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.helioBlack,
    borderBottomColor: Colors.helioBlackSecondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.helioRedSecondary
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
