<template><div><h1 id="purpur-配置文件" tabindex="-1"><a class="header-anchor" href="#purpur-配置文件" aria-hidden="true">#</a> Purpur 配置文件</h1>
<h2 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证" aria-hidden="true">#</a> 许可证</h2>
<p>本作品使用 <a href="https://github.com/PurpurMC/PurpurDocs/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">BSD-2-Clause license<ExternalLinkIcon/></a> 作为许可证。同时，本作品原作者与版权归属为 PurpurMC。<br>
poikcue 对本作品进行翻译工作。<br>
本 Purpur 配置文件原页面：https://purpurmc.org/docs/Configuration/</p>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>本文将介绍由Purpur提供的、位于purpur.yml文件中所有的配置项。</p>
<p>如果你想要了解关于paper.yml，spigot.yml，server.properties，你可以在它们对应的文档中阅读。</p>
<ul>
<li>
<p><a href="https://minecraft.fandom.com/wiki/Server.properties" target="_blank" rel="noopener noreferrer">Server Configuration (server.properties)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://bukkit.fandom.com/wiki/Bukkit.yml" target="_blank" rel="noopener noreferrer">Bukkit Configuration (bukkit.yml)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.spigotmc.org/wiki/spigot-configuration/" target="_blank" rel="noopener noreferrer">Spigot Configuration (spigot.yml)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://docs.papermc.io/paper/reference/paper-global-configuration" target="_blank" rel="noopener noreferrer">Paper Configuration (paper.yml)<ExternalLinkIcon/></a><br>
<a href="https://docs.poikcue.com/#/PaperMC/Administration/Reference/global-configuration" target="_blank" rel="noopener noreferrer">Paper 配置文件（paper.yml）<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://docs.pufferfish.host/setup/pufferfish-fork-configuration/" target="_blank" rel="noopener noreferrer">Pufferfish Configuration (pufferfish.yml)<ExternalLinkIcon/></a></p>
</li>
</ul>
<blockquote>
<p><strong>警告</strong><br>
配置中的值可能会多次更改，这就意味着这里的信息不一定是完整的。如果你找不到想要修改的项或出现了某些错误，请在<a href="https://purpurmc.org/discord" target="_blank" rel="noopener noreferrer">Discord<ExternalLinkIcon/></a>中与我们联系。<br>
译者注：如果你正在阅读本文，请先在原文档中查看是否是中文翻译的错误。如果是，请麻烦在 <a href="https://github.com/poikcue/docs/issues/new" target="_blank" rel="noopener noreferrer">GitHub Issue<ExternalLinkIcon/></a> 留言或提交 <a href="https://github.com/poikcue/docs/pulls" target="_blank" rel="noopener noreferrer">PR<ExternalLinkIcon/></a> 。</p>
</blockquote>
<h2 id="全局设定" tabindex="-1"><a class="header-anchor" href="#全局设定" aria-hidden="true">#</a> 全局设定</h2>
<p>全局设定将会影响服务器中的所有世界与服务器本身的功能。</p>
<h3 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose" aria-hidden="true">#</a> verbose</h3>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 在服务器启动时是否要在日志中打印所有配置项的值。</li>
</ul>
<h3 id="config-version" tabindex="-1"><a class="header-anchor" href="#config-version" aria-hidden="true">#</a> config-version</h3>
<ul>
<li>**无论是什么理由都不要更改此值！**本配置项将帮助自动更新你的配置文件。</li>
</ul>
<h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3>
<ul>
<li>
<h4 id="uptime" tabindex="-1"><a class="header-anchor" href="#uptime" aria-hidden="true">#</a> uptime</h4>
<ul>
<li>
<h5 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format</h5>
<ul>
<li><strong>默认值</strong>: &quot;&lt;days&gt;&lt;hours&gt;&lt;minutes&gt;&lt;seconds&gt;&quot;</li>
<li><strong>描述</strong>: 用于在 <code v-pre>&lt;uptime&gt;</code> 中显示 <a href="#uptime-command-output"><code v-pre>uptime-command-output</code></a> 的格式。</li>
</ul>
</li>
<li>
<h5 id="day" tabindex="-1"><a class="header-anchor" href="#day" aria-hidden="true">#</a> day</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d day,&quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;day&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="days" tabindex="-1"><a class="header-anchor" href="#days" aria-hidden="true">#</a> days</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d days, &quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;days&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="hour" tabindex="-1"><a class="header-anchor" href="#hour" aria-hidden="true">#</a> hour</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d hour, &quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;hour&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="hours" tabindex="-1"><a class="header-anchor" href="#hours" aria-hidden="true">#</a> hours</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d hours, &quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;hours&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="minute" tabindex="-1"><a class="header-anchor" href="#minute" aria-hidden="true">#</a> minute</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d minute, and &quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;minute&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> minutes</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d minutes, and &quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;minutes&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="second" tabindex="-1"><a class="header-anchor" href="#second" aria-hidden="true">#</a> second</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d second&quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;second&gt;</code> 的输出内容。</li>
</ul>
</li>
<li>
<h5 id="seconds" tabindex="-1"><a class="header-anchor" href="#seconds" aria-hidden="true">#</a> seconds</h5>
<ul>
<li><strong>默认值</strong>: &quot;%02d seconds&quot;</li>
<li><strong>描述</strong>: 在 <a href="#format">command.uptime.format</a> 配置项中显示 <code v-pre>&lt;second&gt;</code> 的输出内容。</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="gamemode" tabindex="-1"><a class="header-anchor" href="#gamemode" aria-hidden="true">#</a> gamemode</h4>
<ul>
<li>
<h5 id="requires-specific-permission" tabindex="-1"><a class="header-anchor" href="#requires-specific-permission" aria-hidden="true">#</a> requires-specific-permission</h5>
<ul>
<li>需要 <a href="../Permissions#minecraftcommandgamemodegamemode"><code v-pre>minecraft.command.gamemode.&lt;gamemode&gt;</code></a> 权限</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要为每个游戏模式设定其专属权限。</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill</h4>
<ul>
<li>
<h5 id="max-area" tabindex="-1"><a class="header-anchor" href="#max-area" aria-hidden="true">#</a> max-area</h5>
<ul>
<li><strong>默认值</strong>: 32768</li>
<li><strong>描述</strong>: <code v-pre>/fill</code>命令可以影响的最大区域。</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="tpsbar" tabindex="-1"><a class="header-anchor" href="#tpsbar" aria-hidden="true">#</a> tpsbar</h4>
<ul>
<li>
<h5 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h5>
<p><code v-pre>&lt;tps&gt;</code> - 当前的TPS</p>
<p><code v-pre>&lt;mspt&gt;</code> - 当前的MSPT</p>
<p><code v-pre>&lt;ping&gt;</code> - 当前的延迟</p>
<ul>
<li><strong>默认值</strong>: &lt;gray&gt;TPS&lt;yellow&gt;:&lt;/yellow&gt; &lt;tps&gt; MSPT&lt;yellow&gt;:&lt;/yellow&gt;
&lt;mspt&gt; Ping&lt;yellow&gt;:&lt;/yellow&gt; &lt;ping&gt;ms</li>
<li><strong>描述</strong>: 运行<code v-pre>/tpsbar</code>命令时在bossbar显示的格式。</li>
</ul>
</li>
<li>
<h5 id="overlay" tabindex="-1"><a class="header-anchor" href="#overlay" aria-hidden="true">#</a> overlay</h5>
<ul>
<li><strong>默认值</strong>: NOTCHED_20</li>
<li><strong>描述</strong>:
设定Bossbar的overlay格式。
可选： <code v-pre>PROGRESS</code>, <code v-pre>NOTCHED_6</code>, <code v-pre>NOTCHED_10</code>, <code v-pre>NOTCHED_12</code>, <code v-pre>NOTCHED_20</code></li>
</ul>
</li>
<li>
<h5 id="fill-mode" tabindex="-1"><a class="header-anchor" href="#fill-mode" aria-hidden="true">#</a> fill-mode</h5>
<ul>
<li><strong>默认值</strong>: MSPT</li>
<li><strong>描述</strong>:
在Bossbar上要显示哪些内容？
可选: <code v-pre>TPS</code>, <code v-pre>MSPT</code>, <code v-pre>PING</code></li>
</ul>
</li>
<li>
<h5 id="progress-color" tabindex="-1"><a class="header-anchor" href="#progress-color" aria-hidden="true">#</a> progress-color</h5>
<p>可选: <code v-pre>pink</code>, <code v-pre>blue</code>, <code v-pre>red</code>, <code v-pre>green</code>, <code v-pre>yellow</code>, <code v-pre>violet</code>, <code v-pre>white</code></p>
<ul>
<li>
<h6 id="good" tabindex="-1"><a class="header-anchor" href="#good" aria-hidden="true">#</a> good</h6>
<ul>
<li><strong>默认值</strong>: green</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为“good”（良好）时应该显示的颜色。</li>
</ul>
</li>
<li>
<h6 id="medium" tabindex="-1"><a class="header-anchor" href="#medium" aria-hidden="true">#</a> medium</h6>
<ul>
<li><strong>默认值</strong>: yellow</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为“medium”（一般）时应该显示的颜色。</li>
</ul>
</li>
<li>
<h6 id="low" tabindex="-1"><a class="header-anchor" href="#low" aria-hidden="true">#</a> low</h6>
<ul>
<li><strong>默认值</strong>: red</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为“low”（差）时应该显示的颜色。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="text-color" tabindex="-1"><a class="header-anchor" href="#text-color" aria-hidden="true">#</a> text-color</h5>
<p><code v-pre>&lt;text&gt;</code> - 在 <a href="#title"><code v-pre>settings.command.tpsbar.title</code></a> 显示的格式</p>
<ul>
<li>
<h6 id="good-1" tabindex="-1"><a class="header-anchor" href="#good-1" aria-hidden="true">#</a> good</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#55ff55:#00aa00&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为&quot;good&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
<li>
<h6 id="medium-1" tabindex="-1"><a class="header-anchor" href="#medium-1" aria-hidden="true">#</a> medium</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#ffff55:#ffaa00&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为&quot;medium&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
<li>
<h6 id="low-1" tabindex="-1"><a class="header-anchor" href="#low-1" aria-hidden="true">#</a> low</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#ff5555:#aa0000&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当<code v-pre>fill-mode</code>为&quot;low&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="tick-interval" tabindex="-1"><a class="header-anchor" href="#tick-interval" aria-hidden="true">#</a> tick-interval</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: bossbar应当多久更新一次</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="rambar" tabindex="-1"><a class="header-anchor" href="#rambar" aria-hidden="true">#</a> rambar</h4>
<ul>
<li>
<h5 id="title-1" tabindex="-1"><a class="header-anchor" href="#title-1" aria-hidden="true">#</a> title</h5>
<p><code v-pre>&lt;used&gt;</code> - 目前已用的内存量。</p>
<p><code v-pre>&lt;xmx&gt;</code> - 设定 <code v-pre>Xmx</code> 的（最大的）值</p>
<p><code v-pre>&lt;percent&gt;</code> - 已用内存的百分比</p>
<ul>
<li><strong>默认值</strong>: '&quot;&lt;gray&gt;Ram<yellow>:</yellow> <used>/<xmx> (&lt;percent&gt;)&quot;'</li>
<li><strong>描述</strong>: 当运行<code v-pre>/rambar</code>时bossbar中显示的的格式</li>
</ul>
</li>
<li>
<h5 id="overlay-1" tabindex="-1"><a class="header-anchor" href="#overlay-1" aria-hidden="true">#</a> overlay</h5>
<ul>
<li><strong>默认值</strong>: NOTCHED_20</li>
<li><strong>描述</strong>:
设定Bossbar的overlay格式
可选： <code v-pre>PROGRESS</code>, <code v-pre>NOTCHED_6</code>, <code v-pre>NOTCHED_10</code>, <code v-pre>NOTCHED_12</code>, <code v-pre>NOTCHED_20</code></li>
</ul>
</li>
<li>
<h5 id="progress-color-1" tabindex="-1"><a class="header-anchor" href="#progress-color-1" aria-hidden="true">#</a> progress-color</h5>
<p>可选: <code v-pre>pink</code>, <code v-pre>blue</code>, <code v-pre>red</code>, <code v-pre>green</code>, <code v-pre>yellow</code>, <code v-pre>violet</code>, <code v-pre>white</code></p>
<ul>
<li>
<h6 id="good-2" tabindex="-1"><a class="header-anchor" href="#good-2" aria-hidden="true">#</a> good</h6>
<ul>
<li><strong>默认值</strong>: green</li>
<li><strong>描述</strong>: 当内存使用量为 &quot;good&quot;（良好）时显示的颜色</li>
</ul>
</li>
<li>
<h6 id="medium-2" tabindex="-1"><a class="header-anchor" href="#medium-2" aria-hidden="true">#</a> medium</h6>
<ul>
<li><strong>默认值</strong>: yellow</li>
<li><strong>描述</strong>: 当内存使用量为&quot;medium&quot;（一般）时显示的颜色</li>
</ul>
</li>
<li>
<h6 id="low-2" tabindex="-1"><a class="header-anchor" href="#low-2" aria-hidden="true">#</a> low</h6>
<ul>
<li><strong>默认值</strong>: red</li>
<li><strong>描述</strong>: 当内存使用量为&quot;low&quot;（差）时显示的颜色</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="text-color-1" tabindex="-1"><a class="header-anchor" href="#text-color-1" aria-hidden="true">#</a> text-color</h5>
<p><code v-pre>&lt;text&gt;</code> - 在 <a href="#title"><code v-pre>settings.command.tpsbar.title</code></a> 中显示的格式</p>
<ul>
<li>
<h6 id="good-3" tabindex="-1"><a class="header-anchor" href="#good-3" aria-hidden="true">#</a> good</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#55ff55:#00aa00&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当内存使用量为&quot;good&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
<li>
<h6 id="medium-3" tabindex="-1"><a class="header-anchor" href="#medium-3" aria-hidden="true">#</a> medium</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#ffff55:#ffaa00&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当内存使用量为&quot;medium&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
<li>
<h6 id="low-3" tabindex="-1"><a class="header-anchor" href="#low-3" aria-hidden="true">#</a> low</h6>
<ul>
<li><strong>默认值</strong>: &lt;gradient:#ff5555:#aa0000&gt;&lt;text&gt;&lt;/gradient&gt;</li>
<li><strong>描述</strong>: 当内存使用量为&quot;low&quot;时<code v-pre>&lt;text&gt;</code>的渐变色。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="tick-interval-1" tabindex="-1"><a class="header-anchor" href="#tick-interval-1" aria-hidden="true">#</a> tick-interval</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: bossbar应当多久更新一次？</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="compass" tabindex="-1"><a class="header-anchor" href="#compass" aria-hidden="true">#</a> compass</h4>
<ul>
<li>
<h5 id="title-2" tabindex="-1"><a class="header-anchor" href="#title-2" aria-hidden="true">#</a> title</h5>
<ul>
<li><strong>默认值</strong>: &quot;S  ·  ◈  ·  ◈  ·  ◈  ·  SW  ·  ◈  ·  ◈  ·  ◈  ·  W  ·  ◈  ·  ◈  ·  ◈  ·  NW  ·  ◈  ·  ◈  ·  ◈  ·  N  ·  ◈  ·  ◈  ·  ◈  ·  NE  ·  ◈  ·  ◈  ·  ◈  ·  E  ·  ◈  ·  ◈  ·  ◈  ·  SE  ·  ◈  ·  ◈  ·  ◈  ·<br>
S  ·  ◈  ·  ◈  ·  ◈  ·  SW  ·  ◈  ·  ◈  ·  ◈  ·  W  ·  ◈  ·  ◈  ·  ◈  ·  NW  ·  ◈  ·  ◈  ·  ◈  ·  N  ·  ◈  ·  ◈  ·  ◈  ·  NE  ·  ◈  ·  ◈  ·  ◈  ·  E  ·  ◈  ·  ◈  ·  ◈  ·  SE  ·  ◈  ·  ◈  ·  ◈  ·  &quot;</li>
<li><strong>描述</strong>: 当运行<a href="../Commands#compass"><code v-pre>/compass</code></a>命令时bossbar显示的格式。</li>
</ul>
</li>
<li>
<h5 id="overlay-2" tabindex="-1"><a class="header-anchor" href="#overlay-2" aria-hidden="true">#</a> overlay</h5>
<ul>
<li><strong>默认值</strong>: PROGRESS</li>
<li><strong>描述</strong>:
设定Bossbar的overlay格式
可选： <code v-pre>PROGRESS</code>, <code v-pre>NOTCHED_6</code>, <code v-pre>NOTCHED_10</code>, <code v-pre>NOTCHED_12</code>, <code v-pre>NOTCHED_20</code></li>
</ul>
</li>
<li>
<h5 id="progress-color-2" tabindex="-1"><a class="header-anchor" href="#progress-color-2" aria-hidden="true">#</a> progress-color</h5>
<p>可选： <code v-pre>pink</code>, <code v-pre>blue</code>, <code v-pre>red</code>, <code v-pre>green</code>, <code v-pre>yellow</code>, <code v-pre>violet</code>, <code v-pre>white</code></p>
<ul>
<li><strong>默认值</strong>: green</li>
<li><strong>描述</strong>: bossbar的颜色</li>
</ul>
</li>
<li>
<h5 id="percent" tabindex="-1"><a class="header-anchor" href="#percent" aria-hidden="true">#</a> percent</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 从0.0至1.0之间bossbar的填充程度</li>
</ul>
</li>
<li>
<h5 id="tick-interval-2" tabindex="-1"><a class="header-anchor" href="#tick-interval-2" aria-hidden="true">#</a> tick-interval</h5>
<ul>
<li><strong>默认值</strong>: 5</li>
<li><strong>描述</strong>: bossbar应当多久更新一次</li>
</ul>
</li>
</ul>
</li>
<li>
<h4 id="hide-hidden-players-from-entity-selector" tabindex="-1"><a class="header-anchor" href="#hide-hidden-players-from-entity-selector" aria-hidden="true">#</a> hide-hidden-players-from-entity-selector</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为true即将指向最近的实体，即使处于隐藏状态。</li>
</ul>
</li>
</ul>
<h3 id="allow-water-placement-in-the-end" tabindex="-1"><a class="header-anchor" href="#allow-water-placement-in-the-end" aria-hidden="true">#</a> allow-water-placement-in-the-end</h3>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许在末地放置水。</li>
</ul>
<h3 id="use-alternate-keepalive" tabindex="-1"><a class="header-anchor" href="#use-alternate-keepalive" aria-hidden="true">#</a> use-alternate-keepalive</h3>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否应该使用ping超时心跳包不同的办法。启用此项后将向玩家每秒发送一次心跳包，如果他们在30秒内没有响应则以超时为由踢出玩家。以何种顺序响应，只要他们之中有一位响应都会继续允许玩家响应。也就是说如果某名玩家丢包时便不会踢出玩家。</li>
</ul>
<h3 id="tps-catchup" tabindex="-1"><a class="header-anchor" href="#tps-catchup" aria-hidden="true">#</a> tps-catchup</h3>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否要启用TPS catchup</li>
</ul>
<blockquote>
<p><strong>注意</strong><br>
TPS catchup 会当服务器的tps低于20时，令服务器计时tick的速度比20TPS更快。这会尝试使平均的TPS值尽可能地更接近于20，不过也会有副作用。</p>
</blockquote>
<h3 id="server-mod-name" tabindex="-1"><a class="header-anchor" href="#server-mod-name" aria-hidden="true">#</a> server-mod-name</h3>
<ul>
<li><strong>默认值</strong>: Purpur</li>
<li><strong>描述</strong>: 当客户端过期时或某名玩家按下F3时显示在调试页面中所显示的服务器名称</li>
</ul>
<h3 id="fix-projectile-looting-transfer" tabindex="-1"><a class="header-anchor" href="#fix-projectile-looting-transfer" aria-hidden="true">#</a> fix-projectile-looting-transfer</h3>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要阻止通过弹射物而掠夺造成的死亡，除非插件修改了掠夺modifier。解决<a href="https://bugs.mojang.com/browse/MC-3304" target="_blank" rel="noopener noreferrer"><code v-pre>MC-3304</code><ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="username-valid-characters" tabindex="-1"><a class="header-anchor" href="#username-valid-characters" aria-hidden="true">#</a> username-valid-characters</h3>
<ul>
<li><strong>默认值</strong>: ^[a-zA-Z0-9_.]*$</li>
<li><strong>描述</strong>: 用户名中可以使用的字符。此项需要使用正则表达式。</li>
</ul>
<h3 id="lagging-threshold" tabindex="-1"><a class="header-anchor" href="#lagging-threshold" aria-hidden="true">#</a> lagging-threshold</h3>
<ul>
<li><strong>默认值</strong>: 19.0</li>
<li><strong>描述</strong>: 当出现延迟时，是否进行追踪以确保正确地处理了行为。当服务器出现延迟时，此项即为阈值。不过目前本项仅用于设定Purpur中的<code v-pre>mob.villager.brain-ticks</code>。</li>
</ul>
<h3 id="disable-give-dropping" tabindex="-1"><a class="header-anchor" href="#disable-give-dropping" aria-hidden="true">#</a> disable-give-dropping</h3>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为true时，若玩家物品栏已满，<code v-pre>/give</code>命令不会将物品掉落在地上。</li>
</ul>
<h3 id="messages" tabindex="-1"><a class="header-anchor" href="#messages" aria-hidden="true">#</a> messages</h3>
<h4 id="afk-broadcast-away" tabindex="-1"><a class="header-anchor" href="#afk-broadcast-away" aria-hidden="true">#</a> afk-broadcast-away</h4>
<p>需要 <a href="#kick-if-idle"><code v-pre>kick-if-idle</code></a> 设定为 <code v-pre>false</code></p>
<ul>
<li><strong>默认值</strong>: &lt;yellow&gt;&lt;italic&gt;%s is now AFK</li>
<li><strong>描述</strong>: 当玩家开始挂机时（需要<code v-pre>player-idle-timeout</code>设定的值大于0且 <a href="#kick-if-idle">kick-if-idle</a> 设定为 false）通知所有人的消息。</li>
</ul>
<h4 id="afk-broadcast-back" tabindex="-1"><a class="header-anchor" href="#afk-broadcast-back" aria-hidden="true">#</a> afk-broadcast-back</h4>
<p>需要 <a href="#kick-if-idle"><code v-pre>kick-if-idle</code></a> 设定为 <code v-pre>false</code></p>
<ul>
<li><strong>默认值</strong>: &lt;yellow&gt;&lt;italic&gt;%s is no longer AFK</li>
<li><strong>描述</strong>: 当玩家回来时（即不再挂机；需要<code v-pre>player-idle-timeout</code>设定的值大于0且 <a href="#kick-if-idle">kick-if-idle</a> 设定为 false）通知所有人的消息。</li>
</ul>
<h4 id="afk-tab-list-prefix" tabindex="-1"><a class="header-anchor" href="#afk-tab-list-prefix" aria-hidden="true">#</a> afk-tab-list-prefix</h4>
<p>需要 <a href="#kick-if-idle"><code v-pre>kick-if-idle</code></a> 设定为 <code v-pre>false</code></p>
<ul>
<li><strong>默认值</strong>: &quot;[AFK] &quot;</li>
<li><strong>描述</strong>: 当某玩家处于挂机状态时，在TAB玩家列表中显示的前缀。</li>
</ul>
<h4 id="afk-tab-list-suffix" tabindex="-1"><a class="header-anchor" href="#afk-tab-list-suffix" aria-hidden="true">#</a> afk-tab-list-suffix</h4>
<p>需要 <a href="#kick-if-idle"><code v-pre>kick-if-idle</code></a> 设定为 <code v-pre>false</code></p>
<ul>
<li><strong>默认值</strong>: &quot;&quot;</li>
<li><strong>描述</strong>: 当某玩家处于挂机状态时，在TAB玩家列表中显示的后缀。</li>
</ul>
<h4 id="cannot-ride-mob" tabindex="-1"><a class="header-anchor" href="#cannot-ride-mob" aria-hidden="true">#</a> cannot-ride-mob</h4>
<p>需要拥有 <a href="../Permissions#allowridemob_id"><code v-pre>allow.ride.&lt;mob_id&gt;</code></a> 权限。</p>
<ul>
<li><strong>默认值</strong>: &lt;red&gt;You cannot mount that mob</li>
<li><strong>描述</strong>: 当某名玩家尝试骑行不允许骑乘的生物时，发送的消息。</li>
</ul>
<h4 id="dont-run-with-scissors" tabindex="-1"><a class="header-anchor" href="#dont-run-with-scissors" aria-hidden="true">#</a> dont-run-with-scissors</h4>
<p>需要启用 <a href="#damage-if-sprinting"><code v-pre>damage-if-sprinting</code></a> 选项。</p>
<ul>
<li><strong>默认值</strong>: &lt;red&gt;&lt;italic&gt;Don't run with scissors!</li>
<li><strong>描述</strong>: 当玩家尝试拿着剪刀乱跑时在Actionbar提醒的消息。</li>
</ul>
<h4 id="ping-command-output" tabindex="-1"><a class="header-anchor" href="#ping-command-output" aria-hidden="true">#</a> ping-command-output</h4>
<p>需要拥有 <a href="../Permissions#bukkitcommandping"><code v-pre>bukkit.command.ping</code></a> 权限。</p>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;%s's ping is %sms</li>
<li><strong>描述</strong>: 当运行 <code v-pre>/ping &lt;user&gt;</code> 命令时提示的消息。</li>
</ul>
<h4 id="uptime-command-output" tabindex="-1"><a class="header-anchor" href="#uptime-command-output" aria-hidden="true">#</a> uptime-command-output</h4>
<p>需要拥有 <a href="../Permissions#bukkitcommanduptime"><code v-pre>bukkit.command.uptime</code></a> 权限
<code v-pre>&lt;uptime&gt;</code> - 来自 <a href="#format"><code v-pre>&lt;global&gt;.command.uptime.format</code></a> 格式</p>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;Server uptime is &lt;uptime&gt;</li>
<li><strong>描述</strong>: 当运行 <code v-pre>/uptime</code> 命令时显示的消息。</li>
</ul>
<h4 id="demo-command-output" tabindex="-1"><a class="header-anchor" href="#demo-command-output" aria-hidden="true">#</a> demo-command-output</h4>
<p>需要拥有 <a href="../Permissions#bukkitcommanddemo"><code v-pre>bukkit.command.demo</code></a> 权限</p>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;%s has been shown the demo screen</li>
<li><strong>描述</strong>: 当输入<code v-pre>/demo</code>命令时为玩家显示DEMO页面。</li>
</ul>
<h4 id="credits-command-output" tabindex="-1"><a class="header-anchor" href="#credits-command-output" aria-hidden="true">#</a> credits-command-output</h4>
<p>需要拥有 <a href="../Permissions#bukkitcommandcredits"><code v-pre>bukkit.command.credits</code></a> 权限</p>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;%s has been shown the end credits</li>
<li><strong>描述</strong>:  输入<code v-pre>/credits</code>命令时为玩家播放终末之诗。</li>
</ul>
<h4 id="tpsbar-command-output" tabindex="-1"><a class="header-anchor" href="#tpsbar-command-output" aria-hidden="true">#</a> tpsbar-command-output</h4>
<p>需要拥有 <a href="../Permissions#bukkitcommandtpsbar"><code v-pre>bukkit.command.tpsbar</code></a> 权限</p>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;Tpsbar toggled &lt;onoff&gt; for &lt;target&gt;</li>
<li><strong>描述</strong>: 输入<code v-pre>/tpsbar</code>命令时为玩家显示tpsbar。</li>
</ul>
<h4 id="ram-command-output" tabindex="-1"><a class="header-anchor" href="#ram-command-output" aria-hidden="true">#</a> ram-command-output</h4>
<ul>
<li><strong>默认值</strong>: '&lt;green&gt;Ram Usage: <used>/<xmx> (&lt;percent&gt;)'</li>
<li><strong>描述</strong>: 当某名玩家运行 <code v-pre>/ram</code> 命令时向玩家发送内存使用量消息。</li>
</ul>
<h4 id="rambar-command-output" tabindex="-1"><a class="header-anchor" href="#rambar-command-output" aria-hidden="true">#</a> rambar-command-output</h4>
<ul>
<li><strong>默认值</strong>: &lt;green&gt;Rambar toggled <onoff> for &lt;target&gt;</li>
<li><strong>描述</strong>: .输入<code v-pre>/rambar</code>命令时为玩家显示rambar。</li>
</ul>
<h4 id="unverified-username" tabindex="-1"><a class="header-anchor" href="#unverified-username" aria-hidden="true">#</a> unverified-username</h4>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 当玩家使用未经验证（离线模式的玩家）加入服务器时被提出应该显示的文本。设定为&quot;default&quot;即显示默认文本&quot;Failed to verify username!&quot;</li>
</ul>
<h4 id="sleep-skipping-night" tabindex="-1"><a class="header-anchor" href="#sleep-skipping-night" aria-hidden="true">#</a> sleep-skipping-night</h4>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: .当夜晚被跳过时ActionBar应该显示的消息。设定为&quot;default&quot;即使用客户端本地化文本，设定为空字符串禁用此功能。</li>
</ul>
<h4 id="sleeping-players-percent" tabindex="-1"><a class="header-anchor" href="#sleeping-players-percent" aria-hidden="true">#</a> sleeping-players-percent</h4>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 当玩家睡觉时ActionBar应该显示的消息。设定为&quot;default&quot;即使用客户端本地化文本，设定为空字符串禁用此功能。可用占位符：<code v-pre>&lt;count&gt;</code> - 当前正在睡觉的玩家的数量，<code v-pre>&lt;total&gt;</code> - 所有需要睡觉的玩家的数量。</li>
</ul>
<h4 id="death-message" tabindex="-1"><a class="header-anchor" href="#death-message" aria-hidden="true">#</a> death-message</h4>
<ul>
<li>
<h5 id="stonecutter" tabindex="-1"><a class="header-anchor" href="#stonecutter" aria-hidden="true">#</a> stonecutter</h5>
<ul>
<li><strong>默认值</strong>: <player> has sawed themself in half</li>
<li><strong>描述</strong>: 若玩家站在切石机上而导致死亡时显示的消息。</li>
</ul>
</li>
<li>
<h5 id="run-with-scissors" tabindex="-1"><a class="header-anchor" href="#run-with-scissors" aria-hidden="true">#</a> run-with-scissors</h5>
<ul>
<li><strong>默认值</strong>: <player> slipped and fell on their shears</li>
<li><strong>描述</strong>: 若玩家拿着剪刀到处乱跑而导致死亡时显示的消息。</li>
</ul>
</li>
</ul>
<h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h3>
<h3 id="kick-for-out-of-order-chat" tabindex="-1"><a class="header-anchor" href="#kick-for-out-of-order-chat" aria-hidden="true">#</a> kick-for-out-of-order-chat</h3>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为false以禁止服务器踢出不正当聊天的玩家。</li>
</ul>
<h4 id="upnp-port-forwarding" tabindex="-1"><a class="header-anchor" href="#upnp-port-forwarding" aria-hidden="true">#</a> upnp-port-forwarding</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当服务器启动时是否要自动使用UPnP进行端口转发。</li>
</ul>
<h4 id="max-joins-per-second" tabindex="-1"><a class="header-anchor" href="#max-joins-per-second" aria-hidden="true">#</a> max-joins-per-second</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 时，paper.yml配置文件中的<code v-pre>max-joins-per-tick</code>配置项使用每秒替代每Tick。</li>
</ul>
<h3 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks" aria-hidden="true">#</a> blocks</h3>
<h4 id="barrel" tabindex="-1"><a class="header-anchor" href="#barrel" aria-hidden="true">#</a> barrel</h4>
<ul>
<li>
<h5 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> rows</h5>
<ul>
<li><strong>默认值</strong>: 3</li>
<li><strong>描述</strong>: 设定木桶应该有几行存储空间。最小值是 1，最大值是 6。</li>
</ul>
</li>
</ul>
<h4 id="beehive" tabindex="-1"><a class="header-anchor" href="#beehive" aria-hidden="true">#</a> beehive</h4>
<ul>
<li>
<h5 id="max-bees-inside" tabindex="-1"><a class="header-anchor" href="#max-bees-inside" aria-hidden="true">#</a> max-bees-inside</h5>
<ul>
<li><strong>默认值</strong>: 3</li>
<li><strong>描述</strong>: 蜂巢内最多允许有几只蜜蜂。</li>
</ul>
</li>
</ul>
<h4 id="grindstone" tabindex="-1"><a class="header-anchor" href="#grindstone" aria-hidden="true">#</a> grindstone</h4>
<ul>
<li>
<h5 id="ignored-enchants" tabindex="-1"><a class="header-anchor" href="#ignored-enchants" aria-hidden="true">#</a> ignored-enchants</h5>
<ul>
<li><strong>默认值</strong>:<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>- minecraft:binding_curse
- minecraft:vanishing_curse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 应该在砂轮中移除附魔时，应该忽略哪些附魔。</li>
</ul>
</li>
<li>
<h5 id="remove-attributes" tabindex="-1"><a class="header-anchor" href="#remove-attributes" aria-hidden="true">#</a> remove-attributes</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为true以允许砂轮移除物品属性。</li>
</ul>
</li>
<li>
<h5 id="remove-name-and-lore" tabindex="-1"><a class="header-anchor" href="#remove-name-and-lore" aria-hidden="true">#</a> remove-name-and-lore</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>:设定为true以允许砂轮移除物品的名称和lore。</li>
</ul>
</li>
</ul>
<h4 id="ender-chest" tabindex="-1"><a class="header-anchor" href="#ender-chest" aria-hidden="true">#</a> ender_chest</h4>
<ul>
<li>
<h5 id="six-rows" tabindex="-1"><a class="header-anchor" href="#six-rows" aria-hidden="true">#</a> six-rows</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 在末影箱中是否有六行存储空间。</li>
</ul>
</li>
<li>
<h5 id="use-permissions-for-rows" tabindex="-1"><a class="header-anchor" href="#use-permissions-for-rows" aria-hidden="true">#</a> use-permissions-for-rows</h5>
<ul>
<li>需要 <a href="#six-rows"><code v-pre>ender_chest.six-rows</code></a> 设定为true</li>
<li>需要拥有<a href="../Permissions#purpurenderchestrowsnumber"><code v-pre>purpur.enderchest.rows.&lt;number&gt;</code></a> 权限</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否应该为不同权限节点作为实际提供存储空间行的数量。默认情况下，当此项启用时，除另有规定所有玩家都应该有六行存储空间。</li>
</ul>
</li>
</ul>
<h4 id="disable-mushroom-updates" tabindex="-1"><a class="header-anchor" href="#disable-mushroom-updates" aria-hidden="true">#</a> disable-mushroom-updates</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否在服务器上停止更新蘑菇方块状态。</li>
</ul>
<h4 id="disable-chorus-plant-updates" tabindex="-1"><a class="header-anchor" href="#disable-chorus-plant-updates" aria-hidden="true">#</a> disable-chorus-plant-updates</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否在服务器上停止更新紫颂树状态。</li>
</ul>
<h4 id="disable-note-block-updates" tabindex="-1"><a class="header-anchor" href="#disable-note-block-updates" aria-hidden="true">#</a> disable-note-block-updates</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否在服务器上停止更新音符盒状态。</li>
</ul>
<h4 id="crying-obsidian" tabindex="-1"><a class="header-anchor" href="#crying-obsidian" aria-hidden="true">#</a> crying_obsidian</h4>
<ul>
<li>
<h5 id="valid-for-portal-frame" tabindex="-1"><a class="header-anchor" href="#valid-for-portal-frame" aria-hidden="true">#</a> valid-for-portal-frame</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为&quot;true&quot;以允许使用哭泣的黑曜石创建传送门。</li>
</ul>
</li>
</ul>
<h4 id="coral" tabindex="-1"><a class="header-anchor" href="#coral" aria-hidden="true">#</a> coral</h4>
<ul>
<li>
<h5 id="die-outside-water" tabindex="-1"><a class="header-anchor" href="#die-outside-water" aria-hidden="true">#</a> die-outside-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为&quot;false&quot;以允许珊瑚在陆地上存活。</li>
</ul>
</li>
</ul>
<h4 id="sculk-shrieker" tabindex="-1"><a class="header-anchor" href="#sculk-shrieker" aria-hidden="true">#</a> sculk_shrieker</h4>
<ul>
<li>
<h5 id="can-summon-default" tabindex="-1"><a class="header-anchor" href="#can-summon-default" aria-hidden="true">#</a> can-summon-default</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为&quot;true&quot;以在放置时将<code v-pre>can_summon</code>设为<code v-pre>true</code>。</li>
</ul>
</li>
</ul>
<h4 id="twisting-vines" tabindex="-1"><a class="header-anchor" href="#twisting-vines" aria-hidden="true">#</a> twisting_vines</h4>
<ul>
<li>
<h5 id="max-growth-age" tabindex="-1"><a class="header-anchor" href="#max-growth-age" aria-hidden="true">#</a> max-growth-age</h5>
<ul>
<li><strong>默认值</strong>: 25</li>
<li><strong>描述</strong>: 植物可生长的最大年龄。</li>
</ul>
</li>
</ul>
<h4 id="weeping-vines" tabindex="-1"><a class="header-anchor" href="#weeping-vines" aria-hidden="true">#</a> weeping_vines</h4>
<ul>
<li>
<h5 id="max-growth-age-1" tabindex="-1"><a class="header-anchor" href="#max-growth-age-1" aria-hidden="true">#</a> max-growth-age</h5>
<ul>
<li><strong>默认值</strong>: 25</li>
<li><strong>描述</strong>: 植物可生长的最大年龄。</li>
</ul>
</li>
</ul>
<h4 id="cave-vines" tabindex="-1"><a class="header-anchor" href="#cave-vines" aria-hidden="true">#</a> cave_vines</h4>
<ul>
<li>
<h5 id="max-growth-age-2" tabindex="-1"><a class="header-anchor" href="#max-growth-age-2" aria-hidden="true">#</a> max-growth-age</h5>
<ul>
<li><strong>默认值</strong>: 25</li>
<li><strong>描述</strong>: 植物可生长的最大年龄。</li>
</ul>
</li>
</ul>
<h4 id="kelp" tabindex="-1"><a class="header-anchor" href="#kelp" aria-hidden="true">#</a> kelp</h4>
<ul>
<li>
<h5 id="max-growth-age-3" tabindex="-1"><a class="header-anchor" href="#max-growth-age-3" aria-hidden="true">#</a> max-growth-age</h5>
<ul>
<li><strong>默认值</strong>: 25</li>
<li><strong>描述</strong>: 植物可生长的最大年龄。</li>
</ul>
</li>
</ul>
<h3 id="broadcasts" tabindex="-1"><a class="header-anchor" href="#broadcasts" aria-hidden="true">#</a> broadcasts</h3>
<h4 id="advancement" tabindex="-1"><a class="header-anchor" href="#advancement" aria-hidden="true">#</a> advancement</h4>
<h5 id="only-broadcast-to-affected-player" tabindex="-1"><a class="header-anchor" href="#only-broadcast-to-affected-player" aria-hidden="true">#</a> only-broadcast-to-affected-player</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当完成某成就时，是否只通知相关的玩家。</li>
</ul>
<h4 id="death" tabindex="-1"><a class="header-anchor" href="#death" aria-hidden="true">#</a> death</h4>
<h5 id="only-broadcast-to-affected-player-1" tabindex="-1"><a class="header-anchor" href="#only-broadcast-to-affected-player-1" aria-hidden="true">#</a> only-broadcast-to-affected-player</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家死亡时，是否只通知相关的玩家。</li>
</ul>
<h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3>
<h4 id="suppress-init-legacy-material-errors" tabindex="-1"><a class="header-anchor" href="#suppress-init-legacy-material-errors" aria-hidden="true">#</a> suppress-init-legacy-material-errors</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否取消插件初始化历史材质API警告。</li>
</ul>
<h4 id="suppress-ignored-advancement-warnings" tabindex="-1"><a class="header-anchor" href="#suppress-ignored-advancement-warnings" aria-hidden="true">#</a> suppress-ignored-advancement-warnings</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要在控制台和日志中取消未知属性警告。</li>
</ul>
<h4 id="suppress-unrecognized-recipe-errors" tabindex="-1"><a class="header-anchor" href="#suppress-unrecognized-recipe-errors" aria-hidden="true">#</a> suppress-unrecognized-recipe-errors</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要在控制台和日志中尝试加载无法识别的配方时取消警告。</li>
</ul>
<h4 id="suppress-setblock-in-far-chunk-errors" tabindex="-1"><a class="header-anchor" href="#suppress-setblock-in-far-chunk-errors" aria-hidden="true">#</a> suppress-setblock-in-far-chunk-errors</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当setBlock影响区块过远时是否要取消警告。</li>
</ul>
<h4 id="suppress-sent-expired-chat" tabindex="-1"><a class="header-anchor" href="#suppress-sent-expired-chat" aria-hidden="true">#</a> suppress-sent-expired-chat</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当客户端与服务器系统时间不同步时是否要取消警告。</li>
</ul>
<h3 id="seed" tabindex="-1"><a class="header-anchor" href="#seed" aria-hidden="true">#</a> seed</h3>
<h4 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> structure</h4>
<p>在https://minecraft.fandom.com/wiki/Custom_world_generation#Structure_defaults中了解关于下列配置项的更多信息。</p>
<h5 id="buried-treasure" tabindex="-1"><a class="header-anchor" href="#buried-treasure" aria-hidden="true">#</a> buried_treasure</h5>
<ul>
<li><strong>默认值</strong>: -1</li>
<li><strong>描述</strong>: 默认值 <code v-pre>-1</code> 使用世界种子，任何非 <code v-pre>-1</code> 的值都将使用该自定义种子。可接受 -2147483648 至 2147483647 中任意整数。</li>
</ul>
<h5 id="mineshaft" tabindex="-1"><a class="header-anchor" href="#mineshaft" aria-hidden="true">#</a> mineshaft</h5>
<ul>
<li><strong>默认值</strong>: -1</li>
<li><strong>描述</strong>: 默认值 <code v-pre>-1</code> 使用世界种子，任何非 <code v-pre>-1</code> 的值都将使用该自定义种子。可接受 -2147483648 至 2147483647 中任意整数。</li>
</ul>
<h3 id="entity" tabindex="-1"><a class="header-anchor" href="#entity" aria-hidden="true">#</a> entity</h3>
<h4 id="enderman" tabindex="-1"><a class="header-anchor" href="#enderman" aria-hidden="true">#</a> enderman</h4>
<ul>
<li>
<h5 id="short-height" tabindex="-1"><a class="header-anchor" href="#short-height" aria-hidden="true">#</a> short-height</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 若启用，将允许末影人进到两格高的区域之中。因为客户端碰撞箱不变，所以你依然可以命中头部。</li>
</ul>
</li>
</ul>
<h3 id="enchantment" tabindex="-1"><a class="header-anchor" href="#enchantment" aria-hidden="true">#</a> enchantment</h3>
<ul>
<li>
<h5 id="allow-infinity-and-mending-together" tabindex="-1"><a class="header-anchor" href="#allow-infinity-and-mending-together" aria-hidden="true">#</a> allow-infinity-and-mending-together</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许在同一武器/工具上同时应用经验修补和无限附魔。</li>
</ul>
</li>
<li>
<h5 id="allow-infinity-on-crossbow" tabindex="-1"><a class="header-anchor" href="#allow-infinity-on-crossbow" aria-hidden="true">#</a> allow-infinity-on-crossbow</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许在弩上应用无限附魔。</li>
</ul>
</li>
<li>
<h5 id="allow-looting-on-shears" tabindex="-1"><a class="header-anchor" href="#allow-looting-on-shears" aria-hidden="true">#</a> allow-looting-on-shears</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许在剪刀上应用掠夺附魔。</li>
</ul>
</li>
<li>
<h5 id="allow-unsafe-enchant-command" tabindex="-1"><a class="header-anchor" href="#allow-unsafe-enchant-command" aria-hidden="true">#</a> allow-unsafe-enchant-command</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许使用命令突破最高等级限制。</li>
</ul>
</li>
<li>
<h5 id="clamp-levels" tabindex="-1"><a class="header-anchor" href="#clamp-levels" aria-hidden="true">#</a> clamp-levels</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定此值为 <code v-pre>false</code> 将允许等级最高至 <code v-pre>32767</code> ，并使用短整型替代字节来存储数据。</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>注意</strong>：<br>
客户端不会显示超过 <code v-pre>255</code> 部分的等级。</p>
</blockquote>
<h4 id="anvil" tabindex="-1"><a class="header-anchor" href="#anvil" aria-hidden="true">#</a> anvil</h4>
<ul>
<li>
<h5 id="allow-unsafe-enchants" tabindex="-1"><a class="header-anchor" href="#allow-unsafe-enchants" aria-hidden="true">#</a> allow-unsafe-enchants</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 需要启用此项以使下列所有&quot;不安全的附魔&quot;配置项工作。</li>
</ul>
</li>
<li>
<h5 id="allow-inapplicable-enchants" tabindex="-1"><a class="header-anchor" href="#allow-inapplicable-enchants" aria-hidden="true">#</a> allow-inapplicable-enchants</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许在工具或盔甲上应用（默认无法应用的）附魔。例如：在镐子上应用锋利附魔。</li>
</ul>
</li>
<li>
<h5 id="allow-incompatible-enchants" tabindex="-1"><a class="header-anchor" href="#allow-incompatible-enchants" aria-hidden="true">#</a> allow-incompatible-enchants</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许默认不兼容的附魔应用在一起。例如：保护和火焰保护一起应用或时运和精准采集。</li>
</ul>
</li>
<li>
<h5 id="allow-higher-enchants-levels" tabindex="-1"><a class="header-anchor" href="#allow-higher-enchants-levels" aria-hidden="true">#</a> allow-higher-enchants-levels</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许附魔超过最大限制等级。例如：效率V+效率V=效率VI。</li>
</ul>
</li>
</ul>
<h2 id="世界设定" tabindex="-1"><a class="header-anchor" href="#世界设定" aria-hidden="true">#</a> 世界设定</h2>
<p>世界设定以每个世界为基础。子节点 <code v-pre>default</code> 将应用于未使用特定设置的所有世界。</p>
<p>想要了解关于针对配置文件的更多信息，可在<a href="https://docs.poikcue.com/#/PaperMC/Administration/how-to/configuration" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>查看来自Paper的解释。（上面是译者翻译的Paper文档。原英文页面在<a href="https://docs.papermc.io/paper/per-world-configuration" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>）</p>
<h3 id="hunger" tabindex="-1"><a class="header-anchor" href="#hunger" aria-hidden="true">#</a> hunger</h3>
<h4 id="starvation-damage" tabindex="-1"><a class="header-anchor" href="#starvation-damage" aria-hidden="true">#</a> starvation-damage</h4>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 饥饿将造成的伤害。</li>
</ul>
<h3 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> settings</h3>
<h4 id="entity-1" tabindex="-1"><a class="header-anchor" href="#entity-1" aria-hidden="true">#</a> entity</h4>
<ul>
<li>
<h4 id="shared-random" tabindex="-1"><a class="header-anchor" href="#shared-random" aria-hidden="true">#</a> shared-random</h4>
</li>
</ul>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 <code v-pre>false</code> 以允许操纵RNG。Paper使用全局随机源以控制RNG。此值会优化性能，但是技术向的玩家更喜欢将该功能关闭以便更好的控制RNG。</li>
</ul>
<blockquote>
<p><strong>警告</strong><br>
Purpur团队没有测试过此shared-random配置项，并且它可能是不安全的（shared random被设计为多线程安全，撤销该补丁会使在某些情况下导致触发 ConcurrentModificationExceptions，无论是否有插件，并且会增加内存使用量）</p>
</blockquote>
<h3 id="blocks-1" tabindex="-1"><a class="header-anchor" href="#blocks-1" aria-hidden="true">#</a> blocks</h3>
<h4 id="enchantment-table" tabindex="-1"><a class="header-anchor" href="#enchantment-table" aria-hidden="true">#</a> enchantment-table</h4>
<ul>
<li>
<h5 id="lapis-persists" tabindex="-1"><a class="header-anchor" href="#lapis-persists" aria-hidden="true">#</a> lapis-persists</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定此值为 <code v-pre>true</code> 即将青金石保留在附魔台中，所以你大可放心的把青金石放到附魔台里面。</li>
</ul>
</li>
</ul>
<h4 id="dragon-egg" tabindex="-1"><a class="header-anchor" href="#dragon-egg" aria-hidden="true">#</a> dragon_egg</h4>
<ul>
<li>
<h5 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> teleport</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当尝试开采（击打）龙蛋时是否会令其传送。</li>
</ul>
</li>
</ul>
<h4 id="amethyst" tabindex="-1"><a class="header-anchor" href="#amethyst" aria-hidden="true">#</a> amethyst</h4>
<ul>
<li>
<h5 id="silk-touch" tabindex="-1"><a class="header-anchor" href="#silk-touch" aria-hidden="true">#</a> silk-touch</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当某物附魔了精准采集时开采是否会获得掉落物。</li>
</ul>
</li>
</ul>
<h4 id="observer" tabindex="-1"><a class="header-anchor" href="#observer" aria-hidden="true">#</a> observer</h4>
<ul>
<li>
<h5 id="disable-clock" tabindex="-1"><a class="header-anchor" href="#disable-clock" aria-hidden="true">#</a> disable-clock</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要禁用侦测器时钟。</li>
</ul>
</li>
</ul>
<h4 id="azalea" tabindex="-1"><a class="header-anchor" href="#azalea" aria-hidden="true">#</a> azalea</h4>
<ul>
<li>
<h5 id="growth-chance" tabindex="-1"><a class="header-anchor" href="#growth-chance" aria-hidden="true">#</a> growth-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 杜鹃花丛自然生长为树木的几率。</li>
</ul>
</li>
</ul>
<h4 id="flowering-azalea" tabindex="-1"><a class="header-anchor" href="#flowering-azalea" aria-hidden="true">#</a> flowering_azalea</h4>
<ul>
<li>
<h5 id="growth-chance-1" tabindex="-1"><a class="header-anchor" href="#growth-chance-1" aria-hidden="true">#</a> growth-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 杜鹃花丛自然生长为树木的几率。</li>
</ul>
</li>
</ul>
<h4 id="campfire" tabindex="-1"><a class="header-anchor" href="#campfire" aria-hidden="true">#</a> campfire</h4>
<ul>
<li>
<h5 id="lit-when-placed" tabindex="-1"><a class="header-anchor" href="#lit-when-placed" aria-hidden="true">#</a> lit-when-placed</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为false以阻止篝火在放置时默认为点燃状态。</li>
</ul>
</li>
</ul>
<h4 id="cactus" tabindex="-1"><a class="header-anchor" href="#cactus" aria-hidden="true">#</a> cactus</h4>
<ul>
<li>
<h5 id="breaks-from-solid-neighbors" tabindex="-1"><a class="header-anchor" href="#breaks-from-solid-neighbors" aria-hidden="true">#</a> breaks-from-solid-neighbors</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当固体方块放置到仙人掌附近时是否会令其破坏。</li>
</ul>
</li>
</ul>
<h4 id="cauldron" tabindex="-1"><a class="header-anchor" href="#cauldron" aria-hidden="true">#</a> cauldron</h4>
<ul>
<li>
<h5 id="fill-chances" tabindex="-1"><a class="header-anchor" href="#fill-chances" aria-hidden="true">#</a> fill-chances</h5>
<ul>
<li>
<h6 id="rain" tabindex="-1"><a class="header-anchor" href="#rain" aria-hidden="true">#</a> rain</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 炼药锅被雨水填满的速度（取决于随机Tick）</li>
</ul>
</li>
<li>
<h6 id="powder-snow" tabindex="-1"><a class="header-anchor" href="#powder-snow" aria-hidden="true">#</a> powder-snow</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 炼药锅被雪填满的速度（取决于随机Tick）</li>
</ul>
</li>
<li>
<h6 id="dripstone-water" tabindex="-1"><a class="header-anchor" href="#dripstone-water" aria-hidden="true">#</a> dripstone-water</h6>
<ul>
<li><strong>默认值</strong>: 0.17578125</li>
<li><strong>描述</strong>: 当在滴水石锥上面放一块水，下面放置炼药锅时被水填满的速度（取决于随机Tick）</li>
</ul>
</li>
<li>
<h6 id="dripstone-lava" tabindex="-1"><a class="header-anchor" href="#dripstone-lava" aria-hidden="true">#</a> dripstone-lava</h6>
<ul>
<li><strong>默认值</strong>: 0.05859375</li>
<li><strong>描述</strong>:  当在滴水石锥上面放一块岩浆，下面放置炼药锅时被岩浆填满的速度（取决于随机Tick）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="turtle-egg" tabindex="-1"><a class="header-anchor" href="#turtle-egg" aria-hidden="true">#</a> turtle_egg</h4>
<ul>
<li>
<h5 id="break-from-exp-orbs" tabindex="-1"><a class="header-anchor" href="#break-from-exp-orbs" aria-hidden="true">#</a> break-from-exp-orbs</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许经验球破坏海龟蛋。</li>
</ul>
</li>
<li>
<h5 id="break-from-items" tabindex="-1"><a class="header-anchor" href="#break-from-items" aria-hidden="true">#</a> break-from-items</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许掉落物破坏海龟蛋。</li>
</ul>
</li>
<li>
<h5 id="break-from-minecarts" tabindex="-1"><a class="header-anchor" href="#break-from-minecarts" aria-hidden="true">#</a> break-from-minecarts</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许矿车破坏海龟蛋。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 <code v-pre>true</code> 即令海龟蛋绕过 mob griefing游戏规则</li>
</ul>
</li>
<li>
<h5 id="random-tick-crack-chance" tabindex="-1"><a class="header-anchor" href="#random-tick-crack-chance" aria-hidden="true">#</a> random-tick-crack-chance</h5>
<ul>
<li><strong>默认值</strong>: 500</li>
<li><strong>描述</strong>: 海龟蛋破裂的概率。</li>
</ul>
</li>
<li>
<h5 id="feather-fall-distance-affects-trampling" tabindex="-1"><a class="header-anchor" href="#feather-fall-distance-affects-trampling" aria-hidden="true">#</a> feather-fall-distance-affects-trampling</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 如果实体下落距离等于摔落保护等级+在首个位置时必定践踏的方块，那么当此值设定为 <code v-pre>true</code> 时即不再视为践踏海龟蛋。即摔落保护I时需要3个方块以上才算践踏，而摔落保护2则需要4个方块以上，等等。</li>
</ul>
</li>
</ul>
<h4 id="powered-rail" tabindex="-1"><a class="header-anchor" href="#powered-rail" aria-hidden="true">#</a> powered-rail</h4>
<ul>
<li>
<h5 id="activation-range" tabindex="-1"><a class="header-anchor" href="#activation-range" aria-hidden="true">#</a> activation-range</h5>
<ul>
<li><strong>默认值</strong>: 8</li>
<li><strong>描述</strong>: 单个红石可以供能多少个动力铁轨。</li>
</ul>
</li>
</ul>
<h4 id="conduit" tabindex="-1"><a class="header-anchor" href="#conduit" aria-hidden="true">#</a> conduit</h4>
<ul>
<li>
<h5 id="valid-ring-blocks" tabindex="-1"><a class="header-anchor" href="#valid-ring-blocks" aria-hidden="true">#</a> valid-ring-blocks</h5>
<ul>
<li><strong>默认值</strong>:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>prismarine
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>prismarine_bricks
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>sea_lantern
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>dark_prismarine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 可以用于构建潮涌核心的方块。</li>
</ul>
</li>
<li>
<h5 id="effect-distance" tabindex="-1"><a class="header-anchor" href="#effect-distance" aria-hidden="true">#</a> effect-distance</h5>
<ul>
<li><strong>默认值</strong>: 16</li>
<li><strong>描述</strong>: 框架中每有七个物品时潮涌核心的生效距离。</li>
</ul>
</li>
<li>
<h5 id="mob-damage" tabindex="-1"><a class="header-anchor" href="#mob-damage" aria-hidden="true">#</a> mob-damage</h5>
<ul>
<li>
<h6 id="distance" tabindex="-1"><a class="header-anchor" href="#distance" aria-hidden="true">#</a> distance</h6>
<ul>
<li><strong>默认值</strong>: 8</li>
<li><strong>描述</strong>: 可对敌对生物造成伤害的距离。</li>
</ul>
</li>
<li>
<h6 id="damage-amount" tabindex="-1"><a class="header-anchor" href="#damage-amount" aria-hidden="true">#</a> damage-amount</h6>
<ul>
<li><strong>默认值</strong>: 4</li>
<li><strong>描述</strong>: 当敌对生物通过水/雨连接时每两秒对其应用的伤害量。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="beacon" tabindex="-1"><a class="header-anchor" href="#beacon" aria-hidden="true">#</a> beacon</h4>
<ul>
<li>
<h5 id="effect-range" tabindex="-1"><a class="header-anchor" href="#effect-range" aria-hidden="true">#</a> effect-range</h5>
<ul>
<li>
<h6 id="level-1" tabindex="-1"><a class="header-anchor" href="#level-1" aria-hidden="true">#</a> level-1</h6>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 该等级上应受到效果影响的方块距离。</li>
</ul>
</li>
<li>
<h6 id="level-2" tabindex="-1"><a class="header-anchor" href="#level-2" aria-hidden="true">#</a> level-2</h6>
<ul>
<li><strong>默认值</strong>: 30</li>
<li><strong>描述</strong>: 该等级上应受到效果影响的方块距离。</li>
</ul>
</li>
<li>
<h6 id="level-3" tabindex="-1"><a class="header-anchor" href="#level-3" aria-hidden="true">#</a> level-3</h6>
<ul>
<li><strong>默认值</strong>: 40</li>
<li><strong>描述</strong>: 该等级上应受到效果影响的方块距离。</li>
</ul>
</li>
<li>
<h6 id="level-4" tabindex="-1"><a class="header-anchor" href="#level-4" aria-hidden="true">#</a> level-4</h6>
<ul>
<li><strong>默认值</strong>: 50</li>
<li><strong>描述</strong>: 该等级上应受到效果影响的方块距离。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="sponge" tabindex="-1"><a class="header-anchor" href="#sponge" aria-hidden="true">#</a> sponge</h4>
<ul>
<li>
<h5 id="absorbs-lava" tabindex="-1"><a class="header-anchor" href="#absorbs-lava" aria-hidden="true">#</a> absorbs-lava</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否应该允许海绵吸收岩浆。</li>
</ul>
</li>
<li>
<h5 id="absorption" tabindex="-1"><a class="header-anchor" href="#absorption" aria-hidden="true">#</a> absorption</h5>
<ul>
<li>
<h6 id="area" tabindex="-1"><a class="header-anchor" href="#area" aria-hidden="true">#</a> area</h6>
<ul>
<li><strong>默认值</strong>: 64</li>
<li><strong>描述</strong>: 海绵可以吸水的区域方块数量。</li>
</ul>
</li>
<li>
<h6 id="radius" tabindex="-1"><a class="header-anchor" href="#radius" aria-hidden="true">#</a> radius</h6>
<ul>
<li><strong>默认值</strong>: 6</li>
<li><strong>描述</strong>: 海绵可以吸水的方块半径。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="composter" tabindex="-1"><a class="header-anchor" href="#composter" aria-hidden="true">#</a> composter</h4>
<ul>
<li>
<h5 id="sneak-to-bulk-process" tabindex="-1"><a class="header-anchor" href="#sneak-to-bulk-process" aria-hidden="true">#</a> sneak-to-bulk-process</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以允许潜行并右键单击时大量处理食物/植物。</li>
</ul>
</li>
</ul>
<h4 id="slab" tabindex="-1"><a class="header-anchor" href="#slab" aria-hidden="true">#</a> slab</h4>
<ul>
<li>
<h5 id="break-individual-slabs-when-sneaking" tabindex="-1"><a class="header-anchor" href="#break-individual-slabs-when-sneaking" aria-hidden="true">#</a> break-individual-slabs-when-sneaking</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即允许在潜行时仅破坏两个半砖中的一个。</li>
</ul>
</li>
</ul>
<h4 id="packed-ice" tabindex="-1"><a class="header-anchor" href="#packed-ice" aria-hidden="true">#</a> packed_ice</h4>
<ul>
<li>
<h5 id="allow-mob-spawns" tabindex="-1"><a class="header-anchor" href="#allow-mob-spawns" aria-hidden="true">#</a> allow-mob-spawns</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 即不允许生物在浮冰上生成。</li>
</ul>
</li>
</ul>
<h4 id="blue-ice" tabindex="-1"><a class="header-anchor" href="#blue-ice" aria-hidden="true">#</a> blue_ice</h4>
<ul>
<li>
<h5 id="allow-mob-spawns-1" tabindex="-1"><a class="header-anchor" href="#allow-mob-spawns-1" aria-hidden="true">#</a> allow-mob-spawns</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 即不允许生物在蓝冰上生成。</li>
</ul>
</li>
</ul>
<h4 id="sand" tabindex="-1"><a class="header-anchor" href="#sand" aria-hidden="true">#</a> sand</h4>
<ul>
<li>
<h5 id="fix-duping" tabindex="-1"><a class="header-anchor" href="#fix-duping" aria-hidden="true">#</a> fix-duping</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以启用刷沙。你可能还需要禁用 <a href="#safe-teleporting"><code v-pre>safe-teleporting</code></a></li>
</ul>
</li>
</ul>
<h4 id="end-portal" tabindex="-1"><a class="header-anchor" href="#end-portal" aria-hidden="true">#</a> end_portal</h4>
<ul>
<li>
<h5 id="safe-teleporting" tabindex="-1"><a class="header-anchor" href="#safe-teleporting" aria-hidden="true">#</a> safe-teleporting</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在处理末地传送门传送时是否要启用对不安全的代码保护。要利用某些机制可能需要禁用此功能。</li>
</ul>
</li>
</ul>
<h4 id="dispenser" tabindex="-1"><a class="header-anchor" href="#dispenser" aria-hidden="true">#</a> dispenser</h4>
<ul>
<li>
<h5 id="apply-cursed-to-armor-slots" tabindex="-1"><a class="header-anchor" href="#apply-cursed-to-armor-slots" aria-hidden="true">#</a> apply-cursed-to-armor-slots</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 如果已附魔绑定诅咒，发射器在发射盔甲时是否直接发射到盔甲栏中。</li>
</ul>
</li>
</ul>
<h4 id="respawn-anchor" tabindex="-1"><a class="header-anchor" href="#respawn-anchor" aria-hidden="true">#</a> respawn_anchor</h4>
<ul>
<li>
<h5 id="explode" tabindex="-1"><a class="header-anchor" href="#explode" aria-hidden="true">#</a> explode</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 重生锚是否应该会爆炸。设定为 &quot;false&quot; 将令重生锚突然消失。</li>
</ul>
</li>
<li>
<h5 id="explosion-power" tabindex="-1"><a class="header-anchor" href="#explosion-power" aria-hidden="true">#</a> explosion-power</h5>
<ul>
<li><strong>默认值</strong>: 5.0</li>
<li><strong>描述</strong>: 设定爆炸范围。（举例：TNT是4.0，闪电苦力怕是6.0）</li>
</ul>
</li>
<li>
<h5 id="explosion-fire" tabindex="-1"><a class="header-anchor" href="#explosion-fire" aria-hidden="true">#</a> explosion-fire</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 爆炸是否会产生火焰。</li>
</ul>
</li>
<li>
<h5 id="explosion-effect" tabindex="-1"><a class="header-anchor" href="#explosion-effect" aria-hidden="true">#</a> explosion-effect</h5>
<ul>
<li><strong>默认值</strong>: DESTROY</li>
<li><strong>描述</strong>: 应该如何处理受爆炸影响的方块。 <code v-pre>DESTROY</code> 将会直接摧毁方块 (无掉落物). <code v-pre>BREAK</code> 将会自然地处理掉落 (有掉落物). <code v-pre>NONE</code> 将不会破坏任何方块。</li>
</ul>
</li>
</ul>
<h4 id="sign" tabindex="-1"><a class="header-anchor" href="#sign" aria-hidden="true">#</a> sign</h4>
<ul>
<li>
<h5 id="allow-colors" tabindex="-1"><a class="header-anchor" href="#allow-colors" aria-hidden="true">#</a> allow-colors</h5>
<ul>
<li>需要拥有 <a href="../Permissions#purpursigncolor"><code v-pre>purpur.sign.color</code></a>, <a href="../Permissions#purpursignstyle"><code v-pre>purpur.sign.style</code></a>, 和/或 <a href="../Permissions#purpursignmagic"><code v-pre>purpur.sign.magic</code></a> 权限。</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许玩家在告示牌上使用颜色代码。</li>
</ul>
</li>
<li>
<h5 id="right-click-edit" tabindex="-1"><a class="header-anchor" href="#right-click-edit" aria-hidden="true">#</a> right-click-edit</h5>
<ul>
<li>需要拥有 <a href="../Permissions#purpursignedit"><code v-pre>purpur.sign.edit</code></a> 权限。</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当手持另外一个告示牌时右键告示牌是否可以修改告示牌。</li>
</ul>
</li>
</ul>
<h4 id="magma-block" tabindex="-1"><a class="header-anchor" href="#magma-block" aria-hidden="true">#</a> magma-block</h4>
<ul>
<li>
<h5 id="damage-when-sneaking" tabindex="-1"><a class="header-anchor" href="#damage-when-sneaking" aria-hidden="true">#</a> damage-when-sneaking</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当潜行时是否会造成伤害。</li>
</ul>
</li>
<li>
<h5 id="damage-with-frost-walker" tabindex="-1"><a class="header-anchor" href="#damage-with-frost-walker" aria-hidden="true">#</a> damage-with-frost-walker</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当靴子附魔冰霜行者时，设定为 &quot;true&quot; 时依然会对其造成伤害。</li>
</ul>
</li>
</ul>
<h4 id="lava" tabindex="-1"><a class="header-anchor" href="#lava" aria-hidden="true">#</a> lava</h4>
<ul>
<li>
<h5 id="infinite-source" tabindex="-1"><a class="header-anchor" href="#infinite-source" aria-hidden="true">#</a> infinite-source</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>:  是否允许岩浆拥有像水一样的无限供应特性。(&lt;无限供应&gt; 两个由源方块流出的液体合并在一起会创建新的源方块。)</li>
</ul>
</li>
<li>
<h5 id="infinite-required-sources" tabindex="-1"><a class="header-anchor" href="#infinite-required-sources" aria-hidden="true">#</a> infinite-required-sources</h5>
<ul>
<li><strong>默认值</strong>: 2</li>
<li><strong>描述</strong>: 无限岩浆需要多少个源方块数量。</li>
</ul>
</li>
<li>
<h5 id="speed" tabindex="-1"><a class="header-anchor" href="#speed" aria-hidden="true">#</a> speed</h5>
<ul>
<li>
<h6 id="nether" tabindex="-1"><a class="header-anchor" href="#nether" aria-hidden="true">#</a> nether</h6>
<ul>
<li><strong>默认值</strong>: 10</li>
<li><strong>描述</strong>: 物理/流动之间的Tick间隔（值越小，流速越快）。</li>
</ul>
</li>
<li>
<h6 id="not-nether" tabindex="-1"><a class="header-anchor" href="#not-nether" aria-hidden="true">#</a> not-nether</h6>
<ul>
<li><strong>默认值</strong>: 30</li>
<li><strong>描述</strong>: 物理/流动之间的Tick间隔（值越小，流速越快）。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="water" tabindex="-1"><a class="header-anchor" href="#water" aria-hidden="true">#</a> water</h4>
<ul>
<li>
<h5 id="infinite-source-1" tabindex="-1"><a class="header-anchor" href="#infinite-source-1" aria-hidden="true">#</a> infinite-source</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>:  水是否应该有水源方块 (&lt;无限供应&gt; 两个由源方块流出的液体合并在一起会创建新的源方块。)</li>
</ul>
</li>
<li>
<h5 id="infinite-required-sources-1" tabindex="-1"><a class="header-anchor" href="#infinite-required-sources-1" aria-hidden="true">#</a> infinite-required-sources</h5>
<ul>
<li><strong>默认值</strong>: 2</li>
<li><strong>描述</strong>: 无限水需要水源方块的数量。</li>
</ul>
</li>
</ul>
<h4 id="piston" tabindex="-1"><a class="header-anchor" href="#piston" aria-hidden="true">#</a> piston</h4>
<ul>
<li>
<h5 id="block-push-limit" tabindex="-1"><a class="header-anchor" href="#block-push-limit" aria-hidden="true">#</a> block-push-limit</h5>
<ul>
<li><strong>默认值</strong>: 12</li>
<li><strong>描述</strong>: 活塞可以推动多少数量的方块。</li>
</ul>
</li>
</ul>
<h4 id="bed" tabindex="-1"><a class="header-anchor" href="#bed" aria-hidden="true">#</a> bed</h4>
<ul>
<li>
<h5 id="explode-1" tabindex="-1"><a class="header-anchor" href="#explode-1" aria-hidden="true">#</a> explode</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 床是否会爆炸。设定此值为 &quot;false&quot; 即令床突然消失。</li>
</ul>
</li>
<li>
<h5 id="explode-on-villager-sleep" tabindex="-1"><a class="header-anchor" href="#explode-on-villager-sleep" aria-hidden="true">#</a> explode-on-villager-sleep</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当村民睡在某个床上时是否会爆炸。</li>
</ul>
</li>
<li>
<h5 id="explosion-power-1" tabindex="-1"><a class="header-anchor" href="#explosion-power-1" aria-hidden="true">#</a> explosion-power</h5>
<ul>
<li><strong>默认值</strong>: 5.0</li>
<li><strong>描述</strong>: 设定爆炸范围。（举例：TNT是4.0，闪电苦力怕是6.0）</li>
</ul>
</li>
<li>
<h5 id="explosion-fire-1" tabindex="-1"><a class="header-anchor" href="#explosion-fire-1" aria-hidden="true">#</a> explosion-fire</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 爆炸是否会产生火焰。</li>
</ul>
</li>
<li>
<h5 id="explosion-effect-1" tabindex="-1"><a class="header-anchor" href="#explosion-effect-1" aria-hidden="true">#</a> explosion-effect</h5>
<ul>
<li><strong>默认值</strong>: DESTROY</li>
<li><strong>描述</strong>: 应该如何处理受爆炸影响的方块。 <code v-pre>DESTROY</code> 将会直接摧毁方块 (无掉落物). <code v-pre>BREAK</code> 将会自然地处理掉落 (有掉落物). <code v-pre>NONE</code> 将不会破坏任何方块。</li>
</ul>
</li>
</ul>
<h4 id="farmland" tabindex="-1"><a class="header-anchor" href="#farmland" aria-hidden="true">#</a> farmland</h4>
<ul>
<li>
<h5 id="gets-moist-from-below" tabindex="-1"><a class="header-anchor" href="#gets-moist-from-below" aria-hidden="true">#</a> gets-moist-from-below</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许正下方的水润湿泥土。</li>
</ul>
</li>
<li>
<h5 id="use-alpha-farmland" tabindex="-1"><a class="header-anchor" href="#use-alpha-farmland" aria-hidden="true">#</a> use-alpha-farmland</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当在农田下面直接放置栅栏/圆石墙时是否可以防止被践踏。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-1" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-1" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令农田绕过 mob griefing 游戏规则。</li>
</ul>
</li>
<li>
<h5 id="only-players-trample" tabindex="-1"><a class="header-anchor" href="#only-players-trample" aria-hidden="true">#</a> only-players-trample</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>:  是否只有玩家才能践踏农田。</li>
</ul>
</li>
<li>
<h5 id="disable-trampling" tabindex="-1"><a class="header-anchor" href="#disable-trampling" aria-hidden="true">#</a> disable-trampling</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以完全禁用践踏。</li>
</ul>
</li>
<li>
<h5 id="trample-height" tabindex="-1"><a class="header-anchor" href="#trample-height" aria-hidden="true">#</a> trample-height</h5>
<ul>
<li><strong>默认值</strong>: -1.0</li>
<li><strong>描述</strong>: 设定玩家/实体在下坠时尝试践踏农田所需的高度。</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>注意</strong><br>
践踏高度需要方块的高度或精确距离。在测试之中我们发现设定值和实际下落距离是不一致的。以下是测试结果：<br>
设定的值 -&gt; 实际践踏所需的高度<br>
1.0 -&gt; 1.25<br>
1.5 -&gt; 1.75<br>
2.0 -&gt; 2.25<br>
2.5 -&gt; 2.87<br>
3.0 -&gt; 3.5<br>
3.5 -&gt; 4.25<br>
4.0 -&gt; 4.25<br>
4.5 -&gt; 5.0<br>
5.0 -&gt; 5.87<br>
5.5 -&gt; 5.87<br>
6.0 -&gt; 6.75</p>
</blockquote>
<ul>
<li>
<h5 id="feather-fall-distance-affects-trampling-1" tabindex="-1"><a class="header-anchor" href="#feather-fall-distance-affects-trampling-1" aria-hidden="true">#</a> feather-fall-distance-affects-trampling</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 如果实体下落距离等于摔落保护等级+在首个位置时必定践踏的方块，那么当此值设定为 <code v-pre>true</code> 时即不再视为践踏。即摔落保护I时需要3个方块以上才算践踏，而摔落保护2则需要4个方块以上，等等。</li>
</ul>
</li>
</ul>
<h4 id="spawner" tabindex="-1"><a class="header-anchor" href="#spawner" aria-hidden="true">#</a> spawner</h4>
<ul>
<li>
<h5 id="deactivate-by-redstone" tabindex="-1"><a class="header-anchor" href="#deactivate-by-redstone" aria-hidden="true">#</a> deactivate-by-redstone</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许红石禁用刷怪笼。</li>
</ul>
</li>
<li>
<h5 id="fix-mc-238526" tabindex="-1"><a class="header-anchor" href="#fix-mc-238526" aria-hidden="true">#</a> fix-mc-238526</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>:  修复刷怪笼不正确生成水生动物的问题；MC-238526</li>
</ul>
</li>
</ul>
<h4 id="dispenser-1" tabindex="-1"><a class="header-anchor" href="#dispenser-1" aria-hidden="true">#</a> dispenser</h4>
<ul>
<li>
<h5 id="place-anvils" tabindex="-1"><a class="header-anchor" href="#place-anvils" aria-hidden="true">#</a> place-anvils</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许发射器放置铁砧。</li>
</ul>
</li>
</ul>
<h4 id="anvil-1" tabindex="-1"><a class="header-anchor" href="#anvil-1" aria-hidden="true">#</a> anvil</h4>
<ul>
<li>
<h5 id="use-mini-message" tabindex="-1"><a class="header-anchor" href="#use-mini-message" aria-hidden="true">#</a> use-mini-message</h5>
<ul>
<li>需要拥有 <a href="../Permissions#purpuranvilminimessage"><code v-pre>purpur.anvil.minimessage</code></a> 权限</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>:  是否允许玩家在铁砧中使用 MiniMessage tags。</li>
</ul>
</li>
<li>
<h5 id="allow-colors-1" tabindex="-1"><a class="header-anchor" href="#allow-colors-1" aria-hidden="true">#</a> allow-colors</h5>
<ul>
<li>需要拥有 <a href="../Permissions#purpuranvilcolor"><code v-pre>purpur.anvil.color</code></a> 权限</li>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许玩家在铁砧中使用颜色代码。</li>
</ul>
</li>
<li>
<h5 id="cumulative-cost" tabindex="-1"><a class="header-anchor" href="#cumulative-cost" aria-hidden="true">#</a> cumulative-cost</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 物品在铁砧中是否要应用附魔惩罚。</li>
</ul>
</li>
<li>
<h5 id="iron-ingots-used-for-repair" tabindex="-1"><a class="header-anchor" href="#iron-ingots-used-for-repair" aria-hidden="true">#</a> iron-ingots-used-for-repair</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>:需要修复铁砧所需的铁锭数量。</li>
</ul>
</li>
<li>
<h5 id="obsidian-used-for-damage" tabindex="-1"><a class="header-anchor" href="#obsidian-used-for-damage" aria-hidden="true">#</a> obsidian-used-for-damage</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 黑曜石对铁砧造成伤害所需要的数量。</li>
</ul>
</li>
</ul>
<h4 id="lightning-rod" tabindex="-1"><a class="header-anchor" href="#lightning-rod" aria-hidden="true">#</a> lightning_rod</h4>
<ul>
<li>
<h5 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h5>
<ul>
<li><strong>默认值</strong>: 128</li>
<li><strong>描述</strong>: 避雷针重定向雷电的距离。</li>
</ul>
</li>
</ul>
<h4 id="stonecutter-1" tabindex="-1"><a class="header-anchor" href="#stonecutter-1" aria-hidden="true">#</a> stonecutter</h4>
<ul>
<li>
<h5 id="damage" tabindex="-1"><a class="header-anchor" href="#damage" aria-hidden="true">#</a> damage</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 如果设定了一个值，生物则会自动绕开切石机。</li>
</ul>
</li>
</ul>
<h4 id="furnace" tabindex="-1"><a class="header-anchor" href="#furnace" aria-hidden="true">#</a> furnace</h4>
<ul>
<li>
<h5 id="use-lava-from-underneath" tabindex="-1"><a class="header-anchor" href="#use-lava-from-underneath" aria-hidden="true">#</a> use-lava-from-underneath</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当岩浆在烘炉下面时候是否允许为其无限供能。</li>
</ul>
</li>
</ul>
<h4 id="blue-ice-1" tabindex="-1"><a class="header-anchor" href="#blue-ice-1" aria-hidden="true">#</a> blue_ice</h4>
<ul>
<li>
<h5 id="allow-snow-formation" tabindex="-1"><a class="header-anchor" href="#allow-snow-formation" aria-hidden="true">#</a> allow-snow-formation</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以禁止在蓝冰上生成雪。</li>
</ul>
</li>
</ul>
<h4 id="chest" tabindex="-1"><a class="header-anchor" href="#chest" aria-hidden="true">#</a> chest</h4>
<ul>
<li>
<h5 id="open-with-solid-block-on-top" tabindex="-1"><a class="header-anchor" href="#open-with-solid-block-on-top" aria-hidden="true">#</a> open-with-solid-block-on-top</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当有固体方面在上面时是否允许打开箱子。</li>
</ul>
</li>
</ul>
<h4 id="shulker-box" tabindex="-1"><a class="header-anchor" href="#shulker-box" aria-hidden="true">#</a> shulker_box</h4>
<ul>
<li>
<h5 id="allow-oversized-stacks" tabindex="-1"><a class="header-anchor" href="#allow-oversized-stacks" aria-hidden="true">#</a> allow-oversized-stacks</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否在潜影盒中允许过度堆叠物品（默认在chunk ban issue PaperMC/Paper#4748 修复。）</li>
</ul>
</li>
</ul>
<h4 id="door" tabindex="-1"><a class="header-anchor" href="#door" aria-hidden="true">#</a> door</h4>
<ul>
<li>
<h5 id="requires-redstone" tabindex="-1"><a class="header-anchor" href="#requires-redstone" aria-hidden="true">#</a> requires-redstone</h5>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 是否要允许设置需要红石操控的门。</li>
</ul>
</li>
</ul>
<h4 id="powder-snow-1" tabindex="-1"><a class="header-anchor" href="#powder-snow-1" aria-hidden="true">#</a> powder_snow</h4>
<ul>
<li>
<h5 id="bypass-mob-griefing-2" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-2" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以允许细雪绕过mob griefing游戏规则。</li>
</ul>
</li>
</ul>
<h4 id="end-crystal" tabindex="-1"><a class="header-anchor" href="#end-crystal" aria-hidden="true">#</a> end-crystal</h4>
<ul>
<li>
<h5 id="baseless" tabindex="-1"><a class="header-anchor" href="#baseless" aria-hidden="true">#</a> baseless</h5>
<ul>
<li>
<h6 id="explode-2" tabindex="-1"><a class="header-anchor" href="#explode-2" aria-hidden="true">#</a> explode</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以令下界水晶不再爆炸。</li>
</ul>
</li>
<li>
<h6 id="explosion-power-2" tabindex="-1"><a class="header-anchor" href="#explosion-power-2" aria-hidden="true">#</a> explosion-power</h6>
<ul>
<li><strong>默认值</strong>: 6.0</li>
<li><strong>描述</strong>: 下界水晶爆炸力度。</li>
</ul>
</li>
<li>
<h6 id="explosion-fire-2" tabindex="-1"><a class="header-anchor" href="#explosion-fire-2" aria-hidden="true">#</a> explosion-fire</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定 &quot;true&quot; 以在下界水晶爆炸后生成火焰。</li>
</ul>
</li>
<li>
<h6 id="explosion-effect-2" tabindex="-1"><a class="header-anchor" href="#explosion-effect-2" aria-hidden="true">#</a> explosion-effect</h6>
<ul>
<li><strong>默认值</strong>: DESTROY</li>
<li><strong>描述</strong>: 爆炸所带来影响的类型。可选： <code v-pre>NONE</code>, <code v-pre>BREAK</code>, 和 <code v-pre>DESTROY</code>。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> base</h5>
<ul>
<li>
<h6 id="explode-3" tabindex="-1"><a class="header-anchor" href="#explode-3" aria-hidden="true">#</a> explode</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以令下界水晶不再爆炸。</li>
</ul>
</li>
<li>
<h6 id="explosion-power-3" tabindex="-1"><a class="header-anchor" href="#explosion-power-3" aria-hidden="true">#</a> explosion-power</h6>
<ul>
<li><strong>默认值</strong>: 6.0</li>
<li><strong>描述</strong>: 下界水晶爆炸力度。</li>
</ul>
</li>
<li>
<h6 id="explosion-fire-3" tabindex="-1"><a class="header-anchor" href="#explosion-fire-3" aria-hidden="true">#</a> explosion-fire</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定 &quot;true&quot; 以在下界水晶爆炸后生成火焰。</li>
</ul>
</li>
<li>
<h6 id="explosion-effect-3" tabindex="-1"><a class="header-anchor" href="#explosion-effect-3" aria-hidden="true">#</a> explosion-effect</h6>
<ul>
<li><strong>默认值</strong>: DESTROY</li>
<li><strong>描述</strong>: 爆炸所带来影响的类型。可选： <code v-pre>NONE</code>, <code v-pre>BREAK</code>, 和 <code v-pre>DESTROY</code>。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="mobs" tabindex="-1"><a class="header-anchor" href="#mobs" aria-hidden="true">#</a> mobs</h3>
<h4 id="allay" tabindex="-1"><a class="header-anchor" href="#allay" aria-hidden="true">#</a> allay</h4>
<ul>
<li>
<h5 id="ridable" tabindex="-1"><a class="header-anchor" href="#ridable" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable" tabindex="-1"><a class="header-anchor" href="#controllable" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water" tabindex="-1"><a class="header-anchor" href="#ridable-in-water" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="respect-nbt" tabindex="-1"><a class="header-anchor" href="#respect-nbt" aria-hidden="true">#</a> respect-nbt</h5>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 若要使悦灵在拾起物品时保留NBT，你需要在存储一份保留的附魔列表，即如果你给了悦灵一个带有附魔的剑，它只会拾起相同含有附魔的剑。</li>
</ul>
</li>
</ul>
<h4 id="frog" tabindex="-1"><a class="header-anchor" href="#frog" aria-hidden="true">#</a> frog</h4>
<ul>
<li>
<h5 id="ridable-1" tabindex="-1"><a class="header-anchor" href="#ridable-1" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-1" tabindex="-1"><a class="header-anchor" href="#controllable-1" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-1" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-1" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="ridable-jump-height" tabindex="-1"><a class="header-anchor" href="#ridable-jump-height" aria-hidden="true">#</a> ridable-jump-height</h5>
<ul>
<li><strong>默认值</strong>: 0.65</li>
<li><strong>描述</strong>: 当骑乘时该生物可以跳跃的最大高度（以方块为单位）。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
</ul>
<h4 id="tadpole" tabindex="-1"><a class="header-anchor" href="#tadpole" aria-hidden="true">#</a> tadpole</h4>
<ul>
<li>
<h5 id="ridable-2" tabindex="-1"><a class="header-anchor" href="#ridable-2" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-2" tabindex="-1"><a class="header-anchor" href="#controllable-2" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-2" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-2" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
</ul>
<h4 id="warden" tabindex="-1"><a class="header-anchor" href="#warden" aria-hidden="true">#</a> warden</h4>
<ul>
<li>
<h5 id="ridable-3" tabindex="-1"><a class="header-anchor" href="#ridable-3" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-3" tabindex="-1"><a class="header-anchor" href="#controllable-3" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-3" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-3" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
</ul>
<h4 id="ender-dragon" tabindex="-1"><a class="header-anchor" href="#ender-dragon" aria-hidden="true">#</a> ender_dragon</h4>
<ul>
<li>
<h5 id="ridable-4" tabindex="-1"><a class="header-anchor" href="#ridable-4" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-4" tabindex="-1"><a class="header-anchor" href="#controllable-4" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-4" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-4" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y" tabindex="-1"><a class="header-anchor" href="#ridable-max-y" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="always-drop-full-exp" tabindex="-1"><a class="header-anchor" href="#always-drop-full-exp" aria-hidden="true">#</a> always-drop-full-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时，末影龙的每次死亡是否都会掉落如首次死亡一样的全部经验。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-3" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-3" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时，末影龙将绕过mob griefing游戏规则。</li>
</ul>
</li>
<li>
<h5 id="can-ride-vehicles" tabindex="-1"><a class="header-anchor" href="#can-ride-vehicles" aria-hidden="true">#</a> can-ride-vehicles</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时末影龙可以骑乘载具。</li>
</ul>
</li>
<li>
<h5 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health" tabindex="-1"><a class="header-anchor" href="#max-health" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 200.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="cave-spider" tabindex="-1"><a class="header-anchor" href="#cave-spider" aria-hidden="true">#</a> cave_spider</h4>
<ul>
<li>
<h5 id="ridable-5" tabindex="-1"><a class="header-anchor" href="#ridable-5" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-5" tabindex="-1"><a class="header-anchor" href="#controllable-5" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-5" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-5" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-1" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-1" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-1" tabindex="-1"><a class="header-anchor" href="#max-health-1" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 12.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp" tabindex="-1"><a class="header-anchor" href="#always-drop-exp" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="endermite" tabindex="-1"><a class="header-anchor" href="#endermite" aria-hidden="true">#</a> endermite</h4>
<ul>
<li>
<h5 id="ridable-6" tabindex="-1"><a class="header-anchor" href="#ridable-6" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-6" tabindex="-1"><a class="header-anchor" href="#controllable-6" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-6" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-6" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-2" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-2" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-2" tabindex="-1"><a class="header-anchor" href="#attributes-2" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-2" tabindex="-1"><a class="header-anchor" href="#max-health-2" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-1" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-1" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="mooshroom" tabindex="-1"><a class="header-anchor" href="#mooshroom" aria-hidden="true">#</a> mooshroom</h4>
<ul>
<li>
<h5 id="ridable-7" tabindex="-1"><a class="header-anchor" href="#ridable-7" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-7" tabindex="-1"><a class="header-anchor" href="#controllable-7" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-7" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-7" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-3" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-3" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-1" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-1" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-3" tabindex="-1"><a class="header-anchor" href="#attributes-3" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-3" tabindex="-1"><a class="header-anchor" href="#max-health-3" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-2" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-2" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="polar-bear" tabindex="-1"><a class="header-anchor" href="#polar-bear" aria-hidden="true">#</a> polar_bear</h4>
<ul>
<li>
<h5 id="ridable-8" tabindex="-1"><a class="header-anchor" href="#ridable-8" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-8" tabindex="-1"><a class="header-anchor" href="#controllable-8" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-8" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-8" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-4" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-4" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breedable-item" tabindex="-1"><a class="header-anchor" href="#breedable-item" aria-hidden="true">#</a> breedable-item</h5>
<ul>
<li><strong>默认值</strong>: &quot;&quot;</li>
<li><strong>描述</strong>: 可以吸引与繁殖北极熊的物品。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-2" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-2" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-4" tabindex="-1"><a class="header-anchor" href="#attributes-4" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-4" tabindex="-1"><a class="header-anchor" href="#max-health-4" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-3" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-3" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="vindicator" tabindex="-1"><a class="header-anchor" href="#vindicator" aria-hidden="true">#</a> vindicator</h4>
<ul>
<li>
<h5 id="ridable-9" tabindex="-1"><a class="header-anchor" href="#ridable-9" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-9" tabindex="-1"><a class="header-anchor" href="#controllable-9" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-9" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-9" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-5" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-5" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="johnny" tabindex="-1"><a class="header-anchor" href="#johnny" aria-hidden="true">#</a> johnny</h5>
<ul>
<li>
<h6 id="spawn-chance" tabindex="-1"><a class="header-anchor" href="#spawn-chance" aria-hidden="true">#</a> spawn-chance</h6>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 将命名为&quot;Johnny&quot;的卫道士替代普通卫道士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-5" tabindex="-1"><a class="header-anchor" href="#attributes-5" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-5" tabindex="-1"><a class="header-anchor" href="#max-health-5" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 24.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-4" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-4" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="zombie-horse" tabindex="-1"><a class="header-anchor" href="#zombie-horse" aria-hidden="true">#</a> zombie_horse</h4>
<ul>
<li>
<h5 id="ridable-10" tabindex="-1"><a class="header-anchor" href="#ridable-10" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-10" tabindex="-1"><a class="header-anchor" href="#controllable-10" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-10" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-10" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-6" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-6" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="spawn-chance-1" tabindex="-1"><a class="header-anchor" href="#spawn-chance-1" aria-hidden="true">#</a> spawn-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 生成僵尸马替代骷髅马（雷雨天气中自然生成）的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h5 id="attributes-6" tabindex="-1"><a class="header-anchor" href="#attributes-6" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-6" tabindex="-1"><a class="header-anchor" href="#max-health-6" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength" tabindex="-1"><a class="header-anchor" href="#jump-strength" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.4</li>
<li><strong>描述</strong>: 最小跳跃力量属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 最小跳跃力量属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed" tabindex="-1"><a class="header-anchor" href="#movement-speed" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.2</li>
<li><strong>描述</strong>: 最小移速属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.2</li>
<li><strong>描述</strong>: 最大移速属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-5" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-5" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="wither" tabindex="-1"><a class="header-anchor" href="#wither" aria-hidden="true">#</a> wither</h4>
<ul>
<li>
<h5 id="ridable-11" tabindex="-1"><a class="header-anchor" href="#ridable-11" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-11" tabindex="-1"><a class="header-anchor" href="#controllable-11" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-11" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-11" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-1" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-1" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-7" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-7" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="can-ride-vehicles-1" tabindex="-1"><a class="header-anchor" href="#can-ride-vehicles-1" aria-hidden="true">#</a> can-ride-vehicles</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以允许凋灵骑乘载具。</li>
</ul>
</li>
<li>
<h5 id="play-spawn-sound" tabindex="-1"><a class="header-anchor" href="#play-spawn-sound" aria-hidden="true">#</a> play-spawn-sound</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当凋灵生成时，是否要向全局播放生成音效。</li>
</ul>
</li>
<li>
<h5 id="explosion-radius" tabindex="-1"><a class="header-anchor" href="#explosion-radius" aria-hidden="true">#</a> explosion-radius</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 凋灵远程攻击时爆炸范围。</li>
</ul>
</li>
<li>
<h5 id="health-regen-amount" tabindex="-1"><a class="header-anchor" href="#health-regen-amount" aria-hidden="true">#</a> health-regen-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 凋灵再生效果的数量。</li>
</ul>
</li>
<li>
<h5 id="health-regen-delay" tabindex="-1"><a class="header-anchor" href="#health-regen-delay" aria-hidden="true">#</a> health-regen-delay</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 凋灵在应用两次生命恢复时应该间隔多次时间。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-4" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-4" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令凋灵绕过 mob griefing 游戏规则。</li>
</ul>
</li>
<li>
<h5 id="attributes-7" tabindex="-1"><a class="header-anchor" href="#attributes-7" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-7" tabindex="-1"><a class="header-anchor" href="#max-health-7" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 300.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-6" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-6" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="wither-skeleton" tabindex="-1"><a class="header-anchor" href="#wither-skeleton" aria-hidden="true">#</a> wither_skeleton</h4>
<ul>
<li>
<h5 id="ridable-12" tabindex="-1"><a class="header-anchor" href="#ridable-12" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-12" tabindex="-1"><a class="header-anchor" href="#controllable-12" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-12" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-12" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-8" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-8" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-8" tabindex="-1"><a class="header-anchor" href="#attributes-8" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-8" tabindex="-1"><a class="header-anchor" href="#max-health-8" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-7" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-7" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="zombie-villager" tabindex="-1"><a class="header-anchor" href="#zombie-villager" aria-hidden="true">#</a> zombie_villager</h4>
<ul>
<li>
<h5 id="ridable-13" tabindex="-1"><a class="header-anchor" href="#ridable-13" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-13" tabindex="-1"><a class="header-anchor" href="#controllable-13" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-13" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-13" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-9" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-9" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="cure" tabindex="-1"><a class="header-anchor" href="#cure" aria-hidden="true">#</a> cure</h5>
<ul>
<li>
<h6 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以禁止治愈僵尸村民。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="curing-time" tabindex="-1"><a class="header-anchor" href="#curing-time" aria-hidden="true">#</a> curing_time</h5>
<ul>
<li>
<h6 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> min</h6>
<ul>
<li><strong>默认值</strong>: 3600</li>
<li><strong>描述</strong>: 随机选择治愈的Tick数量的最小值。</li>
</ul>
</li>
<li>
<h6 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> max</h6>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 随机选择治愈的Tick数量的最大值。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="jockey" tabindex="-1"><a class="header-anchor" href="#jockey" aria-hidden="true">#</a> jockey</h5>
<ul>
<li>
<h6 id="only-babies" tabindex="-1"><a class="header-anchor" href="#only-babies" aria-hidden="true">#</a> only-babies</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否只允许幼年才能骑乘鸡。</li>
</ul>
</li>
<li>
<h6 id="chance" tabindex="-1"><a class="header-anchor" href="#chance" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成鸡骑士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="try-existing-chickens" tabindex="-1"><a class="header-anchor" href="#try-existing-chickens" aria-hidden="true">#</a> try-existing-chickens</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在生成时是否要扫描已有的鸡。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-9" tabindex="-1"><a class="header-anchor" href="#attributes-9" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-9" tabindex="-1"><a class="header-anchor" href="#max-health-9" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="spawn-reinforcements" tabindex="-1"><a class="header-anchor" href="#spawn-reinforcements" aria-hidden="true">#</a> spawn_reinforcements</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 额外生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-8" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-8" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="wandering-trader" tabindex="-1"><a class="header-anchor" href="#wandering-trader" aria-hidden="true">#</a> wandering_trader</h4>
<ul>
<li>
<h5 id="ridable-14" tabindex="-1"><a class="header-anchor" href="#ridable-14" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-14" tabindex="-1"><a class="header-anchor" href="#controllable-14" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-14" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-14" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-10" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-10" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="can-be-leashed" tabindex="-1"><a class="header-anchor" href="#can-be-leashed" aria-hidden="true">#</a> can-be-leashed</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 玩家是否可以使用拴绳引领村民（可交易的村民不算在内）</li>
</ul>
</li>
<li>
<h5 id="allow-trading" tabindex="-1"><a class="header-anchor" href="#allow-trading" aria-hidden="true">#</a> allow-trading</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 时禁用与流浪商人交易。</li>
</ul>
</li>
<li>
<h5 id="follow-emerald-blocks" tabindex="-1"><a class="header-anchor" href="#follow-emerald-blocks" aria-hidden="true">#</a> follow-emerald-blocks</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 村民是否会被绿宝石方块所吸引并跟随手中手持该方块的玩家。</li>
</ul>
</li>
<li>
<h5 id="attributes-10" tabindex="-1"><a class="header-anchor" href="#attributes-10" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-10" tabindex="-1"><a class="header-anchor" href="#max-health-10" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-9" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-9" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="silverfish" tabindex="-1"><a class="header-anchor" href="#silverfish" aria-hidden="true">#</a> silverfish</h4>
<ul>
<li>
<h5 id="ridable-15" tabindex="-1"><a class="header-anchor" href="#ridable-15" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-15" tabindex="-1"><a class="header-anchor" href="#controllable-15" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-15" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-15" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-11" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-11" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-5" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-5" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以使蠹虫绕过mob griefing游戏规则。</li>
</ul>
</li>
<li>
<h5 id="attributes-11" tabindex="-1"><a class="header-anchor" href="#attributes-11" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-11" tabindex="-1"><a class="header-anchor" href="#max-health-11" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-10" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-10" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="zombified-piglin" tabindex="-1"><a class="header-anchor" href="#zombified-piglin" aria-hidden="true">#</a> zombified_piglin</h4>
<ul>
<li>
<h5 id="ridable-16" tabindex="-1"><a class="header-anchor" href="#ridable-16" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-16" tabindex="-1"><a class="header-anchor" href="#controllable-16" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-16" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-16" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-12" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-12" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="count-as-player-kill-when-angry" tabindex="-1"><a class="header-anchor" href="#count-as-player-kill-when-angry" aria-hidden="true">#</a> count-as-player-kill-when-angry</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 时令僵尸猪灵被玩家激怒时（不是被击杀）不再掉落经验值</li>
</ul>
</li>
<li>
<h5 id="jockey-1" tabindex="-1"><a class="header-anchor" href="#jockey-1" aria-hidden="true">#</a> jockey</h5>
<ul>
<li>
<h6 id="only-babies-1" tabindex="-1"><a class="header-anchor" href="#only-babies-1" aria-hidden="true">#</a> only-babies</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否只允许幼年才能骑乘鸡。</li>
</ul>
</li>
<li>
<h6 id="chance-1" tabindex="-1"><a class="header-anchor" href="#chance-1" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成鸡骑士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="try-existing-chickens-1" tabindex="-1"><a class="header-anchor" href="#try-existing-chickens-1" aria-hidden="true">#</a> try-existing-chickens</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在生成时是否要扫描已有的鸡。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-12" tabindex="-1"><a class="header-anchor" href="#attributes-12" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-12" tabindex="-1"><a class="header-anchor" href="#max-health-12" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="spawn-reinforcements-1" tabindex="-1"><a class="header-anchor" href="#spawn-reinforcements-1" aria-hidden="true">#</a> spawn_reinforcements</h6>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 额外生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-11" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-11" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="snow-golem" tabindex="-1"><a class="header-anchor" href="#snow-golem" aria-hidden="true">#</a> snow_golem</h4>
<blockquote>
<p><strong>决定两次射击的间隔的公式</strong><br>
<code v-pre>    ((平方根(distanceToTarget) / attack-distance) / snow-ball-modifier) * (max-shoot-interval-ticks - min-shoot-interval-ticks) + min-shoot-interval-ticks    </code><br>
如果 <code v-pre>min-shoot-interval-ticks</code> 和 <code v-pre>max-shoot-interval-ticks</code> 都设定为 0，则雪人不会射出任何雪球。</p>
</blockquote>
<ul>
<li>
<h5 id="ridable-17" tabindex="-1"><a class="header-anchor" href="#ridable-17" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-17" tabindex="-1"><a class="header-anchor" href="#controllable-17" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-17" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-17" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="leave-trail-when-ridden" tabindex="-1"><a class="header-anchor" href="#leave-trail-when-ridden" aria-hidden="true">#</a> leave-trail-when-ridden</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当雪人正在骑马时是否令其留下尾迹。</li>
</ul>
</li>
<li>
<h5 id="drops-pumpkin-when-sheared" tabindex="-1"><a class="header-anchor" href="#drops-pumpkin-when-sheared" aria-hidden="true">#</a> drops-pumpkin-when-sheared</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当使用剪子剪雪人时是否令其南瓜掉落至地上。</li>
</ul>
</li>
<li>
<h5 id="pumpkin-can-be-added-back" tabindex="-1"><a class="header-anchor" href="#pumpkin-can-be-added-back" aria-hidden="true">#</a> pumpkin-can-be-added-back</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 南瓜是否可以被雪人重新佩戴。</li>
</ul>
</li>
<li>
<h5 id="min-shoot-interval-ticks" tabindex="-1"><a class="header-anchor" href="#min-shoot-interval-ticks" aria-hidden="true">#</a> min-shoot-interval-ticks</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 射击最大间隔Tick的数量。</li>
</ul>
</li>
<li>
<h5 id="max-shoot-interval-ticks" tabindex="-1"><a class="header-anchor" href="#max-shoot-interval-ticks" aria-hidden="true">#</a> max-shoot-interval-ticks</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 射击最大间隔Tick的数量。</li>
</ul>
</li>
<li>
<h5 id="snow-ball-modifier" tabindex="-1"><a class="header-anchor" href="#snow-ball-modifier" aria-hidden="true">#</a> snow-ball-modifier</h5>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 雪球弹射物的modifier值。</li>
</ul>
</li>
<li>
<h5 id="attack-distance" tabindex="-1"><a class="header-anchor" href="#attack-distance" aria-hidden="true">#</a> attack-distance</h5>
<ul>
<li><strong>默认值</strong>: 1.25</li>
<li><strong>描述</strong>: 雪人即将攻击时的距离。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-6" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-6" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以允许雪人绕过 mob griefing 游戏规则。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-13" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-13" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 令此生物不再在水中受到伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-13" tabindex="-1"><a class="header-anchor" href="#attributes-13" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-13" tabindex="-1"><a class="header-anchor" href="#max-health-13" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 4.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-12" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-12" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="skeleton-horse" tabindex="-1"><a class="header-anchor" href="#skeleton-horse" aria-hidden="true">#</a> skeleton_horse</h4>
<ul>
<li>
<h5 id="can-swim" tabindex="-1"><a class="header-anchor" href="#can-swim" aria-hidden="true">#</a> can-swim</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 骷髅马能否在水中游泳。设定为 &quot;false&quot; 将令它们下沉至水底（与原版一致）。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-18" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-18" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-14" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-14" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-14" tabindex="-1"><a class="header-anchor" href="#attributes-14" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-14" tabindex="-1"><a class="header-anchor" href="#max-health-14" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-1" tabindex="-1"><a class="header-anchor" href="#jump-strength-1" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.4</li>
<li><strong>描述</strong>: 最小跳跃力量属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 最小跳跃力量属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-1" tabindex="-1"><a class="header-anchor" href="#movement-speed-1" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.2</li>
<li><strong>描述</strong>: 最小移速属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.2</li>
<li><strong>描述</strong>: 最大移速属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-13" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-13" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="phantom" tabindex="-1"><a class="header-anchor" href="#phantom" aria-hidden="true">#</a> phantom</h4>
<ul>
<li>
<h5 id="ridable-18" tabindex="-1"><a class="header-anchor" href="#ridable-18" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-18" tabindex="-1"><a class="header-anchor" href="#controllable-18" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-19" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-19" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-15" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-15" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attacked-by-crystal-range" tabindex="-1"><a class="header-anchor" href="#attacked-by-crystal-range" aria-hidden="true">#</a> attacked-by-crystal-range</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 幻翼扫描攻击的水晶半径。设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h5 id="attacked-by-crystal-damage" tabindex="-1"><a class="header-anchor" href="#attacked-by-crystal-damage" aria-hidden="true">#</a> attacked-by-crystal-damage</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 水晶每秒对幻翼造成的伤害量。默认值 1.0 是半颗心。</li>
</ul>
</li>
<li>
<h5 id="orbit-crystal-radius" tabindex="-1"><a class="header-anchor" href="#orbit-crystal-radius" aria-hidden="true">#</a> orbit-crystal-radius</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 幻翼扫描水晶的轨道半径。设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h5 id="burn-in-light" tabindex="-1"><a class="header-anchor" href="#burn-in-light" aria-hidden="true">#</a> burn-in-light</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 幻翼在亮度为多少时可以生成。</li>
</ul>
</li>
<li>
<h5 id="burn-in-daylight" tabindex="-1"><a class="header-anchor" href="#burn-in-daylight" aria-hidden="true">#</a> burn-in-daylight</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 幻翼在白天是否会自燃。</li>
</ul>
</li>
<li>
<h5 id="flames-on-swoop" tabindex="-1"><a class="header-anchor" href="#flames-on-swoop" aria-hidden="true">#</a> flames-on-swoop</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 令幻翼在俯冲时射出火焰。</li>
</ul>
</li>
<li>
<h5 id="ignore-players-with-torch" tabindex="-1"><a class="header-anchor" href="#ignore-players-with-torch" aria-hidden="true">#</a> ignore-players-with-torch</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 幻翼是否要尽量避免遇到头上有根火把的玩家。</li>
</ul>
</li>
<li>
<h5 id="allow-griefing" tabindex="-1"><a class="header-anchor" href="#allow-griefing" aria-hidden="true">#</a> allow-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 幻翼的火焰是否可以燃烧。</li>
</ul>
</li>
<li>
<h6 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 当自然生成时随机可以选择的最小规模。</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 当自然生成时随机可以选择的最大规模。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="spawn" tabindex="-1"><a class="header-anchor" href="#spawn" aria-hidden="true">#</a> spawn</h5>
<ul>
<li>
<h6 id="min-sky-darkness" tabindex="-1"><a class="header-anchor" href="#min-sky-darkness" aria-hidden="true">#</a> min-sky-darkness</h6>
<ul>
<li><strong>默认值</strong>: 5</li>
<li><strong>描述</strong>: 夜晚在空中的数量（5对于雷雨来说足够暗了，但是还不够下雨）</li>
</ul>
</li>
<li>
<h6 id="only-above-sea-level" tabindex="-1"><a class="header-anchor" href="#only-above-sea-level" aria-hidden="true">#</a> only-above-sea-level</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否仅当玩家高于海平面时才会生成。</li>
</ul>
</li>
<li>
<h6 id="only-with-visible-sky" tabindex="-1"><a class="header-anchor" href="#only-with-visible-sky" aria-hidden="true">#</a> only-with-visible-sky</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否仅当玩家抬头即可望到天时才会生成。</li>
</ul>
</li>
<li>
<h6 id="local-difficulty-chance" tabindex="-1"><a class="header-anchor" href="#local-difficulty-chance" aria-hidden="true">#</a> local-difficulty-chance</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 本地游戏难度需要大于在0.0和该值之间的随机数。</li>
</ul>
</li>
<li>
<h6 id="min-time-since-slept" tabindex="-1"><a class="header-anchor" href="#min-time-since-slept" aria-hidden="true">#</a> min-time-since-slept</h6>
<ul>
<li><strong>默认值</strong>: 72000</li>
<li><strong>描述</strong>: 在生成之前，玩家最后一次睡觉起最小的Tick数值。</li>
</ul>
</li>
<li>
<h6 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 1200</li>
<li><strong>描述</strong>: 全局设定两次尝试生成之间最小时间（Tick为单位。）</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 2400</li>
<li><strong>描述</strong>: 全局设定两次尝试生成之间最大时间（Tick为单位。）</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="overhead" tabindex="-1"><a class="header-anchor" href="#overhead" aria-hidden="true">#</a> overhead</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 在玩家之上生成所需的最小方块数。</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 35</li>
<li><strong>描述</strong>: 在玩家之上生成所需的最大方块数。</li>
</ul>
</li>
<li>radius
<ul>
<li><strong>默认值</strong>: 10</li>
<li><strong>描述</strong>: 在玩家之上需要生成间隔的方块距离。</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="per-attempt" tabindex="-1"><a class="header-anchor" href="#per-attempt" aria-hidden="true">#</a> per-attempt</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 幻翼每次尝试生成的最小数量。</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: -1</li>
<li><strong>描述</strong>: 幻翼每次尝试生成的最大数量。（使用 -1 由世界难度决定。）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-15" tabindex="-1"><a class="header-anchor" href="#attributes-15" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-15" tabindex="-1"><a class="header-anchor" href="#max-health-15" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="attack-damage" tabindex="-1"><a class="header-anchor" href="#attack-damage" aria-hidden="true">#</a> attack_damage</h6>
<ul>
<li><strong>默认值</strong>: &quot;6 + size&quot;</li>
<li><strong>描述</strong>: 设定幻翼的基础攻击伤害。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-14" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-14" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="chicken" tabindex="-1"><a class="header-anchor" href="#chicken" aria-hidden="true">#</a> chicken</h4>
<ul>
<li>
<h5 id="ridable-19" tabindex="-1"><a class="header-anchor" href="#ridable-19" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-19" tabindex="-1"><a class="header-anchor" href="#controllable-19" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-20" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-20" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-16" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-16" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="retaliate" tabindex="-1"><a class="header-anchor" href="#retaliate" aria-hidden="true">#</a> retaliate</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 鸡若被打了，是否会回击。 <s>小鸡进攻</s></li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-3" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-3" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-16" tabindex="-1"><a class="header-anchor" href="#attributes-16" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-16" tabindex="-1"><a class="header-anchor" href="#max-health-16" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 4.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-15" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-15" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="creeper" tabindex="-1"><a class="header-anchor" href="#creeper" aria-hidden="true">#</a> creeper</h4>
<ul>
<li>
<h5 id="ridable-20" tabindex="-1"><a class="header-anchor" href="#ridable-20" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-20" tabindex="-1"><a class="header-anchor" href="#controllable-20" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-21" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-21" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-17" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-17" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="allow-griefing-1" tabindex="-1"><a class="header-anchor" href="#allow-griefing-1" aria-hidden="true">#</a> allow-griefing</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以防止苦力怕爆炸破坏地形。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-7" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-7" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令苦力怕绕过 mob griefing 游戏规则。</li>
</ul>
</li>
<li>
<h5 id="naturally-charged-chance" tabindex="-1"><a class="header-anchor" href="#naturally-charged-chance" aria-hidden="true">#</a> naturally-charged-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 自然生成闪电苦力怕的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h5 id="explode-when-killed" tabindex="-1"><a class="header-anchor" href="#explode-when-killed" aria-hidden="true">#</a> explode-when-killed</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令苦力怕被击杀后爆炸。</li>
</ul>
</li>
<li>
<h5 id="health-impacts-explosion" tabindex="-1"><a class="header-anchor" href="#health-impacts-explosion" aria-hidden="true">#</a> health-impacts-explosion</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令苦力怕的爆炸威力与其生命成比例（生命越低，爆炸伤害越小）</li>
</ul>
</li>
<li>
<h5 id="attributes-17" tabindex="-1"><a class="header-anchor" href="#attributes-17" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-17" tabindex="-1"><a class="header-anchor" href="#max-health-17" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="head-visibility-percent" tabindex="-1"><a class="header-anchor" href="#head-visibility-percent" aria-hidden="true">#</a> head-visibility-percent</h5>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-16" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-16" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="donkey" tabindex="-1"><a class="header-anchor" href="#donkey" aria-hidden="true">#</a> donkey</h4>
<ul>
<li>
<h5 id="ridable-in-water-22" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-22" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-18" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-18" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-4" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-4" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-18" tabindex="-1"><a class="header-anchor" href="#attributes-18" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-18" tabindex="-1"><a class="header-anchor" href="#max-health-18" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-2" tabindex="-1"><a class="header-anchor" href="#jump-strength-2" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最小跳跃高度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最大跳跃高度属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-2" tabindex="-1"><a class="header-anchor" href="#movement-speed-2" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最小移动速度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最大移动速度属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-17" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-17" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="cow" tabindex="-1"><a class="header-anchor" href="#cow" aria-hidden="true">#</a> cow</h4>
<ul>
<li>
<h5 id="ridable-21" tabindex="-1"><a class="header-anchor" href="#ridable-21" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-21" tabindex="-1"><a class="header-anchor" href="#controllable-21" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-23" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-23" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-19" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-19" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="feed-mushrooms-for-mooshroom" tabindex="-1"><a class="header-anchor" href="#feed-mushrooms-for-mooshroom" aria-hidden="true">#</a> feed-mushrooms-for-mooshroom</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 要喂多少个蘑菇才能令牛转换为蘑菇牛。设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-5" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-5" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="naturally-aggressive-to-players" tabindex="-1"><a class="header-anchor" href="#naturally-aggressive-to-players" aria-hidden="true">#</a> naturally-aggressive-to-players</h5>
<ul>
<li>
<h6 id="chance-2" tabindex="-1"><a class="header-anchor" href="#chance-2" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 此生物在生成时默认为敌对生物的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="damage-1" tabindex="-1"><a class="header-anchor" href="#damage-1" aria-hidden="true">#</a> damage</h6>
<ul>
<li><strong>默认值</strong>: 2.0</li>
<li><strong>描述</strong>: 将对玩家造成多少伤害</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-19" tabindex="-1"><a class="header-anchor" href="#attributes-19" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-19" tabindex="-1"><a class="header-anchor" href="#max-health-19" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-18" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-18" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="enderman-1" tabindex="-1"><a class="header-anchor" href="#enderman-1" aria-hidden="true">#</a> enderman</h4>
<ul>
<li>
<h5 id="ridable-22" tabindex="-1"><a class="header-anchor" href="#ridable-22" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-22" tabindex="-1"><a class="header-anchor" href="#controllable-22" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-24" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-24" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="allow-griefing-2" tabindex="-1"><a class="header-anchor" href="#allow-griefing-2" aria-hidden="true">#</a> allow-griefing</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 令末影人不会搬走方块</li>
</ul>
</li>
<li>
<h5 id="can-despawn-with-held-block" tabindex="-1"><a class="header-anchor" href="#can-despawn-with-held-block" aria-hidden="true">#</a> can-despawn-with-held-block</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 即使末影人正在手持方块，是否依然允许其自然消失。</li>
</ul>
</li>
<li>
<h5 id="ignore-projectiles" tabindex="-1"><a class="header-anchor" href="#ignore-projectiles" aria-hidden="true">#</a> ignore-projectiles</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 末影人是否要免疫弹射物。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-8" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-8" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令末影人绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-20" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-20" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 令此生物不再在水中受到伤害。</li>
</ul>
</li>
<li>
<h5 id="aggressive-towards-endermites" tabindex="-1"><a class="header-anchor" href="#aggressive-towards-endermites" aria-hidden="true">#</a> aggressive-towards-endermites</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以令末影人不再对任何方式生成的末影螨尝试发动攻击。</li>
</ul>
</li>
<li>
<h5 id="aggressive-towards-endermites-only-spawned-by-player-thrown-ender-pearls" tabindex="-1"><a class="header-anchor" href="#aggressive-towards-endermites-only-spawned-by-player-thrown-ender-pearls" aria-hidden="true">#</a> aggressive-towards-endermites-only-spawned-by-player-thrown-ender-pearls</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 末影人是否仅对由玩家投掷末影珍珠产生的末影螨发动攻击。仅当 <code v-pre>aggressive-towards-endermites</code> 为 true 时此项才有效。</li>
</ul>
</li>
<li>
<h5 id="ignore-players-wearing-dragon-head" tabindex="-1"><a class="header-anchor" href="#ignore-players-wearing-dragon-head" aria-hidden="true">#</a> ignore-players-wearing-dragon-head</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 令末影人忽略玩家正在佩戴龙首。</li>
</ul>
</li>
<li>
<h5 id="disable-player-stare-aggression" tabindex="-1"><a class="header-anchor" href="#disable-player-stare-aggression" aria-hidden="true">#</a> disable-player-stare-aggression</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 时，当玩家直视末影人头部时不再激怒末影人。</li>
</ul>
</li>
<li>
<h5 id="attributes-20" tabindex="-1"><a class="header-anchor" href="#attributes-20" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-20" tabindex="-1"><a class="header-anchor" href="#max-health-20" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 40.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-19" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-19" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="evoker" tabindex="-1"><a class="header-anchor" href="#evoker" aria-hidden="true">#</a> evoker</h4>
<ul>
<li>
<h5 id="ridable-23" tabindex="-1"><a class="header-anchor" href="#ridable-23" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-23" tabindex="-1"><a class="header-anchor" href="#controllable-23" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-25" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-25" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-21" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-21" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-9" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-9" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令唤魔者绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-21" tabindex="-1"><a class="header-anchor" href="#attributes-21" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-21" tabindex="-1"><a class="header-anchor" href="#max-health-21" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 24.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-20" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-20" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="drowned" tabindex="-1"><a class="header-anchor" href="#drowned" aria-hidden="true">#</a> drowned</h4>
<ul>
<li>
<h5 id="ridable-24" tabindex="-1"><a class="header-anchor" href="#ridable-24" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-24" tabindex="-1"><a class="header-anchor" href="#controllable-24" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-26" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-26" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-22" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-22" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="can-break-doors" tabindex="-1"><a class="header-anchor" href="#can-break-doors" aria-hidden="true">#</a> can-break-doors</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以允许溺尸破门。</li>
</ul>
</li>
<li>
<h5 id="jockey-2" tabindex="-1"><a class="header-anchor" href="#jockey-2" aria-hidden="true">#</a> jockey</h5>
<ul>
<li>
<h6 id="only-babies-2" tabindex="-1"><a class="header-anchor" href="#only-babies-2" aria-hidden="true">#</a> only-babies</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否只允许幼年才能骑乘鸡。</li>
</ul>
</li>
<li>
<h6 id="chance-3" tabindex="-1"><a class="header-anchor" href="#chance-3" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成鸡骑士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="try-existing-chickens-2" tabindex="-1"><a class="header-anchor" href="#try-existing-chickens-2" aria-hidden="true">#</a> try-existing-chickens</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在生成时是否要扫描已有的鸡。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-22" tabindex="-1"><a class="header-anchor" href="#attributes-22" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-22" tabindex="-1"><a class="header-anchor" href="#max-health-22" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="spawn-reinforcements-2" tabindex="-1"><a class="header-anchor" href="#spawn-reinforcements-2" aria-hidden="true">#</a> spawn_reinforcements</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 额外生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-21" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-21" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="pillager" tabindex="-1"><a class="header-anchor" href="#pillager" aria-hidden="true">#</a> pillager</h4>
<ul>
<li>
<h5 id="ridable-25" tabindex="-1"><a class="header-anchor" href="#ridable-25" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-25" tabindex="-1"><a class="header-anchor" href="#controllable-25" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-27" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-27" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-23" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-23" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-10" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-10" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令掠夺者绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-23" tabindex="-1"><a class="header-anchor" href="#attributes-23" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-23" tabindex="-1"><a class="header-anchor" href="#max-health-23" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 24.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-22" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-22" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="fox" tabindex="-1"><a class="header-anchor" href="#fox" aria-hidden="true">#</a> fox</h4>
<ul>
<li>
<h5 id="ridable-26" tabindex="-1"><a class="header-anchor" href="#ridable-26" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-26" tabindex="-1"><a class="header-anchor" href="#controllable-26" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-28" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-28" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-24" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-24" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="tulips-change-type" tabindex="-1"><a class="header-anchor" href="#tulips-change-type" aria-hidden="true">#</a> tulips-change-type</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 对其喂白/橙色郁金香会改变至 snow/regular 类型。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-6" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-6" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-11" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-11" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令狐狸绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-24" tabindex="-1"><a class="header-anchor" href="#attributes-24" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-24" tabindex="-1"><a class="header-anchor" href="#max-health-24" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-23" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-23" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="giant" tabindex="-1"><a class="header-anchor" href="#giant" aria-hidden="true">#</a> giant</h4>
<ul>
<li>
<h5 id="ridable-27" tabindex="-1"><a class="header-anchor" href="#ridable-27" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-27" tabindex="-1"><a class="header-anchor" href="#controllable-27" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-29" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-29" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-25" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-25" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="step-height" tabindex="-1"><a class="header-anchor" href="#step-height" aria-hidden="true">#</a> step-height</h5>
<ul>
<li><strong>默认值</strong>: 2.0</li>
<li><strong>描述</strong>: 巨人无需跳跃可以向上走多少格方块。</li>
</ul>
</li>
<li>
<h5 id="jump-height" tabindex="-1"><a class="header-anchor" href="#jump-height" aria-hidden="true">#</a> jump-height</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 跳跃高度modifier。默认值 1.0 会令巨人在跳跃时可以跳跃至腰部的高度。</li>
</ul>
</li>
<li>
<h5 id="movement-speed-3" tabindex="-1"><a class="header-anchor" href="#movement-speed-3" aria-hidden="true">#</a> movement-speed</h5>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 移动速度属性</li>
</ul>
</li>
<li>
<h5 id="attack-damage-1" tabindex="-1"><a class="header-anchor" href="#attack-damage-1" aria-hidden="true">#</a> attack-damage</h5>
<ul>
<li><strong>默认值</strong>: 50.0</li>
<li><strong>描述</strong>: 攻击伤害（半颗心）</li>
</ul>
</li>
<li>
<h5 id="have-ai" tabindex="-1"><a class="header-anchor" href="#have-ai" aria-hidden="true">#</a> have-ai</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 巨人是否拥有AI以替代呆呆的站在这。</li>
</ul>
</li>
<li>
<h5 id="have-hostile-ai" tabindex="-1"><a class="header-anchor" href="#have-hostile-ai" aria-hidden="true">#</a> have-hostile-ai</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 巨人是否应该有敌对AI。</li>
</ul>
</li>
<li>
<h5 id="attributes-25" tabindex="-1"><a class="header-anchor" href="#attributes-25" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-25" tabindex="-1"><a class="header-anchor" href="#max-health-25" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 100.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-24" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-24" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="hoglin" tabindex="-1"><a class="header-anchor" href="#hoglin" aria-hidden="true">#</a> hoglin</h4>
<ul>
<li>
<h5 id="ridable-28" tabindex="-1"><a class="header-anchor" href="#ridable-28" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-28" tabindex="-1"><a class="header-anchor" href="#controllable-28" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-30" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-30" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-26" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-26" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-7" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-7" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-26" tabindex="-1"><a class="header-anchor" href="#attributes-26" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-26" tabindex="-1"><a class="header-anchor" href="#max-health-26" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 40.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-25" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-25" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="glow-squid" tabindex="-1"><a class="header-anchor" href="#glow-squid" aria-hidden="true">#</a> glow_squid</h4>
<ul>
<li>
<h5 id="ridable-29" tabindex="-1"><a class="header-anchor" href="#ridable-29" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-29" tabindex="-1"><a class="header-anchor" href="#controllable-29" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="can-fly" tabindex="-1"><a class="header-anchor" href="#can-fly" aria-hidden="true">#</a> can-fly</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 鱿鱼能飞，我的天哪！</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-27" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-27" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-27" tabindex="-1"><a class="header-anchor" href="#attributes-27" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-27" tabindex="-1"><a class="header-anchor" href="#max-health-27" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-26" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-26" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
<li>
<h5 id="rainglow-mode" tabindex="-1"><a class="header-anchor" href="#rainglow-mode" aria-hidden="true">#</a> rainglow-mode</h5>
<ul>
<li><strong>默认值</strong>: rainbow</li>
<li><strong>描述</strong>: 允许你更改发光鱿鱼的颜色。<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">Basic</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">rainbow</span><span class="token punctuation">:</span> 红色<span class="token punctuation">,</span> 橙色<span class="token punctuation">,</span> 黄色<span class="token punctuation">,</span> 绿色<span class="token punctuation">,</span> 蓝色<span class="token punctuation">,</span> 靛蓝色 和 蓝紫色.
<span class="token punctuation">-</span> <span class="token key atrule">all_colors</span><span class="token punctuation">:</span> 蓝色<span class="token punctuation">,</span> 红色<span class="token punctuation">,</span> 绿色<span class="token punctuation">,</span> 粉色<span class="token punctuation">,</span> 黄色<span class="token punctuation">,</span> 橙色<span class="token punctuation">,</span> 靛蓝色<span class="token punctuation">,</span> 紫色<span class="token punctuation">,</span> 白色<span class="token punctuation">,</span> 灰色 和 黑色.
<span class="token punctuation">-</span> <span class="token key atrule">monochrome</span><span class="token punctuation">:</span> 白色<span class="token punctuation">,</span> 灰色<span class="token punctuation">,</span> 和 黑色.
<span class="token punctuation">-</span> <span class="token key atrule">vanilla</span><span class="token punctuation">:</span> 仅蓝色.

<span class="token key atrule">Pride</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">trans_pride</span><span class="token punctuation">:</span> 蓝色<span class="token punctuation">,</span> 白色 和 粉色.
<span class="token punctuation">-</span> <span class="token key atrule">lesbian_pride</span><span class="token punctuation">:</span> 红色<span class="token punctuation">,</span> 橙色<span class="token punctuation">,</span> 白色<span class="token punctuation">,</span> 粉色 和 紫色.
<span class="token punctuation">-</span> <span class="token key atrule">bi_pride</span><span class="token punctuation">:</span> 蓝色<span class="token punctuation">,</span> 粉色 和 紫色.
<span class="token punctuation">-</span> <span class="token key atrule">pan_pride</span><span class="token punctuation">:</span> 粉色<span class="token punctuation">,</span> 黄色 和 蓝色.
<span class="token punctuation">-</span> <span class="token key atrule">ace_pride</span><span class="token punctuation">:</span> 黑色<span class="token punctuation">,</span> 灰色<span class="token punctuation">,</span> 白色 和 紫色.
<span class="token punctuation">-</span> <span class="token key atrule">aro_pride</span><span class="token punctuation">:</span> 黑色<span class="token punctuation">,</span> 灰色<span class="token punctuation">,</span> 白色 和 绿色.
<span class="token punctuation">-</span> <span class="token key atrule">genderfluid</span><span class="token punctuation">:</span> 蓝色<span class="token punctuation">,</span> 粉色<span class="token punctuation">,</span> 紫色<span class="token punctuation">,</span> 白色 和 黑色.
<span class="token punctuation">-</span> <span class="token key atrule">enby_pride</span><span class="token punctuation">:</span> 黄色<span class="token punctuation">,</span> 白色<span class="token punctuation">,</span> 黑色 和 紫色.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>注意</strong><br>
在客户端必须安装 <a href="https://modrinth.com/mod/rainglow" target="_blank" rel="noopener noreferrer"><code v-pre>Rainglow Fabric mod</code><ExternalLinkIcon/></a> mod才能使发光鱿鱼颜色改变。</p>
</blockquote>
<h4 id="squid" tabindex="-1"><a class="header-anchor" href="#squid" aria-hidden="true">#</a> squid</h4>
<ul>
<li>
<h5 id="ridable-30" tabindex="-1"><a class="header-anchor" href="#ridable-30" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-30" tabindex="-1"><a class="header-anchor" href="#controllable-30" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-28" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-28" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="immune-to-ear" tabindex="-1"><a class="header-anchor" href="#immune-to-ear" aria-hidden="true">#</a> immune-to-EAR</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否要令该生物免疫 EAR (Entity Activation Range)</li>
</ul>
</li>
<li>
<h5 id="water-offset-check" tabindex="-1"><a class="header-anchor" href="#water-offset-check" aria-hidden="true">#</a> water-offset-check</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 阻止鱿鱼漂浮在水面上。</li>
</ul>
</li>
<li>
<h5 id="can-fly-1" tabindex="-1"><a class="header-anchor" href="#can-fly-1" aria-hidden="true">#</a> can-fly</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 鱿鱼能飞，我的天哪！</li>
</ul>
</li>
<li>
<h5 id="attributes-28" tabindex="-1"><a class="header-anchor" href="#attributes-28" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-28" tabindex="-1"><a class="header-anchor" href="#max-health-28" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-27" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-27" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="villager" tabindex="-1"><a class="header-anchor" href="#villager" aria-hidden="true">#</a> villager</h4>
<ul>
<li>
<h5 id="ridable-31" tabindex="-1"><a class="header-anchor" href="#ridable-31" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-31" tabindex="-1"><a class="header-anchor" href="#controllable-31" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-31" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-31" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-29" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-29" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="brain-ticks" tabindex="-1"><a class="header-anchor" href="#brain-ticks" aria-hidden="true">#</a> brain-ticks</h5>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 村民的大脑应该多久反应一次（以Tick为单位），原版是每Tick（1）反应一次。越高的值越能缓解延迟，但是设定的值过高会令村民反应迟钝。</li>
</ul>
</li>
<li>
<h5 id="use-brain-ticks-only-when-lagging" tabindex="-1"><a class="header-anchor" href="#use-brain-ticks-only-when-lagging" aria-hidden="true">#</a> use-brain-ticks-only-when-lagging</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否仅在服务器出现延迟时更改 brain-ticks 值（见上文 lagging-threshold ）。如果设定为 false，brain-ticks将始终启用。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-12" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-12" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否忽略 <code v-pre>mobGriefing</code> 游戏规则并允许村民丢弃物品，允许他们繁殖。</li>
</ul>
</li>
<li>
<h5 id="can-be-leashed-1" tabindex="-1"><a class="header-anchor" href="#can-be-leashed-1" aria-hidden="true">#</a> can-be-leashed</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许玩家使用拴绳引领村民（不包含可交易的村民）</li>
</ul>
</li>
<li>
<h5 id="follow-emerald-blocks-1" tabindex="-1"><a class="header-anchor" href="#follow-emerald-blocks-1" aria-hidden="true">#</a> follow-emerald-blocks</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 村民是否会被绿宝石块并跟随手持绿宝石方块的玩家。</li>
</ul>
</li>
<li>
<h5 id="allow-trading-1" tabindex="-1"><a class="header-anchor" href="#allow-trading-1" aria-hidden="true">#</a> allow-trading</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 将禁用与村民交易。</li>
</ul>
</li>
<li>
<h5 id="display-trade-item" tabindex="-1"><a class="header-anchor" href="#display-trade-item" aria-hidden="true">#</a> display-trade-item</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止村民展示可交易物品。</li>
</ul>
</li>
<li>
<h5 id="lobotomize" tabindex="-1"><a class="header-anchor" href="#lobotomize" aria-hidden="true">#</a> lobotomize</h5>
<ul>
<li>
<h6 id="enabled-1" tabindex="-1"><a class="header-anchor" href="#enabled-1" aria-hidden="true">#</a> enabled</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 如果村民无法移动是否要禁用移动。 (不禁用交易)</li>
</ul>
</li>
<li>
<h6 id="check-interval" tabindex="-1"><a class="header-anchor" href="#check-interval" aria-hidden="true">#</a> check-interval</h6>
<ul>
<li><strong>默认值</strong>: 100</li>
<li><strong>描述</strong>: 如果村民禁用移动间隔多少Tick检查一次。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="minimum-demand" tabindex="-1"><a class="header-anchor" href="#minimum-demand" aria-hidden="true">#</a> minimum-demand</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 修复MC-163962中，村民需求将无限降低。Paper添加了一个补丁以避免需求降低至0以下。此项允许设定最小值。</li>
</ul>
</li>
<li>
<h5 id="can-breed" tabindex="-1"><a class="header-anchor" href="#can-breed" aria-hidden="true">#</a> can-breed</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 村民之间能否繁殖。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-8" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-8" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="clerics-farm-warts" tabindex="-1"><a class="header-anchor" href="#clerics-farm-warts" aria-hidden="true">#</a> clerics-farm-warts</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令牧师种下界疣。</li>
</ul>
</li>
<li>
<h5 id="cleric-wart-farmers-throw-warts-at-villagers" tabindex="-1"><a class="header-anchor" href="#cleric-wart-farmers-throw-warts-at-villagers" aria-hidden="true">#</a> cleric-wart-farmers-throw-warts-at-villagers</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止牧师将下界疣丢给其它村民。</li>
</ul>
</li>
<li>
<h5 id="spawn-iron-golem" tabindex="-1"><a class="header-anchor" href="#spawn-iron-golem" aria-hidden="true">#</a> spawn-iron-golem</h5>
<ul>
<li>
<h6 id="radius-1" tabindex="-1"><a class="header-anchor" href="#radius-1" aria-hidden="true">#</a> radius</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 在尝试生成更多的铁傀儡之前需要检索村民数量的半径。设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h6 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> limit</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 村民可生成铁傀儡所设定半径内的最大数量。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-29" tabindex="-1"><a class="header-anchor" href="#attributes-29" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-29" tabindex="-1"><a class="header-anchor" href="#max-health-29" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-28" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-28" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="mule" tabindex="-1"><a class="header-anchor" href="#mule" aria-hidden="true">#</a> mule</h4>
<ul>
<li>
<h5 id="ridable-in-water-32" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-32" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-30" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-30" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-9" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-9" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-30" tabindex="-1"><a class="header-anchor" href="#attributes-30" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-30" tabindex="-1"><a class="header-anchor" href="#max-health-30" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-3" tabindex="-1"><a class="header-anchor" href="#jump-strength-3" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最小跳跃高度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最大跳跃高度属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-4" tabindex="-1"><a class="header-anchor" href="#movement-speed-4" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最小移动速度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最大移动速度属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-29" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-29" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="wolf" tabindex="-1"><a class="header-anchor" href="#wolf" aria-hidden="true">#</a> wolf</h4>
<ul>
<li>
<h5 id="ridable-32" tabindex="-1"><a class="header-anchor" href="#ridable-32" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-32" tabindex="-1"><a class="header-anchor" href="#controllable-32" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-33" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-33" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-31" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-31" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="milk-cures-rabid-wolves" tabindex="-1"><a class="header-anchor" href="#milk-cures-rabid-wolves" aria-hidden="true">#</a> milk-cures-rabid-wolves</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 时，被激怒的狼无法被牛奶所治愈。</li>
</ul>
</li>
<li>
<h5 id="spawn-rabid-chance" tabindex="-1"><a class="header-anchor" href="#spawn-rabid-chance" aria-hidden="true">#</a> spawn-rabid-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 生成时狼默认被激怒的概率百分比（0.0 - 1.0）。</li>
</ul>
</li>
<li>
<h5 id="default-collar-color" tabindex="-1"><a class="header-anchor" href="#default-collar-color" aria-hidden="true">#</a> default-collar-color</h5>
<ul>
<li><strong>默认值</strong>: red</li>
<li><strong>描述</strong>: 当狼被驯服时默认项圈的颜色。 <a href="https://purpurmc.org/javadoc/org/bukkit/Color.html" target="_blank" rel="noopener noreferrer">可用颜色<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-10" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-10" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-31" tabindex="-1"><a class="header-anchor" href="#attributes-31" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-31" tabindex="-1"><a class="header-anchor" href="#max-health-31" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-30" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-30" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="zoglin" tabindex="-1"><a class="header-anchor" href="#zoglin" aria-hidden="true">#</a> zoglin</h4>
<ul>
<li>
<h5 id="ridable-33" tabindex="-1"><a class="header-anchor" href="#ridable-33" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-33" tabindex="-1"><a class="header-anchor" href="#controllable-33" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-34" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-34" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-32" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-32" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-32" tabindex="-1"><a class="header-anchor" href="#attributes-32" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-32" tabindex="-1"><a class="header-anchor" href="#max-health-32" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 40.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-31" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-31" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="ocelot" tabindex="-1"><a class="header-anchor" href="#ocelot" aria-hidden="true">#</a> ocelot</h4>
<ul>
<li>
<h5 id="ridable-34" tabindex="-1"><a class="header-anchor" href="#ridable-34" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-34" tabindex="-1"><a class="header-anchor" href="#controllable-34" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-35" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-35" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-33" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-33" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-11" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-11" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-33" tabindex="-1"><a class="header-anchor" href="#attributes-33" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-33" tabindex="-1"><a class="header-anchor" href="#max-health-33" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-32" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-32" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="shulker" tabindex="-1"><a class="header-anchor" href="#shulker" aria-hidden="true">#</a> shulker</h4>
<ul>
<li>
<h5 id="ridable-35" tabindex="-1"><a class="header-anchor" href="#ridable-35" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-35" tabindex="-1"><a class="header-anchor" href="#controllable-35" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-36" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-36" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-34" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-34" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="change-color-with-dye" tabindex="-1"><a class="header-anchor" href="#change-color-with-dye" aria-hidden="true">#</a> change-color-with-dye</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许手持染料右键潜影贝时更改其颜色。</li>
</ul>
</li>
<li>
<h5 id="spawn-from-bullet" tabindex="-1"><a class="header-anchor" href="#spawn-from-bullet" aria-hidden="true">#</a> spawn-from-bullet:</h5>
<ul>
<li>
<h6 id="base-chance" tabindex="-1"><a class="header-anchor" href="#base-chance" aria-hidden="true">#</a> base-chance</h6>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 基础概率。</li>
</ul>
</li>
<li>
<h6 id="require-open-lid" tabindex="-1"><a class="header-anchor" href="#require-open-lid" aria-hidden="true">#</a> require-open-lid</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否仅当潜影贝处于打开状态时，所射出的子弹才有可能复制一个新的。</li>
</ul>
</li>
<li>
<h6 id="nearby-range" tabindex="-1"><a class="header-anchor" href="#nearby-range" aria-hidden="true">#</a> nearby-range</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 检查潜影贝最近的距离。</li>
</ul>
</li>
<li>
<h6 id="nearby-equation" tabindex="-1"><a class="header-anchor" href="#nearby-equation" aria-hidden="true">#</a> nearby-equation</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>(nearby - 1) / 5.0</code></li>
<li><strong>描述</strong>: 用于计算所射出的子弹生成新的潜影贝的方程式。（<code v-pre>nearby</code> 指附近的潜影贝实体数量）保留此项为空时即当附近有潜影贝时永远生成。</li>
</ul>
</li>
<li>
<h6 id="random-color" tabindex="-1"><a class="header-anchor" href="#random-color" aria-hidden="true">#</a> random-color</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 由子弹射出而生成的潜影贝是否应该有随机的颜色。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-34" tabindex="-1"><a class="header-anchor" href="#attributes-34" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-34" tabindex="-1"><a class="header-anchor" href="#max-health-34" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-33" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-33" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="horse" tabindex="-1"><a class="header-anchor" href="#horse" aria-hidden="true">#</a> horse</h4>
<ul>
<li>
<h5 id="ridable-in-water-37" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-37" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-35" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-35" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="stand-with-rider" tabindex="-1"><a class="header-anchor" href="#stand-with-rider" aria-hidden="true">#</a> stand-with-rider</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当前环境若有噪音时马（和骑手）是否应该站立不动。</li>
</ul>
</li>
<li>
<h5 id="stand-when-hurt" tabindex="-1"><a class="header-anchor" href="#stand-when-hurt" aria-hidden="true">#</a> stand-when-hurt</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 马在受伤时是否应该站立不动。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-12" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-12" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-35" tabindex="-1"><a class="header-anchor" href="#attributes-35" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-35" tabindex="-1"><a class="header-anchor" href="#max-health-35" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-4" tabindex="-1"><a class="header-anchor" href="#jump-strength-4" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.4</li>
<li><strong>描述</strong>: 最小跳跃高度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 最大跳跃高度属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-5" tabindex="-1"><a class="header-anchor" href="#movement-speed-5" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.1125</li>
<li><strong>描述</strong>: 最小移动速度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.3375</li>
<li><strong>描述</strong>: 最大移动速度属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-34" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-34" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="piglin" tabindex="-1"><a class="header-anchor" href="#piglin" aria-hidden="true">#</a> piglin</h4>
<ul>
<li>
<h5 id="ridable-36" tabindex="-1"><a class="header-anchor" href="#ridable-36" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-36" tabindex="-1"><a class="header-anchor" href="#controllable-36" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-38" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-38" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-36" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-36" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-13" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-13" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令猪灵绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="portal-spawn-modifier" tabindex="-1"><a class="header-anchor" href="#portal-spawn-modifier" aria-hidden="true">#</a> portal-spawn-modifier</h5>
<ul>
<li><strong>默认值</strong>: 2000</li>
<li><strong>描述</strong>: 是否应该更改猪灵在传送门上生成的概率，由世界难度决定。 <a href="https://github.com/PurpurMC/Purpur/blob/61fc0a557fc0eedececd63d44d43ce6431bc23bb/patches/server/0167-Piglin-portal-spawn-modifier.patch" target="_blank" rel="noopener noreferrer">在这里了解更多<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<h5 id="attributes-36" tabindex="-1"><a class="header-anchor" href="#attributes-36" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-36" tabindex="-1"><a class="header-anchor" href="#max-health-36" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 16.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-35" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-35" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="piglin-brute" tabindex="-1"><a class="header-anchor" href="#piglin-brute" aria-hidden="true">#</a> piglin_brute</h4>
<ul>
<li>
<h5 id="ridable-37" tabindex="-1"><a class="header-anchor" href="#ridable-37" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-37" tabindex="-1"><a class="header-anchor" href="#controllable-37" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-39" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-39" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-37" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-37" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-37" tabindex="-1"><a class="header-anchor" href="#attributes-37" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-37" tabindex="-1"><a class="header-anchor" href="#max-health-37" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 50.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-36" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-36" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="skeleton" tabindex="-1"><a class="header-anchor" href="#skeleton" aria-hidden="true">#</a> skeleton</h4>
<ul>
<li>
<h5 id="ridable-38" tabindex="-1"><a class="header-anchor" href="#ridable-38" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-38" tabindex="-1"><a class="header-anchor" href="#controllable-38" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-40" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-40" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-38" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-38" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-38" tabindex="-1"><a class="header-anchor" href="#attributes-38" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-38" tabindex="-1"><a class="header-anchor" href="#max-health-38" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="head-visibility-percent-1" tabindex="-1"><a class="header-anchor" href="#head-visibility-percent-1" aria-hidden="true">#</a> head-visibility-percent</h5>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-37" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-37" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
<li>
<h5 id="feed-wither-roses" tabindex="-1"><a class="header-anchor" href="#feed-wither-roses" aria-hidden="true">#</a> feed-wither-roses</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 当手持凋零玫瑰时右键骷髅是否会将其转换为凋零骷髅。此值为需要拿多少凋零玫瑰才能转换骷髅，设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h5 id="bow-accuracy" tabindex="-1"><a class="header-anchor" href="#bow-accuracy" aria-hidden="true">#</a> bow-accuracy</h5>
<ul>
<li><strong>默认值</strong>: 14 - difficulty * 4</li>
<li><strong>描述</strong>: 更改骷髅射箭的精准度。散度(spread)作为公式的结果。此值越高，越不精准。<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">简单</span><span class="token punctuation">:</span>   14 <span class="token punctuation">-</span> 1 * 4 = 10
<span class="token key atrule">普通</span><span class="token punctuation">:</span> 14 <span class="token punctuation">-</span> 2 * 4 = 6
<span class="token key atrule">困难</span><span class="token punctuation">:</span>   14 <span class="token punctuation">-</span> 3 * 4 = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="stray" tabindex="-1"><a class="header-anchor" href="#stray" aria-hidden="true">#</a> stray</h4>
<ul>
<li>
<h5 id="ridable-39" tabindex="-1"><a class="header-anchor" href="#ridable-39" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-39" tabindex="-1"><a class="header-anchor" href="#controllable-39" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-41" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-41" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-39" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-39" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-39" tabindex="-1"><a class="header-anchor" href="#attributes-39" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-39" tabindex="-1"><a class="header-anchor" href="#max-health-39" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-38" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-38" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="goat" tabindex="-1"><a class="header-anchor" href="#goat" aria-hidden="true">#</a> goat</h4>
<ul>
<li>
<h5 id="ridable-40" tabindex="-1"><a class="header-anchor" href="#ridable-40" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-40" tabindex="-1"><a class="header-anchor" href="#controllable-40" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-42" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-42" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-40" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-40" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-13" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-13" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-40" tabindex="-1"><a class="header-anchor" href="#attributes-40" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-40" tabindex="-1"><a class="header-anchor" href="#max-health-40" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-39" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-39" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="panda" tabindex="-1"><a class="header-anchor" href="#panda" aria-hidden="true">#</a> panda</h4>
<ul>
<li>
<h5 id="ridable-41" tabindex="-1"><a class="header-anchor" href="#ridable-41" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-41" tabindex="-1"><a class="header-anchor" href="#controllable-41" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-43" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-43" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-41" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-41" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-14" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-14" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-41" tabindex="-1"><a class="header-anchor" href="#attributes-41" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-41" tabindex="-1"><a class="header-anchor" href="#max-health-41" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-40" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-40" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="strider" tabindex="-1"><a class="header-anchor" href="#strider" aria-hidden="true">#</a> strider</h4>
<ul>
<li>
<h5 id="ridable-42" tabindex="-1"><a class="header-anchor" href="#ridable-42" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-42" tabindex="-1"><a class="header-anchor" href="#controllable-42" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-44" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-44" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="give-saddle-back" tabindex="-1"><a class="header-anchor" href="#give-saddle-back" aria-hidden="true">#</a> give-saddle-back</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时，潜行并右键带有鞍的炽足兽时可以卸下鞍。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-15" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-15" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-42" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-42" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 令此生物不再在水中受到伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-42" tabindex="-1"><a class="header-anchor" href="#attributes-42" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-42" tabindex="-1"><a class="header-anchor" href="#max-health-42" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-41" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-41" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="rabbit" tabindex="-1"><a class="header-anchor" href="#rabbit" aria-hidden="true">#</a> rabbit</h4>
<ul>
<li>
<h5 id="takes-damage-from-water-43" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-43" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="spawn-killer-rabbit-chance" tabindex="-1"><a class="header-anchor" href="#spawn-killer-rabbit-chance" aria-hidden="true">#</a> spawn-killer-rabbit-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 杀手兔自然生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h5 id="spawn-toast-chance" tabindex="-1"><a class="header-anchor" href="#spawn-toast-chance" aria-hidden="true">#</a> spawn-toast-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 自然生成叫做Toast的兔子的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-16" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-16" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-14" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-14" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令兔子绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-43" tabindex="-1"><a class="header-anchor" href="#attributes-43" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-43" tabindex="-1"><a class="header-anchor" href="#max-health-43" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-42" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-42" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="husk" tabindex="-1"><a class="header-anchor" href="#husk" aria-hidden="true">#</a> husk</h4>
<ul>
<li>
<h5 id="ridable-43" tabindex="-1"><a class="header-anchor" href="#ridable-43" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-43" tabindex="-1"><a class="header-anchor" href="#controllable-43" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-45" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-45" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-44" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-44" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="jockey-3" tabindex="-1"><a class="header-anchor" href="#jockey-3" aria-hidden="true">#</a> jockey</h5>
<ul>
<li>
<h6 id="only-babies-3" tabindex="-1"><a class="header-anchor" href="#only-babies-3" aria-hidden="true">#</a> only-babies</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否只允许幼年才能骑乘鸡。</li>
</ul>
</li>
<li>
<h6 id="chance-4" tabindex="-1"><a class="header-anchor" href="#chance-4" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成鸡骑士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="try-existing-chickens-3" tabindex="-1"><a class="header-anchor" href="#try-existing-chickens-3" aria-hidden="true">#</a> try-existing-chickens</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在生成时是否要扫描已有的鸡。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-44" tabindex="-1"><a class="header-anchor" href="#attributes-44" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-44" tabindex="-1"><a class="header-anchor" href="#max-health-44" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="spawn-reinforcements-3" tabindex="-1"><a class="header-anchor" href="#spawn-reinforcements-3" aria-hidden="true">#</a> spawn_reinforcements</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 额外生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-43" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-43" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="spider" tabindex="-1"><a class="header-anchor" href="#spider" aria-hidden="true">#</a> spider</h4>
<ul>
<li>
<h5 id="ridable-44" tabindex="-1"><a class="header-anchor" href="#ridable-44" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-44" tabindex="-1"><a class="header-anchor" href="#controllable-44" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-46" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-46" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-45" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-45" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h4 id="can-climb-world-border" tabindex="-1"><a class="header-anchor" href="#can-climb-world-border" aria-hidden="true">#</a> can-climb-world-border</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 将阻止蜘蛛攀爬世界边界。</li>
</ul>
</li>
<li>
<h5 id="attributes-45" tabindex="-1"><a class="header-anchor" href="#attributes-45" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-45" tabindex="-1"><a class="header-anchor" href="#max-health-45" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 16.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-44" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-44" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="sheep" tabindex="-1"><a class="header-anchor" href="#sheep" aria-hidden="true">#</a> sheep</h4>
<ul>
<li>
<h5 id="ridable-45" tabindex="-1"><a class="header-anchor" href="#ridable-45" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-45" tabindex="-1"><a class="header-anchor" href="#controllable-45" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-47" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-47" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-46" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-46" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-17" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-17" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-15" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-15" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令绵羊绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-46" tabindex="-1"><a class="header-anchor" href="#attributes-46" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-46" tabindex="-1"><a class="header-anchor" href="#max-health-46" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 8.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="jeb-shear-random-color" tabindex="-1"><a class="header-anchor" href="#jeb-shear-random-color" aria-hidden="true">#</a> jeb-shear-random-color</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当剪重命名为 jeb_ 的绵羊时是否要掉落随机方块。</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-45" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-45" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="ravager" tabindex="-1"><a class="header-anchor" href="#ravager" aria-hidden="true">#</a> ravager</h4>
<ul>
<li>
<h5 id="ridable-46" tabindex="-1"><a class="header-anchor" href="#ridable-46" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-46" tabindex="-1"><a class="header-anchor" href="#controllable-46" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-48" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-48" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-47" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-47" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-16" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-16" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令劫掠兽绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="griefable-blocks" tabindex="-1"><a class="header-anchor" href="#griefable-blocks" aria-hidden="true">#</a> griefable-blocks</h5>
<ul>
<li><strong>默认值</strong>:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>oak_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>spruce_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>birch_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>jungle_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>acacia_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>dark_oak_leaves
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>beetroots
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>carrots
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>potatoes
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>wheat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 可被掠夺兽破坏的方块列表。</li>
</ul>
</li>
<li>
<h5 id="attributes-47" tabindex="-1"><a class="header-anchor" href="#attributes-47" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-47" tabindex="-1"><a class="header-anchor" href="#max-health-47" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 100.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-46" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-46" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="pig" tabindex="-1"><a class="header-anchor" href="#pig" aria-hidden="true">#</a> pig</h4>
<ul>
<li>
<h5 id="ridable-47" tabindex="-1"><a class="header-anchor" href="#ridable-47" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-47" tabindex="-1"><a class="header-anchor" href="#controllable-47" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-49" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-49" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-48" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-48" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="give-saddle-back-1" tabindex="-1"><a class="header-anchor" href="#give-saddle-back-1" aria-hidden="true">#</a> give-saddle-back</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时，潜行并右键带有鞍的猪时可以卸下鞍。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-18" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-18" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-48" tabindex="-1"><a class="header-anchor" href="#attributes-48" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-48" tabindex="-1"><a class="header-anchor" href="#max-health-48" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-47" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-47" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="witch" tabindex="-1"><a class="header-anchor" href="#witch" aria-hidden="true">#</a> witch</h4>
<ul>
<li>
<h5 id="ridable-48" tabindex="-1"><a class="header-anchor" href="#ridable-48" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-48" tabindex="-1"><a class="header-anchor" href="#controllable-48" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-50" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-50" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-49" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-49" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-49" tabindex="-1"><a class="header-anchor" href="#attributes-49" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-49" tabindex="-1"><a class="header-anchor" href="#max-health-49" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 26.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-48" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-48" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="zombie" tabindex="-1"><a class="header-anchor" href="#zombie" aria-hidden="true">#</a> zombie</h4>
<ul>
<li>
<h5 id="ridable-49" tabindex="-1"><a class="header-anchor" href="#ridable-49" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-49" tabindex="-1"><a class="header-anchor" href="#controllable-49" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-51" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-51" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-50" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-50" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="jockey-4" tabindex="-1"><a class="header-anchor" href="#jockey-4" aria-hidden="true">#</a> jockey</h5>
<ul>
<li>
<h6 id="only-babies-4" tabindex="-1"><a class="header-anchor" href="#only-babies-4" aria-hidden="true">#</a> only-babies</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否只允许幼年才能骑乘鸡。</li>
</ul>
</li>
<li>
<h6 id="chance-5" tabindex="-1"><a class="header-anchor" href="#chance-5" aria-hidden="true">#</a> chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成鸡骑士的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h6 id="try-existing-chickens-4" tabindex="-1"><a class="header-anchor" href="#try-existing-chickens-4" aria-hidden="true">#</a> try-existing-chickens</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 在生成时是否要扫描已有的鸡。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="aggressive-towards-villager-when-lagging" tabindex="-1"><a class="header-anchor" href="#aggressive-towards-villager-when-lagging" aria-hidden="true">#</a> aggressive-towards-villager-when-lagging</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当出现延迟时是否要暂时令僵尸不会主动攻击村民。</li>
</ul>
</li>
<li>
<h5 id="bypass-mob-griefing-17" tabindex="-1"><a class="header-anchor" href="#bypass-mob-griefing-17" aria-hidden="true">#</a> bypass-mob-griefing</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令僵尸绕过 mob griefing 游戏规则</li>
</ul>
</li>
<li>
<h5 id="attributes-50" tabindex="-1"><a class="header-anchor" href="#attributes-50" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-50" tabindex="-1"><a class="header-anchor" href="#max-health-50" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
<li>
<h6 id="spawn-reinforcements-4" tabindex="-1"><a class="header-anchor" href="#spawn-reinforcements-4" aria-hidden="true">#</a> spawn_reinforcements</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 额外生成的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="head-visibility-percent-2" tabindex="-1"><a class="header-anchor" href="#head-visibility-percent-2" aria-hidden="true">#</a> head-visibility-percent</h5>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 当玩家头戴相应的头颅时是否要相应地增大（或减小）怪物检测其的范围。</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-49" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-49" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="dolphin" tabindex="-1"><a class="header-anchor" href="#dolphin" aria-hidden="true">#</a> dolphin</h4>
<ul>
<li>
<h5 id="ridable-50" tabindex="-1"><a class="header-anchor" href="#ridable-50" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-50" tabindex="-1"><a class="header-anchor" href="#controllable-50" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-51" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-51" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="naturally-aggressive-to-players-chance" tabindex="-1"><a class="header-anchor" href="#naturally-aggressive-to-players-chance" aria-hidden="true">#</a> naturally-aggressive-to-players-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 此生物在生成时默认为敌对生物的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
<li>
<h5 id="disable-treasure-searching" tabindex="-1"><a class="header-anchor" href="#disable-treasure-searching" aria-hidden="true">#</a> disable-treasure-searching</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要禁止海豚寻找宝藏。</li>
</ul>
</li>
<li>
<h5 id="spit" tabindex="-1"><a class="header-anchor" href="#spit" aria-hidden="true">#</a> spit</h5>
<ul>
<li>
<h6 id="cooldown" tabindex="-1"><a class="header-anchor" href="#cooldown" aria-hidden="true">#</a> cooldown</h6>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 海豚攻击间隔。</li>
</ul>
</li>
<li>
<h6 id="speed-1" tabindex="-1"><a class="header-anchor" href="#speed-1" aria-hidden="true">#</a> speed</h6>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 海豚攻击速度。</li>
</ul>
</li>
<li>
<h6 id="damage-2" tabindex="-1"><a class="header-anchor" href="#damage-2" aria-hidden="true">#</a> damage</h6>
<ul>
<li><strong>默认值</strong>: 2.0</li>
<li><strong>描述</strong>: 海豚攻击伤害。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="attributes-51" tabindex="-1"><a class="header-anchor" href="#attributes-51" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-51" tabindex="-1"><a class="header-anchor" href="#max-health-51" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-50" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-50" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="axolotl" tabindex="-1"><a class="header-anchor" href="#axolotl" aria-hidden="true">#</a> axolotl</h4>
<ul>
<li>
<h5 id="ridable-51" tabindex="-1"><a class="header-anchor" href="#ridable-51" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-51" tabindex="-1"><a class="header-anchor" href="#controllable-51" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-52" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-52" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-19" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-19" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-52" tabindex="-1"><a class="header-anchor" href="#attributes-52" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-52" tabindex="-1"><a class="header-anchor" href="#max-health-52" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 14.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-51" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-51" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="bat" tabindex="-1"><a class="header-anchor" href="#bat" aria-hidden="true">#</a> bat</h4>
<ul>
<li>
<h5 id="ridable-52" tabindex="-1"><a class="header-anchor" href="#ridable-52" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-52" tabindex="-1"><a class="header-anchor" href="#controllable-52" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-52" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-52" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-53" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-53" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-2" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-2" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="attributes-53" tabindex="-1"><a class="header-anchor" href="#attributes-53" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-53" tabindex="-1"><a class="header-anchor" href="#max-health-53" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 6.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-52" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-52" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="bee" tabindex="-1"><a class="header-anchor" href="#bee" aria-hidden="true">#</a> bee</h4>
<ul>
<li>
<h5 id="ridable-53" tabindex="-1"><a class="header-anchor" href="#ridable-53" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-53" tabindex="-1"><a class="header-anchor" href="#controllable-53" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-53" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-53" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-54" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-54" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-3" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-3" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-20" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-20" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="can-work-at-night" tabindex="-1"><a class="header-anchor" href="#can-work-at-night" aria-hidden="true">#</a> can-work-at-night</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 蜜蜂在夜晚时是否要工作。</li>
</ul>
</li>
<li>
<h5 id="can-work-in-rain" tabindex="-1"><a class="header-anchor" href="#can-work-in-rain" aria-hidden="true">#</a> can-work-in-rain</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 蜜蜂在雨天时是否要工作。</li>
</ul>
</li>
<li>
<h5 id="dies-after-sting" tabindex="-1"><a class="header-anchor" href="#dies-after-sting" aria-hidden="true">#</a> dies-after-sting</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 蜜蜂在蜇人后时是否会死去。</li>
</ul>
</li>
<li>
<h5 id="attributes-54" tabindex="-1"><a class="header-anchor" href="#attributes-54" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-54" tabindex="-1"><a class="header-anchor" href="#max-health-54" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-53" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-53" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="blaze" tabindex="-1"><a class="header-anchor" href="#blaze" aria-hidden="true">#</a> blaze</h4>
<ul>
<li>
<h5 id="ridable-54" tabindex="-1"><a class="header-anchor" href="#ridable-54" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-54" tabindex="-1"><a class="header-anchor" href="#controllable-54" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-54" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-54" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-4" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-4" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-55" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-55" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 令此生物不再在水中受到伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-55" tabindex="-1"><a class="header-anchor" href="#attributes-55" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-55" tabindex="-1"><a class="header-anchor" href="#max-health-55" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 20.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-54" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-54" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h4>
<ul>
<li>
<h5 id="ridable-55" tabindex="-1"><a class="header-anchor" href="#ridable-55" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-55" tabindex="-1"><a class="header-anchor" href="#controllable-55" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-55" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-55" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-56" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-56" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="default-collar-color-1" tabindex="-1"><a class="header-anchor" href="#default-collar-color-1" aria-hidden="true">#</a> default-collar-color</h5>
<ul>
<li><strong>默认值</strong>: red</li>
<li><strong>描述</strong>: 当猫被驯服时默认项圈的颜色。 <a href="https://purpurmc.org/javadoc/org/bukkit/Color.html" target="_blank" rel="noopener noreferrer">可用颜色<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<h5 id="spawn-delay" tabindex="-1"><a class="header-anchor" href="#spawn-delay" aria-hidden="true">#</a> spawn-delay</h5>
<ul>
<li><strong>默认值</strong>: 1200</li>
<li><strong>描述</strong>: 尝试自然生成猫两次的Tick间隔</li>
</ul>
</li>
<li>
<h5 id="scan-range-for-other-cats" tabindex="-1"><a class="header-anchor" href="#scan-range-for-other-cats" aria-hidden="true">#</a> scan-range-for-other-cats</h5>
<ul>
<li>
<h6 id="swamp-hut" tabindex="-1"><a class="header-anchor" href="#swamp-hut" aria-hidden="true">#</a> swamp-hut</h6>
<ul>
<li><strong>默认值</strong>: 16</li>
<li><strong>描述</strong>: 如果在该范围内找到了其它猫，则不会再生成一只新的猫。设定为 0 禁用。</li>
</ul>
</li>
<li>
<h6 id="village" tabindex="-1"><a class="header-anchor" href="#village" aria-hidden="true">#</a> village</h6>
<ul>
<li><strong>默认值</strong>: 48</li>
<li><strong>描述</strong>: 如果在该范围内找到了其它猫，则不会再生成一只新的猫。设定为 0 禁用。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-21" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-21" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-56" tabindex="-1"><a class="header-anchor" href="#attributes-56" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-56" tabindex="-1"><a class="header-anchor" href="#max-health-56" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-55" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-55" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="cod" tabindex="-1"><a class="header-anchor" href="#cod" aria-hidden="true">#</a> cod</h4>
<ul>
<li>
<h5 id="ridable-56" tabindex="-1"><a class="header-anchor" href="#ridable-56" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-56" tabindex="-1"><a class="header-anchor" href="#controllable-56" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-57" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-57" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-57" tabindex="-1"><a class="header-anchor" href="#attributes-57" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-57" tabindex="-1"><a class="header-anchor" href="#max-health-57" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-56" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-56" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="elder-guardian" tabindex="-1"><a class="header-anchor" href="#elder-guardian" aria-hidden="true">#</a> elder_guardian</h4>
<ul>
<li>
<h5 id="ridable-57" tabindex="-1"><a class="header-anchor" href="#ridable-57" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-57" tabindex="-1"><a class="header-anchor" href="#controllable-57" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-58" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-58" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-58" tabindex="-1"><a class="header-anchor" href="#attributes-58" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-58" tabindex="-1"><a class="header-anchor" href="#max-health-58" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 80.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-57" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-57" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="ghast" tabindex="-1"><a class="header-anchor" href="#ghast" aria-hidden="true">#</a> ghast</h4>
<ul>
<li>
<h5 id="ridable-58" tabindex="-1"><a class="header-anchor" href="#ridable-58" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-58" tabindex="-1"><a class="header-anchor" href="#controllable-58" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-56" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-56" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-59" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-59" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-5" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-5" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="allow-griefing-3" tabindex="-1"><a class="header-anchor" href="#allow-griefing-3" aria-hidden="true">#</a> allow-griefing</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 防止恶魂破坏方块。</li>
</ul>
</li>
<li>
<h5 id="attributes-59" tabindex="-1"><a class="header-anchor" href="#attributes-59" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-59" tabindex="-1"><a class="header-anchor" href="#max-health-59" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 10.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-58" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-58" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="guardian" tabindex="-1"><a class="header-anchor" href="#guardian" aria-hidden="true">#</a> guardian</h4>
<ul>
<li>
<h5 id="ridable-59" tabindex="-1"><a class="header-anchor" href="#ridable-59" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-59" tabindex="-1"><a class="header-anchor" href="#controllable-59" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-60" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-60" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-60" tabindex="-1"><a class="header-anchor" href="#attributes-60" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-60" tabindex="-1"><a class="header-anchor" href="#max-health-60" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-59" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-59" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="illusioner" tabindex="-1"><a class="header-anchor" href="#illusioner" aria-hidden="true">#</a> illusioner</h4>
<ul>
<li>
<h5 id="ridable-60" tabindex="-1"><a class="header-anchor" href="#ridable-60" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-60" tabindex="-1"><a class="header-anchor" href="#controllable-60" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-57" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-57" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-61" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-61" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="naturally-spawn" tabindex="-1"><a class="header-anchor" href="#naturally-spawn" aria-hidden="true">#</a> naturally-spawn</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定幻术师是否会自然生成。</li>
</ul>
</li>
<li>
<h5 id="movement-speed-6" tabindex="-1"><a class="header-anchor" href="#movement-speed-6" aria-hidden="true">#</a> movement-speed</h5>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 移动速度属性</li>
</ul>
</li>
<li>
<h5 id="follow-range" tabindex="-1"><a class="header-anchor" href="#follow-range" aria-hidden="true">#</a> follow-range</h5>
<ul>
<li><strong>默认值</strong>: 18.0</li>
<li><strong>描述</strong>: 跟踪距离属性。</li>
</ul>
</li>
<li>
<h5 id="attributes-61" tabindex="-1"><a class="header-anchor" href="#attributes-61" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-61" tabindex="-1"><a class="header-anchor" href="#max-health-61" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 32.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-60" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-60" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="iron-golem" tabindex="-1"><a class="header-anchor" href="#iron-golem" aria-hidden="true">#</a> iron_golem</h4>
<ul>
<li>
<h5 id="ridable-61" tabindex="-1"><a class="header-anchor" href="#ridable-61" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-61" tabindex="-1"><a class="header-anchor" href="#controllable-61" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="healing-calms-anger" tabindex="-1"><a class="header-anchor" href="#healing-calms-anger" aria-hidden="true">#</a> healing-calms-anger</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 若激怒铁傀儡，修复铁傀儡是否能令它冷静下来。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-58" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-58" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-62" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-62" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="can-spawn-in-air" tabindex="-1"><a class="header-anchor" href="#can-spawn-in-air" aria-hidden="true">#</a> can-spawn-in-air</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定铁傀儡能否在空中生成，就如同在1.12和更低版本一样。</li>
</ul>
</li>
<li>
<h5 id="can-swim-1" tabindex="-1"><a class="header-anchor" href="#can-swim-1" aria-hidden="true">#</a> can-swim</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定铁傀儡能否游泳。</li>
</ul>
</li>
<li>
<h5 id="poppy-calms-anger" tabindex="-1"><a class="header-anchor" href="#poppy-calms-anger" aria-hidden="true">#</a> poppy-calms-anger</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 若激怒铁傀儡，给它一朵虞美人是否能令它冷静下来。</li>
</ul>
</li>
<li>
<h5 id="attributes-62" tabindex="-1"><a class="header-anchor" href="#attributes-62" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-62" tabindex="-1"><a class="header-anchor" href="#max-health-62" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 100.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-61" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-61" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="llama" tabindex="-1"><a class="header-anchor" href="#llama" aria-hidden="true">#</a> llama</h4>
<ul>
<li>
<h5 id="ridable-62" tabindex="-1"><a class="header-anchor" href="#ridable-62" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-62" tabindex="-1"><a class="header-anchor" href="#controllable-62" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动，羊驼必须被驯服和放置鞍（地毯）才可以使用WASD控制移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-59" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-59" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-63" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-63" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-22" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-22" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="join-caravans" tabindex="-1"><a class="header-anchor" href="#join-caravans" aria-hidden="true">#</a> join-caravans</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁用 <a href="https://minecraft.gamepedia.com/Llama#Leading" target="_blank" rel="noopener noreferrer">llama caravan feature<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<h5 id="attributes-63" tabindex="-1"><a class="header-anchor" href="#attributes-63" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-63" tabindex="-1"><a class="header-anchor" href="#max-health-63" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-5" tabindex="-1"><a class="header-anchor" href="#jump-strength-5" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最小跳跃高度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最大跳跃高度属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-7" tabindex="-1"><a class="header-anchor" href="#movement-speed-7" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最小移动速度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最大移动速度属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-62" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-62" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="trader-llama" tabindex="-1"><a class="header-anchor" href="#trader-llama" aria-hidden="true">#</a> trader_llama</h4>
<ul>
<li>
<h5 id="ridable-63" tabindex="-1"><a class="header-anchor" href="#ridable-63" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-63" tabindex="-1"><a class="header-anchor" href="#controllable-63" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动，羊驼必须被驯服才可以使用WASD控制移动。不过鞍（地毯）不是必需的，因为是生成时应该自带地毯。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-60" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-60" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-64" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-64" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-23" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-23" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-64" tabindex="-1"><a class="header-anchor" href="#attributes-64" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-64" tabindex="-1"><a class="header-anchor" href="#max-health-64" aria-hidden="true">#</a> max_health</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 15.0</li>
<li><strong>描述</strong>: 最小生命属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="jump-strength-6" tabindex="-1"><a class="header-anchor" href="#jump-strength-6" aria-hidden="true">#</a> jump_strength</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最小跳跃高度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 最大跳跃高度属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h6 id="movement-speed-8" tabindex="-1"><a class="header-anchor" href="#movement-speed-8" aria-hidden="true">#</a> movement_speed</h6>
<ul>
<li>min
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最小移动速度属性</li>
</ul>
</li>
<li>max
<ul>
<li><strong>默认值</strong>: 0.175</li>
<li><strong>描述</strong>: 最大移动速度属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-63" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-63" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="magma-cube" tabindex="-1"><a class="header-anchor" href="#magma-cube" aria-hidden="true">#</a> magma_cube</h4>
<ul>
<li>
<h5 id="ridable-64" tabindex="-1"><a class="header-anchor" href="#ridable-64" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-64" tabindex="-1"><a class="header-anchor" href="#controllable-64" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-61" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-61" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-65" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-65" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-65" tabindex="-1"><a class="header-anchor" href="#attributes-65" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-65" tabindex="-1"><a class="header-anchor" href="#max-health-65" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: &quot;size * size&quot;</li>
<li><strong>描述</strong>: 用于计算最大生命值的计算公式。</li>
</ul>
</li>
<li>
<h6 id="attack-damage-2" tabindex="-1"><a class="header-anchor" href="#attack-damage-2" aria-hidden="true">#</a> attack_damage</h6>
<ul>
<li><strong>默认值</strong>: &quot;size&quot;</li>
<li><strong>描述</strong>: 设定岩浆怪的基础伤害。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-64" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-64" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="parrot" tabindex="-1"><a class="header-anchor" href="#parrot" aria-hidden="true">#</a> parrot</h4>
<ul>
<li>
<h5 id="ridable-65" tabindex="-1"><a class="header-anchor" href="#ridable-65" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-65" tabindex="-1"><a class="header-anchor" href="#controllable-65" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-62" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-62" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-66" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-66" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-6" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-6" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="can-breed-1" tabindex="-1"><a class="header-anchor" href="#can-breed-1" aria-hidden="true">#</a> can-breed</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否可以用任何种类的种子繁殖鹦鹉（幼年鹦鹉不算在内 D:, 所以得强调是“成年”鹦鹉）</li>
</ul>
</li>
<li>
<h5 id="attributes-66" tabindex="-1"><a class="header-anchor" href="#attributes-66" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-66" tabindex="-1"><a class="header-anchor" href="#max-health-66" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 6.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-65" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-65" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="pufferfish" tabindex="-1"><a class="header-anchor" href="#pufferfish" aria-hidden="true">#</a> pufferfish</h4>
<ul>
<li>
<h5 id="ridable-66" tabindex="-1"><a class="header-anchor" href="#ridable-66" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-66" tabindex="-1"><a class="header-anchor" href="#controllable-66" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-67" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-67" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-67" tabindex="-1"><a class="header-anchor" href="#attributes-67" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-67" tabindex="-1"><a class="header-anchor" href="#max-health-67" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-66" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-66" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="salmon" tabindex="-1"><a class="header-anchor" href="#salmon" aria-hidden="true">#</a> salmon</h4>
<ul>
<li>
<h5 id="ridable-67" tabindex="-1"><a class="header-anchor" href="#ridable-67" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-67" tabindex="-1"><a class="header-anchor" href="#controllable-67" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-68" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-68" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-68" tabindex="-1"><a class="header-anchor" href="#attributes-68" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-68" tabindex="-1"><a class="header-anchor" href="#max-health-68" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-67" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-67" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="slime" tabindex="-1"><a class="header-anchor" href="#slime" aria-hidden="true">#</a> slime</h4>
<ul>
<li>
<h5 id="ridable-68" tabindex="-1"><a class="header-anchor" href="#ridable-68" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-68" tabindex="-1"><a class="header-anchor" href="#controllable-68" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-69" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-69" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-63" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-63" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="attributes-69" tabindex="-1"><a class="header-anchor" href="#attributes-69" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-69" tabindex="-1"><a class="header-anchor" href="#max-health-69" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: &quot;size * size&quot;</li>
<li><strong>描述</strong>: 用于计算最大生命值的计算公式。</li>
</ul>
</li>
<li>
<h6 id="attack-damage-3" tabindex="-1"><a class="header-anchor" href="#attack-damage-3" aria-hidden="true">#</a> attack_damage</h6>
<ul>
<li><strong>默认值</strong>: &quot;size&quot;</li>
<li><strong>描述</strong>: 设定史莱姆的基础伤害。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-68" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-68" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="tropical-fish" tabindex="-1"><a class="header-anchor" href="#tropical-fish" aria-hidden="true">#</a> tropical_fish</h4>
<ul>
<li>
<h5 id="ridable-69" tabindex="-1"><a class="header-anchor" href="#ridable-69" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-69" tabindex="-1"><a class="header-anchor" href="#controllable-69" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-70" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-70" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="attributes-70" tabindex="-1"><a class="header-anchor" href="#attributes-70" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-70" tabindex="-1"><a class="header-anchor" href="#max-health-70" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 3.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-69" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-69" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="turtle" tabindex="-1"><a class="header-anchor" href="#turtle" aria-hidden="true">#</a> turtle</h4>
<ul>
<li>
<h5 id="ridable-70" tabindex="-1"><a class="header-anchor" href="#ridable-70" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-70" tabindex="-1"><a class="header-anchor" href="#controllable-70" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-64" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-64" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-71" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-71" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="breeding-delay-ticks-24" tabindex="-1"><a class="header-anchor" href="#breeding-delay-ticks-24" aria-hidden="true">#</a> breeding-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 6000</li>
<li><strong>描述</strong>: 在繁殖之前需要等待的Tick数量。</li>
</ul>
</li>
<li>
<h5 id="attributes-71" tabindex="-1"><a class="header-anchor" href="#attributes-71" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-71" tabindex="-1"><a class="header-anchor" href="#max-health-71" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 30.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-70" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-70" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h4 id="vex" tabindex="-1"><a class="header-anchor" href="#vex" aria-hidden="true">#</a> vex</h4>
<ul>
<li>
<h5 id="ridable-71" tabindex="-1"><a class="header-anchor" href="#ridable-71" aria-hidden="true">#</a> ridable</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可骑乘。</li>
</ul>
</li>
<li>
<h5 id="controllable-71" tabindex="-1"><a class="header-anchor" href="#controllable-71" aria-hidden="true">#</a> controllable</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否可以使用WASD控制此生物移动。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-65" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-65" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要令此生物可在水中骑乘（不会驱逐玩家）</li>
</ul>
</li>
<li>
<h5 id="takes-damage-from-water-72" tabindex="-1"><a class="header-anchor" href="#takes-damage-from-water-72" aria-hidden="true">#</a> takes-damage-from-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 即当此生物处于水中时令其造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ridable-max-y-7" tabindex="-1"><a class="header-anchor" href="#ridable-max-y-7" aria-hidden="true">#</a> ridable-max-y</h5>
<ul>
<li><strong>默认值</strong>: 256</li>
<li><strong>描述</strong>: 当骑乘时此生物可以飞行的最大高度</li>
</ul>
</li>
<li>
<h5 id="attributes-72" tabindex="-1"><a class="header-anchor" href="#attributes-72" aria-hidden="true">#</a> attributes</h5>
<ul>
<li>
<h6 id="max-health-72" tabindex="-1"><a class="header-anchor" href="#max-health-72" aria-hidden="true">#</a> max_health</h6>
<ul>
<li><strong>默认值</strong>: 14.0</li>
<li><strong>描述</strong>: 最大生命属性</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="always-drop-exp-71" tabindex="-1"><a class="header-anchor" href="#always-drop-exp-71" aria-hidden="true">#</a> always-drop-exp</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 令生物永远掉落经验值。</li>
</ul>
</li>
</ul>
<h3 id="gameplay-mechanics" tabindex="-1"><a class="header-anchor" href="#gameplay-mechanics" aria-hidden="true">#</a> gameplay-mechanics</h3>
<h4 id="arrow" tabindex="-1"><a class="header-anchor" href="#arrow" aria-hidden="true">#</a> arrow</h4>
<ul>
<li>
<h5 id="movement-resets-despawn-counter" tabindex="-1"><a class="header-anchor" href="#movement-resets-despawn-counter" aria-hidden="true">#</a> movement-resets-despawn-counter</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定此值为 false 以禁止箭矢永远可用 (比如箭矢卡入的方块被移除, 活塞移动之类)</li>
</ul>
</li>
</ul>
<h4 id="use-better-mending" tabindex="-1"><a class="header-anchor" href="#use-better-mending" aria-hidden="true">#</a> use-better-mending</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令经验修补附魔优先修补受损最严重的盔甲。</li>
</ul>
<h4 id="mobs-ignore-rails" tabindex="-1"><a class="header-anchor" href="#mobs-ignore-rails" aria-hidden="true">#</a> mobs-ignore-rails</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以允许生物走过铁轨。</li>
</ul>
<h4 id="rain-stops-after-sleep" tabindex="-1"><a class="header-anchor" href="#rain-stops-after-sleep" aria-hidden="true">#</a> rain-stops-after-sleep</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 令玩家在醒来时依旧在下雨。</li>
</ul>
<h4 id="thunder-stops-after-sleep" tabindex="-1"><a class="header-anchor" href="#thunder-stops-after-sleep" aria-hidden="true">#</a> thunder-stops-after-sleep</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: S设定为 false 令玩家在醒来时依旧在打雷。</li>
</ul>
<h4 id="mob-last-hurt-by-player-time" tabindex="-1"><a class="header-anchor" href="#mob-last-hurt-by-player-time" aria-hidden="true">#</a> mob-last-hurt-by-player-time</h4>
<ul>
<li><strong>默认值</strong>: 100</li>
<li><strong>描述</strong>: 扩大当玩家攻击生物多少Ticks后死亡应当计算为被玩家所击杀（弹射物或直接攻击）。</li>
</ul>
<h4 id="halloween" tabindex="-1"><a class="header-anchor" href="#halloween" aria-hidden="true">#</a> halloween</h4>
<ul>
<li>
<h5 id="force" tabindex="-1"><a class="header-anchor" href="#force" aria-hidden="true">#</a> force</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 令世界强行处于万圣节。</li>
</ul>
</li>
<li>
<h5 id="head-chance" tabindex="-1"><a class="header-anchor" href="#head-chance" aria-hidden="true">#</a> head-chance</h5>
<ul>
<li><strong>默认值</strong>: 0.25</li>
<li><strong>描述</strong>: 设定僵尸或骷髅在生成时默认佩戴南瓜灯的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
<h4 id="mob-effects" tabindex="-1"><a class="header-anchor" href="#mob-effects" aria-hidden="true">#</a> mob-effects</h4>
<ul>
<li>
<h5 id="health-regen-amount-1" tabindex="-1"><a class="header-anchor" href="#health-regen-amount-1" aria-hidden="true">#</a> health-regen-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
<li>
<h5 id="minimal-health-poison-amount" tabindex="-1"><a class="header-anchor" href="#minimal-health-poison-amount" aria-hidden="true">#</a> minimal-health-poison-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
<li>
<h5 id="poison-degeneration-amount" tabindex="-1"><a class="header-anchor" href="#poison-degeneration-amount" aria-hidden="true">#</a> poison-degeneration-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
<li>
<h5 id="wither-degeneration-amount" tabindex="-1"><a class="header-anchor" href="#wither-degeneration-amount" aria-hidden="true">#</a> wither-degeneration-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
<li>
<h5 id="hunger-exhaustion-amount" tabindex="-1"><a class="header-anchor" href="#hunger-exhaustion-amount" aria-hidden="true">#</a> hunger-exhaustion-amount</h5>
<ul>
<li><strong>默认值</strong>: 0.005</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
<li>
<h5 id="saturation-regen-amount" tabindex="-1"><a class="header-anchor" href="#saturation-regen-amount" aria-hidden="true">#</a> saturation-regen-amount</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 设定此项应当影响的实体数量</li>
</ul>
</li>
</ul>
<h4 id="projectiles-bypass-mob-griefing" tabindex="-1"><a class="header-anchor" href="#projectiles-bypass-mob-griefing" aria-hidden="true">#</a> projectiles-bypass-mob-griefing</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令弹射物绕过 mob griefing 游戏规则</li>
</ul>
<h4 id="projectile-offset" tabindex="-1"><a class="header-anchor" href="#projectile-offset" aria-hidden="true">#</a> projectile-offset</h4>
<ul>
<li>
<h5 id="bow" tabindex="-1"><a class="header-anchor" href="#bow" aria-hidden="true">#</a> bow</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 弓射出的弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="crossbow" tabindex="-1"><a class="header-anchor" href="#crossbow" aria-hidden="true">#</a> crossbow</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 弩射出的弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="egg" tabindex="-1"><a class="header-anchor" href="#egg" aria-hidden="true">#</a> egg</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 鸡蛋弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="ender-pearl" tabindex="-1"><a class="header-anchor" href="#ender-pearl" aria-hidden="true">#</a> ender-pearl</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 末影珍珠弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="throwable-potion" tabindex="-1"><a class="header-anchor" href="#throwable-potion" aria-hidden="true">#</a> throwable-potion</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 喷溅型药水弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="trident" tabindex="-1"><a class="header-anchor" href="#trident" aria-hidden="true">#</a> trident</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 三叉戟的药水弹射物偏移。</li>
</ul>
</li>
<li>
<h5 id="snowball" tabindex="-1"><a class="header-anchor" href="#snowball" aria-hidden="true">#</a> snowball</h5>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 雪球的弹射物偏移。</li>
</ul>
</li>
</ul>
<h4 id="drowning" tabindex="-1"><a class="header-anchor" href="#drowning" aria-hidden="true">#</a> drowning</h4>
<ul>
<li>
<h5 id="air-ticks" tabindex="-1"><a class="header-anchor" href="#air-ticks" aria-hidden="true">#</a> air-ticks</h5>
<ul>
<li><strong>默认值</strong>: 300</li>
<li><strong>描述</strong>: 从开始潜水计时，可在水下呼吸多长时间。</li>
</ul>
</li>
<li>
<h5 id="ticks-per-damage" tabindex="-1"><a class="header-anchor" href="#ticks-per-damage" aria-hidden="true">#</a> ticks-per-damage</h5>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 间隔多少Ticks应当受到窒息伤害移除。</li>
</ul>
</li>
<li>
<h5 id="damage-from-drowning" tabindex="-1"><a class="header-anchor" href="#damage-from-drowning" aria-hidden="true">#</a> damage-from-drowning</h5>
<ul>
<li><strong>默认值</strong>: 2.0</li>
<li><strong>描述</strong>: 窒息伤害量。</li>
</ul>
</li>
</ul>
<h4 id="tick-fluids" tabindex="-1"><a class="header-anchor" href="#tick-fluids" aria-hidden="true">#</a> tick-fluids</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为false以停止流体计时Tick。
<img src="https://media.discordapp.net/attachments/595431462510002206/821169659382333440/unknown.png" alt="使用此项的插件的截图"><br>
附件: <a href="https://cdn.discordapp.com/attachments/720375089123688488/820951359519326218/FreezeFluids-1.0.jar" target="_blank" rel="noopener noreferrer">FreezeFluids-1.0.jar<ExternalLinkIcon/></a></li>
</ul>
<h4 id="disable-drops-on-cramming-death" tabindex="-1"><a class="header-anchor" href="#disable-drops-on-cramming-death" aria-hidden="true">#</a> disable-drops-on-cramming-death</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 若因为cramming游戏规则而导致实体死亡，在死亡时是否没有掉落物。</li>
</ul>
<h4 id="entity-blindness-multiplier" tabindex="-1"><a class="header-anchor" href="#entity-blindness-multiplier" aria-hidden="true">#</a> entity-blindness-multiplier</h4>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 当生物被致盲药水效果影响时，应该受几级影响效果。</li>
</ul>
<h4 id="entities-pick-up-loot-bypass-mob-griefing" tabindex="-1"><a class="header-anchor" href="#entities-pick-up-loot-bypass-mob-griefing" aria-hidden="true">#</a> entities-pick-up-loot-bypass-mob-griefing</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: （可捡起掉落物的）生物是否允许其拾起掉落物，甚至是当<code v-pre>mobGriefing</code>游戏规则禁用时。</li>
</ul>
<h4 id="fix-climbing-bypassing-cramming-rule" tabindex="-1"><a class="header-anchor" href="#fix-climbing-bypassing-cramming-rule" aria-hidden="true">#</a> fix-climbing-bypassing-cramming-rule</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当攀爬时实体是否允许绕过cramming游戏规则</li>
</ul>
<h4 id="milk-cures-bad-omen" tabindex="-1"><a class="header-anchor" href="#milk-cures-bad-omen" aria-hidden="true">#</a> milk-cures-bad-omen</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否允许玩家饮用牛奶消除不祥之兆效果。</li>
</ul>
<h4 id="trident-loyalty-void-return-height" tabindex="-1"><a class="header-anchor" href="#trident-loyalty-void-return-height" aria-hidden="true">#</a> trident-loyalty-void-return-height</h4>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 附魔有忠诚的三叉戟在虚空中的高度和何时返回其投掷者。设定为 0 或更高以禁用。</li>
</ul>
<h4 id="void-damage-dealt" tabindex="-1"><a class="header-anchor" href="#void-damage-dealt" aria-hidden="true">#</a> void-damage-dealt</h4>
<ul>
<li><strong>默认值</strong>: 4.0</li>
<li><strong>描述</strong>: 虚空应该造成的伤害。</li>
</ul>
<h4 id="void-damage-height" tabindex="-1"><a class="header-anchor" href="#void-damage-height" aria-hidden="true">#</a> void-damage-height</h4>
<ul>
<li><strong>默认值</strong>: -64.0</li>
<li><strong>描述</strong>: 高度为何时对其造成虚空伤害。</li>
</ul>
<h4 id="entity-lifespan" tabindex="-1"><a class="header-anchor" href="#entity-lifespan" aria-hidden="true">#</a> entity-lifespan</h4>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 默认禁用 (0), 当实体消失之前应当存在多少Ticks。一旦与玩家互动将重新计时。</li>
</ul>
<h4 id="silk-touch-1" tabindex="-1"><a class="header-anchor" href="#silk-touch-1" aria-hidden="true">#</a> silk-touch</h4>
<p>需要拥有 <a href="../Permissions#purpurdropspawners"><code v-pre>purpur.drop.spawners</code></a> 何 <a href="../Permissions#purpurplacespawners"><code v-pre>purpur.place.spawners</code></a> 权限</p>
<ul>
<li>
<h5 id="enabled-2" tabindex="-1"><a class="header-anchor" href="#enabled-2" aria-hidden="true">#</a> enabled</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否允许附魔精准采集的镐子挖掘刷怪笼。</li>
</ul>
</li>
<li>
<h5 id="minimal-level" tabindex="-1"><a class="header-anchor" href="#minimal-level" aria-hidden="true">#</a> minimal-level</h5>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 要令刷怪笼掉落至少需要的精准采集等级</li>
</ul>
</li>
<li>
<h5 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> tools</h5>
<ul>
<li><strong>默认值</strong>:</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>iron_pickaxe
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>golden_pickaxe
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>diamond_pickaxe
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>netherite_pickaxe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>描述</strong>: 需附魔精准采集可开采刷怪笼的镐子白名单列表。</li>
</ul>
</li>
<li>
<h5 id="spawner-name" tabindex="-1"><a class="header-anchor" href="#spawner-name" aria-hidden="true">#</a> spawner-name</h5>
<ul>
<li><strong>默认值</strong>: &quot;&lt;reset&gt;&lt;white&gt;Spawner&quot;</li>
<li><strong>描述</strong>: 刷怪笼的名称</li>
</ul>
</li>
<li>
<h5 id="spawner-lore" tabindex="-1"><a class="header-anchor" href="#spawner-lore" aria-hidden="true">#</a> spawner-lore</h5>
<ul>
<li><strong>默认值</strong>:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> Spawns a &lt;mob<span class="token punctuation">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 刷怪笼的lore</li>
</ul>
</li>
</ul>
<h4 id="boat" tabindex="-1"><a class="header-anchor" href="#boat" aria-hidden="true">#</a> boat</h4>
<ul>
<li>
<h5 id="eject-players-on-land" tabindex="-1"><a class="header-anchor" href="#eject-players-on-land" aria-hidden="true">#</a> eject-players-on-land</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 在陆地上是否不允许玩家在船上。</li>
</ul>
</li>
<li>
<h5 id="do-fall-damage" tabindex="-1"><a class="header-anchor" href="#do-fall-damage" aria-hidden="true">#</a> do-fall-damage</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 则船不会向玩家造成下落伤害。</li>
</ul>
</li>
</ul>
<h4 id="armorstand" tabindex="-1"><a class="header-anchor" href="#armorstand" aria-hidden="true">#</a> armorstand</h4>
<ul>
<li>
<h5 id="step-height-1" tabindex="-1"><a class="header-anchor" href="#step-height-1" aria-hidden="true">#</a> step-height</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 设定盔甲架默认台阶的高度。当有插件利用盔甲架作为车辆时，例如无需跳跃即可驶过方块等等时很有用。</li>
</ul>
</li>
<li>
<h5 id="set-name-visible-when-placing-with-custom-name" tabindex="-1"><a class="header-anchor" href="#set-name-visible-when-placing-with-custom-name" aria-hidden="true">#</a> set-name-visible-when-placing-with-custom-name</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当盔甲架有自定义名称时，名称是否可见。</li>
</ul>
</li>
<li>
<h5 id="fix-nametags" tabindex="-1"><a class="header-anchor" href="#fix-nametags" aria-hidden="true">#</a> fix-nametags</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当盔甲架被命名牌命名时，名称是否可见。</li>
</ul>
</li>
<li>
<h5 id="place-with-arms-visible" tabindex="-1"><a class="header-anchor" href="#place-with-arms-visible" aria-hidden="true">#</a> place-with-arms-visible</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 放置时是否可见盔甲架的手臂。</li>
</ul>
</li>
<li>
<h5 id="can-movement-tick" tabindex="-1"><a class="header-anchor" href="#can-movement-tick" aria-hidden="true">#</a> can-movement-tick</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以盔甲架禁止移动。</li>
</ul>
</li>
<li>
<h5 id="can-move-in-water" tabindex="-1"><a class="header-anchor" href="#can-move-in-water" aria-hidden="true">#</a> can-move-in-water</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止盔甲架在水中移动。</li>
</ul>
</li>
<li>
<h5 id="can-move-in-water-over-fence" tabindex="-1"><a class="header-anchor" href="#can-move-in-water-over-fence" aria-hidden="true">#</a> can-move-in-water-over-fence</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止盔甲架在水中越过栅栏。</li>
</ul>
</li>
</ul>
<h4 id="player" tabindex="-1"><a class="header-anchor" href="#player" aria-hidden="true">#</a> player</h4>
<ul>
<li>
<h5 id="exp-pickup-delay-ticks" tabindex="-1"><a class="header-anchor" href="#exp-pickup-delay-ticks" aria-hidden="true">#</a> exp-pickup-delay-ticks</h5>
<ul>
<li><strong>默认值</strong>: 2</li>
<li><strong>描述</strong>: 当经验球掉落之后玩家在多久之后可以拾起。</li>
</ul>
</li>
<li>
<h5 id="shift-right-click-repairs-mending-points" tabindex="-1"><a class="header-anchor" href="#shift-right-click-repairs-mending-points" aria-hidden="true">#</a> shift-right-click-repairs-mending-points</h5>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 要修复玩家物品栏已附魔经验修补的物品所需的经验值。</li>
</ul>
</li>
<li>
<h5 id="spawn-invulnerable-ticks" tabindex="-1"><a class="header-anchor" href="#spawn-invulnerable-ticks" aria-hidden="true">#</a> spawn-invulnerable-ticks</h5>
<ul>
<li><strong>默认值</strong>: 60</li>
<li><strong>描述</strong>: 当玩家重生（或首次加入到服务器）有多长的无敌时间。</li>
</ul>
</li>
<li>
<h5 id="invulnerable-while-accepting-resource-pack" tabindex="-1"><a class="header-anchor" href="#invulnerable-while-accepting-resource-pack" aria-hidden="true">#</a> invulnerable-while-accepting-resource-pack</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家正在下载资源包时玩家是否应该处于无敌状态。</li>
</ul>
</li>
<li>
<h5 id="teleport-if-outside-border" tabindex="-1"><a class="header-anchor" href="#teleport-if-outside-border" aria-hidden="true">#</a> teleport-if-outside-border</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家以某种方式传送出世界边界时是否要传送回出生点。</li>
</ul>
</li>
<li>
<h5 id="allow-void-trading" tabindex="-1"><a class="header-anchor" href="#allow-void-trading" aria-hidden="true">#</a> allow-void-trading</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 玩家是否可以利用末地折跃门机制（漏洞）以达到持续与村民交易的目的。</li>
</ul>
</li>
<li>
<h5 id="totem-of-undying-works-in-inventory" tabindex="-1"><a class="header-anchor" href="#totem-of-undying-works-in-inventory" aria-hidden="true">#</a> totem-of-undying-works-in-inventory</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 不死图腾当在背包中是否生效，而不是仅在手上。</li>
</ul>
</li>
<li>
<h5 id="ridable-in-water-66" tabindex="-1"><a class="header-anchor" href="#ridable-in-water-66" aria-hidden="true">#</a> ridable-in-water</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家在水中时，其它生物/玩家是否可以骑在该玩家上。</li>
</ul>
</li>
<li>
<h5 id="fix-stuck-in-portal" tabindex="-1"><a class="header-anchor" href="#fix-stuck-in-portal" aria-hidden="true">#</a> fix-stuck-in-portal</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家卡在传送门内部没有方法出去时，移动到其它方块是否会立即重置传送门冷却时间，允许再次使用传送门。</li>
</ul>
</li>
<li>
<h5 id="one-punch-in-creative" tabindex="-1"><a class="header-anchor" href="#one-punch-in-creative" aria-hidden="true">#</a> one-punch-in-creative</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当创造模式的玩家空手攻击某实体时，该实体是否会立即死亡。</li>
</ul>
</li>
<li>
<h5 id="sleep-ignore-nearby-mobs" tabindex="-1"><a class="header-anchor" href="#sleep-ignore-nearby-mobs" aria-hidden="true">#</a> sleep-ignore-nearby-mobs</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 时。即使附近有敌对生物时也允许睡觉。</li>
</ul>
</li>
<li>
<h5 id="can-skip-night" tabindex="-1"><a class="header-anchor" href="#can-skip-night" aria-hidden="true">#</a> can-skip-night</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以禁止玩家睡觉跳过夜晚。</li>
</ul>
</li>
<li>
<h5 id="critical-damage-multiplier" tabindex="-1"><a class="header-anchor" href="#critical-damage-multiplier" aria-hidden="true">#</a> critical-damage-multiplier</h5>
<ul>
<li><strong>默认值</strong>: 1.5</li>
<li><strong>描述</strong>: 暴击时在基础伤害上额外增加的伤害。</li>
</ul>
</li>
<li>
<h5 id="burp-when-full" tabindex="-1"><a class="header-anchor" href="#burp-when-full" aria-hidden="true">#</a> burp-when-full</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家的饥饿值已满时是否要播放打嗝音效。</li>
</ul>
</li>
<li>
<h5 id="curse-of-binding" tabindex="-1"><a class="header-anchor" href="#curse-of-binding" aria-hidden="true">#</a> curse-of-binding</h5>
<ul>
<li>
<h6 id="remove-with-weakness" tabindex="-1"><a class="header-anchor" href="#remove-with-weakness" aria-hidden="true">#</a> remove-with-weakness</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家拥有虚弱效果时是否可以脱下附魔绑定诅咒的盔甲。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="armor-click-equip" tabindex="-1"><a class="header-anchor" href="#armor-click-equip" aria-hidden="true">#</a> armor-click-equip</h5>
<ul>
<li>
<h6 id="allow-hot-swapping" tabindex="-1"><a class="header-anchor" href="#allow-hot-swapping" aria-hidden="true">#</a> allow-hot-swapping</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当玩家手持盔甲并右键时是否立即交换已穿着的盔甲。</li>
</ul>
</li>
<li>
<h6 id="creative-makes-copy" tabindex="-1"><a class="header-anchor" href="#creative-makes-copy" aria-hidden="true">#</a> creative-makes-copy</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以禁止创造模式玩家手持并右键盔甲时可复制该盔甲。（原文没有创造模式，但是小标题是creative）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="idle-timeout" tabindex="-1"><a class="header-anchor" href="#idle-timeout" aria-hidden="true">#</a> idle-timeout</h5>
<ul>
<li>
<h6 id="kick-if-idle" tabindex="-1"><a class="header-anchor" href="#kick-if-idle" aria-hidden="true">#</a> kick-if-idle</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当玩家闲置时是否要踢出该玩家 (查看 server.properties 中的 player-idle-timeout 时间)</li>
</ul>
</li>
<li>
<h6 id="tick-nearby-entities" tabindex="-1"><a class="header-anchor" href="#tick-nearby-entities" aria-hidden="true">#</a> tick-nearby-entities</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当附近玩家挂机时是否要正常计算实体。设定为 false 则需要至少一名未挂机玩家才会正常计时Tick。</li>
</ul>
</li>
<li>
<h6 id="mobs-target" tabindex="-1"><a class="header-anchor" href="#mobs-target" aria-hidden="true">#</a> mobs-target</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 生物是否要视附近挂机玩家为目标。</li>
</ul>
</li>
<li>
<h6 id="count-as-sleeping" tabindex="-1"><a class="header-anchor" href="#count-as-sleeping" aria-hidden="true">#</a> count-as-sleeping</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要将挂机玩家数视为正在睡觉（允许活跃的玩家跳过夜晚，即使挂机的玩家根本没在床上）</li>
</ul>
</li>
<li>
<h6 id="update-tab-list" tabindex="-1"><a class="header-anchor" href="#update-tab-list" aria-hidden="true">#</a> update-tab-list</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 是否要在Tab列表中更新挂机玩家状态（将 <code v-pre>[AFK]</code> 作为玩家前缀。）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="exp-dropped-on-death" tabindex="-1"><a class="header-anchor" href="#exp-dropped-on-death" aria-hidden="true">#</a> exp-dropped-on-death</h5>
<ul>
<li>
<h6 id="equation" tabindex="-1"><a class="header-anchor" href="#equation" aria-hidden="true">#</a> equation</h6>
<ul>
<li><strong>默认值</strong>: expLevel * 7</li>
<li><strong>描述</strong>: 在死亡时应该掉落多少经验。可选的NMS变量为 <code v-pre>expLevel</code>，<code v-pre>expTotal</code>和<code v-pre>exp</code>。</li>
</ul>
</li>
<li>
<h6 id="maximum" tabindex="-1"><a class="header-anchor" href="#maximum" aria-hidden="true">#</a> maximum</h6>
<ul>
<li><strong>默认值</strong>: 100</li>
<li><strong>描述</strong>: 在死亡时最大可掉落的经验值。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="netherite-fire-resistance" tabindex="-1"><a class="header-anchor" href="#netherite-fire-resistance" aria-hidden="true">#</a> netherite-fire-resistance</h5>
<ul>
<li>
<h6 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> duration</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 防火效果持续时间。设定为 0 以禁用。</li>
</ul>
</li>
<li>
<h6 id="amplifier" tabindex="-1"><a class="header-anchor" href="#amplifier" aria-hidden="true">#</a> amplifier</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 设定防火效果的强度。</li>
</ul>
</li>
<li>
<h6 id="ambient" tabindex="-1"><a class="header-anchor" href="#ambient" aria-hidden="true">#</a> ambient</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令在屏幕中显示的粒子效果变少。</li>
</ul>
</li>
<li>
<h6 id="show-particles" tabindex="-1"><a class="header-anchor" href="#show-particles" aria-hidden="true">#</a> show-particles</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令防火药水效果显示粒子。</li>
</ul>
</li>
<li>
<h6 id="show-icon" tabindex="-1"><a class="header-anchor" href="#show-icon" aria-hidden="true">#</a> show-icon</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以令防火效果不显示图标。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="minecart" tabindex="-1"><a class="header-anchor" href="#minecart" aria-hidden="true">#</a> minecart</h4>
<ul>
<li>
<h5 id="max-speed" tabindex="-1"><a class="header-anchor" href="#max-speed" aria-hidden="true">#</a> max-speed</h5>
<ul>
<li><strong>默认值</strong>: 0.4</li>
<li><strong>描述</strong>: 控制矿车的最大速度。</li>
</ul>
</li>
<li>
<h5 id="place-anywhere" tabindex="-1"><a class="header-anchor" href="#place-anywhere" aria-hidden="true">#</a> place-anywhere</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 矿车是否随处摆放（不只是在铁轨上）</li>
</ul>
</li>
<li>
<h5 id="powered-rail-1" tabindex="-1"><a class="header-anchor" href="#powered-rail-1" aria-hidden="true">#</a> powered-rail</h5>
<ul>
<li>
<h6 id="boost-modifier" tabindex="-1"><a class="header-anchor" href="#boost-modifier" aria-hidden="true">#</a> boost-modifier</h6>
<ul>
<li><strong>默认值</strong>: 0.06</li>
<li><strong>描述</strong>: 矿车从动力铁轨上获得的速度倍率。（不影响熔炉铁轨）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="controllable-72" tabindex="-1"><a class="header-anchor" href="#controllable-72" aria-hidden="true">#</a> controllable</h5>
<ul>
<li>
<h6 id="enabled-3" tabindex="-1"><a class="header-anchor" href="#enabled-3" aria-hidden="true">#</a> enabled</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 矿车不在铁轨上是否可以控制。</li>
</ul>
</li>
<li>
<h6 id="fall-damage" tabindex="-1"><a class="header-anchor" href="#fall-damage" aria-hidden="true">#</a> fall-damage</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当玩家位于矿车之中时下坠是否会造成摔落伤害。</li>
</ul>
</li>
<li>
<h6 id="step-height-2" tabindex="-1"><a class="header-anchor" href="#step-height-2" aria-hidden="true">#</a> step-height</h6>
<ul>
<li><strong>默认值</strong>: 1.0</li>
<li><strong>描述</strong>: 无需跳跃矿车可以向上前行的最大高度。</li>
</ul>
</li>
<li>
<h6 id="hop-boost" tabindex="-1"><a class="header-anchor" href="#hop-boost" aria-hidden="true">#</a> hop-boost</h6>
<ul>
<li><strong>默认值</strong>: 0.5</li>
<li><strong>描述</strong>: 当在可控制的矿车上按下空格所获得的跳跃力。</li>
</ul>
</li>
<li>
<h6 id="base-speed" tabindex="-1"><a class="header-anchor" href="#base-speed" aria-hidden="true">#</a> base-speed</h6>
<ul>
<li><strong>默认值</strong>: 0.1</li>
<li><strong>描述</strong>: 控制矿车时的基础速度。</li>
</ul>
</li>
<li>
<h6 id="block-speed" tabindex="-1"><a class="header-anchor" href="#block-speed" aria-hidden="true">#</a> block-speed</h6>
<ul>
<li><strong>默认值</strong>:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">grass_block</span><span class="token punctuation">:</span> <span class="token number">0.3</span>
<span class="token key atrule">stone</span><span class="token punctuation">:</span> <span class="token number">0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 经过某方块类型时的速度列表。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="item" tabindex="-1"><a class="header-anchor" href="#item" aria-hidden="true">#</a> item</h4>
<ul>
<li>
<h5 id="shears" tabindex="-1"><a class="header-anchor" href="#shears" aria-hidden="true">#</a> shears</h5>
<ul>
<li>
<h6 id="damage-if-sprinting" tabindex="-1"><a class="header-anchor" href="#damage-if-sprinting" aria-hidden="true">#</a> damage-if-sprinting</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当冲刺时剪刀是否应该随机对玩家造成伤害（别拿着剪刀乱跑！）</li>
</ul>
</li>
<li>
<h6 id="sprinting-damage" tabindex="-1"><a class="header-anchor" href="#sprinting-damage" aria-hidden="true">#</a> sprinting-damage</h6>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 当<code v-pre>damage-if-sprinting</code>启用时对玩家造成的伤害数量。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="snowball-1" tabindex="-1"><a class="header-anchor" href="#snowball-1" aria-hidden="true">#</a> snowball</h5>
<ul>
<li>
<h6 id="extinguish" tabindex="-1"><a class="header-anchor" href="#extinguish" aria-hidden="true">#</a> extinguish</h6>
<ul>
<li>
<h6 id="fire" tabindex="-1"><a class="header-anchor" href="#fire" aria-hidden="true">#</a> fire</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 雪球在投出后是否可以熄灭火。</li>
</ul>
</li>
<li>
<h6 id="candles" tabindex="-1"><a class="header-anchor" href="#candles" aria-hidden="true">#</a> candles</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 雪球在投出后是否可以熄灭蜡烛。</li>
</ul>
</li>
<li>
<h6 id="campfires" tabindex="-1"><a class="header-anchor" href="#campfires" aria-hidden="true">#</a> campfires</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 雪球在投出后是否可以熄灭篝火。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="shulker-box-1" tabindex="-1"><a class="header-anchor" href="#shulker-box-1" aria-hidden="true">#</a> shulker_box</h5>
<ul>
<li>
<h6 id="drop-contents-when-destroyed" tabindex="-1"><a class="header-anchor" href="#drop-contents-when-destroyed" aria-hidden="true">#</a> drop-contents-when-destroyed</h6>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 当潜影盒被摧毁时是否应该掉落其中的内容。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="compass-1" tabindex="-1"><a class="header-anchor" href="#compass-1" aria-hidden="true">#</a> compass</h5>
<ul>
<li>
<h6 id="holding-shows-bossbar" tabindex="-1"><a class="header-anchor" href="#holding-shows-bossbar" aria-hidden="true">#</a> holding-shows-bossbar</h6>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当手持指南针时是否要显示运行 <a href="../Commands#compass"><code v-pre>/compass</code></a> 命令所获得的bossbar。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="glow-berries" tabindex="-1"><a class="header-anchor" href="#glow-berries" aria-hidden="true">#</a> glow_berries</h5>
<ul>
<li>
<h6 id="eat-glow-duration" tabindex="-1"><a class="header-anchor" href="#eat-glow-duration" aria-hidden="true">#</a> eat-glow-duration</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 玩家在吃了发光浆果之后获得发光的Ticks数。设定为 0 以禁用。</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="ender-pearl-1" tabindex="-1"><a class="header-anchor" href="#ender-pearl-1" aria-hidden="true">#</a> ender-pearl</h5>
<ul>
<li>
<h6 id="damage-3" tabindex="-1"><a class="header-anchor" href="#damage-3" aria-hidden="true">#</a> damage</h6>
<ul>
<li><strong>默认值</strong>: 5</li>
<li><strong>描述</strong>: 当玩家使用末影珍珠之要造成的伤害量。</li>
</ul>
</li>
<li>
<h6 id="cooldown-1" tabindex="-1"><a class="header-anchor" href="#cooldown-1" aria-hidden="true">#</a> cooldown</h6>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 玩家使用末影珍珠之后的冷却（以Ticks为单位）</li>
</ul>
</li>
<li>
<h6 id="creative-cooldown" tabindex="-1"><a class="header-anchor" href="#creative-cooldown" aria-hidden="true">#</a> creative-cooldown</h6>
<ul>
<li><strong>默认值</strong>: 20</li>
<li><strong>描述</strong>: 玩家在使用末影珍珠之后的冷却（以Ticks为单位）</li>
</ul>
</li>
<li>
<h6 id="endermite-spawn-chance" tabindex="-1"><a class="header-anchor" href="#endermite-spawn-chance" aria-hidden="true">#</a> endermite-spawn-chance</h6>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 当使用末影珍珠传送之后生成末影螨的概率百分比（0.0 - 1.0）</li>
</ul>
</li>
</ul>
</li>
<li>
<h5 id="immune" tabindex="-1"><a class="header-anchor" href="#immune" aria-hidden="true">#</a> immune</h5>
<ul>
<li>
<h6 id="explosion" tabindex="-1"><a class="header-anchor" href="#explosion" aria-hidden="true">#</a> explosion</h6>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 免疫爆炸的物品列表。</li>
</ul>
</li>
<li>
<h6 id="fire-1" tabindex="-1"><a class="header-anchor" href="#fire-1" aria-hidden="true">#</a> fire</h6>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 免疫火焰的物品列表。</li>
</ul>
</li>
<li>
<h6 id="lightning" tabindex="-1"><a class="header-anchor" href="#lightning" aria-hidden="true">#</a> lightning</h6>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 免疫闪电的物品列表。</li>
</ul>
</li>
<li>
<h6 id="cactus-1" tabindex="-1"><a class="header-anchor" href="#cactus-1" aria-hidden="true">#</a> cactus</h6>
<ul>
<li><strong>默认值</strong>: []</li>
<li><strong>描述</strong>: 免疫仙人掌的物品列表。</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>示例物品列表：</strong><br>
<code v-pre>yaml          explosion:          - minecraft:diamond          - minecraft:diamond_block          - minecraft:diamond_sword       </code></p>
</blockquote>
<blockquote>
<p><strong>警告</strong>
这些物品列表会导致客户端不同步的问题，例如地上的物品无法显示！在服务器代码这边我们无能为力。</p>
</blockquote>
<h4 id="elytra" tabindex="-1"><a class="header-anchor" href="#elytra" aria-hidden="true">#</a> elytra</h4>
<ul>
<li>
<h5 id="damage-per-second" tabindex="-1"><a class="header-anchor" href="#damage-per-second" aria-hidden="true">#</a> damage-per-second</h5>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 飞行每秒应该消耗鞘翅的多少耐久度。</li>
</ul>
</li>
<li>
<h5 id="damage-multiplied-by-speed" tabindex="-1"><a class="header-anchor" href="#damage-multiplied-by-speed" aria-hidden="true">#</a> damage-multiplied-by-speed</h5>
<ul>
<li><strong>默认值</strong>: 0.0</li>
<li><strong>描述</strong>: 如果飞行速度超过设定的速度，则需要额外消耗其耐久度的倍率。设定为 0 禁用此功能。</li>
</ul>
</li>
<li>
<h5 id="kinetic-damage" tabindex="-1"><a class="header-anchor" href="#kinetic-damage" aria-hidden="true">#</a> kinetic-damage</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 玩家飞进墙里面是否要造成伤害。</li>
</ul>
</li>
<li>
<h5 id="ignore-unbreaking" tabindex="-1"><a class="header-anchor" href="#ignore-unbreaking" aria-hidden="true">#</a> ignore-unbreaking</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 鞘翅是否应该无视 耐久 附魔。</li>
</ul>
</li>
<li>
<h5 id="damage-per-boost" tabindex="-1"><a class="header-anchor" href="#damage-per-boost" aria-hidden="true">#</a> damage-per-boost</h5>
<ul>
<li>
<h6 id="firework" tabindex="-1"><a class="header-anchor" href="#firework" aria-hidden="true">#</a> firework</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 当烟花加速激活时需要对鞘翅造成额外的耐久消耗。</li>
</ul>
</li>
<li>
<h6 id="trident-1" tabindex="-1"><a class="header-anchor" href="#trident-1" aria-hidden="true">#</a> trident</h6>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 当激流附魔三叉戟激活时需要对鞘翅造成额外的耐久消耗。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="mob-spawning" tabindex="-1"><a class="header-anchor" href="#mob-spawning" aria-hidden="true">#</a> mob-spawning</h4>
<ul>
<li>
<h5 id="village-cats" tabindex="-1"><a class="header-anchor" href="#village-cats" aria-hidden="true">#</a> village-cats</h5>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 设定为 true 以允许生成于在该值中的世界。</li>
</ul>
</li>
<li>
<h5 id="raid-patrols" tabindex="-1"><a class="header-anchor" href="#raid-patrols" aria-hidden="true">#</a> raid-patrols</h5>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 设定为 true 以允许生成于在该值中的世界。</li>
</ul>
</li>
<li>
<h5 id="phantoms" tabindex="-1"><a class="header-anchor" href="#phantoms" aria-hidden="true">#</a> phantoms</h5>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 设定为 true 以允许生成于在该值中的世界。</li>
</ul>
</li>
<li>
<h5 id="wandering-traders" tabindex="-1"><a class="header-anchor" href="#wandering-traders" aria-hidden="true">#</a> wandering-traders</h5>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 设定为 true 以允许生成于在该值中的世界。</li>
</ul>
</li>
<li>
<h5 id="village-sieges" tabindex="-1"><a class="header-anchor" href="#village-sieges" aria-hidden="true">#</a> village-sieges</h5>
<ul>
<li><strong>默认值</strong>: default</li>
<li><strong>描述</strong>: 设定为 true 以允许生成于在该值中的世界。</li>
</ul>
</li>
<li>
<h5 id="ignore-creative-players" tabindex="-1"><a class="header-anchor" href="#ignore-creative-players" aria-hidden="true">#</a> ignore-creative-players</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 当生成生物时是否要忽视创造玩家。</li>
</ul>
</li>
</ul>
<h4 id="raid-cooldown-seconds" tabindex="-1"><a class="header-anchor" href="#raid-cooldown-seconds" aria-hidden="true">#</a> raid-cooldown-seconds</h4>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 在另一个袭击开始前需要等待的时间。</li>
</ul>
<h4 id="entities-can-use-portals" tabindex="-1"><a class="header-anchor" href="#entities-can-use-portals" aria-hidden="true">#</a> entities-can-use-portals</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 &quot;false&quot; 以阻止实体使用传送门。</li>
</ul>
<h4 id="persistent-tileentity-display-names-and-lore" tabindex="-1"><a class="header-anchor" href="#persistent-tileentity-display-names-and-lore" aria-hidden="true">#</a> persistent-tileentity-display-names-and-lore</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以令TE的显示名称和lore在破坏后依旧存在。（比如：命名过的玩家的头保留它们的名称）</li>
</ul>
<h4 id="persistent-droppable-entity-display-names" tabindex="-1"><a class="header-anchor" href="#persistent-droppable-entity-display-names" aria-hidden="true">#</a> persistent-droppable-entity-display-names</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以令实体的显示名称和lore在破坏后依旧存在。（比如 命名过的盔甲架保留它们的名称）</li>
</ul>
<h4 id="infinity-bow" tabindex="-1"><a class="header-anchor" href="#infinity-bow" aria-hidden="true">#</a> infinity-bow</h4>
<ul>
<li>
<h5 id="normal-arrows" tabindex="-1"><a class="header-anchor" href="#normal-arrows" aria-hidden="true">#</a> normal-arrows</h5>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 true 以允许无限附魔应用于该箭矢类型。</li>
</ul>
</li>
<li>
<h5 id="spectral-arrows" tabindex="-1"><a class="header-anchor" href="#spectral-arrows" aria-hidden="true">#</a> spectral-arrows</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以允许无限附魔应用于该箭矢类型。</li>
</ul>
</li>
<li>
<h5 id="tipped-arrows" tabindex="-1"><a class="header-anchor" href="#tipped-arrows" aria-hidden="true">#</a> tipped-arrows</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以允许无限附魔应用于该箭矢类型。</li>
</ul>
</li>
<li>
<h5 id="works-without-arrows" tabindex="-1"><a class="header-anchor" href="#works-without-arrows" aria-hidden="true">#</a> works-without-arrows</h5>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以允许无限附魔的弓无需箭矢。</li>
</ul>
</li>
</ul>
<h4 id="daylight-cycle-ticks" tabindex="-1"><a class="header-anchor" href="#daylight-cycle-ticks" aria-hidden="true">#</a> daylight-cycle-ticks</h4>
<ul>
<li>
<h5 id="daytime" tabindex="-1"><a class="header-anchor" href="#daytime" aria-hidden="true">#</a> daytime</h5>
<ul>
<li><strong>默认值</strong>: 12000</li>
<li><strong>描述</strong>: 昼夜更替（日）Tick时间</li>
</ul>
</li>
<li>
<h5 id="nighttime" tabindex="-1"><a class="header-anchor" href="#nighttime" aria-hidden="true">#</a> nighttime</h5>
<ul>
<li><strong>默认值</strong>: 12000</li>
<li><strong>描述</strong>: 昼夜更替（夜）Tick时间</li>
</ul>
</li>
</ul>
<h4 id="animal-breeding-cooldown-seconds" tabindex="-1"><a class="header-anchor" href="#animal-breeding-cooldown-seconds" aria-hidden="true">#</a> animal-breeding-cooldown-seconds</h4>
<ul>
<li><strong>默认值</strong>: 0</li>
<li><strong>描述</strong>: 为每种动物类型添加繁殖冷却。</li>
</ul>
<h4 id="projectile-damage" tabindex="-1"><a class="header-anchor" href="#projectile-damage" aria-hidden="true">#</a> projectile-damage</h4>
<ul>
<li>
<h5 id="snowball-2" tabindex="-1"><a class="header-anchor" href="#snowball-2" aria-hidden="true">#</a> snowball</h5>
<ul>
<li><strong>默认值</strong>: -1</li>
<li><strong>描述</strong>: 雪球应当造成的伤害 (-1 即默认对烈焰人造成 3 点伤害 &amp; 其它实体为 0 点伤害)</li>
</ul>
</li>
</ul>
<h4 id="entity-left-handed-chance" tabindex="-1"><a class="header-anchor" href="#entity-left-handed-chance" aria-hidden="true">#</a> entity-left-handed-chance</h4>
<ul>
<li><strong>默认值</strong>: 0.05</li>
<li><strong>描述</strong>: 生成左撇子生物的概率。</li>
</ul>
<h4 id="fireballs-bypass-mob-griefing" tabindex="-1"><a class="header-anchor" href="#fireballs-bypass-mob-griefing" aria-hidden="true">#</a> fireballs-bypass-mob-griefing</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令火球绕过 mob griefing 游戏规则</li>
</ul>
<h4 id="note-block-ignore-above" tabindex="-1"><a class="header-anchor" href="#note-block-ignore-above" aria-hidden="true">#</a> note-block-ignore-above</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以令音符盒继续发声，即使上面有一个方块阻挡着。</li>
</ul>
<h4 id="impose-teleport-restrictions-on-gateways" tabindex="-1"><a class="header-anchor" href="#impose-teleport-restrictions-on-gateways" aria-hidden="true">#</a> impose-teleport-restrictions-on-gateways</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 以对折跃门增加传送限制。当玩家由于有其它人乘坐/驾驶而传送失败将broadcasts <code v-pre>EntityTeleportHinderedEvent</code> 事件并尝试重新传送。</li>
</ul>
<h4 id="always-tame-in-creative" tabindex="-1"><a class="header-anchor" href="#always-tame-in-creative" aria-hidden="true">#</a> always-tame-in-creative</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 &quot;true&quot; 100%的概率驯服生物。</li>
</ul>
<h4 id="shovel-turns-block-to-grass-path" tabindex="-1"><a class="header-anchor" href="#shovel-turns-block-to-grass-path" aria-hidden="true">#</a> shovel-turns-block-to-grass-path</h4>
<ul>
<li><strong>默认值</strong>:<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>coarse_dirt
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>dirt
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>grass_block
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>mycelium
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>podzol
<span class="token punctuation">-</span> minecraft<span class="token punctuation">:</span>rooted_dirt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>描述</strong>: 使用铲子右键时可转换为草径的方块列表。</li>
</ul>
<h3 id="ridable-settings" tabindex="-1"><a class="header-anchor" href="#ridable-settings" aria-hidden="true">#</a> ridable-settings</h3>
<h4 id="babies-are-ridable" tabindex="-1"><a class="header-anchor" href="#babies-are-ridable" aria-hidden="true">#</a> babies-are-ridable</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止幼年骑行。</li>
</ul>
<h4 id="untamed-tamables-are-ridable" tabindex="-1"><a class="header-anchor" href="#untamed-tamables-are-ridable" aria-hidden="true">#</a> untamed-tamables-are-ridable</h4>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 设定为 false 以禁止骑行未驯服的生物。</li>
</ul>
<h4 id="use-night-vision" tabindex="-1"><a class="header-anchor" href="#use-night-vision" aria-hidden="true">#</a> use-night-vision</h4>
<ul>
<li><strong>默认值</strong>: false</li>
<li><strong>描述</strong>: 设定为 true 以允许给骑手提供夜视效果。</li>
</ul>
</div></template>


