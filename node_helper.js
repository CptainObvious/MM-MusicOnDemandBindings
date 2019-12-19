const NodeHelper = require("node_helper");

Module = {
    configDefaults: {},
    register: function (name, moduleDefinition) {
        // console.log("Module config loaded: " + name);
        Module.configDefaults[name] = moduleDefinition.defaults;
    }
};

module.exports = NodeHelper.create({
    // Subclass start method.
    start: function() {
        console.log("Starting node helper for: " + this.name);
        this.actionNotification = new Map();
        this.actionNotification.set("play", { payload: { message: "Play"}});
        this.actionNotification.set("pause", { payload: { message: "Pause"}});
        this.actionNotification.set("next", { payload: { message: "Next"}});
        this.actionNotification.set("previous", { payload: { message: "Previous"}});
        this.actionNotification.set("flow", { payload: { message: "Flow"}});
        this.actionNotification.set("loved", { payload: { message: "Loved"}});

        this.expressApp.get("/mod", (req, res) => {
            var action = req.params.action;
            if (!action) {
                return res.status(200).send();
            }
            notification = this.actionNotification.get(action.toLowerCase());
            if (!notification) {
                return res.status(200).send();
            }
            this.sendSocketNotification("AtMusicOnDemand", notification.payload);
        });
    });


    });