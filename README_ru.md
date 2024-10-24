<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Mumble Web для YunoHost

[![Уровень интеграции](https://dash.yunohost.org/integration/mumble-web.svg)](https://ci-apps.yunohost.org/ci/apps/mumble-web/) ![Состояние работы](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![Состояние сопровождения](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![Установите Mumble Web с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Mumble Web быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**Поставляемая версия:** 1.3.0~ynh7

**Демо-версия:** <https://web.mumble.framatalk.org/>

## Снимки экрана

![Снимок экрана Mumble Web](./doc/screenshots/screenshot.png)

## :red_circle: Анти-функции

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## Документация и ресурсы

- Официальный веб-сайт приложения: <https://mumble.info>
- Официальная документация администратора: <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- Репозиторий кода главной ветки приложения: <https://github.com/Johni0702/mumble-web/>
- Магазин YunoHost: <https://apps.yunohost.org/app/mumble-web>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
или
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
