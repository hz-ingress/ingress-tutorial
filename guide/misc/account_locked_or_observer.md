# 封号和半封号状态

{% include "templates/contain_unofficial_instructions.md" %}

以下行为可能导致进入封号或者半封号状态：

 * 违反 [服务条款](https://support.google.com/ingress/answer/4400939)
 * 被多人举报
 * 被系统判定为行为异常，例如移动速度过快并且在移动过程中有 Hack 操作
 
## 封号
 
封号状态的表现包括但不限于：
 
 * 手机上登录游戏后只能看到地图，看不到任何 Portal 信息
 * 任何人（包括自己）无法查看 Profile，提示 Scanner 过热
 * 无法查看 Inventory
 * 无法查看 COMM
  
如果你确信你是被误封，请联系 NIA。
  
## 半封号

半封号又称观察者模式（Observer），玩家可以正常访问游戏但是部分操作被禁用或者出现异常。

已知正常的操作包括但不限于：

 * 升级 Resonator
 * Intel Map
 * 兑换 Passcode
 * Recycle 道具
 * Drop 道具
 * COMM 查看和发送消息
 * Hack 次数和 Hacker 成就统计正常
 * Glyph 得分和 Translator 成就统计正常
 * 行走距离和 Trekker 成就统计正常
 * 获得 AP 和消耗 XM 的量正常
 * Power Cube 可以使用

已知不正常或者无法完成的操作包括但不限于：

 * 无法安装 Mod
 * 无法 Capture 一个中立的 Portal，无法在空 Resonator 槽中放置 Resonator
 * Link（有些玩家会看到 “Neutral Original Portal” 或者 “No Linkable Portals” 的提示，有些玩家可以正常 Link）
 * Recharge（有些玩家可以在范围内 Recharge，有些玩家完全无法 Recharge）
 * L7 和 L8 的 XMP 一定会造成仅 1% 的伤害，不论距离被攻击实体多近
 * 普通 Hack 不出道具或者强制进入 Glyph Hack；Glyph Hack 不出道具或者只出一个 Bonus 道具，无论正确与否；如果尝试跳过 Glyph，会提示 “Portal Lockdown Glyph Hack Required”

NIA 宣称半封号状态是一个 Bug。有些人能通过特定的操作退出半封号状态，有些人不能。如果半封号状态持续较长时间并且下述方法均无效，请联系 NIA。

已知可能退出半封号状态的操作有：

 * OPS 菜单 - Device - Force Sync
 * 打开飞行模式再关闭
 * 重置 GPS 设置
   * Android 设备：在系统设置中关闭 GPS 再重新打开
   * iOS 设备：在系统设置 - 隐私 - 定位服务中找到 Ingress，关闭开关，再打开开关
 * 清除数据
   * Android 设备：在系统设置 - 应用 - Ingress 中点击清除数据按钮，或者删除 Ingress 应用并从 Google Play 重新下载
   * iOS 设备：删除 Ingress 并重新从 App Store 下载
 * 重启设备

---------------------

感谢： 

 * [1] [Kewe Emde (thekewe) 在 Ingress 社群发布的指南](https://plus.google.com/+KeweEmde/posts/6XgNJBEHrue)
 * [2] @kayatanrebirth 提供了关于被封帐号的表现