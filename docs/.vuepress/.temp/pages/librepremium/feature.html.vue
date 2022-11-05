<template><div><h1 id="特色功能" tabindex="-1"><a class="header-anchor" href="#特色功能" aria-hidden="true">#</a> 特色功能</h1>
<h2 id="名称验证" tabindex="-1"><a class="header-anchor" href="#名称验证" aria-hidden="true">#</a> 名称验证</h2>
<p>Librepremium将确保每名玩家都有其可用的ID。<br>
它会强制不区分英文大小写。</p>
<p>目前，它必须：</p>
<ul>
<li>不超过17个字符。</li>
<li>匹配正则表达式 <code v-pre>[a-zA-Z0-9_]*</code> （英文小写，英文大写，0-9或者下划线）</li>
<li>与数据库中已有的玩家名称不冲突。</li>
</ul>
<h2 id="自动登录" tabindex="-1"><a class="header-anchor" href="#自动登录" aria-hidden="true">#</a> 自动登录</h2>
<p>LibrePremium允许正版玩家自动登录。</p>
<h3 id="如何启用" tabindex="-1"><a class="header-anchor" href="#如何启用" aria-hidden="true">#</a> 如何启用</h3>
<p>输入 <code v-pre>/premium &lt;密码&gt;</code> 命令来启用它。<br>
输入 <code v-pre>/cracked</code> 命令来禁用它。</p>
<p><strong>注意：玩家一旦启用自动登录，此过程不可逆，并且玩家将无法再次通过破解客户端加入到服务器。</strong><br>
<strong>如果有玩家意外地打开了它，管理员必须手动关闭。</strong></p>
<h2 id="自动名称迁移" tabindex="-1"><a class="header-anchor" href="#自动名称迁移" aria-hidden="true">#</a> 自动名称迁移</h2>
<p><em>玩家之间的数据迁移从未如此简单过。</em></p>
<p><strong>自动迁移</strong><br>
LibrePremium会检测正版玩家（仅启用自动登录的情况下）更改名称，并自动完成玩家的数据迁移（物品栏与插件的数据）。</p>
<p><strong>手动迁移</strong><br>
你可以通过输入 <code v-pre>/librepremium user &lt;旧ID&gt; name &lt;新ID&gt;</code> 命令进行不同玩家之间的数据迁移工作。<br>
如果玩家启用了自动登录，也将禁用自动登录。</p>
<h2 id="_2fa" tabindex="-1"><a class="header-anchor" href="#_2fa" aria-hidden="true">#</a> 2FA</h2>
<p>LibrePremium是目前市面上唯一一个通过TOTP（Authy，Google Authenticator等软件）支持2FA的代理端身份验证插件。<br>
想要使玩家的账户更加安全吗？启用2FA功能是个不错的选择。</p>
<h3 id="设置2fa" tabindex="-1"><a class="header-anchor" href="#设置2fa" aria-hidden="true">#</a> 设置2FA</h3>
<ul>
<li>BungeeCord和Velocity需要安装<a href="https://www.spigotmc.org/resources/protocolize-protocollib-for-bungeecord-waterfall-velocity.63778/" target="_blank" rel="noopener noreferrer">Protocolize<ExternalLinkIcon/></a></li>
<li>在配置文件中启用 TOTP，然后填写你的服务器名称</li>
<li>玩家需要访问Limbo服务器（下文），用于扫描2FA二维码。</li>
</ul>
<h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h3>
<p>如常访问服务器，并输入 <code v-pre>/2fa</code> 命令。接下来，玩家将被传送到Limbo服务器。<br>
玩家需要使用上述TOTP软件扫描Limbo中显示的二维码，然后重新加入服务器。<br>
一切完成后，登录时便需要2FA了：<code v-pre>/login &lt;密码&gt; &lt;2FA验证码&gt;</code></p>
<h2 id="floodgate" tabindex="-1"><a class="header-anchor" href="#floodgate" aria-hidden="true">#</a> Floodgate</h2>
<p>LibrePremium支持玩家通过基岩版（需要安装Floodgate）加入到服务器中。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>你只需要在代理端安装Floodgate，LibrePremium将自动检测并完成兼容。</p>
<h3 id="它如何工作" tabindex="-1"><a class="header-anchor" href="#它如何工作" aria-hidden="true">#</a> 它如何工作？</h3>
<p>通过基岩版访问服务器，就如同正版玩家加入服务器一样。两者不同的是，基岩版用户将不能使用大多数功能。</p>
</div></template>


