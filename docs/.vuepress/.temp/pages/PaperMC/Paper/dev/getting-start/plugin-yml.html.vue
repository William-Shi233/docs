<template><div><h1 id="paper-plugin-yml" tabindex="-1"><a class="header-anchor" href="#paper-plugin-yml" aria-hidden="true">#</a> Paper Plugin YML</h1>
<p>plugin.yml文件是你的插件最主要的配置文件。
包含你的插件最基本的信息，比如插件名，版本和简要描述。同时，也将包含加载插件的依赖，权限和命令。</p>
<p>书接上回。plugin.yml文件存放在你的工程中的 <code v-pre>resources</code> 文件夹中，结构如下图所示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>example-plugin
├── build.gradle.kts
├── settings.gradle.kts
└── src
    └── main
        ├── java
        └── resources
            └── plugin.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>
<p>这是一个 plugin.yml 模板：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> ExamplePlugin
<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0
<span class="token key atrule">main</span><span class="token punctuation">:</span> io.papermc.testplugin.ExamplePlugin
<span class="token key atrule">description</span><span class="token punctuation">:</span> An example plugin
<span class="token key atrule">author</span><span class="token punctuation">:</span> PaperMC
<span class="token key atrule">website</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//papermc.io
<span class="token key atrule">api-version</span><span class="token punctuation">:</span> <span class="token number">1.19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段" tabindex="-1"><a class="header-anchor" href="#字段" aria-hidden="true">#</a> 字段</h2>
<blockquote>
<p>这部分所有内容的所有字段都没有特定顺序。<br>
如果在它们的旁边有星号，即是必填项。</p>
</blockquote>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name*</h3>
<p>你的插件名。将会在插件列表中（<code v-pre>/plugins</code>）和日志文本中显示。<br>
如果设定了前缀，则会被所设定的前缀覆盖。</p>
<ul>
<li><code v-pre>name: ExamplePlugin</code></li>
</ul>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version*</h3>
<p>插件当前的版本。会在插件信息文本和服务器日志文本中显示。</p>
<ul>
<li><code v-pre>version: 1.0.0</code></li>
</ul>
<h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main*</h3>
<p>插件的主类。是唯一一个继承 <code v-pre>JavaPlugin</code> 的类，并且是插件的入口。</p>
<ul>
<li><code v-pre>main: io.papermc.testplugin.ExamplePlugin</code></li>
</ul>
<p>需要包含 包的路径和主类的名字（不用带.java或者.kt）</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<p>简单描述插件的作用。将会在插件信息命令中显示。</p>
<ul>
<li><code v-pre>description: An example plugin</code></li>
</ul>
<h3 id="author-authors" tabindex="-1"><a class="header-anchor" href="#author-authors" aria-hidden="true">#</a> author / authors</h3>
<p>插件的作者（开发者）。可以填写单个作者或作者列表。</p>
<ul>
<li><code v-pre>author: PaperMC</code></li>
<li><code v-pre>authors: [PaperMC, SpigotMC, Bukkit]</code>
将会在插件信息命令中显示。</li>
</ul>
<h3 id="website" tabindex="-1"><a class="header-anchor" href="#website" aria-hidden="true">#</a> website</h3>
<p>插件的网站。连接到GitHub存储库或是插件发布页很有用。</p>
<ul>
<li><code v-pre>website: https://papermc.io</code>
将会在插件信息命令中显示。</li>
</ul>
<h3 id="api-version" tabindex="-1"><a class="header-anchor" href="#api-version" aria-hidden="true">#</a> api-version</h3>
<p>插件正在使用的 Paper API。不包含次要版本（比如我正在用1.13.2的API，只需要写1.13，不用带 <code v-pre>.2</code>）<br>
服务器版本低于此处填写的API版本将直接拒绝加载插件<br>
有效的版本是1.13-1.19</p>
<ul>
<li><code v-pre>api-version: 1.19</code></li>
</ul>
<blockquote>
<p>如果没有指定此项，插件将会以legacy plugin加载并且在终端打印警告文本。</p>
</blockquote>
<h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h3>
<p>服务器应当在何时加载插件。应该填写 <code v-pre>STARTUP</code> 或 <code v-pre>POSTWORLD</code>。</p>
<ul>
<li><code v-pre>load: STARTUP</code></li>
</ul>
<h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3>
<p>插件的前缀。在日志中该前缀将取代插件名。</p>
<ul>
<li><code v-pre>prefix: EpicPaperMCHypePlugin</code></li>
</ul>
<h3 id="libraries" tabindex="-1"><a class="header-anchor" href="#libraries" aria-hidden="true">#</a> libraries</h3>
<blockquote>
<p><strong>警告</strong><br>
这个功能目前违反maven central的ToS。不过嘛，这个功能很有可能保留下来。</p>
</blockquote>
<blockquote>
<p><strong>译者说明</strong><br>
下面的第二行我不确定啥意思，原文在下面列出来了。</p>
</blockquote>
<p>列出你的插件需要依赖的libraries。这些libraries将会从Maven central存储库下载并加到 classpath 中。<br>
无需为shade分配libraries。</p>
<ul>
<li>原文：<code v-pre>This removes the need to shade and relocate the libraries.</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">libraries</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> com.google.guava<span class="token punctuation">:</span>guava<span class="token punctuation">:</span>30.1.1<span class="token punctuation">-</span>jre
  <span class="token punctuation">-</span> com.google.code.gson<span class="token punctuation">:</span>gson<span class="token punctuation">:</span>2.8.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> permissions</h3>
<p>列出你的插件所需的权限。如果需要限制哪些玩家可以使用哪些命令，这个功能很有用。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">permissions</span> <span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">permission.node</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">"This is a permission node"</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> op
        <span class="token key atrule">children</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">permission.node.child</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token punctuation">-</span> <span class="token key atrule">another.permission.node</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">"This is another permission node"</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> not op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>description是权限节点的描述。将会在权限列表中显示。default是权限节点的默认值，可以设为为 <code v-pre>op</code>/<code v-pre>not op</code>或<code v-pre>true</code>/<code v-pre>false</code>。此值默认是 <code v-pre>op</code>。<br>
每个权限节点都可以有子权限。当设定为 <code v-pre>true</code> 时它将继承父权限。</p>
<h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2>
<p>列出插件使用的命令。如果需要使用命令访问某些功能时很有用。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">commands</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">"This is a command"</span>
        <span class="token key atrule">usage</span><span class="token punctuation">:</span> <span class="token string">"/command &lt;arg>"</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cmd<span class="token punctuation">,</span> command<span class="token punctuation">]</span>
        <span class="token key atrule">permission</span><span class="token punctuation">:</span> permission.node
        <span class="token key atrule">permission-message</span><span class="token punctuation">:</span> <span class="token string">"You do not have permission to use this command"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>description</strong>是命令的描述。简要的描述命令的作用。</li>
<li><strong>usage</strong>是命令的用法。将会在玩家运行 <code v-pre>/help &lt;command&gt;</code> 命令时显示。</li>
<li><strong>aliases</strong> 是命令使用的一系列别名。对于缩短命令很有帮助。</li>
<li><strong>permission</strong>是玩家要使用此命令所需的权限节点。注意：玩家只有当他们有权限使用时才会显示命令。</li>
<li><strong>permission-message</strong>在玩家没有权限使用命令时显示的内容。</li>
</ul>
<h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2>
<blockquote>
<p><strong>依赖循环:</strong><br>
当玩家为插件指定依赖时，它会在你的插件加载之前优先加载。<br>
如果插件依赖重复则会导致问题。依赖循环具体会产生以下问题：
插件A -&gt; 依赖插件B -&gt; 依赖插件A -&gt; 又依赖插件B... 等等。</p>
<p>因为插件A和插件B都是彼此的依赖。（套娃）</p>
</blockquote>
<h3 id="depend" tabindex="-1"><a class="header-anchor" href="#depend" aria-hidden="true">#</a> depend</h3>
<p>列出插件要<strong>加载</strong>所需的依赖。需要指定插件名称。</p>
<blockquote>
<p>如果指定插件找不到，你的插件也不会加载。</p>
</blockquote>
<ul>
<li><code v-pre>depend: [Vault, WorldEdit]</code></li>
</ul>
<h3 id="softdepend" tabindex="-1"><a class="header-anchor" href="#softdepend" aria-hidden="true">#</a> softdepend</h3>
<p>要使用插件全部功能的依赖列表（软依赖。不用这些插件也能正常加载插件，但是不能使用全部功能）。需要指定插件名称。</p>
<ul>
<li><code v-pre>softdepend: [Vault, WorldEdit]</code></li>
</ul>
<h3 id="loadbefore" tabindex="-1"><a class="header-anchor" href="#loadbefore" aria-hidden="true">#</a> loadbefore</h3>
<p>列出应该在哪些插件加载之前优先加载。需要指定插件名称。<br>
如果某些插件需要使用你的插件的API时很有用。</p>
<ul>
<li><code v-pre>loadbefore: [Vault, FactionsUUID]</code></li>
</ul>
</div></template>


