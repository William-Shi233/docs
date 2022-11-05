<template><div><h1 id="paper-全局配置" tabindex="-1"><a class="header-anchor" href="#paper-全局配置" aria-hidden="true">#</a> Paper 全局配置</h1>
<p>Paper提供的全局配置选项将应用于服务器上的每一个世界，或仅仅是更改服务器本身的工作方式。若想要为每一个世界进行配置，请见<a href="https://docs.poikcue.com/#/PaperMC/Administration/Reference/world-configuration" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</p>
<h2 id="async-chunks" tabindex="-1"><a class="header-anchor" href="#async-chunks" aria-hidden="true">#</a> async-chunks</h2>
<h3 id="threads" tabindex="-1"><a class="header-anchor" href="#threads" aria-hidden="true">#</a> threads</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器应该使用多少线程来保存世界或加载区块。除非有别的内容规定了此项，默认值（-1）将使用服务器线程数量的一半进行区块加载，并且默认使用最大4个线程用于保存和加载区块。使用 <code v-pre>-Dpaper.maxChunkThreads=[数字]</code> 启动参数以进行调整。</p>
</li>
</ul>
<h2 id="chunk-loading" tabindex="-1"><a class="header-anchor" href="#chunk-loading" aria-hidden="true">#</a> chunk-loading</h2>
<h3 id="autoconfig-send-distance" tabindex="-1"><a class="header-anchor" href="#autoconfig-send-distance" aria-hidden="true">#</a> autoconfig-send-distance</h3>
<ul>
<li>
<p><strong>默认</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要根据客户端设定的可视距离设定作为服务器实际发送给客户端的可视距离。只有此项会设定服务器发送给客户端的区块距离的半径，但是不会影响服务器实际加载和 Tick。</p>
</li>
</ul>
<h3 id="enable-frustum-priority" tabindex="-1"><a class="header-anchor" href="#enable-frustum-priority" aria-hidden="true">#</a> enable-frustum-priority</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 不建议启用此项。在尝试加载玩家两侧和后方的区块前是否要优先加载玩家前面的区块。不过玩家对此反响并不是很好，所以默认禁用。</p>
</li>
</ul>
<h3 id="global-max-chunk-load-rate" tabindex="-1"><a class="header-anchor" href="#global-max-chunk-load-rate" aria-hidden="true">#</a> global-max-chunk-load-rate</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器每秒加载区块的最大数值。此项的优先级要大于 <code v-pre>player-max-chunk-load-rate</code>。</p>
</li>
</ul>
<h3 id="global-max-chunk-send-rate" tabindex="-1"><a class="header-anchor" href="#global-max-chunk-send-rate" aria-hidden="true">#</a> global-max-chunk-send-rate</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器每秒向客户端发送区块的最大数值。调整此值可能有利于缓解服务器峰值宽带的使用。</p>
</li>
</ul>
<h3 id="global-max-concurrent-loads" tabindex="-1"><a class="header-anchor" href="#global-max-concurrent-loads" aria-hidden="true">#</a> global-max-concurrent-loads</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>500.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器每次处理加载区块的最大数值。若此值超过了<code v-pre>player-max-concurrent-loads</code>，则会覆盖它。</p>
</li>
</ul>
<h3 id="max-concurrent-sends" tabindex="-1"><a class="header-anchor" href="#max-concurrent-sends" aria-hidden="true">#</a> max-concurrent-sends</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>2</code></p>
</li>
<li>
<p><strong>描述</strong>: 每次排队发送区块的最大数值。设定一个较低的值会缓解服务器的网络瓶颈，比如使用反矿物透视与压缩。但是此值可能不会如预期般优化网络环境较差的玩家的游戏体验。</p>
</li>
</ul>
<h3 id="min-load-radius" tabindex="-1"><a class="header-anchor" href="#min-load-radius" aria-hidden="true">#</a> min-load-radius</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>2</code></p>
</li>
<li>
<p><strong>描述</strong>: 在区块加载时，玩家周围区块未阻塞的范围（半径）。此值影响的实际范围是设定值 +1，并且此项会控制客户端可加载的区块数量。</p>
</li>
</ul>
<h3 id="player-max-chunk-load-rate" tabindex="-1"><a class="header-anchor" href="#player-max-chunk-load-rate" aria-hidden="true">#</a> player-max-chunk-load-rate</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 每玩家每秒加载区块的最大数值。</p>
</li>
</ul>
<h3 id="player-max-concurrent-loads" tabindex="-1"><a class="header-anchor" href="#player-max-concurrent-loads" aria-hidden="true">#</a> player-max-concurrent-loads</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>20.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 每玩家每次处理区块加载的最大数值。</p>
</li>
</ul>
<h3 id="target-player-chunk-send-rate" tabindex="-1"><a class="header-anchor" href="#target-player-chunk-send-rate" aria-hidden="true">#</a> target-player-chunk-send-rate</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>100.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 每秒钟发送给玩家区块的最大数值。</p>
</li>
</ul>
<h2 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions" aria-hidden="true">#</a> collisions</h2>
<h3 id="enable-player-collisions" tabindex="-1"><a class="header-anchor" href="#enable-player-collisions" aria-hidden="true">#</a> enable-player-collisions</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器是否应该开启玩家碰撞。不过当此项与安装某些影响计分板的插件同时使用时，可能不起作用。如果调整此项时出现问题，请尝试先禁用这些插件。</p>
</li>
</ul>
<h3 id="send-full-pos-for-hard-colliding-entities" tabindex="-1"><a class="header-anchor" href="#send-full-pos-for-hard-colliding-entities" aria-hidden="true">#</a> send-full-pos-for-hard-colliding-entities</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 当与船只或矿车碰撞时，客户端/服务器经常会在处理两者时不一致，并使玩家的行为出错。此选项尝试在其发生碰撞时向其发送精确的位置来缓解此问题。开启此选项将消耗更多的带宽，但是在大多数情况下此选项值得开启。</p>
</li>
</ul>
<h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> commands</h2>
<h3 id="fix-target-selector-tag-completion" tabindex="-1"><a class="header-anchor" href="#fix-target-selector-tag-completion" aria-hidden="true">#</a> fix-target-selector-tag-completion</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 解决一个客户端 Bug，防止实体类型 Tag 建议在目标选择器中生效。在 <a href="https://bugs.mojang.com/browse/MC-235045" target="_blank" rel="noopener noreferrer">MC-235045<ExternalLinkIcon/></a> 修复。</p>
</li>
</ul>
<h3 id="suggest-player-names-when-null-tab-completions" tabindex="-1"><a class="header-anchor" href="#suggest-player-names-when-null-tab-completions" aria-hidden="true">#</a> suggest-player-names-when-null-tab-completions</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 当自动补全无其它参数可用时，是否要尝试返回 Tab 列表中的玩家名称。</p>
</li>
</ul>
<h3 id="time-command-affects-all-worlds" tabindex="-1"><a class="header-anchor" href="#time-command-affects-all-worlds" aria-hidden="true">#</a> time-command-affects-all-worlds</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 当输入 <code v-pre>/time</code> 命令时，应当在所有世界生效还是仅在命令发送者所在的世界生效。</p>
</li>
</ul>
<h2 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> console</h2>
<h3 id="enable-brigadier-completion" tabindex="-1"><a class="header-anchor" href="#enable-brigadier-completion" aria-hidden="true">#</a> enable-brigadier-completion</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要在控制台启用 Mojang 的命令引擎 Brigadier（高级）进行命令补全。</p>
</li>
</ul>
<h3 id="enable-brigadier-highlighting" tabindex="-1"><a class="header-anchor" href="#enable-brigadier-highlighting" aria-hidden="true">#</a> enable-brigadier-highlighting</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>:  是否要在控制台启用 Mojang 的命令引擎 Brigadier 进行命令高亮。</p>
</li>
</ul>
<h3 id="has-all-permissions" tabindex="-1"><a class="header-anchor" href="#has-all-permissions" aria-hidden="true">#</a> has-all-permissions</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 控制台是否默认有全部权限。</p>
</li>
</ul>
<h2 id="item-validation" tabindex="-1"><a class="header-anchor" href="#item-validation" aria-hidden="true">#</a> item-validation</h2>
<h3 id="display-name" tabindex="-1"><a class="header-anchor" href="#display-name" aria-hidden="true">#</a> display-name</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>8192</code></p>
</li>
<li>
<p><strong>描述</strong>: 物品名称（Display）的最大字符长度。</p>
</li>
</ul>
<h3 id="lore-line" tabindex="-1"><a class="header-anchor" href="#lore-line" aria-hidden="true">#</a> lore-line</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>8192</code></p>
</li>
<li>
<p><strong>描述</strong>: 物品 Lore 的最大字符长度。</p>
</li>
</ul>
<h3 id="resolve-selectors-in-books" tabindex="-1"><a class="header-anchor" href="#resolve-selectors-in-books" aria-hidden="true">#</a> resolve-selectors-in-books</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong> 是否要在书中解析选择器。当启用后，有创造模式的玩家可以使用另外一种方式使服务器崩溃。</p>
</li>
</ul>
<h3 id="book" tabindex="-1"><a class="header-anchor" href="#book" aria-hidden="true">#</a> book</h3>
<h4 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>8192</code></p>
</li>
<li>
<p><strong>描述</strong>: 书作者的最大字符长度。</p>
</li>
</ul>
<h4 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>16384</code></p>
</li>
<li>
<p><strong>描述</strong>: 书页数的最大字符长度。</p>
</li>
</ul>
<h4 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>8192</code></p>
</li>
<li>
<p><strong>描述</strong>: 书标题的最大字符长度。</p>
</li>
</ul>
<h3 id="book-size" tabindex="-1"><a class="header-anchor" href="#book-size" aria-hidden="true">#</a> book-size</h3>
<h4 id="page-max" tabindex="-1"><a class="header-anchor" href="#page-max" aria-hidden="true">#</a> page-max</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>2560</code></p>
</li>
<li>
<p><strong>描述</strong>: 书的单页可以为整书提供的最大字节数。</p>
</li>
</ul>
<h4 id="total-multiplier" tabindex="-1"><a class="header-anchor" href="#total-multiplier" aria-hidden="true">#</a> total-multiplier</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>0.98</code></p>
</li>
<li>
<p><strong>描述</strong>: 书中单页从最后一页获取作为贡献全书最大字节的倍数 (第一页的倍数是 <code v-pre>1.0</code>).</p>
</li>
</ul>
<h2 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> logging</h2>
<h3 id="deobfuscate-stacktraces" tabindex="-1"><a class="header-anchor" href="#deobfuscate-stacktraces" aria-hidden="true">#</a> deobfuscate-stacktraces</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否将日志中的 Spigot mapping 堆栈转换为 Mojang mapping。该选项对使用 Mojang mapping 的服务器无效。</p>
</li>
</ul>
<h3 id="log-player-ip-addresses" tabindex="-1"><a class="header-anchor" href="#log-player-ip-addresses" aria-hidden="true">#</a> log-player-ip-addresses</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器日志是否要记录玩家的 IP 地址。是否开启此项都不会影响插件获取玩家的 IP 地址。</p>
</li>
</ul>
<h3 id="use-rgb-for-named-text-colors" tabindex="-1"><a class="header-anchor" href="#use-rgb-for-named-text-colors" aria-hidden="true">#</a> use-rgb-for-named-text-colors</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: ANSI 颜色是否应在记录日志时转换为 RGB 颜色。</p>
</li>
</ul>
<h2 id="messages" tabindex="-1"><a class="header-anchor" href="#messages" aria-hidden="true">#</a> messages</h2>
<h3 id="no-permission" tabindex="-1"><a class="header-anchor" href="#no-permission" aria-hidden="true">#</a> no-permission</h3>
<ul>
<li><strong>默认值</strong>:</li>
</ul>
<p><code v-pre>I'm sorry, but you do not have permission to perform this command. Please contact the server administrators if you believe that this is in error.</code></p>
<blockquote>
<p>中文参考翻译：<code v-pre>很抱歉，但是目前你的权限还不能使用此命令。如果你依然认为这是一个错误，请与服务器管理员联系。</code></p>
</blockquote>
<ul>
<li><strong>描述</strong>: 当玩家运行某命令或进行某操作时，若权限不足所提示的文本。插件可以为其命令使用不同的提示文本。</li>
</ul>
<h3 id="use-display-name-in-quit-messages" tabindex="-1"><a class="header-anchor" href="#use-display-name-in-quit-messages" aria-hidden="true">#</a> use-display-name-in-quit-messages</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 当玩家退出服务器时发送的信息应该用显示名称（可以被插件修改，即 Display name）还是真实的名称。</p>
</li>
</ul>
<h3 id="kick" tabindex="-1"><a class="header-anchor" href="#kick" aria-hidden="true">#</a> kick</h3>
<h4 id="authentication-servers-down" tabindex="-1"><a class="header-anchor" href="#authentication-servers-down" aria-hidden="true">#</a> authentication-servers-down</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>&lt;lang:multiplayer.disconnect.authservers_down&gt;</code></p>
</li>
<li>
<p><strong>描述</strong>: 当无法连接到 Mojang 验证服务器时提示的文本。</p>
</li>
</ul>
<h4 id="connection-throttle" tabindex="-1"><a class="header-anchor" href="#connection-throttle" aria-hidden="true">#</a> connection-throttle</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>Connection throttled! Please wait before reconnecting.</code></p>
</li>
<li>
<p><strong>默认值</strong>: 当连接阻塞（即点击加入服务器按钮后极快速的断开连接并重新请求加入）时服务器发送给玩家的消息。可以在 <code v-pre>bukkit.yml</code> 中配置。</p>
</li>
</ul>
<h4 id="flying-player" tabindex="-1"><a class="header-anchor" href="#flying-player" aria-hidden="true">#</a> flying-player</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>&lt;lang:multiplayer.disconnect.flying&gt;</code></p>
</li>
<li>
<p><strong>描述</strong>: 当玩家被检测到飞行作弊时踢出服务器显示的消息。</p>
</li>
</ul>
<h4 id="flying-vehicle" tabindex="-1"><a class="header-anchor" href="#flying-vehicle" aria-hidden="true">#</a> flying-vehicle</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>&lt;lang:multiplayer.disconnect.flying&gt;</code></p>
</li>
<li>
<p><strong>描述</strong>: 当玩家被检测到驾驶时飞行作弊时踢出服务器显示的消息。</p>
</li>
</ul>
<h2 id="misc" tabindex="-1"><a class="header-anchor" href="#misc" aria-hidden="true">#</a> misc</h2>
<h3 id="fix-entity-position-desync" tabindex="-1"><a class="header-anchor" href="#fix-entity-position-desync" aria-hidden="true">#</a> fix-entity-position-desync</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要修复服务器与客户端的实体同步位置不精确的 Bug。修复 <a href="https://bugs.mojang.com/browse/MC-4" target="_blank" rel="noopener noreferrer">MC-4<ExternalLinkIcon/></a> 的 Bug。</p>
</li>
</ul>
<h3 id="lag-compensate-block-breaking" tabindex="-1"><a class="header-anchor" href="#lag-compensate-block-breaking" aria-hidden="true">#</a> lag-compensate-block-breaking</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器是否需要使用时间或 TPS 判断破坏方块时间。因为客户端视服务器的 TPS 始终为20，所以导致在服务器出现延迟时，破坏方块会出现两者不一致的情况。此设置即修复此问题。</p>
</li>
</ul>
<h3 id="load-permissions-yml-before-plugins" tabindex="-1"><a class="header-anchor" href="#load-permissions-yml-before-plugins" aria-hidden="true">#</a> load-permissions-yml-before-plugins</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要在在加载插件之前优先加载 permissions.yml 文件，允许在其启动时立刻读取数据。</p>
</li>
</ul>
<h3 id="max-joins-per-tick" tabindex="-1"><a class="header-anchor" href="#max-joins-per-tick" aria-hidden="true">#</a> max-joins-per-tick</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>3</code></p>
</li>
<li>
<p><strong>描述</strong>: 设定每 Tick 最大允许多少名玩家加入服务器。若玩家在加入时超过了此限制，则会往后推迟加入时间。与 <code v-pre>Bukkit.yml</code> 配置文件中的 <code v-pre>connection-throttling</code> 没有任何关系。</p>
</li>
</ul>
<h3 id="region-file-cache-size" tabindex="-1"><a class="header-anchor" href="#region-file-cache-size" aria-hidden="true">#</a> region-file-cache-size</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>256</code></p>
</li>
<li>
<p><strong>描述</strong>: 区域文件缓存的最大大小（存储空间）。</p>
</li>
</ul>
<h3 id="use-alternative-luck-forumula" tabindex="-1"><a class="header-anchor" href="#use-alternative-luck-forumula" aria-hidden="true">#</a> use-alternative-luck-forumula</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要为幸运效果应用新的 <a href="https://gist.github.com/aikar/40281f6c73ec9b6fef7588e6461e1ba9" target="_blank" rel="noopener noreferrer">计算方式<ExternalLinkIcon/></a>。同时，未定义但应适用此效果的部分游戏内容也将享受幸运效果。这对钓鱼计算公式有重大变化。</p>
</li>
</ul>
<h3 id="use-dimension-type-for-custom-spawners" tabindex="-1"><a class="header-anchor" href="#use-dimension-type-for-custom-spawners" aria-hidden="true">#</a> use-dimension-type-for-custom-spawners</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 幻翼、流浪商人是否应该在自定义主世界中生成。默认为 <code v-pre>false</code> 为与原版相契合。</p>
</li>
</ul>
<h2 id="packet-limiter" tabindex="-1"><a class="header-anchor" href="#packet-limiter" aria-hidden="true">#</a> packet-limiter</h2>
<h3 id="all-packets" tabindex="-1"><a class="header-anchor" href="#all-packets" aria-hidden="true">#</a> all-packets</h3>
<h4 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>KICK</code></p>
</li>
<li>
<p><strong>描述</strong>:  一旦超过限制时需要采取的处罚措施。当填入 <code v-pre>DROP</code> 时将忽略超过限制的包，<code v-pre>KICK</code> 将会踢出发送超过限制的包的玩家。</p>
</li>
</ul>
<h4 id="interval" tabindex="-1"><a class="header-anchor" href="#interval" aria-hidden="true">#</a> interval</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>7.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 应用 <code v-pre>max-packet-rate</code> 时所需的间隔时间，以秒为单位。</p>
</li>
</ul>
<h4 id="max-packet-rate" tabindex="-1"><a class="header-anchor" href="#max-packet-rate" aria-hidden="true">#</a> max-packet-rate</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>500.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 一段时间内服务器可接受每名玩家发送最大的包的数量。</p>
</li>
</ul>
<h3 id="kick-message" tabindex="-1"><a class="header-anchor" href="#kick-message" aria-hidden="true">#</a> kick-message</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>&lt;red&gt;&lt;lang:disconnect.exceeded_packet_rate&gt;</code></p>
</li>
<li>
<p><strong>描述</strong>: 玩家发送过多包后踢出服务器时提示的消息。</p>
</li>
</ul>
<h3 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides" aria-hidden="true">#</a> overrides</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>ServerboundPlaceRecipePacket</code>, <code v-pre>DROP</code>, <code v-pre>4.0</code>, <code v-pre>5.0</code></p>
</li>
<li>
<p><strong>描述</strong>: 为独立命名的任意 packet 覆盖全局配置。你可以在 Timings 找到每一个包的名称。对于有经验的用户，无论什么服务器 Packet 名均使用 Mojang mapping。</p>
</li>
</ul>
<h2 id="player-auto-save" tabindex="-1"><a class="header-anchor" href="#player-auto-save" aria-hidden="true">#</a> player-auto-save</h2>
<h3 id="max-per-tick" tabindex="-1"><a class="header-anchor" href="#max-per-tick" aria-hidden="true">#</a> max-per-tick</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1</code></p>
</li>
<li>
<p><strong>描述</strong>: 每 Tick 最多保存多少名玩家的数据。设定为默认值 <code v-pre>-1</code> 将会根据 <code v-pre>player-auto-save.rate</code> 设定一个推荐数值，即 <code v-pre>10</code> 或 <code v-pre>20</code>。</p>
</li>
</ul>
<h3 id="rate" tabindex="-1"><a class="header-anchor" href="#rate" aria-hidden="true">#</a> rate</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>-1</code></p>
</li>
<li>
<p><strong>描述</strong>: 应当在多少 Ticks 时保存一次玩家数据。如果设定为 <code v-pre>-1</code> 则会使用 <code v-pre>bukkit.yml</code> 中的 <code v-pre>ticks-per.autosave</code> 项。</p>
</li>
</ul>
<h2 id="proxies" tabindex="-1"><a class="header-anchor" href="#proxies" aria-hidden="true">#</a> proxies</h2>
<h3 id="proxy-protocol" tabindex="-1"><a class="header-anchor" href="#proxy-protocol" aria-hidden="true">#</a> proxy-protocol</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器是否需要处理 <a href="https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt" target="_blank" rel="noopener noreferrer">代理协议<ExternalLinkIcon/></a> 消息文本。 这和 Velocity 或是 BungeeCord 完全没有关系，仅当使用 HAProxy 或类似软件时才应启用。</p>
</li>
</ul>
<h3 id="bungee-cord" tabindex="-1"><a class="header-anchor" href="#bungee-cord" aria-hidden="true">#</a> bungee-cord</h3>
<h4 id="online-mode" tabindex="-1"><a class="header-anchor" href="#online-mode" aria-hidden="true">#</a> online-mode</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>descriptions</strong>: 当服务器作为 BungeeCord 子端时，应该如何处理玩家的 UUID 和数据。始终当保持此项应与 BungeeCord 设置中的 <code v-pre>online-mode</code> 一致。</p>
</li>
</ul>
<h3 id="velocity" tabindex="-1"><a class="header-anchor" href="#velocity" aria-hidden="true">#</a> velocity</h3>
<h4 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否应当接受 Velocity 的 Modern 协议转发格式。</p>
</li>
</ul>
<h4 id="online-mode-1" tabindex="-1"><a class="header-anchor" href="#online-mode-1" aria-hidden="true">#</a> online-mode</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 当服务器作为 Velocity 子端时，该如何处理玩家的 UUID 和数据。始终保持此项应与 Velocity 设置中的 <code v-pre>online-mode</code> 一致。</p>
</li>
</ul>
<h4 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> secret</h4>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>&lt;空&gt;</code></p>
</li>
<li>
<p><strong>描述</strong>: 此服务器和 Velocity 的 Secert 字段。 此值必须与 Velocity 的 <code v-pre>forwarding-secret</code> 值保持一致。</p>
</li>
</ul>
<h2 id="scoreboards" tabindex="-1"><a class="header-anchor" href="#scoreboards" aria-hidden="true">#</a> scoreboards</h2>
<h3 id="save-empty-scoreboard-teams" tabindex="-1"><a class="header-anchor" href="#save-empty-scoreboard-teams" aria-hidden="true">#</a> save-empty-scoreboard-teams</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 许多计分板插件遗留大量的空的计分板 Teams，会大大减缓登录速度。是否要自动清理这些无用的计分板 Teams。</p>
</li>
</ul>
<h3 id="track-plugin-scoreboards" tabindex="-1"><a class="header-anchor" href="#track-plugin-scoreboards" aria-hidden="true">#</a> track-plugin-scoreboards</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 服务器是否跟踪计分板插件时只追踪 dummy 类型的计分项。这是一个的变化，但是默认值<code v-pre>false</code>是合理的，因为当你使用某些计分板插件时同时启用此项会减缓性能。</p>
</li>
</ul>
<h2 id="spam-limiter" tabindex="-1"><a class="header-anchor" href="#spam-limiter" aria-hidden="true">#</a> spam-limiter</h2>
<h3 id="incoming-packet-threshold" tabindex="-1"><a class="header-anchor" href="#incoming-packet-threshold" aria-hidden="true">#</a> incoming-packet-threshold</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>300</code></p>
</li>
<li>
<p><strong>描述</strong>: 设定一个阈值。超过此阈值后的所有包都将视为刷屏并忽略它们。</p>
</li>
</ul>
<h3 id="recipe-spam-increment" tabindex="-1"><a class="header-anchor" href="#recipe-spam-increment" aria-hidden="true">#</a> recipe-spam-increment</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>1</code></p>
</li>
<li>
<p><strong>描述</strong>: 当玩家点击一个配方后，配方刷屏计数器应该增加多少数字。</p>
</li>
</ul>
<h3 id="recipe-spam-limit" tabindex="-1"><a class="header-anchor" href="#recipe-spam-limit" aria-hidden="true">#</a> recipe-spam-limit</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>20</code></p>
</li>
<li>
<p><strong>描述</strong>: 配方刷屏计数器应该累计到多少数字后踢出玩家。</p>
</li>
</ul>
<h3 id="tab-spam-increment" tabindex="-1"><a class="header-anchor" href="#tab-spam-increment" aria-hidden="true">#</a> tab-spam-increment</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>1</code></p>
</li>
<li>
<p><strong>描述</strong>: 在聊天中按下 Tab 使用自动补全时，Tab 补全刷屏计数器应该增加多少数字。</p>
</li>
</ul>
<h3 id="tab-spam-limit" tabindex="-1"><a class="header-anchor" href="#tab-spam-limit" aria-hidden="true">#</a> tab-spam-limit</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>500</code></p>
</li>
<li>
<p><strong>描述</strong>: Tab 补全刷屏计数器应该累计到多少数字后踢出玩家。</p>
</li>
</ul>
<h2 id="timings" tabindex="-1"><a class="header-anchor" href="#timings" aria-hidden="true">#</a> timings</h2>
<h3 id="enabled-1" tabindex="-1"><a class="header-anchor" href="#enabled-1" aria-hidden="true">#</a> enabled</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 设定 Timings 的全局启用状态。</p>
</li>
</ul>
<h3 id="hidden-config-entries" tabindex="-1"><a class="header-anchor" href="#hidden-config-entries" aria-hidden="true">#</a> hidden-config-entries</h3>
<ul>
<li><strong>默认值</strong>:</li>
</ul>
<p><code v-pre>[database, settings.bungeecord-address, settings.velocity-support.secret, proxies.velocity.secret]</code></p>
<ul>
<li><strong>描述</strong>: 在 Timings 报告网页上应该隐藏哪些关于服务器的配置信息。</li>
</ul>
<h3 id="history-interval" tabindex="-1"><a class="header-anchor" href="#history-interval" aria-hidden="true">#</a> history-interval</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>300</code></p>
</li>
<li>
<p><strong>描述</strong>: 在 Timings 报告网页上两个不同的点之间要间隔多长时间。此项以秒为单位。</p>
</li>
</ul>
<h3 id="history-length" tabindex="-1"><a class="header-anchor" href="#history-length" aria-hidden="true">#</a> history-length</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>3600</code></p>
</li>
<li>
<p><strong>描述</strong>: 在单次报告中要保留的数据总量。此值会在 Timings 服务器上验证，过大的数据会拒绝受理。</p>
</li>
</ul>
<h3 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name" aria-hidden="true">#</a> server-name</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>Unknown Server</code></p>
</li>
<li>
<p><strong>描述</strong>: Timings 中显示的服务器名称是什么。</p>
</li>
</ul>
<h3 id="server-name-privacy" tabindex="-1"><a class="header-anchor" href="#server-name-privacy" aria-hidden="true">#</a> server-name-privacy</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要在 Timings 报告中隐藏服务器名称相关信息。</p>
</li>
</ul>
<h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>https://timings.aikar.co</code></p>
</li>
<li>
<p><strong>描述</strong>: 指定一个 <a href="https://github.com/aikar/timings" target="_blank" rel="noopener noreferrer">Timings Viewer<ExternalLinkIcon/></a> 服务器，并将此 Timings 报告发送到该服务器上。</p>
</li>
</ul>
<h3 id="verbose" tabindex="-1"><a class="header-anchor" href="#verbose" aria-hidden="true">#</a> verbose</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否要在 Timings 报告中显示更加详细的信息。例如：启用后，某个实体导致服务器卡服，所显示的信息将会比“实体（entities）”二字要详细的多。</p>
</li>
</ul>
<h2 id="unsupported-settings" tabindex="-1"><a class="header-anchor" href="#unsupported-settings" aria-hidden="true">#</a> unsupported-settings</h2>
<h3 id="allow-headless-pistons" tabindex="-1"><a class="header-anchor" href="#allow-headless-pistons" aria-hidden="true">#</a> allow-headless-pistons</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否允许在服务器中出现无头活塞，玩家通常用它来（永久）打破正常无法破坏的方块（比如下界破坏基岩天花板）。</p>
</li>
</ul>
<h3 id="allow-permanent-block-break-exploits" tabindex="-1"><a class="header-anchor" href="#allow-permanent-block-break-exploits" aria-hidden="true">#</a> allow-permanent-block-break-exploits</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否可以使用原版漏洞破坏原版“无法破坏”的方块。包含基岩，末地传送门框架，末地传送门等等。</p>
</li>
</ul>
<h3 id="allow-piston-duplication" tabindex="-1"><a class="header-anchor" href="#allow-piston-duplication" aria-hidden="true">#</a> allow-piston-duplication</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>false</code></p>
</li>
<li>
<p><strong>描述</strong>: 是否应该允许复制 TNT，地毯和铁轨。沙子不在此之内。</p>
</li>
</ul>
<h3 id="perform-username-validation" tabindex="-1"><a class="header-anchor" href="#perform-username-validation" aria-hidden="true">#</a> perform-username-validation</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>true</code></p>
</li>
<li>
<p><strong>默认值</strong>: 服务器是否要验证玩家用户名。如果不启用，则会允许名称中含有特殊字符的玩家加入到服务器，不过此项会与部分插件不兼容。</p>
</li>
</ul>
<h2 id="watchdog" tabindex="-1"><a class="header-anchor" href="#watchdog" aria-hidden="true">#</a> watchdog</h2>
<h3 id="early-warning-delay" tabindex="-1"><a class="header-anchor" href="#early-warning-delay" aria-hidden="true">#</a> early-warning-delay</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>10000</code></p>
</li>
<li>
<p><strong>描述</strong>: 在服务器挂起后，看门狗在多少毫秒后自动崩溃掉服务器。</p>
</li>
</ul>
<h3 id="early-warning-every" tabindex="-1"><a class="header-anchor" href="#early-warning-every" aria-hidden="true">#</a> early-warning-every</h3>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>5000</code></p>
</li>
<li>
<p><strong>描述</strong>: 在服务器挂起后，看门狗在多少毫秒后自动在终端打印线程崩溃时间的间隔。</p>
</li>
</ul>
</div></template>


