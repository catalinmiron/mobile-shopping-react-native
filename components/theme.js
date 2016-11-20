import {
  StyleSheet,
  Dimensions
} from 'react-native'

export const {width, height} = Dimensions.get('window')

const colors = {
  dark: '#222',
  // light: '#f0f0f0',
  light: '#ffffff',
  bg: '#f9f9f9',
  price: '#999999',
  green: '#5CC66D',
  darkGreen: '#41B053'
}
export const sizes = {
  bubble: 18,
  bigBubble: 32,
  bubbleSelectedBorder: 1,
  bigBubbleSelectedBorder: 2,
  defaultSpacing: 16,
  screenWidth: width,
  screenHeight: height,
  newLabelWidth: 62,
  newLabelHeight: 30,
  placeholderSize: 40
}

export default StyleSheet.create({
  bg: {
    backgroundColor: colors.bg
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dark: {
    backgroundColor: colors.dark
  },
  light: {
    backgroundColor: colors.light
  },
  darkText: {
    color: colors.light
  },
  lightText: {
    color: colors.dark
  },
  buttonSize: {
    fontSize: 14
  },
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  groupButton: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  customFont: {
    fontFamily: 'SkyhookMono',
  },
  header: {
    fontSize: 62,
    marginVertical: 20
  },
  title: {
    fontSize: 24
  },
  titleSmall: {
    fontSize: 16
  },
  price: {
    fontSize: 18,
    color: colors.price
  },
  priceSmall: {
    fontSize: 14
  },
  normal: {
    fontSize: 14
  },
  // Product list styles 
  productColorBubble: {
    height: sizes.bubble,
    width: sizes.bubble,
    borderRadius: sizes.bubble / 2,
    marginRight: sizes.bubble / 3
  },
  selectedBubble: {
    borderWidth: sizes.bubbleSelectedBorder, 
    borderColor: '#fff',
    position: 'absolute',
    top: sizes.bubbleSelectedBorder,
    left: sizes.bubbleSelectedBorder,
    width: sizes.bubble - sizes.bubbleSelectedBorder * 2,
    height: sizes.bubble - sizes.bubbleSelectedBorder * 2,
    borderRadius: (sizes.bubble - sizes.bubbleSelectedBorder * 2) / 2
  },
  // Product list styles 
  productColorBigBubble: {
    height: sizes.bigBubble,
    width: sizes.bigBubble,
    borderRadius: sizes.bigBubble / 2
  },
  selectedBigBubble: {
    borderWidth: sizes.bigBubbleSelectedBorder, 
    // HACK
    // borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    top: sizes.bigBubbleSelectedBorder,
    left: sizes.bigBubbleSelectedBorder,
    width: sizes.bigBubble - sizes.bigBubbleSelectedBorder * 2,
    height: sizes.bigBubble - sizes.bigBubbleSelectedBorder * 2,
    borderRadius: (sizes.bigBubble - sizes.bigBubbleSelectedBorder * 2) / 2
  },
  newLabel: {
    width: sizes.newLabelWidth,
    height: sizes.newLabelHeight,
    borderRadius: sizes.newLabelHeight / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  newLabelText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900'
  },
  greenTheme: {
    borderColor: colors.darkGreen,
    backgroundColor: colors.green,
  },
  darkTheme: {
    borderColor: '#000',
    backgroundColor: colors.dark
  },
  absoluteTopLeft: {
    position: 'absolute',
    left: sizes.defaultSpacing,
    top: sizes.defaultSpacing
  },
  image: {
    width: 300,
    height: 340,
    resizeMode: 'contain'
  },
  imageHero: {
    width: 400,
    height: 340,
    resizeMode: 'contain'
  }
});