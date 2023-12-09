{SimpleBtn} = require 'SimpleBtn'

bgOn = true

pageWrapper = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: 'white'

layerA = new SimpleBtn
	width: 180
	height: 100
	btnMargin: 5
	backOnColor: '#0064FF'
	backOffColor: '#f6f8fa'
	backOffBorder: '#dcdee0'
	btnOnColor: '#FFFFFF'
	btnOffColor: '#FFFFFF'

# layerA.BGDisabled.stateSwitch('disabled')
# layerA.roundBtn.stateSwitch('disabled')

layerA.center()

layerA.onClick ->
	if bgOn
		bgOn = false
		pageWrapper.animate(backgroundColor: '#202632')
	else
		bgOn = true
		pageWrapper.animate(backgroundColor: 'white')
