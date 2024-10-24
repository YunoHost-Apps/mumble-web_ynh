<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Mumble Web untuk YunoHost

[![Tingkat integrasi](https://dash.yunohost.org/integration/mumble-web.svg)](https://ci-apps.yunohost.org/ci/apps/mumble-web/) ![Status kerja](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Status pemeliharaan](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Pasang Mumble Web dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Mumble Web secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Versi terkirim:** 1.3.0~ynh7

**Demo:** <https://web.mumble.framatalk.org/>

## Tangkapan Layar

![Tangkapan Layar pada Mumble Web](./doc/screenshots/screenshot.png)

## :red_circle: Antifitur

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://mumble.info>
- Dokumentasi admin resmi: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Depot kode aplikasi hulu: <https://github.com/Johni0702/mumble-web/>
- Gudang YunoHost: <https://apps.yunohost.org/app/mumble-web>
- Laporkan bug: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
atau
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
