<template><div><h1 id="handler-列表" tabindex="-1"><a class="header-anchor" href="#handler-列表" aria-hidden="true">#</a> Handler 列表</h1>
<p>每个可以被监听的 <code v-pre>Event</code>（事件）都有一个 <code v-pre>HandlerList</code> 来包含所有的监听器与其监听的事件。<br>
该列表常常用于在事件被调用时，同时调用监听器。</p>
<h2 id="为一个事件获取handler列表" tabindex="-1"><a class="header-anchor" href="#为一个事件获取handler列表" aria-hidden="true">#</a> 为一个事件获取handler列表</h2>
<p>要为一个事件获取handler列表，你可以在具体的事件类中调用 <code v-pre>getHandlerList()</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HandlerList</span> handlerList <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// Or:</span>
    
    <span class="token keyword">public</span> <span class="token class-name">ExampleListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Access the handler list through the static getter</span>
        <span class="token class-name">HandlerList</span> handlerList <span class="token operator">=</span> <span class="token class-name">PlayerJoinEvent</span><span class="token punctuation">.</span><span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注销一个监听器" tabindex="-1"><a class="header-anchor" href="#注销一个监听器" aria-hidden="true">#</a> 注销一个监听器</h2>
<p>要注销一个监听器，你可以在监听器中注册的 <code v-pre>HandlerList</code> 中调用 <code v-pre>unregister()</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExampleListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HandlerList</span> handlerList <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handlerList<span class="token punctuation">.</span><span class="token function">unregister</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 或者：</span>
    
    <span class="token keyword">public</span> <span class="token class-name">ExampleListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过静态getter访问handler列表</span>
        <span class="token class-name">HandlerList</span> handlerList <span class="token operator">=</span> <span class="token class-name">PlayerJoinEvent</span><span class="token punctuation">.</span><span class="token function">getHandlerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handlerList<span class="token punctuation">.</span><span class="token function">unregister</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 的确，这是一个愚蠢的例子...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了更易于使用，你可以在基于 <code v-pre>Listener</code> 或 <code v-pre>Plugin</code> 上进行注销。<br>
而且，你也可以通过在 <code v-pre>HandlerList</code> 中调用 <code v-pre>unregisterAll()</code> 以注销某一特定事件中的所有监听器。</p>
</div></template>


