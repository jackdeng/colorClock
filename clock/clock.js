var renderClock = function() {
	React.renderComponent(new ClockAtom(), document.body);
}

Router.route('/', function() {
	Meteor.setInterval(renderClock, 500);
})
