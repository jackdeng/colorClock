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

var makeRGBA = function(hour, min, sec) {
  var r = Math.floor(hour * 10.625);
  var g = Math.floor(min * 4.25);
  var b = Math.floor(sec * 4.25);

  var a = 0.8;

  var rgba = [];
  rgba.push(r, g, b, a);
  rgba = rgba.join(",");

  console.log("rbga: " + rgba); 
  return rgba;
}

ClockAtom = React.createClass({
  mixins: [ReactMeteor.Mixin],
  getMeteorState: function() {
    return this.state;
  },
  getTime: function() {
  	var now = this.props.time;
  	return now.format('hh:mm:ss');
  },
  getHex: function() {
    var now = this.props.time;

    var sec = now.second();
    var min = now.minute();
    var hour = now.hour();

    var hexColor = "#" + makeHex(10*hour) + makeHex(4*min) + makeHex(4*sec);
    var rgba = makeRGBA(hour, min, sec); 
    rgba = "rgba(" + rgba + ")";

    var body = $("body").css("background", rgba);
    console.log("color: " + hexColor);

    return hexColor;
  },
  render: function() {
    return (
    	<div className="clock">
    		<div className="time">{this.getTime()}</div>
        <div className="hex">{this.getHex()}</div>
    	</div>
    );
  }
});