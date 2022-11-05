<template><div><h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h1>
<h2 id="针对每个世界" tabindex="-1"><a class="header-anchor" href="#针对每个世界" aria-hidden="true">#</a> 针对每个世界</h2>
<p>强大但是鲜为人知的Paper特有功能便是可以为每个世界进行自定义的配置修改。如果你想对所有世界统一配置，则可以尝试仅编辑 <code v-pre>paper-world-defaults.yml</code> 文件。</p>
<h3 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3>
<p>Paper默认不会为每一个世界都提供自定义配置项，而是将所有默认值存储在 <code v-pre>config/paper-world-defaults.yml</code> 中。此文件的每一个值都可以被指定世界的特定配置所修改或覆盖，不过默认是使用 <code v-pre>paper-world-defaults.yml</code> 文件。编辑此文件即意味要应用于所有未进行特定配置的所有世界中。</p>
<h3 id="每个世界的值" tabindex="-1"><a class="header-anchor" href="#每个世界的值" aria-hidden="true">#</a> 每个世界的值</h3>
<p>要为专门某个世界设定一个配置的值，需要所在世界目录中找到 <code v-pre>paper-world.yml</code> 。<br>
例如：你想要在一个叫做 <code v-pre>resource</code> 的世界中禁用 <code v-pre>spawn.keep-spawn-loaded</code> 值，就需要在 <code v-pre>resource</code> 文件夹中编辑 <code v-pre>paper-world.yml</code> 文件并添加以下内容：</p>
<!-- 我是真不知道这个文档为什么只支持最基本的Markdown语法 -->
<p><em>此文件位于 resource/paper-world.yml</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>_version:  28

spawn:  
  keep-spawn-loaded: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置文件中，默认只有 <code v-pre>_version</code> 一值。想要针对某世界进行配置，需要从 <code v-pre>paper-world-defaults.yml</code> 中复制对应值过来后修改。</p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p>所有没有明确定义的世界的选项都将使用 <code v-pre>paper-world-defaults.yml</code> 中的默认配置。<br>
也就是说，如果想要修改所有世界的默认配置，无需机械化的复制、粘贴到每个世界相应的文件里。<br>
更不用讲想要修改的值从 <code v-pre>paper-world-defaults.yml</code> 挨个复制过来然后粘贴到所有 <code v-pre>paper-world.yml</code> 文件中。<br>
只需要复制针对某个世界的配置项到对应的 <code v-pre>paper-world.yml</code> 文件里之后进行精确的修改即可。<br>
举个更加复杂的例子：需要在两个不同的世界中分别修改 <code v-pre>spawn-limits</code> 值和 <code v-pre>keep-spawn-loaded</code> 值。</p>
<p><em>位于paper-world-defaults.yml</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>entities:  
  spawning:  
    spawn-limits:  
      ambient:  70  
      axolotls:  10  
      creature:  15  
      monster:  5  
      underground_water_creature:  5  
      water_ambient:  5  
      water_creature:  20  
spawn:  
  keep-spawn-loaded:  true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>位于world_nether/paper-world.yml</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>entities:  
  spawning:  
    spawn-limits:  
      monster:  90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>位于resource_world/paper-world.yml</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>entities:  
  spawning:  
    spawn-limits:  
      axolotls:  8  
      creature:  15  
      monster:  2  
spawn:  
  keep-spawn-loaded:  false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子简单的介绍了一下继承的概念。对于目前我们更改的每一个世界，以下列表是正在应用的实际配置：<br>
<a href="https://imgse.com/i/xQPHhR" target="_blank" rel="noopener noreferrer"><img src="https://s1.ax1x.com/2022/10/03/xQPHhR.png" alt="xQPHhR.png"><ExternalLinkIcon/></a></p>
<p>现在，<code v-pre>world_the_end</code>的值没有被更改过。所以，它使用了 <code v-pre>config/paper-world-defaults.yml</code> 中的所有默认值。
而且在 <code v-pre>resource_world/paper-world.yml</code> 中禁用了 <code v-pre>keep-spawn-loaded</code>，不过很明显的可以看到此项在 <code v-pre>config/paper-world-defaults.yml</code> 中是启用的。</p>
</div></template>


