<!--
N.B.: Questo README è stato automaticamente generato da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON DEVE essere modificato manualmente.
-->

# Mumble Web per YunoHost

[![Livello di integrazione](https://dash.yunohost.org/integration/mumble-web.svg)](https://dash.yunohost.org/appci/app/mumble-web) ![Stato di funzionamento](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Stato di manutenzione](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Installa Mumble Web con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Leggi questo README in altre lingue.](./ALL_README.md)*

> *Questo pacchetto ti permette di installare Mumble Web su un server YunoHost in modo semplice e veloce.*  
> *Se non hai YunoHost, consulta [la guida](https://yunohost.org/install) per imparare a installarlo.*

## Panoramica

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Versione pubblicata:** 1.3.0~ynh4

**Prova:** <https://web.mumble.framatalk.org/>

## Screenshot

![Screenshot di Mumble Web](./doc/screenshots/screenshot.png)

## Documentazione e risorse

- Sito web ufficiale dell’app: <https://mumble.info>
- Documentazione ufficiale per gli amministratori: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Repository upstream del codice dell’app: <https://github.com/Johni0702/mumble-web/>
- Store di YunoHost: <https://apps.yunohost.org/app/mumble-web>
- Segnala un problema: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Informazioni per sviluppatori

Si prega di inviare la tua pull request alla [branch di `testing`](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Per provare la branch di `testing`, si prega di procedere in questo modo:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
o
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Maggiori informazioni riguardo il pacchetto di quest’app:** <https://yunohost.org/packaging_apps>
