<template><div><h1 id="配置反矿物透视" tabindex="-1"><a class="header-anchor" href="#配置反矿物透视" aria-hidden="true">#</a> 配置反矿物透视</h1>
<p><em>即反矿透</em></p>
<blockquote>
<p>最初由<a href="https://github.com/stonar96" target="_blank" rel="noopener noreferrer">stonar96<ExternalLinkIcon/></a>攥写此文并维护。</p>
</blockquote>
<p>Paper 使用基于混淆处理的反矿物透视，提供两种模式。可以对每个世界进行自定义配置。</p>
<blockquote>
<p><strong>针对某个世界的配置文件</strong><br>
如果你还不了解Paper可以为每个世界进行自定义配置，请花上几分钟了解一下。</p>
</blockquote>
<p>本文将从头开始说明如何配置反矿物透视。有关此部分文档，请参考 每个世界的配置文件<br>
反矿物透视会提供两种模式。<code v-pre>engine-mode: 1</code> 将为指定维度的指定方块替换为假的方块，例如石头（y&lt;0时为深层）、下界岩或末地岩。而 <code v-pre>engine-mode: 2</code> 与其恰好相反：将石头（y&lt;0时为深层）、下界岩或末地岩替换为假的矿物方块。<br>
下图将说明启用不同模式后，开启矿物透视的玩家将会看到的图片，并且在下文会说明推荐配置。以下是主世界和下界的截图。<br>
<img src="https://docs.papermc.io/assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png" alt="主世界">
<img src="https://docs.papermc.io/assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png" alt="下界">
以客户端的角度来说，<code v-pre>engine-mode: 1</code> 模式的计算量要小很多，而 <code v-pre>engine-mode: 2</code> 模式的反矿物透视效果会更好。<code v-pre>engine-mode: 1</code> 只会隐藏周围全部被岩石包裹住的矿石，没有被包裹住的、有水的旁边的则不会隐藏。而<code v-pre>engine-mode: 2</code>不会出现以上情况，因为其工作原理是在原有原矿石的基础上额外添加假方块。</p>
<blockquote>
<p><strong>绕过反矿物透视</strong><br>
<strong>可见范围:</strong> 即使反矿物透视可以在服务器上阻止多数玩家使用矿物透视，但不排除可能绕过的现象。通过分析反矿物透视的工作原理，玩家在服务器上可以看到他们附近大量的矿物。不过，你可以考虑再安装一个可靠的反作弊以解决此问题。不管如何，反矿物透视不是开箱即用的。<br>
<strong>种子搜索:</strong> 另外一种矿物透视则是根据Minecraft种子的生成规律来寻找矿物。一旦玩家得到了种子，则可以根据生成规律得知每一个矿物的位置，便能完全绕过反矿物透视。可以在Paper的配置文件中使用<code v-pre>feature-seeds</code>功能来增大玩家强行获得种子的难度，并可以和<code v-pre>spigot.yml</code>中的structure seed项配合使用。<br>
<strong>裸露在空气中的矿石:</strong>  在模式1和模式2中，裸露在空气中的矿石都会被开启矿物透视的玩家看到。如果开启模式2将通过增加大量的假矿石混入其中来解决这一问题。不过，开启此选项会使客户端FPS下降。<br>
<strong>译者注:</strong> 开启模式2后，服务器流量会大幅增加。同时，客户端（至少在开启矿物透视的情况下）将超级卡。还是建议使用模式1。</p>
</blockquote>
<h2 id="推荐配置" tabindex="-1"><a class="header-anchor" href="#推荐配置" aria-hidden="true">#</a> 推荐配置</h2>
<p>以下是启用<code v-pre>engine-mode: 1</code>和<code v-pre>engine-mode: 2</code>的不同推荐配置。</p>
<blockquote>
<p><strong>代码</strong><br>
Yaml需要注意缩进！下面的配置都正确的处理了缩进，确保在复制时正确地处理了缩进。</p>
</blockquote>
<!-- 这个文档居然连复制的按钮都没有。原文是“请按下右上角的复制按钮以确保正确复制缩进” -->
<h3 id="engine-mode-1" tabindex="-1"><a class="header-anchor" href="#engine-mode-1" aria-hidden="true">#</a> <code v-pre>engine-mode: 1</code></h3>
<p>主世界：<br>
请使用以下内容来替代掉 <code v-pre>paper-world-defaults.yml</code> 中的 <code v-pre>anticheat.anti-xray</code> 键。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">engine-mode</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">hidden-blocks</span><span class="token punctuation">:</span>
    <span class="token comment"># 地牢中的箱子不会隐藏，因为完全裸露在空气中。但是通过藏宝图得到的宝箱则会隐藏起来。</span>
    <span class="token punctuation">-</span> chest
    <span class="token punctuation">-</span> coal_ore
    <span class="token punctuation">-</span> deepslate_coal_ore
    <span class="token punctuation">-</span> copper_ore
    <span class="token punctuation">-</span> deepslate_copper_ore
    <span class="token punctuation">-</span> raw_copper_block
    <span class="token punctuation">-</span> diamond_ore
    <span class="token punctuation">-</span> deepslate_diamond_ore
    <span class="token punctuation">-</span> emerald_ore
    <span class="token punctuation">-</span> deepslate_emerald_ore
    <span class="token punctuation">-</span> gold_ore
    <span class="token punctuation">-</span> deepslate_gold_ore
    <span class="token punctuation">-</span> iron_ore
    <span class="token punctuation">-</span> deepslate_iron_ore
    <span class="token punctuation">-</span> raw_iron_block
    <span class="token punctuation">-</span> lapis_ore
    <span class="token punctuation">-</span> deepslate_lapis_ore
    <span class="token punctuation">-</span> redstone_ore
    <span class="token punctuation">-</span> deepslate_redstone_ore
    <span class="token key atrule">lava-obscures</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 1.18版本起，部分矿石的最大生成高度进行了调整。</span>
    <span class="token comment"># 请自行修改 the max-block-height 以确保适用于当前版本。</span>
    <span class="token comment"># https://minecraft.fandom.com/wiki/Ore 可能很有帮助</span>
    <span class="token key atrule">max-block-height</span><span class="token punctuation">:</span> <span class="token number">64</span>
    <span class="token key atrule">replacement-blocks</span><span class="token punctuation">:</span>
    <span class="token comment"># 调整 replacement-blocks 在使用模式1时不会生效。</span>
    <span class="token punctuation">-</span> stone
    <span class="token punctuation">-</span> oak_planks
    <span class="token punctuation">-</span> deepslate
    <span class="token key atrule">update-radius</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">use-permission</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下界：<br>
复制到地狱文件夹中的<code v-pre>paper-world.yml</code>。具体请见左侧的配置文件指南。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">hidden-blocks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ancient_debris
    <span class="token punctuation">-</span> nether_gold_ore
    <span class="token punctuation">-</span> nether_quartz_ore
    <span class="token key atrule">max-block-height</span><span class="token punctuation">:</span> <span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>末地：<br>
复制到末地文件夹中的<code v-pre>paper-world.yml</code>。具体请见左侧的配置文件指南。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="engine-mode-2" tabindex="-1"><a class="header-anchor" href="#engine-mode-2" aria-hidden="true">#</a> <code v-pre>engine-mode: 2</code></h3>
<p>主世界：<br>
请使用以下内容来替代掉 <code v-pre>paper-world-defaults.yml</code> 中的 <code v-pre>anticheat.anti-xray</code> 键。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">engine-mode</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">hidden-blocks</span><span class="token punctuation">:</span>
    <span class="token comment"># 你可以添加空气来隐藏洞穴。</span>
    <span class="token comment"># 这对于反开矿物透视找洞穴的玩家很有用，但是会导致FPS下降。</span>
    <span class="token punctuation">-</span> air
    <span class="token punctuation">-</span> copper_ore
    <span class="token punctuation">-</span> deepslate_copper_ore
    <span class="token punctuation">-</span> raw_copper_block
    <span class="token punctuation">-</span> diamond_ore
    <span class="token punctuation">-</span> deepslate_diamond_ore
    <span class="token punctuation">-</span> gold_ore
    <span class="token punctuation">-</span> deepslate_gold_ore
    <span class="token punctuation">-</span> iron_ore
    <span class="token punctuation">-</span> deepslate_iron_ore
    <span class="token punctuation">-</span> raw_iron_block
    <span class="token punctuation">-</span> lapis_ore
    <span class="token punctuation">-</span> deepslate_lapis_ore
    <span class="token punctuation">-</span> redstone_ore
    <span class="token punctuation">-</span> deepslate_redstone_ore
    <span class="token key atrule">lava-obscures</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 1.18版本起，部分矿石的最大生成高度进行了调整。</span>
    <span class="token comment"># 请自行修改 the max-block-height 以确保适用于当前版本。</span>
    <span class="token comment"># https://minecraft.fandom.com/wiki/Ore 可能很有帮助</span>
    <span class="token key atrule">max-block-height</span><span class="token punctuation">:</span> <span class="token number">64</span>
    <span class="token key atrule">replacement-blocks</span><span class="token punctuation">:</span>
    <span class="token comment"># 箱子无法在模式2中隐藏。</span>
    <span class="token comment"># 但是如果 max-block-height 调整的足够高，通过藏宝图寻找的箱子也会隐藏。</span>
    <span class="token punctuation">-</span> chest
    <span class="token punctuation">-</span> amethyst_block
    <span class="token punctuation">-</span> andesite
    <span class="token punctuation">-</span> budding_amethyst
    <span class="token punctuation">-</span> calcite
    <span class="token punctuation">-</span> coal_ore
    <span class="token punctuation">-</span> deepslate_coal_ore
    <span class="token punctuation">-</span> deepslate
    <span class="token punctuation">-</span> diorite
    <span class="token punctuation">-</span> dirt
    <span class="token punctuation">-</span> emerald_ore
    <span class="token punctuation">-</span> deepslate_emerald_ore
    <span class="token punctuation">-</span> granite
    <span class="token punctuation">-</span> gravel
    <span class="token punctuation">-</span> oak_planks
    <span class="token punctuation">-</span> smooth_basalt
    <span class="token punctuation">-</span> stone
    <span class="token punctuation">-</span> tuff
    <span class="token key atrule">update-radius</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">use-permission</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下界：<br>
复制到地狱文件夹中的<code v-pre>paper-world.yml</code>。具体请见左侧的配置文件指南。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">hidden-blocks</span><span class="token punctuation">:</span>
    <span class="token comment"># 在上文查看可能绕过的情况与客户端FPS下降的问题。</span>
    <span class="token punctuation">-</span> air
    <span class="token punctuation">-</span> ancient_debris
    <span class="token punctuation">-</span> bone_block
    <span class="token punctuation">-</span> glowstone
    <span class="token punctuation">-</span> magma_block
    <span class="token punctuation">-</span> nether_bricks
    <span class="token punctuation">-</span> nether_gold_ore
    <span class="token punctuation">-</span> nether_quartz_ore
    <span class="token punctuation">-</span> polished_blackstone_bricks
    <span class="token key atrule">max-block-height</span><span class="token punctuation">:</span> <span class="token number">128</span>
    <span class="token key atrule">replacement-blocks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> basalt
    <span class="token punctuation">-</span> blackstone
    <span class="token punctuation">-</span> gravel
    <span class="token punctuation">-</span> netherrack
    <span class="token punctuation">-</span> soul_sand
    <span class="token punctuation">-</span> soul_soil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>末地：<br>
复制到末地文件夹中的<code v-pre>paper-world.yml</code>。具体请见左侧的配置文件指南。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">anticheat</span><span class="token punctuation">:</span>
  <span class="token key atrule">anti-xray</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


