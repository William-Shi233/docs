<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<h3 id="获取插件" tabindex="-1"><a class="header-anchor" href="#获取插件" aria-hidden="true">#</a> 获取插件</h3>
<p>你可以从以下几个方式获取到插件：</p>
<ul>
<li><a href="https://github.com/kyngs/LibrePremium/releases" target="_blank" rel="noopener noreferrer">Github Releases<ExternalLinkIcon/></a></li>
<li><a href="https://www.spigotmc.org/resources/librepremium-bungee-velocity.101040/" target="_blank" rel="noopener noreferrer">SpigotMC页面<ExternalLinkIcon/></a></li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>先关闭代理端。<br>
然后将插件放入/plugins文件夹中，启动代理端。</p>
<p>接下来，控制台会打印以下内容：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[16:39:51 INFO] [librepremium]: Loading configuration...
[16:39:51 WARN] [librepremium]: !! A new configuration was generated, please fill it out, if in doubt, see the wiki !!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，可以在生成的LibrePremium插件文件夹中编辑生成的配置文件了。</p>
<h3 id="limbo" tabindex="-1"><a class="header-anchor" href="#limbo" aria-hidden="true">#</a> Limbo</h3>
<p>接下来，你应该选择并配置你的Limbo服务器。绝大多数的人选择使用一个Minecraft服务器作为Limbo。这既不安全，过度奢华，甚至不能容纳过多的玩家。<br>
作者推荐选择一个专业的Limbo软件，例如<a href="https://www.spigotmc.org/resources/nanolimbo-1-8-1-18.86198/" target="_blank" rel="noopener noreferrer">NanoLimbo<ExternalLinkIcon/></a>，它即轻量，可配置，也可以容纳很多玩家。</p>
<h3 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h3>
<h2 id="数据库迁移" tabindex="-1"><a class="header-anchor" href="#数据库迁移" aria-hidden="true">#</a> 数据库迁移</h2>
<h3 id="可迁移的插件" tabindex="-1"><a class="header-anchor" href="#可迁移的插件" aria-hidden="true">#</a> 可迁移的插件</h3>
<p>*如果你正在使用的身份验证插件还没有被LibrePremium支持，<br>
请先切换回原有的插件（本地服务器也可）并新建一个随机用户，将密码设定为“testpassword”，然后将该MySQL数据库行导出，在Discord PM作者寻求支持。  *</p>
<ul>
<li>JPremium SHA256</li>
<li>AuthMe BCrypt</li>
<li>AuthMe SHA256</li>
<li>Aegis BCrypt</li>
<li>DynamicBungeeAuth SHA512</li>
<li>JPremium BCrypt</li>
</ul>
<h3 id="开始迁移" tabindex="-1"><a class="header-anchor" href="#开始迁移" aria-hidden="true">#</a> 开始迁移</h3>
<p>接下来是一个快速的指南，教学如何迁移数据库。<br>
在配置文件夹中找到<code v-pre>config.conf</code>，并找到以下内容：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>migration {
    old-database {
        # 你的旧数据库名
        database=""
        # 你的旧数据库IP，默认为本机
        host=localhost
        # 你的旧数据库密码
        password=""
        # 你的旧数据库端口
        port=3306
        # 你的旧数据库表
        table=user-data
        # 你的旧数据库用户名
        user=root
    }
    # 是否要在下次启动服务器时，完成迁移工作？
    on-next-startup=false
    # 支持迁移的插件
    # JPremium - Can convert from JPremium SHA256
    # AuthMe - Can convert from AuthMe BCrypt and SHA256
    # Aegis - Can convert from Aegis BCrypt
    # DBA-SHA-512 - Can convert from DynamicBungeeAuth, which was configured to use SHA-512
    type=""
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成以上配置过程，请重新启动你的代理端。<br>
LibrePremium将自动完成数据迁移，当完成后，请记得设置<code v-pre>on-next-startup</code>为false。<br>
现在你的数据应该迁移完毕，如果出现了什么差错，请记得在GitHub Issue报告。</p>
<h2 id="创建uuid" tabindex="-1"><a class="header-anchor" href="#创建uuid" aria-hidden="true">#</a> 创建UUID</h2>
<p>LibrePremium提供三种自动创建UUID的方式，每一个都有其优缺点。<br>
<strong>只会对新用户生效</strong></p>
<h3 id="random-随机" tabindex="-1"><a class="header-anchor" href="#random-随机" aria-hidden="true">#</a> RANDOM（随机）</h3>
<p>这个方式非常简单，随机生成UUID。<br>
请注意：如果你不迁移数据库，玩家的数据将丢失。</p>
<h3 id="cracked-破解" tabindex="-1"><a class="header-anchor" href="#cracked-破解" aria-hidden="true">#</a> CRACKED（破解）</h3>
<p>与离线模式服务器的工作原理一致。</p>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<p>让我们想象一下一名叫做<code v-pre>pepazdepavole</code>的玩家首次加入服务器的情况。<br>
他的UUID将是<code v-pre>f586c1d8-2314-3df5-bfc4-9ff22f132273</code>，接下来，玩家启用了自动登录并修改了他们的ID为<code v-pre>kyngs</code>。不过，即使修改了ID，UUID也不会变化。</p>
<p>现在，又有一名新玩家叫做<code v-pre>pepazdepavole</code>恰好想要游玩服务器。从逻辑上讲，在数据库中找不到叫做<code v-pre>pepazdepavole</code>的玩家，应该新建一个新的游戏档案。<br>
但是，由于他的UUID为<code v-pre>f586c1d8-2314-3df5-bfc4-9ff22f132273</code>，所以，他会被踢出服务器并要求更改ID为<code v-pre>kyngs</code>登录。</p>
<p><strong>太长不看：</strong><br>
玩家如果修改了他们的ID，旧的ID也不能用。</p>
<h3 id="mojang" tabindex="-1"><a class="header-anchor" href="#mojang" aria-hidden="true">#</a> Mojang</h3>
<p>首先与数据库对比是否存在该用户，如果是，则用正版UUID。否则使用破解UUID。<br>
缺点和<code v-pre>CRACKED</code>一样。</p>
</div></template>


