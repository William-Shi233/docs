<template><div><h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h1>
<h2 id="mojang-api限制" tabindex="-1"><a class="header-anchor" href="#mojang-api限制" aria-hidden="true">#</a> Mojang API限制</h2>
<p>Mojang API 每个IP的请求上限是 <strong>600次/10分钟</strong><br>
如果服务器到达此上限，LibrePremium会通知新的玩家关于此内容并断开连接。</p>
<h2 id="存档冲突" tabindex="-1"><a class="header-anchor" href="#存档冲突" aria-hidden="true">#</a> 存档冲突</h2>
<p>想象一下：</p>
<ul>
<li>有一个玩家叫做 Mati，启用了自动登录。</li>
<li>有一个玩家叫做 Maty，没有启用自动登录。
现在，Mati改变他的主意了，他想要把ID改成Maty，并也确实这么做了。</li>
</ul>
<p>现在，他尝试用新的ID去登录。正常来说，插件会自动从旧数据迁移到新数据，不过，已经有一个玩家占用了这个名字了。<br>
LibrePremium在他请求登录时把他踢出服务器，并通知他以上信息。</p>
<p>管理员必须手动迁移这些数据，以下是这些数据的解决办法：</p>
<ul>
<li>联系未启用自动登录的玩家，尝试移动他的ID到新的名字中；</li>
<li>删除未启用自动登录的玩家。<br>
解决了以上冲突之后，LibrePremium会在启用自动登录的玩家登录到服务器后自动迁移数据。</li>
</ul>
</div></template>


