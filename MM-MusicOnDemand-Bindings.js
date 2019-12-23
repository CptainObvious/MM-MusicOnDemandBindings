Module.register("MM-MusicOnDemand-Bindings",{

	defaults: {
	},

	start: function() {
		this.sendSocketNotification('CONFIG', this.config);
	},

	socketNotificationReceived: function(notification, payload) {
		this.sendNotification("AtMusicOnDemand", payload);
	},
});
