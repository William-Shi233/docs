<template><div><h1 id="迁移数据" tabindex="-1"><a class="header-anchor" href="#迁移数据" aria-hidden="true">#</a> 迁移数据</h1>
<p>要从你的服务器迁移到Paper相当简单。下面将告诉你如何迁移数据。</p>
<blockquote>
<p><strong>备份数据</strong><br>
开始之前，请确保你的服务器有一份可用的完整备份。</p>
</blockquote>
<h2 id="从其它服务端迁移到paper" tabindex="-1"><a class="header-anchor" href="#从其它服务端迁移到paper" aria-hidden="true">#</a> 从其它服务端迁移到Paper</h2>
<h3 id="从craftbukkit或spigot" tabindex="-1"><a class="header-anchor" href="#从craftbukkit或spigot" aria-hidden="true">#</a> 从CraftBukkit或Spigot</h3>
<p>从CraftBukkit或Spigot服务端迁移到Paper很简单，只需要按照以下步骤进行：</p>
<ol>
<li>停止正在运行的Minecraft服务器，然后新建一份完整的备份。</li>
<li>从<a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">官方网站<ExternalLinkIcon/></a>下载Paper服务端。</li>
<li>使用下载的Paper服务端核心替换掉原服务端。</li>
<li>启动服务器。<br>
Paper与现有的插件完全兼容。</li>
</ol>
<blockquote>
<p><strong>配置文件</strong><br>
Paper依旧会保留bukkit.yml和spigot.yml并使用它们的配置。只有新增的配置才会保存到paper.yml中。</p>
</blockquote>
<h3 id="从vanilla-原版" tabindex="-1"><a class="header-anchor" href="#从vanilla-原版" aria-hidden="true">#</a> 从Vanilla（原版）</h3>
<p>当从原版迁移到Paper服务端时，每一个世界文件夹都会自动转换。如果你想要从Paper转回原版，请阅读下文的“转到Vanilla（原版）”。</p>
<ol>
<li>停止正在运行的原版服务端，然后新建一份完整的备份。</li>
<li>从<a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">官方网站<ExternalLinkIcon/></a>下载Paper服务端核心并替换掉原版服务端。</li>
<li>启动服务器。</li>
</ol>
<h3 id="从forge或fabric" tabindex="-1"><a class="header-anchor" href="#从forge或fabric" aria-hidden="true">#</a> 从Forge或Fabric</h3>
<p>由于Forge或Fabric与原版服务器的世界文件完全一致，所以只需要按照上文“从Vanilla（原版）”的步骤转移数据即可。不过请注意，如果你使用Mod自定义了某些方块，物品或其它数据，Paper无法加载这些自定义内容。</p>
<p>除此之外，Paper不支持任何Fabric或Forge的Mod。你需要寻找插件的替代品。任何兼容插件与Mod的服务端几乎都有缺陷，不建议使用。</p>
<blockquote>
<p>译者注：<br>
大多数无需Mod的插件都不会主动为Mod提供兼容，甚至有的插件已经表明“不支持也不会支持Mod”。所以，请尽量专注于使用Mod服务端或插件服务端任意一种。</p>
</blockquote>
<h2 id="从paper迁移到其它服务端" tabindex="-1"><a class="header-anchor" href="#从paper迁移到其它服务端" aria-hidden="true">#</a> 从Paper迁移到其它服务端</h2>
<h3 id="转到vanilla-原版" tabindex="-1"><a class="header-anchor" href="#转到vanilla-原版" aria-hidden="true">#</a> 转到Vanilla（原版）</h3>
<p>由于Paper将原版服务端存档文件进行拆分，所以需要手动进行数据迁移。如果不进行手动迁移，则下界和末地就像是被重置了一样。但是不用担心！即使看起来就像是被重置了一样，你的存档依然没有丢失，只是原版服务端不清楚怎么才能找到下界和末地的存档文件。</p>
<p>以下表格将展示Paper服务端和原版服务端存档的区别。<br>
<a href="https://imgse.com/i/xQP5BF" target="_blank" rel="noopener noreferrer"><img src="https://s1.ax1x.com/2022/10/03/xQP5BF.png" alt="xQP5BF.png"><ExternalLinkIcon/></a></p>
<blockquote>
<p><strong>注意</strong><br>
以下步骤将假设 <code v-pre>level-name</code>（在server.properties中设定）是 <code v-pre>world</code>。<br>
如果不是，请将下文 <code v-pre>world</code> 相关字符改成 <code v-pre>level-name</code> 的值。</p>
</blockquote>
<ol>
<li>如果服务器正在运行，请先停止。</li>
<li>如果你已经运行了原版服务器，请先前往 <code v-pre>world</code> 文件夹中删除 DIM-1 和 DIM1 文件夹。只有在原版服务器已经启动时，才需要进行该步骤。</li>
<li>复制 <code v-pre>/world_nether/DIM-1</code> 到 <code v-pre>/world</code> 文件夹中。</li>
<li>复制 <code v-pre>/world_nether/DIM1</code> 到 <code v-pre>/world</code> 文件夹中。</li>
<li>删除 <code v-pre>/world_nether</code> 和 <code v-pre>/world_the_end</code> 文件夹。</li>
<li>使用原版服务端替换掉Paper服务端。</li>
<li>启动原版服务端。</li>
</ol>
<h3 id="转到craftbukkit或spigot" tabindex="-1"><a class="header-anchor" href="#转到craftbukkit或spigot" aria-hidden="true">#</a> 转到CraftBukkit或Spigot</h3>
<p>Paper不支持迁移存档到CraftBukkit或Spigot！虽然你可能会成功（因为Paper与CraftBukkit或Spigot的存档文件夹结构相同），但是不要为此产生的任何问题寻求支持，并且该过程可能会<strong>丢失数据</strong>。</p>
<h3 id="转到fabric或forge" tabindex="-1"><a class="header-anchor" href="#转到fabric或forge" aria-hidden="true">#</a> 转到Fabric或Forge</h3>
<p>因为Fabric或Forge与原版的文件夹结构是一致的，所以参考原版迁移方法即可完成存档迁移。请注意：Fabric和Forge都不支持Paper插件！你需要寻找Mod来代替服务器插件。</p>
</div></template>


