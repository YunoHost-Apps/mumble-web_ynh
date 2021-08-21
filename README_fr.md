# Mumble Web pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/mumble-web.svg)](https://dash.yunohost.org/appci/app/mumble-web) ![](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)  
[![Installer Mumble Web avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Mumble Web rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Interface web interface pour voix sur IP (VoIP)

**Version incluse :** 1.3.0~ynh3

**Démo :** https://web.mumble.framatalk.org/

## Captures d'écran

![](./doc/screenshots/screenshot.png)

## Avertissements / informations importantes

## Configuration

- Pour utiliser *Mumble web*, vous devez d'abord installer le [server Mumble](https://github.com/YunoHost-Apps/mumbleserver_ynh). 
- Cette installation suppose que le serveur Mumble est servi par le port `64738`
- Diverses options de configuration sont disponibles pour *Mumble web* sur ce fichier de configuration `/var/www/mumble-web/dist/config.local.js` 

## Documentation

- Documentation Murmur : https://wiki.mumble.info/wiki/Murmurguide
- Documentation Framasoft : https://docs.framasoft.org/fr/jitsimeet/mumble.html

## Documentations et ressources

* Site officiel de l'app : https://mumble.info
* Documentation officielle de l'admin : https://docs.framasoft.org/fr/jitsimeet/mumble.html
* Dépôt de code officiel de l'app : https://github.com/Johni0702/mumble-web/
* Documentation YunoHost pour cette app : https://yunohost.org/app_mumble-web
* Signaler un bug : https://github.com/YunoHost-Apps/mumble-web_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
ou
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps