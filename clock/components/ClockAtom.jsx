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

var makeRGBA = function(now, fade) {
  var sec = now.second();
  var min = now.minute();
  var hour = now.hour();

  var r = Math.floor(hour * 10.625);
  var g = Math.floor(min * 4.25);
  var b = Math.floor(sec * 4.25);

  var a;
  if (fade) {
    a = (1 - sec / 60);
  } else {
    a = 0.8;
  }

  var rgba = [];
  rgba.push(r, g, b, a);
  rgba = rgba.join(",");
  rgba = "rgba(" + rgba + ")";

  console.log("rbga: " + rgba); 
  return rgba;
}

var divStyle = {
  color: "green"
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
    var rgba = makeRGBA(now, false); 

    // side effect of changing background
    $("body").css("background", rgba);

    return hexColor;
  },
  getColorStyles: function() {
    var rgba_fade = makeRGBA(this.props.time, true);
    var styles = {
      color: rgba_fade
    };
     
    return styles;
  },
  render: function() {
    return (
    	<div className="clock">
        <div style={this.getColorStyles()} className="banner">color</div>
        <div className="face">
          <div className="content">
        		<div className="time">{this.getTime()}</div>
            <div className="hex">{this.getHex()}</div>
          </div>
          <div className="apostrophe">,</div>
        </div>
        <div style={this.getColorStyles()} className="banner">clock</div>
    	</div>
    );
  }
});