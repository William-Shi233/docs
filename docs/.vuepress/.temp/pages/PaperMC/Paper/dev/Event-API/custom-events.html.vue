<template><div><h1 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h1>
<p>创建自定义事件是为你的插件添加新功能的不错的方式。<br>
这将允许其它插件监听你的自定义事件并为你的插件添加新功能。</p>
<h2 id="创建一个自定义事件" tabindex="-1"><a class="header-anchor" href="#创建一个自定义事件" aria-hidden="true">#</a> 创建一个自定义事件</h2>
<p>要创建一个自定义事件，你需要创建一个类并继承 <code v-pre>Event</code>。每个事件都需要一个 <code v-pre>HandlerList</code> 以包含所有监听到该事件的监听器。<br>
不过例外的是，当你有一个无法启动的事件类时，需要用其它事件替代来充当父级。</p>
<p>这有一个不能直接监听 <code v-pre>BlockPistonEvent</code> 的例子。</p>
<p>该列表用于当事件被调用时，调用监听器。</p>
<blockquote>
<p><strong>关于<code v-pre>getHandlerList</code>的信息：</strong><br>
尽管它不是从 <code v-pre>Event</code> 继承，不过你仍需要添加一个静态 <code v-pre>getHandlerList()</code> 方法并为你的事件返回 <code v-pre>HandlerList</code>。<br>
若要使你的事件正常工作，则需要使用这两个方法。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaperIsCoolEvent</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HandlerList</span> <span class="token constant">HANDLER_LIST</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HandlerList</span> <span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">HANDLER_LIST</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">HandlerList</span> <span class="token function">getHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">HANDLER_LIST</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在已经创建了我们的事件，我们现在可以为它添加许多功能啦！<br>
事件被调用时，或许这会向服务器发送一条包含消息的广播。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaperIsCoolEvent</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HandlerList</span> <span class="token constant">HANDLER_LIST</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Component</span> message<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PaperIsCoolEvent</span><span class="token punctuation">(</span><span class="token class-name">Component</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HandlerList</span> <span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">HANDLER_LIST</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">HandlerList</span> <span class="token function">getHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">HANDLER_LIST</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Component</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token class-name">Component</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用事件" tabindex="-1"><a class="header-anchor" href="#调用事件" aria-hidden="true">#</a> 调用事件</h2>
<p>现在，我们已经创建了这个事件。我们可以调用它了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>

    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">callCoolPaperEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PaperIsCoolEvent</span> coolEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaperIsCoolEvent</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Paper is cool!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coolEvent<span class="token punctuation">.</span><span class="token function">callEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 插件本来就可以够从它们的监听器内部更改消息的。所以我们需要重新获取消息。</span>
        <span class="token comment">// 此事件结构允许其它插件从它们那里更改消息。</span>
        <span class="token comment">// 举个例子：一个插件为所有消息添加了前缀！</span>
        <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span>coolEvent<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消实现" tabindex="-1"><a class="header-anchor" href="#取消实现" aria-hidden="true">#</a> 取消实现</h2>
<p>如果你想要允许你的事件被取消，则可以实现 <code v-pre>Cancellable</code> 接口。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaperIsCoolEvent</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token keyword">implements</span> <span class="token class-name">Cancellable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">HandlerList</span> <span class="token constant">HANDLER_LIST</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Component</span> message<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> cancelled<span class="token punctuation">;</span>

    <span class="token comment">// ...</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cancelled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCancelled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> cancelled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cancelled <span class="token operator">=</span> cancelled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当事件被调用时，你就可以检查它是否被取消了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>

    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">callCoolPaperEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PaperIsCoolEvent</span> coolEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaperIsCoolEvent</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Paper is cool!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coolEvent<span class="token punctuation">.</span><span class="token function">callEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>coolEvent<span class="token punctuation">.</span><span class="token function">isCancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span>coolEvent<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个事件为cancellable并且事件已经被取消，<code v-pre>Event#callEvent</code> 则会返回 <code v-pre>false</code>。这就允许你直接在if语句中使用 <code v-pre>callEvent</code> 所输出的结果，而无需手动检查 <code v-pre>Cancellable#isCancelled</code>了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>

<span class="token comment">// ...</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExamplePlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">callCoolPaperEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PaperIsCoolEvent</span> coolEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaperIsCoolEvent</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"Paper is cool!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>coolEvent<span class="token punctuation">.</span><span class="token function">callEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 直接从callEvent获取输出结果。</span>
            <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span>coolEvent<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


