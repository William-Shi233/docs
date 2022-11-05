<template><div><h1 id="监听事件" tabindex="-1"><a class="header-anchor" href="#监听事件" aria-hidden="true">#</a> 监听事件</h1>
<p><code v-pre>Events</code>（事件）是在游戏中监听具体的某个特定行动的最有效的方式。它们可以被服务器或插件所调用。<br>
当发生某事时，它们将被服务器或插件所调用，例如某名玩家加入了服务器，或是某玩家破坏了某个方块。<br>
插件能够调用自定义事件，例如玩家完成了某个任务或被其它插件所监听的事件。</p>
<h2 id="你的监听器类" tabindex="-1"><a class="header-anchor" href="#你的监听器类" aria-hidden="true">#</a> 你的监听器类</h2>
<p>要监听一项事件，你需要创建一个类并实现 <code v-pre>Listener</code>。<br>
你想要为该类取什么名称都行，不过建议命名为你与所监听的事件相关的名称。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventhandler" tabindex="-1"><a class="header-anchor" href="#eventhandler" aria-hidden="true">#</a> <code v-pre>@EventHandler</code></h2>
<p>要监听某事件，你需要创建一个方法（method）并注释为 <code v-pre>@EventHandler</code>。<br>
同样，你想要为该方法取什么名称都行。但是建议命名为有助于理解你所监听的事件的名称。</p>
<h2 id="监听器方法" tabindex="-1"><a class="header-anchor" href="#监听器方法" aria-hidden="true">#</a> 监听器方法</h2>
<p>Method Body 无需返回任何数据，因为使用 <code v-pre>void</code> 就视为返回的类型。<br>
监听器接受该事件所监听到的单个参数。</p>
<p>一个事件仅在有静态 <code v-pre>getHandlerList</code> 方法时才能被监听。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>由于篇幅有限，这里没有列出所有可监听事件的列表。不过在<br>
<a href="https://jd.papermc.io/paper/1.19/org/bukkit/event/Event.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a> 可以了解所有继承 <code v-pre>Events</code> 的类。</p>
</blockquote>
<h2 id="注册监听器" tabindex="-1"><a class="header-anchor" href="#注册监听器" aria-hidden="true">#</a> 注册监听器</h2>
<p>要注册监听器，你需要调用 <code v-pre>Bukkit.getPluginManager().registerEvents()</code> 并传入监听器类的实例和你的插件的实例。</p>
<p>将会注册监听器类并允许它监听所有事件。<br>
通常会在你的插件的 <code v-pre>onEnable()</code> 方法中，所以一般会在服务器开始Ticking时注册。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPluginManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExampleListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件优先级" tabindex="-1"><a class="header-anchor" href="#事件优先级" aria-hidden="true">#</a> 事件优先级</h2>
<p>你也可以指定事件的优先级。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public class ExampleListener implements Listener {

    @EventHandler(priority = EventPriority.HIGH)
    public void onPlayerJoin(PlayerJoinEvent event) {
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以选择六个不同的优先级：</p>
<ul>
<li><code v-pre>EventPriority.LOWEST</code></li>
<li><code v-pre>EventPriority.LOW</code></li>
<li><code v-pre>EventPriority.NORMAL</code></li>
<li><code v-pre>EventPriority.HIGH</code></li>
<li><code v-pre>EventPriority.HIGHEST</code></li>
<li><code v-pre>EventPriority.MONITOR</code></li>
</ul>
<p>实际上优先级的顺序与直觉相反。优先级 <strong>越高</strong>，事件被调用就 <strong>越晚</strong>。<br>
例如：你的插件中有某些事件超级重要（需要放到最后调用）- 以避免被更改 - 则需要使用<code v-pre>EventPriority.HIGHEST</code></p>
<blockquote>
<p><strong>注意</strong><br>
<code v-pre>MONITOR</code> 的优先级常常用于监视事件，而不会更改它。它在所有优先级中最后才会调用。<br>
这就意味着可得到不同插件之间相互影响的结果，例如取消（cancellation）和修改（modification）。</p>
</blockquote>
<h2 id="取消事件" tabindex="-1"><a class="header-anchor" href="#取消事件" aria-hidden="true">#</a> 取消事件</h2>
<p>一些事件可以取消，阻止某些行动的完成。这些事件实现 <code v-pre>Cancellable</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">setCancelled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在你的插件调用之前请思考一下其它插件是否会取消或更改该事件。<br>
在做某些事之前先检查这些事件吧！</p>
</blockquote>
<p>上面的例子会取消事件，就意味着玩家无法加入到服务器中。当一个事件被取消，它将会其它事件继续调用监听器，除非在 <code v-pre>@EventHandler</code> 注释中添加了 <code v-pre>ignoreCancelled = true</code> 以忽略已取消的事件。<br>
像是这样：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public class ExampleListener implements Listener {

    @EventHandler(ignoreCancelled = true)
    public void onPlayerJoin(PlayerJoinEvent event) {
        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


