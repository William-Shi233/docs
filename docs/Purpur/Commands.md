# 命令

Purpur 在游戏中添加了一些新命令。

::: tip
若你安装了 Essentials，Essentials 将会覆盖下面的部分命令。要使用 Purpur 的命令，请将下列 `disabled_commands` 部分添加到 Essentials 配置文件中。
``` yaml
disabled-commands:
  - ping
  - uptime
  - compass
```
:::

## /purpur
- 此命令将重新加载 purpur.yml 配置文件并显示 Purpur 版本。

- **示例**:
    - `/purpur reload` 重新加载 purpur.yml （无需重新启动服务器）
    - `/purpur version` 显示当前版本（同 `/version`）

- **权限**:
    - `bukkit.command.purpur`

## /ping
- 此命令将显示玩家的延迟。如果不指定玩家名或使用玩家实体目标选择器（`@a`，`@r`）则会为你显示你自己的延迟。

- **示例**
    - `/ping` 显示你自己的延迟
    - `/ping BillyGalbreath` 显示一名叫做 BillyGalbreath 的玩家的延迟
    - `/ping @a` 为你显示所有玩家的延迟
    - `/ping @r` 为你随机显示一名玩家的延迟

- **权限**:
    - `bukkit.command.ping`

## /uptime
- 此命令将显示玩家的运行时间。

- **权限**:
    - `bukkit.command.uptime`

## /demo
::: details 演示模式画面 📷
![Demo Screen](https://purpurmc.org/docs/images/demo.png)
:::

- 此命令将为玩家显示演示模式画面。如果不指定玩家名或使用玩家实体目标选择器（`@a`，`@r`）则会为你自己显示演示模式画面。

- **示例**
    - `/demo` 为你自己显示演示画面
    - `/demo BillyGalbreath` 为一名叫做 BillyGalbreath 的玩家显示演示画面
    - `/demo @a` 为所有玩家显示演示画面
    - `/demo @r` 为随机一名玩家显示演示画面
- **权限**:
    - `bukkit.command.demo`
## /credits
::: details 终末之诗画面 📷
![终末之诗画面](https://purpurmc.org/docs/images/credits.png)
:::

- 此命令将为玩家播放终末之诗。如果不指定玩家名或使用玩家实体目标选择器（`@a`，`@r`）则会为你自己播放终末之诗。

- **示例**
    - `/credits` 为你自己播放终末之诗
    - `/credits BillyGalbreath` 为一名叫做 BillyGalbreath 的玩家播放终末之诗
    - `/credits @a` 为所有玩家播放终末之诗
    - `/credits @r` 为随机一名玩家播放终末之诗
- **权限**:
    - `bukkit.command.credits`

## /tpsbar
::: details 正在使用 tpsbar 的图像 📷
![正在使用TPSBar](https://purpurmc.org/docs/images/bossbar.gif)
:::

- 此命令将为玩家在 bossbar 上显示当前的 TPS/MSPT。如果不指定玩家名或使用玩家实体目标选择器（`@a`，`@r`）则会为你自己显示当前的 TPS/MSPT。

- **示例**

    - `/tpsbar` 为你自己显示当前的 TPS/MSPT
    - `/tpsbar BillyGalbreath` 为一名叫做 BillyGalbreath 的玩家显示当前的 TPS/MSPT
    - `/tpsbar @a` 为所有玩家显示当前的 TPS/MSPT
    - `/tpsbar @r` 为随机一名玩家显示当前的 TPS/MSPT
- **权限**:
    - `bukkit.command.tpsbar`

## /compass
::: details 正在使用指南针的图像 📷
![正在使用指南针](https://purpurmc.org/docs/images/bossbar.gif)
::: 

- 此命令将为玩家在 bossbar 上显示当前玩家面向的方向。如果不指定玩家名或使用玩家实体目标选择器（`@a`，`@r`）则会为你自己显示指南针。

- **示例**
    - `/compass` 为你自己显示指南针
    - `/compass BillyGalbreath` 为一名叫做 BillyGalbreath 的玩家显示指南针
    - `/compass @a` 为所有玩家显示指南针
    - `/compass @r` 为随机一名玩家显示指南针

- **权限**:
    - `bukkit.command.compass`