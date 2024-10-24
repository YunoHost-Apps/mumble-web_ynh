<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Mumble Web para Yunohost

[![Nivel de integración](https://dash.yunohost.org/integration/mumble-web.svg)](https://ci-apps.yunohost.org/ci/apps/mumble-web/) ![Estado funcional](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Estado En Mantención](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Instalar Mumble Web con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarMumble Web rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Versión actual:** 1.3.0~ynh7

**Demo:** <https://web.mumble.framatalk.org/>

## Capturas

![Captura de Mumble Web](./doc/screenshots/screenshot.png)

## :red_circle: Características no deseables

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Documentaciones y recursos

- Sitio web oficial: <https://mumble.info>
- Documentación administrador oficial: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/Johni0702/mumble-web/>
- Catálogo YunoHost: <https://apps.yunohost.org/app/mumble-web>
- Reportar un error: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
o
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
