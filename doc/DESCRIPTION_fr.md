mumble-web est un client HTML5 Mumble à utiliser dans les navigateurs modernes.
Le protocole Mumble utilise TCP pour le contrôle et UDP pour la voix. Fonctionnant dans un navigateur, les deux ne sont pas disponibles pour ce client. Au lieu de cela, les Websockets sont utilisés pour le contrôle et WebRTC est utilisé pour la voix (en utilisant les Websockets comme solution de secours si le serveur ne prend pas en charge WebRTC).