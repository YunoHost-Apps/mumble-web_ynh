<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Mumble Web pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/mumble-web.svg)](https://ci-apps.yunohost.org/ci/apps/mumble-web/) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Installer Mumble Web avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Mumble Web rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

mumble-web est un client HTML5 Mumble à utiliser dans les navigateurs modernes.
Le protocole Mumble utilise TCP pour le contrôle et UDP pour la voix. Fonctionnant dans un navigateur, les deux ne sont pas disponibles pour ce client. Au lieu de cela, les Websockets sont utilisés pour le contrôle et WebRTC est utilisé pour la voix (en utilisant les Websockets comme solution de secours si le serveur ne prend pas en charge WebRTC).

**Version incluse :** 1.3.0~ynh7

**Démo :** <https://web.mumble.framatalk.org/>

## Captures d’écran

![Capture d’écran de Mumble Web](./doc/screenshots/screenshot.png)

## :red_circle: Anti-fonctionnalités

- **Application non maintenue **: Ce logiciel n'est plus maintenu. Attendez-vous à ce qu'il ne fonctionne plus avec le temps, et que l'on découvre des failles de sécurité qui ne seront pas corrigées, etc.

## Documentations et ressources

- Site officiel de l’app : <https://mumble.info>
- Documentation officielle de l’admin : <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Dépôt de code officiel de l’app : <https://github.com/Johni0702/mumble-web/>
- YunoHost Store : <https://apps.yunohost.org/app/mumble-web>
- Signaler un bug : <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
ou
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
