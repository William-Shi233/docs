<template><div><h1 id="安装或更新java" tabindex="-1"><a class="header-anchor" href="#安装或更新java" aria-hidden="true">#</a> 安装或更新Java</h1>
<p>安装Java是Paper，Velocity和Waterfall运行或开发插件所需最重要的一步。<br>
该指南将会指导在主流平台上关于安装Java的推荐步骤。</p>
<blockquote>
<p><strong>不要使用Headless的Java版本</strong><br>
Java的<code v-pre>headless</code>版本在其包名后通常带有<code v-pre>-headless</code>后缀。该<code v-pre>headless</code>版本缺少运行Paper的必要依赖项，因此不推荐使用。</p>
</blockquote>
<blockquote>
<p><strong>选择Java</strong><br>
本指南将重点说明亚马逊的Corretto OpenJDK发行版。因为它在大多平台提供最佳安装体验。不过，Corretto不是唯一一个可以使用的OpenJDK版本。你可以选择许多OpenJDK，比如<a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">Eclipse Adoptium<ExternalLinkIcon/></a>，<a href="https://www.microsoft.com/openjdk" target="_blank" rel="noopener noreferrer">Microsoft<ExternalLinkIcon/></a>以及<a href="https://www.azul.com/downloads/?package=jdk" target="_blank" rel="noopener noreferrer">Azul Zulu<ExternalLinkIcon/></a>等等。<br>
注意：虽然Oracle提供的JDK发行版与它们的功能是一致的，但是由于相当不友好的安装工具和其有恶意许可证的历史而<strong>不推荐</strong>使用。</p>
</blockquote>
<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2>
<h3 id="ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#ubuntu-debian" aria-hidden="true">#</a> Ubuntu/Debian</h3>
<p>在基于 Debian 系统的Linux发行版上安装Java17很简单。首先，需要确保你的服务器系统有所有安装Java所需的工具。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> software-properties-common ca-certificates apt-transport-https <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，导入Amazon Corretto公钥和adpt存储库。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://apt.corretto.aws/corretto.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token function">sudo</span> add-apt-repository <span class="token string">'deb https://apt.corretto.aws stable main'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后安装Java17。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> java-17-amazon-corretto-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，请跳转到 <a href="#%E9%AA%8C%E8%AF%81%E5%AE%89%E8%A3%85">验证安装</a> 确认是否安装成功。</p>
<h3 id="基于-rpm" tabindex="-1"><a class="header-anchor" href="#基于-rpm" aria-hidden="true">#</a> 基于 RPM</h3>
<p>要在CentOS，RHEL，openSUSE，SLES或任何基于RPM的Linux发行版上安装Java17，请选择服务器使用的包管理器然后选择对应命令。当安装完成后，请跳转到 <a href="#verifying-installation">验证安装</a> 确认是否安装成功。</p>
<h4 id="dnf" tabindex="-1"><a class="header-anchor" href="#dnf" aria-hidden="true">#</a> DNF</h4>
<p>在Fedora，CentOS/RHEL 7+及任何与其相关的发行版上使用DNF。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://yum.corretto.aws/corretto.key
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-Lo</span> /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo
<span class="token function">sudo</span> dnf <span class="token parameter variable">-y</span> <span class="token function">install</span> java-17-amazon-corretto-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zypper" tabindex="-1"><a class="header-anchor" href="#zypper" aria-hidden="true">#</a> Zypper</h4>
<p>在openSUSE，SLES及任何相关发行版上使用Zypper。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">zypper</span> addrepo https://yum.corretto.aws/corretto.repo
<span class="token function">sudo</span> <span class="token function">zypper</span> refresh
<span class="token function">sudo</span> <span class="token function">zypper</span> <span class="token function">install</span> java-17-amazon-corretto-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> YUM</h4>
<p>在CentOS/RHEL的旧版本，和过老的Fedora版本上使用YUM。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://yum.corretto.aws/corretto.key
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-Lo</span> /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> java-17-amazon-corretto-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-10-11" tabindex="-1"><a class="header-anchor" href="#windows-10-11" aria-hidden="true">#</a> Windows 10 &amp; 11</h2>
<p>如果你正在使用Windows 10或11，安装Java就如安装其它软件一样简单。只需从<a href="https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi" target="_blank" rel="noopener noreferrer">官方网站<ExternalLinkIcon/></a>下载Amazon Corretto安装包，然后运行。<br>
当你使用安装包时，全程点击&quot;next&quot;都是安全的，不会安装任何捆绑，并且全部功能都开箱即用的。</p>
<p>当安装完成后，打开命令提示符并跳转到 <a href="#%E9%AA%8C%E8%AF%81%E5%AE%89%E8%A3%85">验证安装</a> 确认是否安装成功。</p>
<h2 id="macos-os-x" tabindex="-1"><a class="header-anchor" href="#macos-os-x" aria-hidden="true">#</a> macOS/OS X</h2>
<p>如果你正在使用macOS，安装Java最佳的方式是使用一个叫做<a href="https://brew.sh" target="_blank" rel="noopener noreferrer">Homebrew<ExternalLinkIcon/></a>的工具。遵循它们的官网说明，然后安装它。<br>
接下来，打开你的终端然后运行下列命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> openjdk@17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当运行命令完成后，跳转到 <a href="#%E9%AA%8C%E8%AF%81%E5%AE%89%E8%A3%85">验证安装</a> 确认是否安装成功。</p>
<h2 id="pterodactyl" tabindex="-1"><a class="header-anchor" href="#pterodactyl" aria-hidden="true">#</a> Pterodactyl</h2>
<p><em>（译者没有用过。好像是翼龙面板。）</em></p>
<blockquote>
<p><strong>注意！</strong><br>
若正在使用低于 <code v-pre>1.2.0</code> 的Pterodactyl版本，则需要使用管理员账户才能更改Java版本。因此，下述内容将无效。</p>
</blockquote>
<p>如果你使用不支持的Java版本启动Paper服务器，Pterodactyl 会自动提示你需要升级Java。就像是这样：</p>
<p><img src="https://docs.papermc.io/assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png" alt="Pterodactyl Automatic Prompt"></p>
<p>如果该没有显示该弹窗，那么Java版本就意味着可以手动更改。转到服务器 <code v-pre>Startup</code> 一栏，如下图一样，在&quot;Docker Image&quot;中选择 <code v-pre>ghcr.io/pterodactyl/yolks:java_17</code>。</p>
<p><img src="https://docs.papermc.io/assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png" alt="Pterodactyl Manual Java Version Change"></p>
<p>验证安装在Pterodactyl上将无效。</p>
<h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h2>
<p>现在你应该成功地安装了Java17。在你的终端运行下列命令确保成功安装。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.输出应该像下列文本。最重要的是需要以 <code v-pre>openjdk 17</code> 开头并在尾行包含 <code v-pre>64-Bit</code>。如果输出类似于 <code v-pre>java: command not found</code>，则尝试在使用新的终端会话后重试。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>openjdk 17 2021-09-14 LTS
OpenJDK Runtime Environment Corretto-17.0.0.35.1 (build 17+35-LTS)
OpenJDK 64-Bit Server VM Corretto-17.0.0.35.1 (build 17+35-LTS, mixed mode, sharing)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若安装失败，请不要犹豫，立即在我们的 <a href="https://discord.gg/papermc" target="_blank" rel="noopener noreferrer">Discord<ExternalLinkIcon/></a> 的<code v-pre>#paper-help</code>频道中寻求帮助。</p>
</div></template>


