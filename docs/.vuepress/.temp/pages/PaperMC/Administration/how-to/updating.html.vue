<template><div><h1 id="更新-paper" tabindex="-1"><a class="header-anchor" href="#更新-paper" aria-hidden="true">#</a> 更新 Paper</h1>
<p>经常更新是对于每一个服务器都要做的事情。Paper每天都会发布新功能和数个Bug修复补丁，所以我们建议要保证持续修复最新的Bug：至少每周更新一次服务端。<br>
更新很简单，重要的是如果正确地更新Paper。</p>
<blockquote>
<p><strong>不要在服务器运行时直接替换Jar文件</strong><br>
除非你知道而且也明白为什么要这么做，否则我们不推荐你直接在服务器正在运行时直接替换掉Jar文件（无论是插件还是Paper服务端核心）。</p>
</blockquote>
<h2 id="第一步-备份" tabindex="-1"><a class="header-anchor" href="#第一步-备份" aria-hidden="true">#</a> 第一步：备份</h2>
<p>这是最重要的一步，也是经常在更新中被遗漏的一步。即使Paper很少会更新核心后出现Bug，但是这可不意味着插件和某些其它文件也能保证！在更新服务器时一并将服务器备份是个好主意。无论服务器规模如何，都应该保证服务器有一个可用的备份。</p>
<h2 id="第二步-更新插件" tabindex="-1"><a class="header-anchor" href="#第二步-更新插件" aria-hidden="true">#</a> 第二步：更新插件</h2>
<p>就如同应该经常更新Paper一样，始终保持插件更新到最新也很重要。你永远都不知道插件作者在开发什么新东西，是在修复错误还是开发新功能。</p>
<p>一个鲜为人知的功能则是Paper有一个<code v-pre>update</code>文件夹。以下将教你如何使用该功能：</p>
<ol>
<li>在<code v-pre>plugins</code>文件夹中创建一个<code v-pre>update</code>子文件夹。</li>
<li>挨个下载要更新的插件并放入<code v-pre>update</code>文件夹。</li>
<li>重启服务器，不要管<code v-pre>update</code>以外的任何插件。</li>
</ol>
<p>这样，你即同时更新了所有插件又无需为此提前关闭服务器、或是在服务器运行时直接替换掉插件Jar文件。所以无需在更新Paper服务端之前再浪费时间更新插件了。<br>
你可以使用这个功能允许你一口气更新掉Paper和所有插件，而无需占用宝贵的停机时间更新插件。</p>
<h2 id="第三步-更新paper" tabindex="-1"><a class="header-anchor" href="#第三步-更新paper" aria-hidden="true">#</a> 第三步：更新Paper</h2>
<blockquote>
<p><strong>提示</strong><br>
如果你使用共享的主机，你的主机服务商可能会提供内置的更新系统！在更新之前，先看一下正在使用的主机的文档吧。</p>
</blockquote>
<p>更新Paper服务端很简单。</p>
<ol>
<li><a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a>新版本的Paper</li>
<li>停止运行服务器。不推荐在服务器运行时直接替换Jar文件。</li>
<li>用新的Jar文件替换掉旧的Jar文件。</li>
<li>启动服务器并注意观察终端的启动日志，确保插件和服务器正常加载；如果有插件在加载时报错，你也将注意到它们。</li>
</ol>
<p>为了缩短停机时间到最小，有的服务器管理员会选择先放入新的服务端核心，然后运行另外一个启动脚本启动服务器，而不是在停机时选中替换Jar文件。<br>
这两个方法都可以有效的更新Paper。</p>
<blockquote>
<p><strong>自动更新提醒</strong><br>
通过使用Paper的更新API，自动更新会很方便和快速。但是PaperMC并不推荐这样做，因为不清楚插件与新版本是否兼容或是否会引起其它问题，所以，如果依旧想要使用自动更新，请确保启动时始终观察终端，并留意查看启动时日志。<br>
如果选择使用自动更新，请制定一个备份计划表。</p>
</blockquote>
</div></template>


