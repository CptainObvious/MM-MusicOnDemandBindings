# MM-MusicOnDemandBindings

Add an http endpoint to send notification to MusicOnDemand

**Url :** http://{MirrorMagicIp}/mod?action={Action}

| Action  | Notification send |
| ------------- | ------------- |
| play  | `{ message: "Play"}`  |
| pause  | `{ message: "Pause"}`  |
| next  | `{ message: "Next"}`  |
| flow  | `{ message: "Flow"}`  |
| previous | ` { message: "Previous"}`  |
| loved  | `{ message: "Loved"}`  |