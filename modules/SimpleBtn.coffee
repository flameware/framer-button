# 2016 Seongki Sohn
# www.massivevoid.com

class SimpleBtn extends Layer
	#Constructor Function
	constructor: (props) ->
		props.x ?= 0
		props.y ?= 0
		props.width ?= 200
		props.height ?= 100
		props.borderRadius ?= 50
		#Set On-state Background Color
		props.backgroundColor = props.backOnColor ?= '#ff0084'
		super(props)

		#Set Off-state Border color
		@backOffBorder = props.backOffBorder ?= '#CCCCCC'
		#Set Off-state Background Color
		@backOffColor = props.backOffColor ?= "#EEEEEE"
		#Set Off-state Border Thikness
		@btnMargin = props.btnMargin ?= 5
		#Set On-state Button color
		@btnIdleColor = props.btnOnColor ?= '#FFFFFF'
		#Set Off-state Button color
		@btnOffColor = props.btnOffColor ?= '#FFFFFF'
		#Set Transition Animation Options
		@animationOptions = props.animationOptions ?=
			time: 0.4
			curve: 'spring(300, 30, 0)'

		@on Events.Click, @clicked

		#Setup Off-state Background Layer
		@BGDisabled = new Layer
			parent: @
			width: @width
			height: @height
			borderRadius: @borderRadius
			borderColor: @backOffBorder
			borderWidth: @btnMargin
			backgroundColor: @backOffColor
			opacity: 0
			scale: .1
			name: 'BGDisabled'
		@BGDisabled.states.default =
			opacity: 0
			scale: .1
			animationOptions: @animationOptions
		@BGDisabled.states.disabled =
			scale : 1
			opacity : 1
			animationOptions: @animationOptions

		#Setup Button layer
		@roundBtn = new Layer
			parent: @
			x: @width - @height + @btnMargin
			y: @btnMargin
			width: @height - @btnMargin*2
			height: @height - @btnMargin*2
			borderRadius: '50%'
			backgroundColor: @btnIdleColor
			name: 'roundBtn'
			shadowY: 4
			shadowBlur: 10
		@roundBtn.states.default =
			x: @width - @height + @btnMargin
			backgroundColor: @btnIdleColor
			animationOptions: @animationOptions
		@roundBtn.states.disabled =
			x: @btnMargin
			backgroundColor: @btnOffColor
			animationOptions: @animationOptions


	#Setup click event listener
	clicked: () ->
		@BGDisabled.stateCycle()
		@roundBtn.stateCycle()


exports.SimpleBtn = SimpleBtn
