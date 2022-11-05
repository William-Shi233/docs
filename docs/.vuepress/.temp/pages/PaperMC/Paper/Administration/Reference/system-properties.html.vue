<template><div><h1 id="paper-system-properties" tabindex="-1"><a class="header-anchor" href="#paper-system-properties" aria-hidden="true">#</a> Paper System Properties</h1>
<blockquote>
<p><strong>阅读前提醒</strong><br>
我不是一名Java开发者。以下的所有涉及Java或者其它术语我都不是很清楚。<br>
因此我并不是很推荐阅读此页文档。如果你是开发人员，请阅读 <a href="https://docs.papermc.io/paper/reference/system-properties" target="_blank" rel="noopener noreferrer">Paper System Properties<ExternalLinkIcon/></a><br>
以了解。对于完全不确定的翻译，下面有原文。</p>
</blockquote>
<p>这些系统配置可以在启动服务器之前就可以为不同项进行配置。</p>
<blockquote>
<p><strong>小心！</strong><br>
为JVM设定可以更改其工作方式，Paper服务器也不例外。<br>
如果你不确定某个Flag的作用，<strong>不要轻易使用它</strong>！</p>
</blockquote>
<h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2>
<p>系统配置在启动服务器时就已经设置好了。例如，如果你正在使用 <code v-pre>.bat</code> 或是 <code v-pre>.sh</code> 文件以启动服务器，你可以在文件中添加System Properties的相关参数。比如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> -Dpaper.log-level<span class="token operator">=</span>FINE <span class="token parameter variable">-jar</span> paper.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><strong>信息</strong><br>
部分Paper系统配置项需要带上一个“.”。<br>
在使用Windows Powershell时，需要拿双引号把它裹上。<br>
比如 <code v-pre>&quot;-Dpaper.log-level=FINE&quot;</code></p>
</blockquote>
<p>这里的 <code v-pre>-D</code> 用于设置环境属性，而系统属性则是带着 <code v-pre>FINE</code> 值的 <code v-pre>paper.log-level</code>。<br>
要使用，仅需将其加入到启动命令中即可。</p>
<blockquote>
<p><strong>注意</strong>
当一个系统属性的状态为 <code v-pre>unset</code> 时，更改为 <code v-pre>true</code> 就可以用它了。</p>
</blockquote>
<h2 id="properties-列表" tabindex="-1"><a class="header-anchor" href="#properties-列表" aria-hidden="true">#</a> Properties 列表</h2>
<h4 id="paper-playerconnection-keepalive" tabindex="-1"><a class="header-anchor" href="#paper-playerconnection-keepalive" aria-hidden="true">#</a> paper.playerconnection.keepalive:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>30</code></li>
<li><strong>描述</strong>: 当服务器接收不到玩家心跳包后，等待多长时间后断开连接。</li>
</ul>
<h4 id="timings-bypassmax" tabindex="-1"><a class="header-anchor" href="#timings-bypassmax" aria-hidden="true">#</a> timings.bypassMax:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 允许绕过Aikar的Timings API的最大数据限制。除非API更改为允许绕过，否则仅在服务器更改是无效的。</li>
</ul>
<h4 id="letmereload" tabindex="-1"><a class="header-anchor" href="#letmereload" aria-hidden="true">#</a> LetMeReload:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 当输入 <code v-pre>/reload</code> 命令时禁用确认重载文本。</li>
</ul>
<h4 id="paper-disablechannellimit" tabindex="-1"><a class="header-anchor" href="#paper-disablechannellimit" aria-hidden="true">#</a> paper.disableChannelLimit:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 禁用服务器插件通道限制。将禁用每名玩家128插件通道的限制。</li>
</ul>
<h4 id="net-kyori-adventure-text-warnwhenlegacyformattingdetected" tabindex="-1"><a class="header-anchor" href="#net-kyori-adventure-text-warnwhenlegacyformattingdetected" aria-hidden="true">#</a> net.kyori.adventure.text.warnWhenLegacyFormattingDetected:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当在聊天组件中检测到历史格式时是否要启用警告。</li>
</ul>
<h4 id="paper-disableclassprioritization" tabindex="-1"><a class="header-anchor" href="#paper-disableclassprioritization" aria-hidden="true">#</a> Paper.DisableClassPrioritization:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 禁用类优先级系统，主要是解决未能正确处理relocate和shade的问题。</li>
</ul>
<h4 id="paper-disableflushconsolidate" tabindex="-1"><a class="header-anchor" href="#paper-disableflushconsolidate" aria-hidden="true">#</a> Paper.disableFlushConsolidate:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 禁用Netty Flush Consolidation系统。</li>
<li><strong>原文</strong>: Disables the netty flush consolidation system.</li>
</ul>
<h4 id="paper-debugdynamicmissingkeys" tabindex="-1"><a class="header-anchor" href="#paper-debugdynamicmissingkeys" aria-hidden="true">#</a> Paper.debugDynamicMissingKeys:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 启用在NBT对象中为缺失键记录调试日志。</li>
</ul>
<h4 id="disable-watchdog" tabindex="-1"><a class="header-anchor" href="#disable-watchdog" aria-hidden="true">#</a> disable.watchdog:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 禁用Watchdog警告系统。</li>
</ul>
<h4 id="paper-explicit-flush" tabindex="-1"><a class="header-anchor" href="#paper-explicit-flush" aria-hidden="true">#</a> paper.explicit-flush:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 启用网络通道刷新缓冲。</li>
</ul>
<h4 id="paper-enable-sync-chunk-writes" tabindex="-1"><a class="header-anchor" href="#paper-enable-sync-chunk-writes" aria-hidden="true">#</a> Paper.enable-sync-chunk-writes:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 在每次调用时同步写入。会影响性能，尤其是是对于硬盘。</li>
</ul>
<h4 id="paper-debug-sync-loads" tabindex="-1"><a class="header-anchor" href="#paper-debug-sync-loads" aria-hidden="true">#</a> paper.debug-sync-loads:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 同步加载区块时启用记录调试日志。</li>
</ul>
<h4 id="paper-ignoreworlddataversion" tabindex="-1"><a class="header-anchor" href="#paper-ignoreworlddataversion" aria-hidden="true">#</a> Paper.ignoreWorldDataVersion:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 当加载世界时忽略数据版本。不推荐启用此项因为可能会导致出现问题。</li>
</ul>
<h4 id="debug-entities" tabindex="-1"><a class="header-anchor" href="#debug-entities" aria-hidden="true">#</a> debug.entities:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 为实体信息启用调试日志文本。</li>
</ul>
<h4 id="paper-bypasshostcheck" tabindex="-1"><a class="header-anchor" href="#paper-bypasshostcheck" aria-hidden="true">#</a> Paper.bypassHostCheck:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 当客户端尝试连接到服务器时绕过主机类型匹配。</li>
</ul>
<h4 id="paper-ticklist-warn-on-excessive-delay" tabindex="-1"><a class="header-anchor" href="#paper-ticklist-warn-on-excessive-delay" aria-hidden="true">#</a> paper.ticklist-warn-on-excessive-delay:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 当Tick列表延时过长时启用警告。</li>
</ul>
<h4 id="debug-rewriteforide" tabindex="-1"><a class="header-anchor" href="#debug-rewriteforide" aria-hidden="true">#</a> debug.rewriteForIde:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 在堆栈跟踪中移除NMS更改以在IDE中方便调试。也会remap CB插件调用以移除版本信息。</li>
</ul>
<h4 id="convertlegacysigns" tabindex="-1"><a class="header-anchor" href="#convertlegacysigns" aria-hidden="true">#</a> convertLegacySigns:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 将（旧）告示牌转换到新格式中。</li>
</ul>
<h4 id="paper-maxcustomchannelname" tabindex="-1"><a class="header-anchor" href="#paper-maxcustomchannelname" aria-hidden="true">#</a> paper.maxCustomChannelName:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>64</code></li>
<li><strong>描述</strong>: 设置插件通道名称的最大值。</li>
</ul>
<h4 id="paper-maxsignlength" tabindex="-1"><a class="header-anchor" href="#paper-maxsignlength" aria-hidden="true">#</a> Paper.maxSignLength:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>80</code></li>
<li><strong>描述</strong>: 设置告示牌一行文字的最大数量的文本。</li>
</ul>
<h4 id="paper-filterthreshhold" tabindex="-1"><a class="header-anchor" href="#paper-filterthreshhold" aria-hidden="true">#</a> Paper.FilterThreshhold:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>8192</code></li>
<li><strong>最小值</strong>: <code v-pre>8192</code></li>
<li><strong>描述</strong>: 设置过滤包的最大值的大小。</li>
</ul>
<h4 id="paper-minprecacheddatafixversion" tabindex="-1"><a class="header-anchor" href="#paper-minprecacheddatafixversion" aria-hidden="true">#</a> Paper.minPrecachedDatafixVersion:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>Minecraft 世界版本 + 1</code></li>
<li><strong>描述</strong>: 如果你想要转换大量的区块，你可以考虑从一点开始进行转换并设置此项。</li>
</ul>
<h4 id="paper-workerthreadcount" tabindex="-1"><a class="header-anchor" href="#paper-workerthreadcount" aria-hidden="true">#</a> Paper.WorkerThreadCount:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>8</code> 或 <code v-pre>CPU数量 - 2</code>。看哪个更低。</li>
<li><strong>描述</strong>: 用于区块加载的工作线程数。</li>
</ul>
<h4 id="paper-excessivetelimit" tabindex="-1"><a class="header-anchor" href="#paper-excessivetelimit" aria-hidden="true">#</a> Paper.excessiveTELimit:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>750</code></li>
<li><strong>描述</strong>: 超过此值则将方块实体拆分成多个包。</li>
</ul>
<h4 id="io-papermc-paper-suppress-sout-nags" tabindex="-1"><a class="header-anchor" href="#io-papermc-paper-suppress-sout-nags" aria-hidden="true">#</a> io.papermc.paper.suppress.sout.nags:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 禁止插件使用System.out/System.err输出消息。</li>
</ul>
<h4 id="paper-strict-thread-checks" tabindex="-1"><a class="header-anchor" href="#paper-strict-thread-checks" aria-hidden="true">#</a> paper.strict-thread-checks:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 设定AsyncCatcher的状态，若代码在非主线程上运行时将记录错误。</li>
</ul>
<h4 id="paper-skipserverpropertiescomments" tabindex="-1"><a class="header-anchor" href="#paper-skipserverpropertiescomments" aria-hidden="true">#</a> Paper.skipServerPropertiesComments:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 跳过server.properties中的注释。</li>
</ul>
<h4 id="paper-debuginvalidskullprofiles" tabindex="-1"><a class="header-anchor" href="#paper-debuginvalidskullprofiles" aria-hidden="true">#</a> Paper.debugInvalidSkullProfiles:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 为无效头颅启用调试日志记录。将记录所有无效头颅与其实际位置。</li>
</ul>
<h4 id="paper-alwaysprintwarningstate" tabindex="-1"><a class="header-anchor" href="#paper-alwaysprintwarningstate" aria-hidden="true">#</a> paper.alwaysPrintWarningState:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 是否始终为特定level打印警告。</li>
<li><strong>原文</strong>: Always prints the warning state for the particular level.</li>
</ul>
<h4 id="paper-printstacktraceonbadpluginclassaccess" tabindex="-1"><a class="header-anchor" href="#paper-printstacktraceonbadpluginclassaccess" aria-hidden="true">#</a> Paper.printStacktraceOnBadPluginClassAccess:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>unset</code></li>
<li><strong>描述</strong>: 当插件尝试访问一个非插件依赖的类时，打印堆栈跟踪</li>
</ul>
<h4 id="paper-parseyamlcommentsbydefault" tabindex="-1"><a class="header-anchor" href="#paper-parseyamlcommentsbydefault" aria-hidden="true">#</a> Paper.parseYamlCommentsByDefault:</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 默认是否分析Yaml中的注释。</li>
</ul>
</div></template>


