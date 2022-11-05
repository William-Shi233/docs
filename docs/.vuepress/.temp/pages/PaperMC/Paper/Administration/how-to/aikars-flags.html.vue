<template><div><h1 id="aikar-s-flags" tabindex="-1"><a class="header-anchor" href="#aikar-s-flags" aria-hidden="true">#</a> Aikar's Flags</h1>
<blockquote>
<p><strong>提醒</strong><br>
译者不是一名Java开发者。所以，目前不会翻译每一项翻译的具体解释和作用。<br>
虽然已经将此部分翻译列入计划中，但是我不清楚ETA，抱歉。</p>
</blockquote>
<h2 id="推荐的jvm启动时参数" tabindex="-1"><a class="header-anchor" href="#推荐的jvm启动时参数" aria-hidden="true">#</a> 推荐的JVM启动时参数</h2>
<p>要使用这些启动参数，只需要调整<code v-pre>-Xms</code>和<code v-pre>-Xmx</code>的值。这些参数对于分配任何大小的内存都适用，即使分配的内存仅仅有500MB（对于高版本的Minecraft服务器，这些内存可能不够用。）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><strong>不要在服务器上使用全部内存</strong><br>
当你根据服务器的实际内存进行配置-Xms与-Xmx项时，例如可用8000M时，不要把这8000M全部分出去！在运行Minecraft服务器时，需要在此项的基础上额外占用一部分内存。建议将-Xms/-Xmx减少1000MB-1500M，以避免内存不够用或者提示<code v-pre>OOMKiller</code>导致服务器强制关闭。同时，这些内存也要给系统预留一部分。有8000M可用？请设定6500M以确保服务器正常运行。<em>也有一些服务商会为你额外提供这部分内存，例如提供9500M让你分配8000M给Minecraft服务器。有一些服务商会提供的！记得问问他们。</em></p>
</blockquote>
<h2 id="推荐内存" tabindex="-1"><a class="header-anchor" href="#推荐内存" aria-hidden="true">#</a> 推荐内存</h2>
<p><strong>我们推荐至少分配6-10GB内存</strong>，无论你的服务器是什么样的规模！如果你的服务器无法分配10GB内存，不要强行分配，就像上文所说的一样，预留一些内存。尽管G1GC在内存多的情况下运行的更好。</p>
<p>不过请记住，内存多不一定代表性能会更好。最终，当内存超出某一个值时将变的无用。因此分配超出32GB的内存只会增大你的预算，而效果微乎其微。</p>
<p>如果分配12GB或更低内存，就不用在上文的基础上额外修改参数了。</p>
<h3 id="如果-xmx的值大于12gb" tabindex="-1"><a class="header-anchor" href="#如果-xmx的值大于12gb" aria-hidden="true">#</a> 如果-Xmx的值大于12GB</h3>
<p>如果-Xmx的值大于12GB，请调整以下参数：</p>
<ul>
<li><code v-pre>-XX:G1NewSizePercent=40</code></li>
<li><code v-pre>-XX:G1MaxNewSizePercent=50</code></li>
<li><code v-pre>-XX:G1HeapRegionSize=16M</code></li>
<li><code v-pre>-XX:G1ReservePercent=15</code></li>
<li><code v-pre>-XX:InitiatingHeapOccupancyPercent=20</code></li>
</ul>
<blockquote>
<p><strong>调整说明</strong><br>
如果调整后老年代Collection增加，请恢复到原参数。</p>
</blockquote>
</div></template>


