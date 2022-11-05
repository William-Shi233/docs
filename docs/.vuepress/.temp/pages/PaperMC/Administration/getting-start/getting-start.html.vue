<template><div><h1 id="让我们开始吧" tabindex="-1"><a class="header-anchor" href="#让我们开始吧" aria-hidden="true">#</a> 让我们开始吧</h1>
<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2>
<blockquote>
<p>注意：<br>
在1.18版本发布后，Paper需要<strong>Java17</strong>才能正常运行。如果你还没有使用Java17，请先下载Java17。</p>
</blockquote>
<table>
<thead>
<tr>
<th>Paper版本</th>
<th>建议Java版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.8 - 1.11</td>
<td>Java8</td>
</tr>
<tr>
<td>1.12 - 1.16.4</td>
<td>Java 11</td>
</tr>
<tr>
<td>1.16.5</td>
<td>Java 16</td>
</tr>
<tr>
<td>1.17 - 1.18.1 或更高</td>
<td>Java 17</td>
</tr>
</tbody>
</table>
<h2 id="迁移存档到paper" tabindex="-1"><a class="header-anchor" href="#迁移存档到paper" aria-hidden="true">#</a> 迁移存档到Paper</h2>
<h3 id="从vanilla-原版-迁移" tabindex="-1"><a class="header-anchor" href="#从vanilla-原版-迁移" aria-hidden="true">#</a> 从Vanilla（原版）迁移：</h3>
<p>从原版迁移到Paper相当容易，但是存档稍微不同：Paper（或CraftBukkit或Spigot）会将不同的维度单独分成不同的文件夹。<br>
但是，不用为此担心！Paper会自动帮助你转换存档。</p>
<blockquote>
<p><strong>译者注：</strong><br>
“不用担心” 是指Paper会自动将存档转换为Paper的存档格式。<br>
但是万一哪天想要从该格式转到原版存档格式则手动转换，因为原版服务端没有提供自动转换功能。</p>
</blockquote>
<h3 id="从craftbukkit或spigot迁移" tabindex="-1"><a class="header-anchor" href="#从craftbukkit或spigot迁移" aria-hidden="true">#</a> 从CraftBukkit或Spigot迁移：</h3>
<p>Paper是CraftBukkit或Spigot开箱即用的替代品（Fork），因此你无需存档担忧。</p>
<h2 id="下载paper" tabindex="-1"><a class="header-anchor" href="#下载paper" aria-hidden="true">#</a> 下载Paper</h2>
<p>Paper提供了可以直接下载的Jar文件：<a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a>。
确保游戏版本和所需下载的构建版本号正确后，点击下载按钮即可。</p>
<h2 id="启动服务器" tabindex="-1"><a class="header-anchor" href="#启动服务器" aria-hidden="true">#</a> 启动服务器</h2>
<p>启动服务器与启动其它Java程序一样。</p>
<p>打开你的终端，切换到存放服务器数据的文件夹，然后运行<code v-pre>java -Xms2G -Xmx2G -jar paper.jar --nogui</code>。<br>
需要将<code v-pre>paper.jar</code>修改成你实际下载的文件名。</p>
<p>你想要调整为服务器分配的内存，只需要修改<code v-pre>-Xms</code>和<code v-pre>-Xmx</code>参数。并且使用<code v-pre>--nogui</code>禁用原版服务端的GUI。
如果使用了<code v-pre>--nogui</code>参数，服务端不会弹出两个界面（一个终端一个GUI）。</p>
<p>要对此参数进行更加细致的调整，详见左侧 Aikar's Flags 一文。</p>
</div></template>


