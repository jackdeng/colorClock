(function () {

////////////////////////////////////////////////////////////////////////
//                                                                    //
// packages/react/src/require-react.js                                //
//                                                                    //
////////////////////////////////////////////////////////////////////////
                                                                      //
React = Npm.require("react");                                         // 1
                                                                      // 2
////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////
//                                                                    //
// packages/react/src/ReactMeteor.js                                  //
//                                                                    //
////////////////////////////////////////////////////////////////////////
                                                                      //
var ReactMeteorMixin = {                                              // 1
  _handleMeteorChange: function() {                                   // 2
    this.setState(this.getMeteorState());                             // 3
  },                                                                  // 4
                                                                      // 5
  _cancelComputation: function() {                                    // 6
    if (this._meteorComputation) {                                    // 7
      this._meteorComputation.stop();                                 // 8
      this._meteorComputation = null;                                 // 9
    }                                                                 // 10
  },                                                                  // 11
                                                                      // 12
  componentWillMount: function() {                                    // 13
    this._meteorComputation = Deps.autorun(this._handleMeteorChange); // 14
  },                                                                  // 15
                                                                      // 16
  componentWillReceiveProps: function(nextProps) {                    // 17
    var oldProps = this.props;                                        // 18
    this.props = nextProps;                                           // 19
    this._handleMeteorChange();                                       // 20
    this.props = oldProps;                                            // 21
  },                                                                  // 22
                                                                      // 23
  componentWillUnmount: function() {                                  // 24
    this._cancelComputation();                                        // 25
  }                                                                   // 26
};                                                                    // 27
                                                                      // 28
// So you don't have to mix in ReactMeteor.Mixin explicitly.          // 29
function createClass(spec) {                                          // 30
  spec.mixins = spec.mixins || [];                                    // 31
  spec.mixins.push(ReactMeteorMixin);                                 // 32
  return React.createClass(spec);                                     // 33
}                                                                     // 34
                                                                      // 35
if (typeof exports === "object") {                                    // 36
  ReactMeteor = exports;                                              // 37
} else {                                                              // 38
  ReactMeteor = {};                                                   // 39
}                                                                     // 40
                                                                      // 41
ReactMeteor.Mixin = ReactMeteorMixin;                                 // 42
ReactMeteor.createClass = createClass;                                // 43
                                                                      // 44
////////////////////////////////////////////////////////////////////////

}).call(this);
