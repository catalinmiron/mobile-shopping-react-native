/**
 * @providesModule ProductList
*/

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from 'react-native'

const {width, height} = Dimensions.get('window')
import Counter from '../Counter'
import Button from '../components/button'
import theme from '../components/theme'
import AppRouter from '../AppRouter'

import {
  SharedElement,
  SharedElementGroup,
  withNavigation,
  NavigationBar
} from '@exponent/ex-navigation';

const PRODUCT_LIST = [{
  image: 'https://static0.fitbit.com/simple.b-cssdisabled-png.h0f287b3dbd6e91e04ca7d9d501904a95.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Fflex_pink_3qtr_5lights.png',
  title: 'Fitbit Flex',
  price: '99,95 €',
  colors: ['black', 'silver', 'pink', 'gold', 'navy'],
  selectedColor: 'pink'
}, {
  image: 'https://static1.fitbit.com/simple.b-cssdisabled-png.hb8b08dfcaa1c0c457a4fb25378089901.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Falta_pink_gold_3qtr.png',
  title: 'Fitbit Alta',
  price: '139,95 €',
  colors: ['black', 'pink', 'gold', 'navy'],
  selectedColor: 'gold'
}, {
  image: 'https://static1.fitbit.com/simple.b-cssdisabled-png.h89a568a7dfdc8c72dde1540c260a01f7.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Flrn_teal_3qtr.png',
  title: 'Fitbit Charge',
  price: '189,95 €',
  colors: ['teal', 'gold', 'plum', 'silver', 'blue'],
  selectedColor: 'teal'
}, {
  image: 'https://static1.fitbit.com/simple.b-cssdisabled-png.h641bf3136a7125830822e6b30e4f0e0b.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Fblaze_classic_plum_3qtr_clock.png',
  title: 'Fitbit Blaze',
  price: '229,95 €',
  colors: ['blue', 'silver', 'plum', 'gold', 'turquoise'],
  selectedColor: 'plum'
}, {
  image: 'https://static0.fitbit.com/simple.b-cssdisabled-png.h736aaea397fac722c7ba24f5606aecc4.pack?items=%2Fcontent%2Fassets%2Fpip%2Fimages%2Fproducts%2Fsurge_black_3qtr_runwithhrzone2.png',
  title: 'Fitbit Surge',
  price: '249,95 €',
  colors: ['black', 'blue', 'orange'],
  selectedColor: 'black'
}]
const PADDING = 40
const INDICATOR_CONTAINER_HEIGHT = 2
const INDICATOR_CONTAINER_WIDTH = width - PADDING * 2
const INDICATOR_WIDTH = INDICATOR_CONTAINER_WIDTH / PRODUCT_LIST.length

@withNavigation
export default class ProductList extends React.Component {
  _placeHeaderGroups = {}
  static route = {
    navigationBar: {
      title: 'Products',
      backgroundColor: 'rgba(255, 255, 255, .5)',
      visible: false,
    },
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedId: 0,
      scrollX: new Animated.Value(0),
      indicator: new Animated.Value(1)
    };
  }

  render() {
    return <View style={[theme.container, theme.bg]}>
      <Animated.ScrollView
        pagingEnabled
        scrollEventThrottle={16}
        contentContainerStyle={[ss.contentContainer]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
          { useNativeDriver: true }
        )}
        >
          {PRODUCT_LIST.map((product, index) => this._renderRow(product, index))}
      </Animated.ScrollView>
      <Animated.View style={ss.indicatorContainer}>
        <Animated.View style={[ss.indicator, {left: this.state.indicator}]} />
      </Animated.View>
    </View>
  }

  componentDidMount() {
    this.state.scrollX.addListener(this.updateView.bind(this));
  }

  updateView(offset) {
    let currentIndex = offset.value / width;
    if (offset.value < 0) {
      currentIndex = 0
    } else if (offset.value > (PRODUCT_LIST.length - 1) * width) {
      currentIndex = PRODUCT_LIST.length - 1
    }

    this.state.indicator.setValue(currentIndex * INDICATOR_WIDTH)
  }

  _renderRow(product, i) {
    let inputRange = [(i - 1) * width, i * width, (i + 1) * width, (i + 2) * width];

    return <View style={[theme.container, ss.productItem]} key={i}>
      <View style={ss.innerContainer}>
        <View style={[theme.newLabel, theme.absoluteTopLeft, theme.greenTheme]}>
          <Text style={[theme.newLabelText, theme.customFont]}>NEW</Text>
        </View>
        <Animated.Image 
          source={{uri: product.image}} 
          style={[theme.image, {
            transform: [{
              scale: this.state.scrollX.interpolate({
                inputRange,
                outputRange: [.3, 1, .3, .3]
              })
            }]
          }]}
        />
        <Text style={[theme.customFont, theme.title]}>{product.title}</Text>
        <Text style={[theme.customFont, theme.price]}>{product.price}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
          {product.colors.map((color, index) => {
            return <View key={index} style={{position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
            <View 
              style={[theme.productColorBubble, {
                backgroundColor: color
              }]}
            />
            {product.selectedColor === color 
              ? <View style={[theme.productColorBubble, theme.selectedBubble, {
                backgroundColor: color, 
              }]}/> 
              : null
            }
            </View>
          })}
        </View>

        {this._renderProductFooter(product, i)}
      </View>
    </View>
  }

  _renderProductFooter(product, i) {
    return <View style={[theme.groupButton, ss.footer]}>
      <Button onPress={() => this.onProductListPress(product, i)} theme='light'>
        ADD TO CART
      </Button>
      <Button onPress={() => this.onProductListPress(product, i)} theme='dark'>
        BUY NOW
      </Button>
    </View>
  }

  onProductListPress(product, index) {
    this.props.navigator.push(
      AppRouter.getRoute('productDetails', {
        product
      }), {
        transitionGroup: this._placeHeaderGroups[index]
      }
    )
  }
}


const ss = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  productItem: {
    width: width,
    padding: 40,
  },
  footer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    overflow: 'hidden',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0'
  },
  indicator: {
    width: INDICATOR_WIDTH, 
    height: INDICATOR_CONTAINER_HEIGHT, 
    position: 'absolute', 
    top: 0, 
    backgroundColor: '#c0c0c0'
  },
  indicatorContainer: {  
    height: INDICATOR_CONTAINER_HEIGHT, 
    marginVertical: 20, 
    backgroundColor: '#ededed', 
    position: 'relative', 
    width: INDICATOR_CONTAINER_WIDTH, 
    paddingHorizontal: PADDING
  }
})