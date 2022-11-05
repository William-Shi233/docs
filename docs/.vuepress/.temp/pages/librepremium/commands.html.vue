<template><div><h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h1>
<h2 id="身份验证命令" tabindex="-1"><a class="header-anchor" href="#身份验证命令" aria-hidden="true">#</a> 身份验证命令</h2>
<p><code v-pre>/login &lt;密码&gt;</code> 尝试使你登录（无需权限）<br>
<code v-pre>/register &lt;密码&gt; &lt;重复密码&gt;</code> 尝试为你注册（无需权限）</p>
<h2 id="正版相关命令" tabindex="-1"><a class="header-anchor" href="#正版相关命令" aria-hidden="true">#</a> 正版相关命令</h2>
<p><code v-pre>/premium &lt;密码&gt;</code> 启用自动登录（无需权限。此命令相关内容详见上一页。）<br>
<code v-pre>/cracked</code> 禁用自动登录（无需权限）</p>
<h2 id="管理员命令" tabindex="-1"><a class="header-anchor" href="#管理员命令" aria-hidden="true">#</a> 管理员命令</h2>
<p><code v-pre>/librepremium &lt;子命令&gt;</code> 需要提供子命令（需要对应子命令权限）</p>
<h3 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h3>
<p><code v-pre>/librepremium reload &lt;重载子命令&gt;</code> 需要提供子命令（需要对应子命令权限）</p>
<p><code v-pre>/librepremium reload configuration</code> 重载配置文件（需要librepremium.reload.configuration权限）<br>
<code v-pre>/librepremium reload messages</code> 重载语言文件（需要librepremium.reload.messages权限）</p>
<h3 id="为玩家" tabindex="-1"><a class="header-anchor" href="#为玩家" aria-hidden="true">#</a> 为玩家</h3>
<p><code v-pre>/librepremium user &lt;subcommand&gt;</code> 需要提供子命令（需要对应子命令权限）</p>
<p><code v-pre>/librepremium user info &lt;name&gt;</code><br>
显示玩家信息（UUID，正版UUID，加入服务器日期与最后活跃日期）（需要librepremium.user.info权限）<br>
<code v-pre>/librepremium user migrate &lt;name&gt; &lt;newName&gt;</code><br>
迁移玩家数据，详情见上一页（需要librepremium.user.migrate权限）<br>
<code v-pre>/librepremium user unregister &lt;name&gt;</code><br>
取消注册某玩家，但是下一名同ID玩家将会继承此玩家的数据（背包，进度等等）（需要librepremium.user.unregister权限）<br>
<code v-pre>/librepremium user delete &lt;name&gt;</code><br>
删除玩家数据 <strong>这些数据将永远丢失，且无法找回。最好用取消注册命令代替。</strong>（需要librepremium.user.delete权限）<br>
<code v-pre>/librepremium user premium &lt;name&gt;</code><br>
启用自动登录（需要librepremium.user.premium权限）<br>
<code v-pre>/librepremium user cracked &lt;name&gt;</code><br>
禁用自动登录并切换为破解模式（需要librepremium.user.cracked权限）<br>
<code v-pre>/librepremium user register &lt;name&gt; &lt;password&gt;</code><br>
指定一个用户名和密码注册（需要librepremium.user.register权限）<br>
<code v-pre>/librepremium user login &lt;name&gt;</code><br>
登录账户（假定此玩家在线，但是未经验证）（需要librepremium.user.login权限）<br>
<code v-pre>/librepremium user 2faoff &lt;name&gt;</code><br>
禁用某玩家的2FA（需要librepremium.user.2faoff权限）</p>
<h2 id="其它命令" tabindex="-1"><a class="header-anchor" href="#其它命令" aria-hidden="true">#</a> 其它命令</h2>
<p><code v-pre>/changepassword &lt;旧密码&gt; &lt;新密码&gt;</code> 更改密码（无需权限）<br>
<code v-pre>/2fa</code> 启用2FA，详情见上一页。</p>
</div></template>


