Module.register("MM-MusicOnDemand-Bindings", {
    defaults: {},
    start: function() {
        Log.info("Starting module: " + this.name);
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {
            this.sendSocketNotification("INITALIZE");
        }
        console.log("Received notifications: " + notification);
        this.sendNotification(notification, payload);
    },
});