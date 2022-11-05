<template><div><h1 id="paper-工程设置" tabindex="-1"><a class="header-anchor" href="#paper-工程设置" aria-hidden="true">#</a> Paper 工程设置</h1>
<blockquote>
<p><strong>译者注</strong><br>
本文的图片都是由译者提供的。供新手开发者找到文章提到的选项。</p>
</blockquote>
<p>由于Paper团队主要使用 <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA<ExternalLinkIcon/></a> 进行开发，所以本指南将以该IDE作为重点。<br>
不过，下文应当也适用于其它IDE，仅需针对性的作一些微小的修改即可。</p>
<p>Paper团队使用 <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer">Gradle<ExternalLinkIcon/></a> 作为构建工具，同时也需要Gradle进行构建。<br>
在经过修改后，下文的代码在修改后也将适用于其它构建工具，例如Maven。不过本文提供的代码将只适用Gradle。</p>
<p>阅读<a href="https://docs.gradle.org/current/userguide/migrating_from_maven.html" target="_blank" rel="noopener noreferrer">此<ExternalLinkIcon/></a>文档学习如何从Maven迁移到Gradle。</p>
<h3 id="创建新工程" tabindex="-1"><a class="header-anchor" href="#创建新工程" aria-hidden="true">#</a> 创建新工程</h3>
<p>打开你的IDE然后点击创建新工程的按钮。<br>
<a href="https://imgse.com/i/xlD8wq" target="_blank" rel="noopener noreferrer"><img src="https://s1.ax1x.com/2022/10/05/xlD8wq.png" alt="xlD8wq.png"><ExternalLinkIcon/></a><br>
在Intellij中，你需要选择你想要创建的工程类型 - 选择 <code v-pre>New Project</code>，然后选择 <code v-pre>Gradle - Kotlin DSL</code> 后单击 <code v-pre>Create</code>。</p>
<p><a href="https://imgse.com/i/xlDYkV" target="_blank" rel="noopener noreferrer"><img src="https://s1.ax1x.com/2022/10/05/xlDYkV.png" alt="xlDYkV.png"><ExternalLinkIcon/></a></p>
<p>接着，IDE将自动为你重定向至可添加工程依赖的 <code v-pre>build.gradle.kts</code> 文件。</p>
<h3 id="将paper作为依赖" tabindex="-1"><a class="header-anchor" href="#将paper作为依赖" aria-hidden="true">#</a> 将Paper作为依赖</h3>
<p>要将Paper作为依赖，你需要将Paper存储库和Paper本身添加到你的 <code v-pre>build.gradle.kts</code> 文件中。</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code>repositories <span class="token punctuation">{</span>
    <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">maven</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"https://repo.papermc.io/repository/maven-public/"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    <span class="token function">compileOnly</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.papermc.paper:paper-api:1.19.2-R0.1-SNAPSHOT"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

java <span class="token punctuation">{</span>
    toolchain<span class="token punctuation">.</span>languageVersion<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>JavaLanguageVersion<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设立-src-目录" tabindex="-1"><a class="header-anchor" href="#设立-src-目录" aria-hidden="true">#</a> 设立 <code v-pre>src</code> 目录</h3>
<blockquote>
<p><strong>跳过</strong><br>
如果IDE已经为你的工程自动创建 <code v-pre>src</code> 目录，你就可以跳过这一步了。</p>
</blockquote>
<p>要设立 <code v-pre>src</code> 目录，你需要新建一个命名为 <code v-pre>src</code> 的文件夹然后再在里面创建子目录，叫做 <code v-pre>main</code>。<br>
然后，在<code v-pre>Main</code>之中创建两个文件夹，分别命名为 <code v-pre>java</code> 和 <code v-pre>resources</code>。</p>
<p>该文件夹现在应该长得像这样：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>...
example-plugin
├── build.gradle.kts
├── settings.gradle.kts
└── src
    └── main
        ├── java
        └── resources
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设立-java-目录" tabindex="-1"><a class="header-anchor" href="#设立-java-目录" aria-hidden="true">#</a> 设立 <code v-pre>java</code> 目录</h3>
<p>你需要在<code v-pre>java</code>目录中存放你的Java代码。你必须先创建一些包来管理你的Java代码。
拿下面这个结构举例，我们创建了三个包并将其命名为 <code v-pre>io.papermc.testplugin</code>。而在包中有一个<code v-pre>ExamplePlugin</code>。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>...
example-plugin
├── build.gradle.kts
├── settings.gradle.kts
└── src
    └── main
        ├── java
        │   └── io
        │       └── papermc
        │           └── testplugin
        │               └── ExamplePlugin.java
        └── resources
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h3>
<p>可以看到，<code v-pre>ExamplePlugin</code>类（class）在 <code v-pre>io.papermc.testplugin</code> 包中。<br>
包是管理你的代码的方式。本质上，包就是个文件夹。在Java中，我们用包来管理与其相关的代码。<br>
如果你想要了解更多关于包的信息，你可以在Oracle的指南中<a href="https://docs.oracle.com/javase/tutorial/java/package/packages.html" target="_blank" rel="noopener noreferrer">查看<ExternalLinkIcon/></a>。</p>
<p>要为你的包<a href="https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html" target="_blank" rel="noopener noreferrer">命名<ExternalLinkIcon/></a>，你需要将域名倒序排列。比如有一个叫做 <code v-pre>papermc.io</code>的域名，你的包就应该命名为 <code v-pre>io.papermc</code>。<br>
如果你还没有一个域名，你可以将类似于你的GitHub用户名的东西作为包名（格式大概是：io.github.用户名）。<br>
若你的名字叫做 Linus Torvalds，你的包应该是 <code v-pre>io.github.torvalds</code>。</p>
<p>跟随包名的应该是你的工程名。<br>
比如，你有一个的工程叫做 <code v-pre>ExamplePlugin</code>，你的包应该是<code v-pre>io.github.torvalds.exampleplugin</code>。<br>
你的每个插件都会有一个独一无二的包名。</p>
<h3 id="主类" tabindex="-1"><a class="header-anchor" href="#主类" aria-hidden="true">#</a> 主类</h3>
<p>主类是你的插件中唯一一个继承 <code v-pre>JavaPlugin</code> 的类。
你的 <code v-pre>ExamplePlugin</code> 类应当看上去像是这样：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">io<span class="token punctuation">.</span>papermc<span class="token punctuation">.</span>testplugin</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>kyori<span class="token punctuation">.</span>adventure<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bukkit<span class="token punctuation">.</span></span><span class="token class-name">Bukkit</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bukkit<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token class-name">EventHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bukkit<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token class-name">Listener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bukkit<span class="token punctuation">.</span>event<span class="token punctuation">.</span>player<span class="token punctuation">.</span></span><span class="token class-name">PlayerJoinEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bukkit<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>java<span class="token punctuation">.</span></span><span class="token class-name">JavaPlugin</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPluginManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设立-resources" tabindex="-1"><a class="header-anchor" href="#设立-resources" aria-hidden="true">#</a> 设立 <code v-pre>resources</code></h3>
<p>该 <code v-pre>resources</code> 文件夹是在你的插件中存放 <code v-pre>plugin.yml</code> 的地方。在<a href="https://docs.poikcue.com/#/PaperMC/dev/getting-start/plugin-yml" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>了解更多关于plugin.yml的信息。</p>
<h3 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h3>
<p>现在，你就有一个将Paper作为依赖的工程啦！<br>
你现在只需要编译你的插件，然后在Paper服务器上使用插件就大功告成了。</p>
<blockquote>
<p><strong>注：</strong><br>
如果你想要快速测试你的插件，你可以使用 <a href="https://github.com/jpenilla/run-paper" target="_blank" rel="noopener noreferrer">Run-Paper<ExternalLinkIcon/></a> Gradle task。<br>
它将自动下载Paper并为帮助你测试你的插件。</p>
</blockquote>
<blockquote>
<p><strong>详细信息：</strong><br>
如果你正在使用IntelliJ，你应使用 Gradle GUI <code v-pre>Build</code> 菜单来编译你的插件 - 应该位于你的IDE的右上角。
编译成功后输出的jar文件应该存放在 <code v-pre>build/libs</code> 文件夹中。</p>
</blockquote>
</div></template>


