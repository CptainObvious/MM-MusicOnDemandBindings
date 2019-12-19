Module.register("MM-MusicOnDemand-Bindings", {
    defaults: {},
    start: function() {
        Log.info("Starting module: " + this.name);
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {
            this.sendSocketNotification("INITALIZE");
        }
    },

    socketNotificationReceived: function(notification, payload, sender) {
        this.sendNotification(notification, payload);
    },
});