/** @jsx React.DOM */

var makeHex = function(num) {
	var hex = num.toString(16);

	if (hex.length === 0){
		return "00"
	} else if (hex.length === 1){
		return "0"+hex;
	} else {
		return hex;
	}
}

ClockAtom = React.createClass({
  mixins: [ReactMeteor.Mixin],
  getMeteorState: function() {
    return this.state;
  },
  getTime: function() {
  	var now = moment();

  	var sec = now.second();
  	var min = now.minute();
  	var hour = now.hour();

  	var hexColor = "#" + makeHex(10*hour) + makeHex(4*min) + makeHex(4*sec);
  	console.log("color: " + hexColor);

  	var body = $("body").css("background", hexColor);
  	return now.format('hh:mm:ss');
  },
  render: function() {
    return (
    	<div className="clock">
    		<div>{this.getTime()}</div>
    	</div>
    );
  }
});