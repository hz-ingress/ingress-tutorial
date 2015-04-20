# 中国大陆玩家特别说明

{% include "templates/not_finished_yet.md" %}

由于特殊的国情，Ingress 又是个由 Google 开发和维护的游戏，相比国外玩家，国内玩家需要面对一些特有的问题。

## 翻墙

由于 Ingress 本身游戏服务器及官方均架设于 GAE，翻墙是进入游戏的必备条件。如果进入游戏时卡在转圈界面，或显示无法建立安全连接，又或是显示该帐号不可用（此基本为 iOS 特有），通常都是翻墙不够稳定的情况。

** 出于长期稳定游戏的考虑，通常不建议依赖于单一的公共免费翻墙通道 **

下面介绍不同平台下常用的翻墙解决方案。

### Android

Android 设备翻墙通常比较简单，可选择的服务也比较多，目前较为稳定和使用较为广泛的是  [Shadowsocks](https://github.com/shadowsocks/shadowsocks)，该项目能稳定工作在多个平台，Android 上工作也非常稳定快速，同时，在 Android 5.0 及以上的设备上，其可以不需要 root 权限便工作在支持分应用代理的 vpn 模式下，5.0 以下的设备也可以以中国路由的模式工作在 vpn 模式下。

Shadowsocks 项目本身仅提供协议和服务器/客户端实现，本身并未提供任何可以实现翻墙的服务器，此部分可以通过购买各类翻墙服务商提供的付费服务器或者自己租用 vps 搭建服务器端实现。该部分不在本教程该范围内，请自行搜索或者咨询当地其它玩家。

Shadowsocks 在 Android 上的客户端有两种

* 由 Shadowsocks 团队维护的官方客户端，你可以从 [Google Play](https://play.google.com/store/apps/details?id=com.github.shadowsocks) 或者 [项目主页](https://github.com/shadowsocks/shadowsocks-android) 下载

* 由 fqrouter 维护的 fqrouter2，你可以从 [Google Play](https://play.google.com/store/apps/details?id=fq.router2) 或者从 [官方下载地址]( https://s3-ap-southeast-1.amazonaws.com/fqrouter/fqrouter-latest.html) 下载

两者均可以在 root / 非root 模式下正常工作，其中后者有多服务器自动切换，共享可翻墙热点等额外功能，但可能在功耗上较前者稍高。

### iOS

iOS 由于系统限制，Shadowsocks 并不能在非越狱的设备上稳定工作，因此，各类 VPN 是非越狱 iOS 设备的唯一选择。付费购买或者自己搭建也是存在的两种选择，由于 VPN 种类较多，下面简单介绍下几个常见的 VPN 类别。

#### pptp

比较古老的 VPN 协议，易受干扰且很挑网络环境，不建议作为主要翻墙方式。

#### l2tp/ipSec

能在多数网络环境下正常工作，但仍有被干扰的可能，可通过描述文件实现自动连接和简单的路由配置。

#### openvpn

仅有的两个能在 iOS 上使用的第三方 VPN，客户端可在 [App Store](https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8) 下载，支持持续连接，支持路由表设定，但其已引起墙的注意，部分网络下可能受到干扰。

#### anyConnect

仅有的两个能在 iOS 上使用的第三方 VPN，客户端可在 [App Store](https://itunes.apple.com/us/app/cisco-anyconnect/id392790924?mt=8) 下载，支持持续连接，支持下发一定数量的路由表，是目前 iOS 上最稳定的 VPN 协议，但仍有部分网络受干扰的报告。

** 除 AnyConnect 外，其它协议建议准备备用翻墙方式，以避免关键时刻进不了游戏的尴尬 **

#### 越狱用户

如果你的 iOS 设备已经越狱，可以使用 [MobileShadowsocks](https://github.com/linusyang/MobileShadowSocks) 进行游戏，可在 Cydia 官方源内搜索 Shadowsocks 安装。但由于 Ingress 认证过程可能不能被 Http 代理服务器代理，在某些网络下会出现无法登陆进游戏的情况，此时，你可以使用任一 VPN 进入游戏，此后即可关闭 VPN，仅使用 Shdowsocks 进行游戏。

## Google Play Service

iOS 用户可略过此节。

[Google Play Service](https://play.google.com/store/apps/details?id=com.google.android.gms) 作为 Ingress 在 Android 上依赖的必备框架，在部分国行设备上未能预装，需要通过刷机的方式或通过各类 Google 服务安装器装入。

如果你不能判断你的设备是否有 Google Play Service，可安装任一 Google 官方应用，如 Google Maps 判断，如果应用不能正常运行，通常即为未安装或版本过老。

## 地图偏移

由于中国国家测绘局的相关规定，所有中国的电子地图均存在一定程度的非线性偏移，表现在 Ingress 里即为游戏里及 Intel 地图上显示的地图和 Portal 及玩家实际位置存在一定的偏移，关于此，需要注意以下几点。

* 游戏内地图显示的道路不可信
* 所有 Portal 位置也存在相应偏移，即 Portal 相对实际位置没有偏移
* Intel 地图上显示的地图不可信
* Intel 地图上显示的卫星图为正确坐标，可信
* 申请新 Portal 调整位置时，务必以卫星图为准
* 如果安装了 Xposed 的 Google Maps SDK Drifting Fix for China 插件，在申请新 Portal 时请务必停用或改用 [修改后](https://docs.google.com/file/d/0BxNnvIFWQpP2aWdCTkdqUXdnekk/edit) 的插件






