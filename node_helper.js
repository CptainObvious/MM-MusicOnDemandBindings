var NodeHelper = require("node_helper");


module.exports = NodeHelper.create({
	start: function() {
		console.log("Starting node helper: " + this.name);
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		if (notification === 'CONFIG') {
			this.config = payload;
			this.startApi();
		}
	},
	startApi: function() {
	    console.log("Starting api");
	    var self = this;
	    this.actionNotification = new Map();
            this.actionNotification.set("play", {payload: {message: "Play"}});
            this.actionNotification.set("pause", {payload: {message: "Pause"}});
            this.actionNotification.set("next", {payload: {message: "Next"}});
            this.actionNotification.set("previous", {payload: {message: "Previous"}});
      	    this.actionNotification.set("flow", {payload: {message: "Flow"}});
            this.actionNotification.set("loved", {payload: {message: "Loved"}});
            this.expressApp.get("/mod", (req, res) => {
            	var action = req.query.action;
            	if (!action) {
                	return res.status(403).send("No action");
            	}
            	notification = self.actionNotification.get(action.toLowerCase());
            	if (!notification) {
                	return res.status(403).send("Action can't be mapped to a notification");
            	}
            	self.sendAction(notification.payload);
            	res.status(200).send();
            });
	},
	sendAction: function(not) {
		var self = this;
		self.sendSocketNotification('ACTION', not);
	}
});
