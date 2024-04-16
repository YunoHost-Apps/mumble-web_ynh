<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Mumble Web para YunoHost

[![Nivel de integración](https://dash.yunohost.org/integration/mumble-web.svg)](https://dash.yunohost.org/appci/app/mumble-web) ![Estado de funcionamento](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Estado de mantemento](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Instalar Mumble Web con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Mumble Web de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Versión proporcionada:** 1.3.0~ynh5

**Demo:** <https://web.mumble.framatalk.org/>

## Capturas de pantalla

![Captura de pantalla de Mumble Web](./doc/screenshots/screenshot.png)

## Documentación e recursos

- Web oficial da app: <https://mumble.info>
- Documentación oficial para admin: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Repositorio de orixe do código: <https://github.com/Johni0702/mumble-web/>
- Tenda YunoHost: <https://apps.yunohost.org/app/mumble-web>
- Informar dun problema: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
ou
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
