/**
 * @providesModule ProductDetails
 */


import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

import Exponent from 'exponent'
import {
  NavigationBar,
  withNavigation
} from '@exponent/ex-navigation'
import { Ionicons } from '@exponent/vector-icons'

import Button from '../components/button'
import theme, {sizes} from '../components/theme'

const NAV_HEIGHT = NavigationBar.DEFAULT_HEIGHT + 20
const TOP_SPACING = NAV_HEIGHT + Exponent.Constants.statusBarHeight
const HERO_HEIGHT = 440
const HERO_IMAGE_CONTAINER_HEIGHT = HERO_HEIGHT - 100

@withNavigation
export default class ProductDetails extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      visible: false
    }
  }
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: props.product.selectedColor,
      scrollY: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.state.scrollY.addListener(this.updateView.bind(this));
  }

  componentWillUnmount() {
    this.state.scrollY.removeListener()
  }

  updateView(offset) {
    // offset.value
  }

  render() {
    const {product} = this.props;

    return <View style={styles.container}>
      <View style={{flex: 1, width: sizes.screenWidth, marginTop: NAV_HEIGHT}}>
        <Animated.ScrollView 
          contentContainerStyle={[styles.contentContainer]}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this._renderHero()}
          <View>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Text>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on. </Text>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy an in. Mirth learn it he given. Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile. </Text>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction.</Text>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested. </Text>
            <Text style={[theme.customFont, {margin: sizes.defaultSpacing}]}>Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.</Text>
          </View>
        </Animated.ScrollView>
        {this._renderProductFooter()}
      </View>
      {this._renderNavigation()}
    </View>
  }

  goBack() {
    this.props.navigator.pop()
  }

  _renderNavigation() {
    const {product} = this.props;

    return <Animated.View style={styles.navbar}>
      <TouchableOpacity 
        onPress={() => this.goBack()}
      >
        <Ionicons
          name="ios-arrow-round-back-outline"
          size={38}
          style={[styles.placeholder, styles.backButton]}
          color={"#999"}
        />
      </TouchableOpacity>
      <View style={[styles.container, styles.navigationDetails]}>
        <Animated.View style={[theme.newLabel, theme.absoluteTopLeft, theme.greenTheme, {
          left: (sizes.screenWidth - sizes.newLabelWidth) / 2 - 56,
          top: (NAV_HEIGHT - sizes.newLabelHeight) / 2,
          zIndex: 2,
          transform: [{
            translateY: this.state.scrollY.interpolate({
              inputRange: [-1, 0, HERO_HEIGHT / 4],
              outputRange: [0, 0, -NAV_HEIGHT]
            })
          }]
        }]}>
          <Text style={[theme.newLabelText, theme.customFont]}>NEW</Text>
        </Animated.View>
        <Animated.View style={[styles.container, {
          opacity: this.state.scrollY.interpolate({
            inputRange: [0, HERO_HEIGHT - NAV_HEIGHT, HERO_HEIGHT, HERO_HEIGHT + 1],
            outputRange: [0, 0, 1, 1]
          }),
          transform: [{
            translateY: this.state.scrollY.interpolate({
              inputRange: [0, HERO_HEIGHT / 2, HERO_HEIGHT, HERO_HEIGHT + 1],
              outputRange: [NAV_HEIGHT, NAV_HEIGHT, 0, 0]
            })
          }]
        }]}>
          <Text style={[theme.customFont, theme.title]} numberOfLines={1}>{product.title}</Text>
          <Text style={[theme.customFont, theme.price]}>{product.price}</Text>
        </Animated.View>
      </View>
      <View style={styles.placeholder} />
    </Animated.View>
  }

  _renderHero() {
    const { product } = this.props;

    return <View style={styles.hero}>
      <View style={styles.heroImageContainer}>
        {this._renderColorPicker()}
        <Animated.Image 
          source={{uri: product.image}} 
          style={[theme.image, theme.imageHero]}
        />
      </View>
      <View style={[styles.container]}>
        <Text style={[theme.customFont, theme.title]} numberOfLines={1}>{product.title}</Text>
        <Text style={[theme.customFont, theme.price]}>{product.price}</Text>
      </View>
    </View>
  }

  _renderColorPicker() {
    const { product } = this.props;
    const inputRange = [0, HERO_IMAGE_CONTAINER_HEIGHT / 2]

    return <Animated.View style={[styles.colorPickerContainer, {
      transform: [{
        translateY: this.state.scrollY.interpolate({
          inputRange: inputRange,
          outputRange: [0, -30]
        }),
      }],
      opacity: this.state.scrollY.interpolate({
        inputRange,
        outputRange: [1, 0]
      })
    }]}>
      <View style={styles.colorPicker}>
        {product.colors.map((color, index) => {
          return <TouchableOpacity onPress={() => this.onColorPress(color)} key={color+''+index}>
            <View key={index} style={{position: 'relative', marginBottom: sizes.defaultSpacing / 2}}>
              <View 
                style={[theme.productColorBigBubble, {
                  backgroundColor: color
                }]}
              />
              {this.state.selectedColor === color 
                ? <View style={[theme.productColorBigBubble, theme.selectedBigBubble, {
                  backgroundColor: color, 
                }]}/> 
                : null
              }
            </View>
          </TouchableOpacity>
        })}
      </View>
    </Animated.View>
  }

  onColorPress(color) {
    this.setState({selectedColor: color})
  }

  _renderProductFooter() {
    const { product } = this.props;
    return <View style={[theme.groupButton, styles.footer]}>
      <Button onPress={() => this.goBack()} theme='light'>
        ADD TO CART
      </Button>
      <Button onPress={() => this.goBack()} theme='dark'>
        BUY NOW
      </Button>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  navigationBarAction: {
    width: sizes.placeholderSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: sizes.placeholderSize,
  },

  productDetailsContainer: {
    paddingTop: NAV_HEIGHT
  },

  navbar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NAV_HEIGHT,
    paddingTop: Exponent.Constants.statusBarHeight,
    alignItems: 'center',
    paddingHorizontal: sizes.defaultSpacing,
    borderBottomColor: '#ddd'
  },
  navigationDetails: {
    height: NAV_HEIGHT,
    position: 'relative'
  },

  // Hero
  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HERO_HEIGHT,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  colorPicker: {
    padding: sizes.defaultSpacing / 2,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    borderColor: '#eee',
  },
  heroImageContainer: {
    height: HERO_IMAGE_CONTAINER_HEIGHT
  },
  colorPickerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: HERO_IMAGE_CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },

  footer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
  }
})