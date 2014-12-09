import ui.View as View;
import ui.TextView as TextView;
import ui.ScrollView as ScrollView;

import src.config as config;
import animate;

exports = Class(GC.Application, function () {

  this.initUI = function () {

    // calculate total height of text and animating block
    var blockHeight = config.text.height +
            config.block.height +
            config.block.paddingTop;

    // create scrollview for the animations
    var scrollView = new ScrollView({
      superview: this.view,
      x: 0,
      y: 0,
      width: this.view.style.width,
      height: this.view.style.height,
      scrollBounds: {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: config.startY + (config.animations.length * blockHeight)
      }
    });

    // go through all the animations
    for (var i = 0; i < config.animations.length; i++) {
      var y = config.startY + (i * blockHeight);
      this.createAnimation(scrollView, y, config.animations[i]);
    }
  };

  this.createAnimation = function (superview, y, animationName) {

    // label with animation name
    var textOpts = merge({
      superview: superview,
      x: 0,
      y: y,
      text: animationName
    }, config.text);
    var textview = new TextView(textOpts);

    // Create a view to animate
    var viewOpts = merge({
      superview: superview,
      x: 0,
      y: y + textview.style.height + config.block.paddingTop
    }, config.block);
    var view = new View(viewOpts);

    // create function with this animation so we can loop it forever
    var endX = superview.style.width - config.block.width;
    var animation = function animation () {

      // move the block to the right side of the screen and back
      animate(this)
        .clear()
        .now(
          {x: endX},
          config.animation.duration,
          animate[animationName]
        )
        .then(
          {x: 0},
          config.animation.duration,
          animate[animationName]
        )
        .then(bind(this, animation));
    }

    // start the animation
    animation.call(view);

  };

});
