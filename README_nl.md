<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Mumble Web voor Yunohost

[![Integratieniveau](https://dash.yunohost.org/integration/mumble-web.svg)](https://ci-apps.yunohost.org/ci/apps/mumble-web/) ![Mate van functioneren](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Onderhoudsstatus](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Mumble Web met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Mumble Web snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Geleverde versie:** 1.3.0~ynh7

**Demo:** <https://web.mumble.framatalk.org/>

## Schermafdrukken

![Schermafdrukken van Mumble Web](./doc/screenshots/screenshot.png)

## :red_circle: Anti-eigenschappen

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Documentatie en bronnen

- Officiele website van de app: <https://mumble.info>
- Officiele beheerdersdocumentatie: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Upstream app codedepot: <https://github.com/Johni0702/mumble-web/>
- YunoHost-store: <https://apps.yunohost.org/app/mumble-web>
- Meld een bug: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
of
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
