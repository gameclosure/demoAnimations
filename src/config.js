import device;

exports = {
  startY: 0,
  animation: {
    duration: 1500
  },
  text: {
    height: 30,
    width: device.width,
    color: '#FFFFFF',
    backgroundColor: '#222222'
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: '#ABCDEF',
    paddingTop: 10
  },
  animations: [
    'linear',
    'easeInQuad',
    'easeIn',
    'easeOutQuad',
    'easeOut',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInOut',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeOutBounce',
    'easeInBounce',
    'easeInOutBounce'
  ]
};
