// You can overwrite the default configuration values set in [config.js] here.
// There should never be any required changes to this file and you can always
// simply copy it over when updating to a new version.

let config = window.mumbleWebConfig // eslint-disable-line no-unused-vars

// E.g. changing default address and theme:
// config.defaults.address = 'voice.example.com'
// config.defaults.theme = 'MetroMumbleDark'


// Which fields to show on the Connect to Server dialog
config.connectDialog.address : 'false'
config.connectDialog.port : 'false'
config.connectDialog.token : 'false'
// config.connectDialog.username : 'true'
// config.connectDialog.password : 'true'
// config.connectDialog.channelName : 'false'

// Default values for user settings
// You can see your current value by typing `localStorage.getItem('mumble.$setting')` in the web console.
// config.settings.voiceMode : 'vad' // one of 'cont' (Continuous), 'ptt' (Push-to-Talk), 'vad' (Voice Activity Detection)
// config.settings.pttKey : 'ctrl + shift'
// config.settings.vadLevel : '0.3'
// config.settings.toolbarVertical : 'false'
// config.settings.showAvatars : 'always' // one of 'always', 'own_channel', 'linked_channel', 'minimal_only', 'never'
// config.settings.userCountInChannelName : 'false'
// config.settings.audioBitrate : '40000' // bits per second
// config.settings.samplesPerPacket : '960'

// Default values (can be changed by passing a query parameter of the same name)
// Connect Dialog
// config.defaults.address': window.location.hostname,
// config.defaults.port : '443'
// config.defaults.token : ''
// config.defaults.username': ''
// config.defaults.password': '',
// config.defaults.joinDialog : 'false' // replace whole dialog with single "Join Conference" button
// config.defaults.matrix : 'false' // enable Matrix Widget support (mostly auto-detected; implies 'joinDialog')
// config.defaults.avatarurl : '' // download and set the user's Mumble avatar to the image at this URL

// General
config.defaults.theme : 'MetroMumbleDark'
