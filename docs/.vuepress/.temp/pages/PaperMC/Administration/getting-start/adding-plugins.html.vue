<template><div><h1 id="添加插件" tabindex="-1"><a class="header-anchor" href="#添加插件" aria-hidden="true">#</a> 添加插件</h1>
<p>插件是从Paper内置的配置文件延申到服务器游戏内容中最强大的方式。插件提供的新功能从可以让喝牛奶同时恢复饥饿值、使枯木生长为参天大树，也可以为服务器添加一个独创的游戏玩法。</p>
<blockquote>
<p><strong>恶意代码</strong><br>
确保你下载的渠道和下载的插件是安全的！插件不但可以无条件的修改游戏服务器，同时也还可以修改系统。<br>
因此请当心！确保你下载的插件所运行的代码是安全的。</p>
</blockquote>
<h2 id="寻找插件" tabindex="-1"><a class="header-anchor" href="#寻找插件" aria-hidden="true">#</a> 寻找插件</h2>
<p>在安装插件之前，你应该先准备好你想要安装的插件。你可以在 SpigotMC, BukkitDev, 或者在 PaperMC 论坛中找到你想要安装的插件，也会有一部分插件在GitHub上发布。<br>
有效寻找插件的方式不是使用内置的搜索功能，而是善用浏览器。在浏览器中输入<code v-pre>Minecraft plugins</code>后面跟上你想要使用的插件的主要功能，大多数情况下都能找到想要的插件。</p>
<blockquote>
<p>译者注：<br>
别用百度，用必应。必应搜索<code v-pre>Minecraft plugin &lt;加上你要找的插件英文关键字&gt;</code></p>
</blockquote>
<blockquote>
<p><strong>Paper与Spigot和Bukkit的兼容性</strong><br>
Paper兼容Bukkit和Spigot的插件。除非插件特别强调不支持Paper服务端，即默认代表该插件可以在Paper服务器上使用。</p>
</blockquote>
<h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2>
<ol>
<li>下载你想要使用的插件。确保下载的插件的是以<code v-pre>.jar</code>结尾。有些插件作者喜欢通过以<code v-pre>.zip</code>压缩包的形式分发插件，所以需要解压缩此压缩文件来获得以<code v-pre>.jar</code>后缀结尾的插件：同时也会说明插件适用于哪些服务器。</li>
<li>当在本地有一份可用的插件时，找到你的Paper服务器根目录中的<code v-pre>plugins</code>文件夹。</li>
<li>将<code v-pre>.jar</code>文件拖拽到plugins文件夹中。若你使用需要远程连接的服务器，则需要使用面板或者SFTP上传插件。不过无论使用哪种方式上传，最终得到的插件与运行的效果是一样的。</li>
<li>重启服务器。不出意外的话插件应该正常加载。</li>
<li>检查插件是否成功加载。当服务器启动完毕后，在游戏内输入<code v-pre>/plugins</code>或者在终端输入<code v-pre>plugins</code>再次检查。对于成功加载的插件，在插件列表中应当以绿色的插件名显示。如果没有列表中没有这个插件、或者插件名称显示为红色则代表没有正常加载，需要进行故障排查。</li>
</ol>
<h2 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查" aria-hidden="true">#</a> 故障排查</h2>
<p>故障排查的第一步是检查服务器启动日志。服务器最新日志会放在服务器根目录下的<code v-pre>logs/latest.log</code>文件里。你需要从头开始阅读整个日志以检查插件应该在何时被加载并获得一份详细的报错。</p>
<h3 id="缺少依赖" tabindex="-1"><a class="header-anchor" href="#缺少依赖" aria-hidden="true">#</a> 缺少依赖</h3>
<p>当你看到了这样一段文字：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'  
org.bukkit.plugin.UnknownDependencyException:  Unknown/missing dependency plugins:  [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你尝试安装的插件缺少依赖（前置）。通常情况下，依赖是另一个Bukkit插件，要想正常加载你所使用的插件，必须先在服务器中先安装此依赖插件才行。虽然你会看到的报错可能长的离谱，但是最重要的一行文本是：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句话的意思是，要想加载<code v-pre>MyAwesomePlugin</code>插件，则必须先在服务器上安装<code v-pre>Vault</code>插件。</p>
<h3 id="未知的-plugin-yml" tabindex="-1"><a class="header-anchor" href="#未知的-plugin-yml" aria-hidden="true">#</a> 未知的 plugin.yml</h3>
<p>当你看到了类似于以下内容的文本时：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'
org.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你下载的插件不是有效的Paper插件。通常发生在以下情况：</p>
<ol>
<li>该Jar文件不适用于Paper。它也许适用于Forge、Fabric等Mod服务端/客户端，不过Paper无法加载它。</li>
<li>插件未能完全下载。当你使用<code v-pre>curl</code>或者<code v-pre>wget</code>等工具下载时时，你可能下载的是某网站的源码，而你不是想要下载的插件。大多数出现此情况是因为网络原因，请尝试再次下载插件。如果你通过面板或者SFTP上传插件，确保你的SFTP客户端是二进制传输模式，而不是ASCII模式。查看你使用的SFTP软件文档来了解更多信息。</li>
</ol>
<blockquote>
<p><strong>译者说明:</strong><br>
如果你使用的插件以Jar后缀结尾，先试试用压缩软件打开它！<br>
看看压缩包（Jar通俗点讲是一个压缩包）里面能不能找到<code v-pre>plugin.yml</code>。如果找不到，那么这就不是一个可以使用的服务器插件！</p>
</blockquote>
<h3 id="未知的插件名称" tabindex="-1"><a class="header-anchor" href="#未知的插件名称" aria-hidden="true">#</a> 未知的插件名称</h3>
<p>当你看到类似于以下内容的文本时：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Ambiguous plugin name `Essentials' for files `plugins/EssentialsX-2.19.4.jar' and `plugins/Essentialsx-2.20.0-dev.jar' in `plugins'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味着你有两个安装的插件是同名的，Paper不支持同名插件同时加载。此情况发生在同时安装了两个<code v-pre>EssentialsX</code>插件：一个是正式版2.19.4，一个是开发版本2.20.0。确保安装的插件没有重复的，如果有，删除一个旧版本或一个你不需要的版本，然后重启服务器。</p>
<h3 id="其它情况" tabindex="-1"><a class="header-anchor" href="#其它情况" aria-hidden="true">#</a> 其它情况</h3>
<p>如果出现任何未在上述列表中列出的情况，请先尝试自己阅读并排查报错。即使报错通常很长，但是很多情况下只需要阅读前两行就能明白出现了什么错误。如果还是搞不清楚，请在Paper的Discord服务器中找到 #paper-help 频道以寻求帮助。</p>
<h2 id="未记录任何日志" tabindex="-1"><a class="header-anchor" href="#未记录任何日志" aria-hidden="true">#</a> 未记录任何日志</h2>
<p>如果你没有在日志中找到关于加载插件的文本，那么你的服务器很有可能根本没有找到这个插件。服务器加载插件需要同时满足以下条件：</p>
<ol>
<li>位于服务器根目录中的<code v-pre>plugins</code>文件夹中。Paper不会尝试寻找子目录中的插件，更不会加载。所有插件必须位于<code v-pre>plugins</code>根目录下。</li>
<li>文件以<code v-pre>.jar</code>后缀结尾。如果它不以<code v-pre>.jar</code>结尾，那么你下载的可能不是插件本体，Paper也无法读取。有些作者使用<code v-pre>.zip</code>压缩包来分发多个插件文件，所以在安装之前，请先解压缩它们。</li>
</ol>
<p>如果同时满足以上两个条件，但是还是看不到任何关于插件加载的日志，请在Discord服务器中找到 #paper-help 频道寻求帮助。</p>
</div></template>


