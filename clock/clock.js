var renderClock = function() {
	var now = moment();
	React.renderComponent(new ClockAtom({"time": now}), document.body);
}

Router.route('/', function() {
	Meteor.setInterval(renderClock, 500);
})
