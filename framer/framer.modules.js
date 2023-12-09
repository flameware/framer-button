require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"SimpleBtn":[function(require,module,exports){
var SimpleBtn,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SimpleBtn = (function(superClass) {
  extend(SimpleBtn, superClass);

  function SimpleBtn(props) {
    if (props.x == null) {
      props.x = 0;
    }
    if (props.y == null) {
      props.y = 0;
    }
    if (props.width == null) {
      props.width = 200;
    }
    if (props.height == null) {
      props.height = 100;
    }
    if (props.borderRadius == null) {
      props.borderRadius = 50;
    }
    props.backgroundColor = props.backOnColor != null ? props.backOnColor : props.backOnColor = '#fab200';
    SimpleBtn.__super__.constructor.call(this, props);
    this.backOffBorder = props.backOffBorder != null ? props.backOffBorder : props.backOffBorder = '#CCCCCC';
    this.backOffColor = props.backOffColor != null ? props.backOffColor : props.backOffColor = "#EEEEEE";
    this.btnMargin = props.btnMargin != null ? props.btnMargin : props.btnMargin = 5;
    this.btnIdleColor = props.btnOnColor != null ? props.btnOnColor : props.btnOnColor = '#FFFFFF';
    this.btnOffColor = props.btnOffColor != null ? props.btnOffColor : props.btnOffColor = '#FFFFFF';
    this.animationOptions = props.animationOptions != null ? props.animationOptions : props.animationOptions = {
      time: .4,
      curve: 'spring(400, 30, 0)'
    };
    this.on(Events.Click, this.clicked);
    this.BGDisabled = new Layer({
      parent: this,
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius,
      borderColor: this.backOffBorder,
      borderWidth: this.btnMargin,
      backgroundColor: this.backOffColor,
      opacity: 0,
      scale: .1,
      name: 'BGDisabled'
    });
    this.BGDisabled.states["default"] = {
      opacity: 0,
      scale: .1,
      animationOptions: this.animationOptions
    };
    this.BGDisabled.states.disabled = {
      scale: 1,
      opacity: 1,
      animationOptions: this.animationOptions
    };
    this.roundBtn = new Layer({
      parent: this,
      x: this.width - this.height + this.btnMargin,
      y: this.btnMargin,
      width: this.height - this.btnMargin * 2,
      height: this.height - this.btnMargin * 2,
      borderRadius: '50%',
      backgroundColor: this.btnIdleColor,
      name: 'roundBtn',
      shadowY: 4,
      shadowBlur: 10
    });
    this.roundBtn.states["default"] = {
      x: this.width - this.height + this.btnMargin,
      backgroundColor: this.btnIdleColor,
      animationOptions: this.animationOptions
    };
    this.roundBtn.states.disabled = {
      x: this.btnMargin,
      backgroundColor: this.btnOffColor,
      animationOptions: this.animationOptions
    };
  }

  SimpleBtn.prototype.clicked = function() {
    this.BGDisabled.stateCycle();
    return this.roundBtn.stateCycle();
  };

  return SimpleBtn;

})(Layer);

exports.SimpleBtn = SimpleBtn;


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vbW9kdWxlcy9TaW1wbGVCdG4uY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiIyAyMDE2IFNlb25na2kgU29oblxuIyB3d3cubWFzc2l2ZXZvaWQuY29tXG5cbmNsYXNzIFNpbXBsZUJ0biBleHRlbmRzIExheWVyXG5cdCNDb25zdHJ1Y3RvciBGdW5jdGlvblxuXHRjb25zdHJ1Y3RvcjogKHByb3BzKSAtPlxuXHRcdHByb3BzLnggPz0gMFxuXHRcdHByb3BzLnkgPz0gMFxuXHRcdHByb3BzLndpZHRoID89IDIwMFxuXHRcdHByb3BzLmhlaWdodCA/PSAxMDBcblx0XHRwcm9wcy5ib3JkZXJSYWRpdXMgPz0gNTBcblx0XHQjU2V0IE9uLXN0YXRlIEJhY2tncm91bmQgQ29sb3Jcblx0XHRwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrT25Db2xvciA/PSAnI2ZhYjIwMCdcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdCNTZXQgT2ZmLXN0YXRlIEJvcmRlciBjb2xvclxuXHRcdEBiYWNrT2ZmQm9yZGVyID0gcHJvcHMuYmFja09mZkJvcmRlciA/PSAnI0NDQ0NDQydcblx0XHQjU2V0IE9mZi1zdGF0ZSBCYWNrZ3JvdW5kIENvbG9yXG5cdFx0QGJhY2tPZmZDb2xvciA9IHByb3BzLmJhY2tPZmZDb2xvciA/PSBcIiNFRUVFRUVcIlxuXHRcdCNTZXQgT2ZmLXN0YXRlIEJvcmRlciBUaGlrbmVzc1xuXHRcdEBidG5NYXJnaW4gPSBwcm9wcy5idG5NYXJnaW4gPz0gNVxuXHRcdCNTZXQgT24tc3RhdGUgQnV0dG9uIGNvbG9yXG5cdFx0QGJ0bklkbGVDb2xvciA9IHByb3BzLmJ0bk9uQ29sb3IgPz0gJyNGRkZGRkYnXG5cdFx0I1NldCBPZmYtc3RhdGUgQnV0dG9uIGNvbG9yXG5cdFx0QGJ0bk9mZkNvbG9yID0gcHJvcHMuYnRuT2ZmQ29sb3IgPz0gJyNGRkZGRkYnXG5cdFx0I1NldCBUcmFuc2l0aW9uIEFuaW1hdGlvbiBPcHRpb25zXG5cdFx0QGFuaW1hdGlvbk9wdGlvbnMgPSBwcm9wcy5hbmltYXRpb25PcHRpb25zID89XG5cdFx0XHR0aW1lOiAuNFxuXHRcdFx0Y3VydmU6ICdzcHJpbmcoNDAwLCAzMCwgMCknXG5cblx0XHRAb24gRXZlbnRzLkNsaWNrLCBAY2xpY2tlZFxuXG5cdFx0I1NldHVwIE9mZi1zdGF0ZSBCYWNrZ3JvdW5kIExheWVyXG5cdFx0QEJHRGlzYWJsZWQgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0aGVpZ2h0OiBAaGVpZ2h0XG5cdFx0XHRib3JkZXJSYWRpdXM6IEBib3JkZXJSYWRpdXNcblx0XHRcdGJvcmRlckNvbG9yOiBAYmFja09mZkJvcmRlclxuXHRcdFx0Ym9yZGVyV2lkdGg6IEBidG5NYXJnaW5cblx0XHRcdGJhY2tncm91bmRDb2xvcjogQGJhY2tPZmZDb2xvclxuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0c2NhbGU6IC4xXG5cdFx0XHRuYW1lOiAnQkdEaXNhYmxlZCdcblx0XHRAQkdEaXNhYmxlZC5zdGF0ZXMuZGVmYXVsdCA9XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRzY2FsZTogLjFcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6IEBhbmltYXRpb25PcHRpb25zXG5cdFx0QEJHRGlzYWJsZWQuc3RhdGVzLmRpc2FibGVkID1cblx0XHRcdHNjYWxlIDogMVxuXHRcdFx0b3BhY2l0eSA6IDFcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6IEBhbmltYXRpb25PcHRpb25zXG5cblx0XHQjU2V0dXAgQnV0dG9uIGxheWVyXG5cdFx0QHJvdW5kQnRuID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHg6IEB3aWR0aCAtIEBoZWlnaHQgKyBAYnRuTWFyZ2luXG5cdFx0XHR5OiBAYnRuTWFyZ2luXG5cdFx0XHR3aWR0aDogQGhlaWdodCAtIEBidG5NYXJnaW4qMlxuXHRcdFx0aGVpZ2h0OiBAaGVpZ2h0IC0gQGJ0bk1hcmdpbioyXG5cdFx0XHRib3JkZXJSYWRpdXM6ICc1MCUnXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBidG5JZGxlQ29sb3Jcblx0XHRcdG5hbWU6ICdyb3VuZEJ0bidcblx0XHRcdHNoYWRvd1k6IDRcblx0XHRcdHNoYWRvd0JsdXI6IDEwXG5cdFx0QHJvdW5kQnRuLnN0YXRlcy5kZWZhdWx0ID1cblx0XHRcdHg6IEB3aWR0aCAtIEBoZWlnaHQgKyBAYnRuTWFyZ2luXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBidG5JZGxlQ29sb3Jcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6IEBhbmltYXRpb25PcHRpb25zXG5cdFx0QHJvdW5kQnRuLnN0YXRlcy5kaXNhYmxlZCA9XG5cdFx0XHR4OiBAYnRuTWFyZ2luXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBidG5PZmZDb2xvclxuXHRcdFx0YW5pbWF0aW9uT3B0aW9uczogQGFuaW1hdGlvbk9wdGlvbnNcblxuXG5cdCNTZXR1cCBjbGljayBldmVudCBsaXN0ZW5lclxuXHRjbGlja2VkOiAoKSAtPlxuXHRcdEBCR0Rpc2FibGVkLnN0YXRlQ3ljbGUoKVxuXHRcdEByb3VuZEJ0bi5zdGF0ZUN5Y2xlKClcblxuXG5leHBvcnRzLlNpbXBsZUJ0biA9IFNpbXBsZUJ0blxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURHQSxJQUFBLFNBQUE7RUFBQTs7O0FBQU07OztFQUVRLG1CQUFDLEtBQUQ7O01BQ1osS0FBSyxDQUFDLElBQUs7OztNQUNYLEtBQUssQ0FBQyxJQUFLOzs7TUFDWCxLQUFLLENBQUMsUUFBUzs7O01BQ2YsS0FBSyxDQUFDLFNBQVU7OztNQUNoQixLQUFLLENBQUMsZUFBZ0I7O0lBRXRCLEtBQUssQ0FBQyxlQUFOLCtCQUF3QixLQUFLLENBQUMsY0FBTixLQUFLLENBQUMsY0FBZTtJQUM3QywyQ0FBTSxLQUFOO0lBR0EsSUFBQyxDQUFBLGFBQUQsaUNBQWlCLEtBQUssQ0FBQyxnQkFBTixLQUFLLENBQUMsZ0JBQWlCO0lBRXhDLElBQUMsQ0FBQSxZQUFELGdDQUFnQixLQUFLLENBQUMsZUFBTixLQUFLLENBQUMsZUFBZ0I7SUFFdEMs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
