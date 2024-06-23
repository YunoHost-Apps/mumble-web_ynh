<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Mumble Web

[![集成程度](https://dash.yunohost.org/integration/mumble-web.svg)](https://dash.yunohost.org/appci/app/mumble-web) ![工作状态](https://ci-apps.yunohost.org/ci/badges/mumble-web.status.svg) ![维护状态](https://ci-apps.yunohost.org/ci/badges/mumble-web.maintain.svg)

[![使用 YunoHost 安装 Mumble Web](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=mumble-web)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Mumble Web。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

mumble-web is an HTML5 Mumble client for use in modern browsers.
The Mumble protocol uses TCP for control and UDP for voice. Running in a browser, both are unavailable to this client. Instead Websockets are used for control and WebRTC is used for voice (using Websockets as fallback if the server does not support WebRTC).

**分发版本：** 1.3.0~ynh6

**演示：** <https://web.mumble.framatalk.org/>

## 截图

![Mumble Web 的截图](./doc/screenshots/screenshot.png)

## :red_circle: 负面特征

- **Upstream not maintained**: This software is not maintained anymore. Expect it to break down over time, be exposed to unfixed security breaches, etc.

## 文档与资源

- 官方应用网站： <https://mumble.info>
- 官方管理文档： <https://docs.framasoft.org/fr/jitsimeet/mumble.html>
- 上游应用代码库： <https://github.com/Johni0702/mumble-web/>
- YunoHost 商店： <https://apps.yunohost.org/app/mumble-web>
- 报告 bug： <https://github.com/YunoHost-Apps/mumble-web_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
或
sudo yunohost app upgrade mumble-web -u https://github.com/YunoHost-Apps/mumble-web_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
