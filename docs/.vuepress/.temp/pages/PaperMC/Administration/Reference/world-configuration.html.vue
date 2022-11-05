<template><div><h1 id="paper-针对世界的配置" tabindex="-1"><a class="header-anchor" href="#paper-针对世界的配置" aria-hidden="true">#</a> Paper 针对世界的配置</h1>
<p>在 <code v-pre>paper-world-defaults.yml</code> 文件中的每一个配置都可以单独应用于每一个世界。<br>
了解如何配置它们，请详见 <a href="https://docs.poikcue.com/#/PaperMC/Administration/how-to/configuration" target="_blank" rel="noopener noreferrer">配置文件<ExternalLinkIcon/></a><br>
对于全局的配置，请见<a href="https://docs.poikcue.com/#/PaperMC/Administration/Reference/global-configuration" target="_blank" rel="noopener noreferrer">Paper 全局配置<ExternalLinkIcon/></a></p>
<h2 id="anticheat" tabindex="-1"><a class="header-anchor" href="#anticheat" aria-hidden="true">#</a> anticheat</h2>
<h3 id="anti-xray" tabindex="-1"><a class="header-anchor" href="#anti-xray" aria-hidden="true">#</a> anti-xray</h3>
<blockquote>
<p>关于推荐使用 <code v-pre>engine-mode</code> <code v-pre>1</code> 还是 <code v-pre>2</code> 可以在<br>
<a href="https://docs.poikcue.com/#/PaperMC/Administration/how-to/anti-xray" target="_blank" rel="noopener noreferrer">配置反矿物透视<ExternalLinkIcon/></a>中找到。</p>
</blockquote>
<h4 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否启用反矿物透视。</li>
</ul>
<h4 id="engine-mode" tabindex="-1"><a class="header-anchor" href="#engine-mode" aria-hidden="true">#</a> engine-mode</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>1</code></li>
<li><strong>描述</strong>: 请见<a href="https://docs.poikcue.com/#/PaperMC/Administration/how-to/anti-xray" target="_blank" rel="noopener noreferrer">配置反矿物透视<ExternalLinkIcon/></a></li>
</ul>
<h4 id="max-block-height" tabindex="-1"><a class="header-anchor" href="#max-block-height" aria-hidden="true">#</a> max-block-height</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>64</code></li>
<li><strong>描述</strong>: 设定一个最大生效高度 (为 <code v-pre>y</code> 坐标，将从世界最底部开始计算起）以确定反矿物透视的生效范围。只接受 16 的倍数，其余数字将四舍五入处理。<a href="https://minecraft.fandom.com/zh/wiki/%E7%9F%BF%E7%9F%B3" target="_blank" rel="noopener noreferrer">中文Minecraft Wiki 矿石<ExternalLinkIcon/></a> 会帮助你确定一个最佳数值。</li>
</ul>
<h4 id="update-radius" tabindex="-1"><a class="header-anchor" href="#update-radius" aria-hidden="true">#</a> update-radius</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>2</code></li>
<li><strong>描述</strong>: 当玩家与方块交互时，更新该方块需要向客户端发送真实方块数据的距离（半径）。 该值仅接受 <code v-pre>0</code>, <code v-pre>1</code>, 和 <code v-pre>2</code> ，若此值比 <code v-pre>0</code> 小则取值为 <code v-pre>0</code>, 若此值比 <code v-pre>2</code> 大则取值为 <code v-pre>2</code>。 <code v-pre>0</code> 仅为测试用途，不要是生产环境使用 <code v-pre>0</code> 值。</li>
</ul>
<h4 id="lava-obscures" tabindex="-1"><a class="header-anchor" href="#lava-obscures" aria-hidden="true">#</a> lava-obscures</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 与岩浆接触的方块是否要进行模糊处理。开启后，当岩浆与其材质不像石头的矿物接触时表现不佳。虽然岩浆几乎是不透明的，但是有时不能完全覆盖住方块表面、</li>
</ul>
<h4 id="use-permission" tabindex="-1"><a class="header-anchor" href="#use-permission" aria-hidden="true">#</a> use-permission</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否为有 <code v-pre>paper.antixray.bypass</code> 权限的玩家不启用反矿物透视。 由于部分传统权限插件在数量检查上会出现错误。只应当在使用现代（Modern）权限插件时启用此项。</li>
</ul>
<h4 id="hidden-blocks" tabindex="-1"><a class="header-anchor" href="#hidden-blocks" aria-hidden="true">#</a> hidden-blocks</h4>
<ul>
<li>
<p><strong>默认值</strong>:
<code v-pre>[copper_ore, deepslate_copper_ore, gold_ore, deepslate_gold_ore, iron_ore, deepslate_iron_ore, coal_ore, deepslate_coal_ore, lapis_ore, deepslate_lapis_ore, mossy_cobblestone, obsidian, chest, diamond_ore, deepslate_diamond_ore, redstone_ore, deepslate_redstone_ore, clay, emerald_ore, deepslate_emerald_ore, ender_chest]</code></p>
</li>
<li>
<p><strong>描述</strong>: 如果启用反矿物透视模式 <code v-pre>engine-mode: 1</code> ，哪些方块需要被隐藏掉。它们会被替换为 <code v-pre>石头</code> (当 y&lt;0 时替换为 <code v-pre>深层</code> 类型), <code v-pre>下界岩</code>, 和 <code v-pre>末地岩</code>，被替换为何种方块将取决于矿物所在维度。忽略任何类型的空气方块。</p>
<p>如果启用模式 <code v-pre>engine-mode: 2</code> ，哪些方块在启用反矿物透视的世界中将随机生成。将 <code v-pre>hidden-blocks</code> 列表中的方块替换为 <code v-pre>replacement-blocks</code>。TileEntity（例如刷怪笼和箱子）在此列表中无效。</p>
</li>
</ul>
<h4 id="replacement-blocks" tabindex="-1"><a class="header-anchor" href="#replacement-blocks" aria-hidden="true">#</a> replacement-blocks:</h4>
<ul>
<li>
<p><strong>默认值</strong>: [stone, oak_planks, deepslate]</p>
</li>
<li>
<p><strong>描述</strong>: 此列表不会影响使用 <code v-pre>engine-mode: 1</code> 的世界。修改此列表对于使用模式1的世界无效。</p>
<p>若使用<code v-pre>engine-mode: 2</code>，<code v-pre>replacement-blocks</code> 和 <code v-pre>hidden-blocks</code> 两个列表中的方块都会随机被 <code v-pre>hidden-blocks</code> 列表中的方块取代。TileEntity在 <code v-pre>hidden-blocks</code> 列表中会被忽略掉，但是会加入到 <code v-pre>replacement-blocks</code> 列表之中。忽略所有类型的空气方块。</p>
</li>
</ul>
<h3 id="obfuscation" tabindex="-1"><a class="header-anchor" href="#obfuscation" aria-hidden="true">#</a> obfuscation</h3>
<h4 id="items" tabindex="-1"><a class="header-anchor" href="#items" aria-hidden="true">#</a> items</h4>
<h5 id="hide-durability" tabindex="-1"><a class="header-anchor" href="#hide-durability" aria-hidden="true">#</a> hide-durability</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否要隐藏发送给客户端耐久度的相关信息。可能会影响需要依赖于获取耐久度的材质包。</li>
</ul>
<h5 id="hide-itemmeta" tabindex="-1"><a class="header-anchor" href="#hide-itemmeta" aria-hidden="true">#</a> hide-itemmeta</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 发送给玩家客户端的数据中是否要隐藏不必要的物品信息（例如附魔、物品在潜影盒/背包中 等等），此数据可能会给作弊客户端带来有利条件。可能会影响需要依赖于获取附魔、Lore或物品名称等的材质包。</li>
</ul>
<h2 id="chunks" tabindex="-1"><a class="header-anchor" href="#chunks" aria-hidden="true">#</a> chunks</h2>
<h3 id="auto-save-interval" tabindex="-1"><a class="header-anchor" href="#auto-save-interval" aria-hidden="true">#</a> auto-save-interval</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 配置世界在间隔多少Tick后应当保存一次。此值的优先度高于 <code v-pre>bukkit.yml</code> 文件中 <code v-pre>ticks-per.autosave</code> 项。若此值设为 <code v-pre>-1</code>，认使用 <code v-pre>bukkit.yml</code> 文件中的<code v-pre>ticks-per.autosave</code> 作为默认值。</li>
</ul>
<h3 id="delay-chunk-unloads-by" tabindex="-1"><a class="header-anchor" href="#delay-chunk-unloads-by" aria-hidden="true">#</a> delay-chunk-unloads-by</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>10s</code></li>
<li><strong>描述</strong>: 延迟多长时间后卸载区块。</li>
</ul>
<h3 id="entity-per-chunk-save-limit" tabindex="-1"><a class="header-anchor" href="#entity-per-chunk-save-limit" aria-hidden="true">#</a> entity-per-chunk-save-limit</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>{experience_orb: -1...}</code></li>
<li><strong>描述</strong>: 限制每个区块中指定实体可被保存/加载的数量。 设定此值为 <code v-pre>-1</code> 将会禁用对特定实体的限制。可以添加除了已经填入的实体类型以外的任何实体。</li>
</ul>
<h3 id="fixed-chunk-inhabited-time" tabindex="-1"><a class="header-anchor" href="#fixed-chunk-inhabited-time" aria-hidden="true">#</a> fixed-chunk-inhabited-time</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 如果设定为<code v-pre>0</code>或更高，则将区块的保持加载时间设定为一个定值。这里的“定值” 是指静态或永不会变，并<strong>不是</strong>指修复一个Bug。从玩家在此区块活跃时起，计时器就会开始计数。</li>
</ul>
<h3 id="max-auto-save-chunks-per-tick" tabindex="-1"><a class="header-anchor" href="#max-auto-save-chunks-per-tick" aria-hidden="true">#</a> max-auto-save-chunks-per-tick</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>24</code></li>
<li><strong>描述</strong>: 单个Tick中自动保存可保存最大区块的数量。</li>
</ul>
<h3 id="prevent-moving-into-unloaded-chunks" tabindex="-1"><a class="header-anchor" href="#prevent-moving-into-unloaded-chunks" aria-hidden="true">#</a> prevent-moving-into-unloaded-chunks</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否允许玩家移动进尚未加载完成的区块中。</li>
</ul>
<h2 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions" aria-hidden="true">#</a> collisions</h2>
<h3 id="allow-player-cramming-damage" tabindex="-1"><a class="header-anchor" href="#allow-player-cramming-damage" aria-hidden="true">#</a> allow-player-cramming-damage</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当实体堆叠数量超过游戏规则 <code v-pre>maxEntityCramming</code> 设定值时，是否要对玩家造成伤害。</li>
</ul>
<h3 id="allow-vehicle-collisions" tabindex="-1"><a class="header-anchor" href="#allow-vehicle-collisions" aria-hidden="true">#</a> allow-vehicle-collisions</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当 <code v-pre>only-players-collide</code> 启用时，交通工具是否也要计入在内。</li>
</ul>
<h3 id="fix-climbing-bypassing-cramming-rule" tabindex="-1"><a class="header-anchor" href="#fix-climbing-bypassing-cramming-rule" aria-hidden="true">#</a> fix-climbing-bypassing-cramming-rule</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 攀爬是否不计入实体堆叠限制内。</li>
</ul>
<h3 id="max-entity-collisions" tabindex="-1"><a class="header-anchor" href="#max-entity-collisions" aria-hidden="true">#</a> max-entity-collisions</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>8</code></li>
<li><strong>描述</strong>: 达到此值后，服务器将不再处理碰撞。</li>
</ul>
<h3 id="only-players-collide" tabindex="-1"><a class="header-anchor" href="#only-players-collide" aria-hidden="true">#</a> only-players-collide</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否仅当玩家接触另外一个实体时才会计算碰撞。</li>
</ul>
<h2 id="entities" tabindex="-1"><a class="header-anchor" href="#entities" aria-hidden="true">#</a> entities</h2>
<h3 id="armor-stands" tabindex="-1"><a class="header-anchor" href="#armor-stands" aria-hidden="true">#</a> armor-stands</h3>
<h4 id="do-collision-entity-lookups" tabindex="-1"><a class="header-anchor" href="#do-collision-entity-lookups" aria-hidden="true">#</a> do-collision-entity-lookups</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>:是否要为盔甲架实体启用实体碰撞检查。</li>
</ul>
<h4 id="tick" tabindex="-1"><a class="header-anchor" href="#tick" aria-hidden="true">#</a> tick</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 当禁用后，盔甲架将停止计算Tick。此项在有大量盔甲架时可以提高性能。</li>
</ul>
<h3 id="behaviour" tabindex="-1"><a class="header-anchor" href="#behaviour" aria-hidden="true">#</a> behaviour</h3>
<h4 id="baby-zombie-movement-modifier" tabindex="-1"><a class="header-anchor" href="#baby-zombie-movement-modifier" aria-hidden="true">#</a> baby-zombie-movement-modifier</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>0.5</code></li>
<li><strong>描述</strong>: 设定幼年僵尸的移动速度。比如，设定 <code v-pre>0.5</code> 是比默认移动速度快 50%，设定 <code v-pre>-0.4</code> 是比默认移动速度慢 40%。</li>
</ul>
<h4 id="disable-chest-cat-detection" tabindex="-1"><a class="header-anchor" href="#disable-chest-cat-detection" aria-hidden="true">#</a> disable-chest-cat-detection</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 如果有猫坐在箱子上，玩家是否可以打开箱子。</li>
</ul>
<h4 id="disable-creeper-lingering-effect" tabindex="-1"><a class="header-anchor" href="#disable-creeper-lingering-effect" aria-hidden="true">#</a> disable-creeper-lingering-effect</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要禁用苦力怕随机的AreaEffectCloud效果。</li>
</ul>
<h4 id="disable-player-crits" tabindex="-1"><a class="header-anchor" href="#disable-player-crits" aria-hidden="true">#</a> disable-player-crits</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 在PvP中是否要禁用暴击，即每一次挥剑的伤害相同。</li>
</ul>
<h4 id="door-breaking-difficulty" tabindex="-1"><a class="header-anchor" href="#door-breaking-difficulty" aria-hidden="true">#</a> door-breaking-difficulty</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>[HARD, NORMAL, EASY, PEACEFUL]</code></li>
<li><strong>描述</strong>: 哪些难度下可以使实体尝试破门。</li>
</ul>
<h4 id="ender-dragons-death-always-places-dragon-egg" tabindex="-1"><a class="header-anchor" href="#ender-dragons-death-always-places-dragon-egg" aria-hidden="true">#</a> ender-dragons-death-always-places-dragon-egg</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 末影龙是否在每次死亡时都会生成一个龙蛋。</li>
</ul>
<h4 id="experience-merge-max-value" tabindex="-1"><a class="header-anchor" href="#experience-merge-max-value" aria-hidden="true">#</a> experience-merge-max-value</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 单个经验球可提供的最大经验值，防止将周围的所有经验都合并在一个经验球里面。设定<code v-pre>-1</code>则没有上限，可以把周围经验全部合并到一个经验球之中。当击杀Boss后此变化非常明显。</li>
</ul>
<h4 id="mobs-can-always-pick-up-loot" tabindex="-1"><a class="header-anchor" href="#mobs-can-always-pick-up-loot" aria-hidden="true">#</a> mobs-can-always-pick-up-loot</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 僵尸和骷髅（可单独配置）是否总会拾取战利品。如果设定为 <code v-pre>false</code>，将由游戏难度决定（和原版一致）。</li>
</ul>
<h4 id="nerf-pigmen-from-nether-portals" tabindex="-1"><a class="header-anchor" href="#nerf-pigmen-from-nether-portals" aria-hidden="true">#</a> nerf-pigmen-from-nether-portals</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否移除由下界传送门生成的猪人的AI。</li>
</ul>
<h4 id="parrots-are-unaffected-by-player-movement" tabindex="-1"><a class="header-anchor" href="#parrots-are-unaffected-by-player-movement" aria-hidden="true">#</a> parrots-are-unaffected-by-player-movement</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要让鹦鹉“赖”在玩家身上不走，即玩家移动不会驱赶鹦鹉。潜行可以赶走它们。</li>
</ul>
<h4 id="phantoms-do-not-spawn-on-creative-players" tabindex="-1"><a class="header-anchor" href="#phantoms-do-not-spawn-on-creative-players" aria-hidden="true">#</a> phantoms-do-not-spawn-on-creative-players</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 创造模式的玩家是否不会生成幻翼。</li>
</ul>
<h4 id="phantoms-only-attack-insomniacs" tabindex="-1"><a class="header-anchor" href="#phantoms-only-attack-insomniacs" aria-hidden="true">#</a> phantoms-only-attack-insomniacs</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 幻翼是否不攻击正在睡觉的玩家。</li>
</ul>
<h4 id="piglins-guard-chests" tabindex="-1"><a class="header-anchor" href="#piglins-guard-chests" aria-hidden="true">#</a> piglins-guard-chests</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 猪灵被激怒后是否会尝试保护箱子。</li>
</ul>
<h4 id="pillager-patrols" tabindex="-1"><a class="header-anchor" href="#pillager-patrols" aria-hidden="true">#</a> pillager-patrols</h4>
<h5 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要禁用掠夺者巡逻机制和相关的AI。</li>
</ul>
<h5 id="spawn-chance" tabindex="-1"><a class="header-anchor" href="#spawn-chance" aria-hidden="true">#</a> spawn-chance</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>0.2</code></li>
<li><strong>描述</strong>: 设定巡逻队生成的概率。</li>
</ul>
<h5 id="spawn-delay" tabindex="-1"><a class="header-anchor" href="#spawn-delay" aria-hidden="true">#</a> spawn-delay</h5>
<h6 id="per-player" tabindex="-1"><a class="header-anchor" href="#per-player" aria-hidden="true">#</a> per-player</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 每名玩家是否都会造成生成延迟。</li>
</ul>
<h6 id="ticks" tabindex="-1"><a class="header-anchor" href="#ticks" aria-hidden="true">#</a> ticks</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>12000</code></li>
<li><strong>描述</strong>: 需要间隔多少Tick后才有概率重新生成。</li>
</ul>
<h5 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h5>
<h6 id="per-player-1" tabindex="-1"><a class="header-anchor" href="#per-player-1" aria-hidden="true">#</a> per-player</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 每名玩家是否都会造成生成的间隔天数。</li>
</ul>
<h6 id="day" tabindex="-1"><a class="header-anchor" href="#day" aria-hidden="true">#</a> day</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>5</code></li>
<li><strong>描述</strong>: 两次袭击所需间隔的天数。</li>
</ul>
<h4 id="should-remove-dragon" tabindex="-1"><a class="header-anchor" href="#should-remove-dragon" aria-hidden="true">#</a> should-remove-dragon</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 如果没有可用传送门剩余，是否要删除末影龙。</li>
</ul>
<h4 id="spawner-nerfed-mobs-should-jump" tabindex="-1"><a class="header-anchor" href="#spawner-nerfed-mobs-should-jump" aria-hidden="true">#</a> spawner-nerfed-mobs-should-jump</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 刷怪笼所生成（经过削弱的怪物）是否应当不断尝试在水中漂浮（跳跃）。</li>
</ul>
<h4 id="zombie-villager-infection-chance" tabindex="-1"><a class="header-anchor" href="#zombie-villager-infection-chance" aria-hidden="true">#</a> zombie-villager-infection-chance</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1.0</code></li>
<li><strong>描述</strong>: 设定村民转换为僵尸村民的概率（原文是change，看键名应该是拼错了）。设定为 <code v-pre>-1.0</code> 将由原版游戏难度决定。设定为 <code v-pre>0.0</code> 时，僵尸将永远会直接杀死村民。设定为 <code v-pre>100.0</code> 时，僵尸将永远直接转化村民为僵尸村民。译者注：根据Minecraft Wiki得知，简单模式不会将村民转换为僵尸村民，普通模式转换为僵尸村民的概率是50%，困难模式转换为僵尸村民的概率是100%。</li>
</ul>
<h4 id="zombies-target-turtle-eggs" tabindex="-1"><a class="header-anchor" href="#zombies-target-turtle-eggs" aria-hidden="true">#</a> zombies-target-turtle-eggs</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 僵尸和僵尸猪灵是否会视海龟蛋为目标。设定此值为<code v-pre>false</code>将会提高性能，因为他们不会尝试搜索附近的蛋。</li>
</ul>
<h3 id="entities-target-with-follow-range" tabindex="-1"><a class="header-anchor" href="#entities-target-with-follow-range" aria-hidden="true">#</a> entities-target-with-follow-range</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当视实体为目标时，服务器是否应该直接使用Follow range。译者注：我不知道这个Follow range是不是一个配置文件键名，中文应该是“追寻距离”。</li>
</ul>
<h3 id="mob-effects" tabindex="-1"><a class="header-anchor" href="#mob-effects" aria-hidden="true">#</a> mob-effects</h3>
<h4 id="immune-to-wither-effect" tabindex="-1"><a class="header-anchor" href="#immune-to-wither-effect" aria-hidden="true">#</a> immune-to-wither-effect</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 特定实体是否直接免疫凋零效果。</li>
</ul>
<h4 id="spiders-immune-to-poison-effect" tabindex="-1"><a class="header-anchor" href="#spiders-immune-to-poison-effect" aria-hidden="true">#</a> spiders-immune-to-poison-effect</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 蜘蛛是否要免疫药水效果。</li>
</ul>
<h4 id="undead-immune-to-certain-effects" tabindex="-1"><a class="header-anchor" href="#undead-immune-to-certain-effects" aria-hidden="true">#</a> undead-immune-to-certain-effects</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 亡灵生物是否直接免疫再生和药水效果。</li>
</ul>
<h3 id="spawning" tabindex="-1"><a class="header-anchor" href="#spawning" aria-hidden="true">#</a> spawning</h3>
<h4 id="all-chunks-are-slime-chunks" tabindex="-1"><a class="header-anchor" href="#all-chunks-are-slime-chunks" aria-hidden="true">#</a> all-chunks-are-slime-chunks</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否应该将所有区块都作为粘液区块，史莱姆可以在任意区块中生成。会减少遇到史莱姆的概率，因为可生成的区域变大了。</li>
</ul>
<h4 id="alt-item-despawn-rate" tabindex="-1"><a class="header-anchor" href="#alt-item-despawn-rate" aria-hidden="true">#</a> alt-item-despawn-rate</h4>
<h5 id="enabled-1" tabindex="-1"><a class="header-anchor" href="#enabled-1" aria-hidden="true">#</a> enabled</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 物品是否会有不同的消失时间。</li>
</ul>
<h5 id="items-1" tabindex="-1"><a class="header-anchor" href="#items-1" aria-hidden="true">#</a> items</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>{ cobblestone: 300 }</code> (从Ticks mappings获取物品列表)</li>
<li><strong>描述</strong>: 为不同物品设定不同的消失时间（以Tick为单位）。物品ID和原版/give命令（命名空间ID）一样，也可以按下<strong>F3+H</strong>启用游戏内的高级提示框，将鼠标指针放在物品栏中的任意物品上面，会显示在物品信息的最底行。</li>
</ul>
<h4 id="count-all-mobs-for-spawning" tabindex="-1"><a class="header-anchor" href="#count-all-mobs-for-spawning" aria-hidden="true">#</a> count-all-mobs-for-spawning</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要将刷怪笼和其它（杂项）生成的生物统计入全局生物上限。</li>
</ul>
<h4 id="creative-arrow-despawn-rate" tabindex="-1"><a class="header-anchor" href="#creative-arrow-despawn-rate" aria-hidden="true">#</a> creative-arrow-despawn-rate</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 创造模式玩家射出的箭消失的速度。以Tick为单位。</li>
</ul>
<h4 id="despawn-ranges" tabindex="-1"><a class="header-anchor" href="#despawn-ranges" aria-hidden="true">#</a> despawn-ranges</h4>
<h5 id="soft" tabindex="-1"><a class="header-anchor" href="#soft" aria-hidden="true">#</a> soft</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>32</code></li>
<li><strong>描述</strong>: 距离玩家多少方块外的（每个）实体（可单独设置）应该被随机选中并删除（消失）。影响水平和垂直两个方向。</li>
</ul>
<h5 id="hard" tabindex="-1"><a class="header-anchor" href="#hard" aria-hidden="true">#</a> hard</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>128</code></li>
<li><strong>描述</strong>: 距离玩家多少方块外的（每个）实体（可单独设置）应该被强制选中并删除（消失）。影响水平和垂直两个方向。</li>
</ul>
<h4 id="disable-mob-spawner-spawn-egg-transformation" tabindex="-1"><a class="header-anchor" href="#disable-mob-spawner-spawn-egg-transformation" aria-hidden="true">#</a> disable-mob-spawner-spawn-egg-transformation</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要禁止玩家使用刷怪蛋修改刷怪笼刷出生物的种类。</li>
</ul>
<h4 id="duplicate-uuid" tabindex="-1"><a class="header-anchor" href="#duplicate-uuid" aria-hidden="true">#</a> duplicate-uuid</h4>
<h5 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h5>
<ul>
<li>
<p><strong>默认值</strong>: <code v-pre>saferegen</code></p>
</li>
<li>
<p><strong>描述</strong>: 用于处理相同UUID的实体的处理办法。<br>
以下是可选的值：</p>
<ul>
<li><strong><code v-pre>saferegen</code></strong>: 为实体重新命名UUID。如果两个离得很近就移除。</li>
<li><strong><code v-pre>delete</code></strong>: 移除实体。</li>
<li><strong><code v-pre>silent</code></strong>: 啥也别干，只打印日志。</li>
<li><strong><code v-pre>warn</code></strong>: 啥也别干，日志都别给我打印。</li>
</ul>
</li>
</ul>
<h5 id="safe-regen-delete-range" tabindex="-1"><a class="header-anchor" href="#safe-regen-delete-range" aria-hidden="true">#</a> safe-regen-delete-range</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>32</code></li>
<li><strong>描述</strong>: 若在上面使用 <code v-pre>saferegen</code> 值，那么两个生物相距多少方块才应该移除一个。</li>
</ul>
<h4 id="filter-nbt-data-from-spawn-eggs-and-related" tabindex="-1"><a class="header-anchor" href="#filter-nbt-data-from-spawn-eggs-and-related" aria-hidden="true">#</a> filter-nbt-data-from-spawn-eggs-and-related</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 服务器是否要删除一些从刷怪蛋刷出的生物、Falling Block的实体形式和经常用在创造模式下会滥用的物品。</li>
<li><strong>说明</strong>: 部分冒险模式的地图需要关闭此项，但是不建议在公开的服务器上禁用此选项。</li>
</ul>
<h4 id="iron-golems-can-spawn-in-air" tabindex="-1"><a class="header-anchor" href="#iron-golems-can-spawn-in-air" aria-hidden="true">#</a> iron-golems-can-spawn-in-air</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 铁傀儡是否可以在空中生成。刷铁机可能会因此项而不好使。</li>
</ul>
<h4 id="monster-spawn-max-light-level" tabindex="-1"><a class="header-anchor" href="#monster-spawn-max-light-level" aria-hidden="true">#</a> monster-spawn-max-light-level</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 当设定为 <code v-pre>-1</code> 时, 怪物生成的最大亮点和原版一致（=0）。设定为 <code v-pre>15</code> 或更高恢复到 1.18 Pre 及之前版本。</li>
</ul>
<h4 id="non-player-arrow-despawn-rate" tabindex="-1"><a class="header-anchor" href="#non-player-arrow-despawn-rate" aria-hidden="true">#</a> non-player-arrow-despawn-rate</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>default</code></li>
<li><strong>描述</strong>: 非玩家实体射出箭后箭矢消失的速度。以Tick为单位。<br>
设定为 <code v-pre>default</code> 则使用 <code v-pre>spigot.yml</code> 中默认的箭矢消失速度，并且将用于全部箭矢。</li>
</ul>
<h4 id="per-player-mob-spawns" tabindex="-1"><a class="header-anchor" href="#per-player-mob-spawns" aria-hidden="true">#</a> per-player-mob-spawns</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 是为单个玩家还是为全部服务器应用怪物上限（在bukkit.yml设定）。<br>
当启用此项后，怪物生成的数量与禁用此项的数量几乎是一致的，但是会更加均匀。可以防止一个人占用全服的怪物上限，让每名玩家都有良好的游戏体验。</li>
</ul>
<h4 id="scan-for-legacy-ender-dragon" tabindex="-1"><a class="header-anchor" href="#scan-for-legacy-ender-dragon" aria-hidden="true">#</a> scan-for-legacy-ender-dragon</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 服务器是否会检测末影龙战。设定此值为 <code v-pre>false</code> 将在末地不再自动生成末影龙（甚至在新的世界中）。</li>
</ul>
<h4 id="skeleton-horse-thunder-spawn-chance" tabindex="-1"><a class="header-anchor" href="#skeleton-horse-thunder-spawn-chance" aria-hidden="true">#</a> skeleton-horse-thunder-spawn-chance</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>0.01</code></li>
<li><strong>描述</strong>: 设定在雷暴天气下召唤骷髅马骑兵队的概率（劈中骷髅时）。</li>
</ul>
<h4 id="slime-spawn-height" tabindex="-1"><a class="header-anchor" href="#slime-spawn-height" aria-hidden="true">#</a> slime-spawn-height</h4>
<h5 id="slime-chunk" tabindex="-1"><a class="header-anchor" href="#slime-chunk" aria-hidden="true">#</a> slime-chunk</h5>
<h6 id="maximum" tabindex="-1"><a class="header-anchor" href="#maximum" aria-hidden="true">#</a> maximum</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>40</code></li>
<li><strong>描述</strong>: 史莱姆区块生成史莱姆的Y最小值。</li>
</ul>
<h5 id="swamp-biome" tabindex="-1"><a class="header-anchor" href="#swamp-biome" aria-hidden="true">#</a> swamp-biome</h5>
<h6 id="maximum-1" tabindex="-1"><a class="header-anchor" href="#maximum-1" aria-hidden="true">#</a> maximum</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>70</code></li>
<li><strong>描述</strong>: 沼泽生物群系生成史莱姆的Y最大值。</li>
</ul>
<h6 id="minimum" tabindex="-1"><a class="header-anchor" href="#minimum" aria-hidden="true">#</a> minimum</h6>
<ul>
<li><strong>默认值</strong>: <code v-pre>50</code></li>
<li><strong>描述</strong>: 沼泽生物群系生成史莱姆的Y最小值.</li>
</ul>
<h4 id="spawn-limits" tabindex="-1"><a class="header-anchor" href="#spawn-limits" aria-hidden="true">#</a> spawn-limits</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 用于确定每种类型的实体（可以单独设置）在每个世界中自然生成的数量。此值与bukkit.yml中的配置项是一样的，不过可以为每个世界单独设置。若设定为 <code v-pre>-1</code> 将交由 bukkit.yml 中的值管理。</li>
</ul>
<h4 id="wandering-trader" tabindex="-1"><a class="header-anchor" href="#wandering-trader" aria-hidden="true">#</a> wandering-trader</h4>
<h5 id="spawn-chance-failure-increment" tabindex="-1"><a class="header-anchor" href="#spawn-chance-failure-increment" aria-hidden="true">#</a> spawn-chance-failure-increment</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>25</code></li>
<li><strong>描述</strong>: 若尝试生成流浪商人失败，下次生成的概率应该增加多少。</li>
</ul>
<h5 id="spawn-chance-max" tabindex="-1"><a class="header-anchor" href="#spawn-chance-max" aria-hidden="true">#</a> spawn-chance-max</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>75</code></li>
<li><strong>描述</strong>: 流浪商人生成的最大概率是多少。</li>
</ul>
<h5 id="spawn-chance-min" tabindex="-1"><a class="header-anchor" href="#spawn-chance-min" aria-hidden="true">#</a> spawn-chance-min</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>25</code></li>
<li><strong>描述</strong>: 流浪商人生成的基础概率是多少。</li>
</ul>
<h5 id="spawn-day-length" tabindex="-1"><a class="header-anchor" href="#spawn-day-length" aria-hidden="true">#</a> spawn-day-length</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>24000</code></li>
<li><strong>描述</strong>: 尝试生成流浪商人的间隔时间。以Tick为单位。</li>
</ul>
<h5 id="spawn-minute-length" tabindex="-1"><a class="header-anchor" href="#spawn-minute-length" aria-hidden="true">#</a> spawn-minute-length</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>1200</code></li>
<li><strong>描述</strong>: 流浪商人生成的时间长度。以Tick为单位。</li>
</ul>
<h4 id="wateranimal-spawn-height" tabindex="-1"><a class="header-anchor" href="#wateranimal-spawn-height" aria-hidden="true">#</a> wateranimal-spawn-height</h4>
<h5 id="maximum-2" tabindex="-1"><a class="header-anchor" href="#maximum-2" aria-hidden="true">#</a> maximum</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>default</code></li>
<li><strong>描述</strong>: 水生动物生成的最大高度。</li>
<li><strong>说明</strong>: 默认值即遵循原版Minecraft生成的高度，也就是1.12.2版本的水平面高度 (通常 Y: 64)。</li>
</ul>
<h5 id="minimum-1" tabindex="-1"><a class="header-anchor" href="#minimum-1" aria-hidden="true">#</a> minimum</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>default</code></li>
<li><strong>描述</strong>: 水生动物生成的最小高度。</li>
<li><strong>说明</strong>: 默认值即遵循原版Minecraft生成的高度，也就是1.12.2版本的水平面高度 (通常 Y: 64)。</li>
</ul>
<h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h2>
<h3 id="disable-explosion-knockback" tabindex="-1"><a class="header-anchor" href="#disable-explosion-knockback" aria-hidden="true">#</a> disable-explosion-knockback</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否应该完全阻止由爆炸造成的击退。</li>
<li></li>
</ul>
<h3 id="disable-ice-and-snow" tabindex="-1"><a class="header-anchor" href="#disable-ice-and-snow" aria-hidden="true">#</a> disable-ice-and-snow</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否不再生成冰与雪。此项同时也会使炼药锅不再会被雨/雪填满。</li>
</ul>
<h3 id="disable-teleportation-suffocation-check" tabindex="-1"><a class="header-anchor" href="#disable-teleportation-suffocation-check" aria-hidden="true">#</a> disable-teleportation-suffocation-check</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要在尝试传送玩家之前禁用窒息检查。</li>
<li><strong>说明</strong>: 虽然这会帮助玩家传送出去时不被墙所阻挡，但是在特定位置的情况下，当玩家登出服务器时会穿过方块。</li>
</ul>
<h3 id="disable-thunder" tabindex="-1"><a class="header-anchor" href="#disable-thunder" aria-hidden="true">#</a> disable-thunder</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否要禁用雷雨天气。</li>
</ul>
<h3 id="frosted-ice" tabindex="-1"><a class="header-anchor" href="#frosted-ice" aria-hidden="true">#</a> frosted-ice</h3>
<h4 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h4>
<h5 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> max</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>40</code></li>
<li><strong>描述</strong>: 霜冰效果的最大RNG值。</li>
</ul>
<h5 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> min</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>20</code></li>
<li><strong>描述</strong>: 霜冰效果的最小RNG值。</li>
</ul>
<h4 id="enabled-2" tabindex="-1"><a class="header-anchor" href="#enabled-2" aria-hidden="true">#</a> enabled</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 服务器是否要启用（并计时Tick）霜冰方块。译者注：根据Minecraft Wiki得知，霜冰应该是冰霜行者附魔创造出的方块。</li>
</ul>
<h3 id="generate-flat-bedrock" tabindex="-1"><a class="header-anchor" href="#generate-flat-bedrock" aria-hidden="true">#</a> generate-flat-bedrock</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否要生成基岩作为单个的平面层。</li>
</ul>
<h3 id="nether-ceiling-void-damage-height" tabindex="-1"><a class="header-anchor" href="#nether-ceiling-void-damage-height" aria-hidden="true">#</a> nether-ceiling-void-damage-height</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>disabled</code></li>
<li><strong>描述</strong>: 设定玩家在地狱Y高度应该高于多少后受到虚空伤害。这是一个非常“友好”的方式限制玩家在地狱基岩天花板上建筑。设定为<code v-pre>disabled</code>以禁用此功能。</li>
</ul>
<h3 id="optimize-explosions" tabindex="-1"><a class="header-anchor" href="#optimize-explosions" aria-hidden="true">#</a> optimize-explosions</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否应该在爆炸时使用缓存来查找实体，而不是爆炸时进行计算。此项会显著提高爆炸的速度。</li>
</ul>
<h3 id="portal-create-radius" tabindex="-1"><a class="header-anchor" href="#portal-create-radius" aria-hidden="true">#</a> portal-create-radius</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>16</code></li>
<li><strong>描述</strong>: 服务器尝试生成新传送门时可偏移的最大距离。</li>
</ul>
<h3 id="portal-search-radius" tabindex="-1"><a class="header-anchor" href="#portal-search-radius" aria-hidden="true">#</a> portal-search-radius</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>128</code></li>
<li><strong>描述</strong>: 服务器尝试搜寻已有传送门的范围。如果找不到就新生成一个。译者注：可以适当把此值调大一点，因为译者在玩游戏时经常在地下生成一个新的传送门。</li>
</ul>
<h3 id="portal-search-vanilla-dimension-scaling" tabindex="-1"><a class="header-anchor" href="#portal-search-vanilla-dimension-scaling" aria-hidden="true">#</a> portal-search-vanilla-dimension-scaling</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 是否为原版维度应用 <code v-pre>portal-search-radius</code>。</li>
</ul>
<h3 id="treasure-maps" tabindex="-1"><a class="header-anchor" href="#treasure-maps" aria-hidden="true">#</a> treasure-maps</h3>
<h4 id="enabled-3" tabindex="-1"><a class="header-anchor" href="#enabled-3" aria-hidden="true">#</a> enabled</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 从村民和箱子中得到的藏宝图是否应当指向相应的位置。</li>
</ul>
<h4 id="find-already-discovered" tabindex="-1"><a class="header-anchor" href="#find-already-discovered" aria-hidden="true">#</a> find-already-discovered</h4>
<ul>
<li><strong>描述</strong>: 原版的机制是优先寻找未被探索过的位置，可能会被引导到没有一个被完全搜刮的地方，也可能会抵达世界边界。这些配置允许设定获得地图的方式。</li>
</ul>
<h5 id="loot-tables" tabindex="-1"><a class="header-anchor" href="#loot-tables" aria-hidden="true">#</a> loot-tables</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>default</code></li>
<li><strong>描述</strong>: 是否要为未被探索过的地方覆盖配置战利品表检查。<code v-pre>default</code> 允许战利品表将单独确定搜索位置时是否准许已探索过的位置。原版战利品表都会自动跳过已探索过的位置，因此将此项设置为<code v-pre>false</code> 会覆盖并强制搜索已探索过的位置。</li>
</ul>
<h5 id="villager-trade" tabindex="-1"><a class="header-anchor" href="#villager-trade" aria-hidden="true">#</a> villager-trade</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否需要将通过从村民手中获得的藏宝图定位到第一个宝藏位置。</li>
</ul>
<h3 id="water-over-lava-flow-speed" tabindex="-1"><a class="header-anchor" href="#water-over-lava-flow-speed" aria-hidden="true">#</a> water-over-lava-flow-speed</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>5</code></li>
<li><strong>描述</strong>: 设定水流过岩浆时的速度。</li>
</ul>
<h2 id="feature-seeds" tabindex="-1"><a class="header-anchor" href="#feature-seeds" aria-hidden="true">#</a> feature-seeds</h2>
<h3 id="generate-random-seeds-for-all" tabindex="-1"><a class="header-anchor" href="#generate-random-seeds-for-all" aria-hidden="true">#</a> generate-random-seeds-for-all</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 为全部未指定种子的游戏内容启用自动填充种子。若想要要在受限环境中最大限度内设定种子，设定此项是个不错的选择。</li>
</ul>
<h3 id="feature-namespace" tabindex="-1"><a class="header-anchor" href="#feature-namespace" aria-hidden="true">#</a> <code v-pre>&lt;feature-namespace&gt;</code></h3>
<ul>
<li><strong>描述</strong>: 在特定情况下设定种子种群。如果设定为<code v-pre>-1</code>则保持原版种子种群不变，也不会被自动填充覆盖。</li>
</ul>
<h2 id="fishing-time-range" tabindex="-1"><a class="header-anchor" href="#fishing-time-range" aria-hidden="true">#</a> fishing-time-range</h2>
<h3 id="maximum-3" tabindex="-1"><a class="header-anchor" href="#maximum-3" aria-hidden="true">#</a> maximum</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>600</code></li>
<li><strong>描述</strong>: 钓鱼前的最大RNG Tick。</li>
</ul>
<h3 id="minimum-2" tabindex="-1"><a class="header-anchor" href="#minimum-2" aria-hidden="true">#</a> minimum</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>100</code></li>
<li><strong>描述</strong>: 钓鱼前的最小RNG Tick。</li>
</ul>
<h2 id="fixes" tabindex="-1"><a class="header-anchor" href="#fixes" aria-hidden="true">#</a> fixes</h2>
<h3 id="disable-unloaded-chunk-enderpearl-exploit" tabindex="-1"><a class="header-anchor" href="#disable-unloaded-chunk-enderpearl-exploit" aria-hidden="true">#</a> disable-unloaded-chunk-enderpearl-exploit</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 卸载区块时是否不保存已投出的末影珍珠。</li>
</ul>
<h3 id="falling-block-height-nerf" tabindex="-1"><a class="header-anchor" href="#falling-block-height-nerf" aria-hidden="true">#</a> falling-block-height-nerf</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>disabled</code></li>
<li><strong>描述</strong>: 服务器应该在高度为何值时时移除下落方块。设定为 <code v-pre>disabled</code> 则禁用此项。</li>
</ul>
<h3 id="fix-curing-zombie-villager-discount-exploit" tabindex="-1"><a class="header-anchor" href="#fix-curing-zombie-villager-discount-exploit" aria-hidden="true">#</a> fix-curing-zombie-villager-discount-exploit</h3>
<ul>
<li><strong>默认值</strong>: true</li>
<li><strong>描述</strong>: 是否要修复一个反复治愈僵尸村民来得到村民折扣的<a href="https://bugs.mojang.com/browse/MC-181190" target="_blank" rel="noopener noreferrer">经常被恶意利用的机制<ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="fix-items-merging-through-walls" tabindex="-1"><a class="header-anchor" href="#fix-items-merging-through-walls" aria-hidden="true">#</a> fix-items-merging-through-walls</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否应该在物品尝试堆叠时防止其穿墙。启用此项会使性能下降。只有当 <code v-pre>spigot.yml</code>中的<code v-pre>merge-radius.item</code> 值设定很大才会穿墙堆叠物品。</li>
</ul>
<h3 id="prevent-tnt-from-moving-in-water" tabindex="-1"><a class="header-anchor" href="#prevent-tnt-from-moving-in-water" aria-hidden="true">#</a> prevent-tnt-from-moving-in-water</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否应该禁止已激活的TNT在水中游动。</li>
</ul>
<h3 id="split-overstacked-loot" tabindex="-1"><a class="header-anchor" href="#split-overstacked-loot" aria-hidden="true">#</a> split-overstacked-loot</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 当设定为 <code v-pre>false</code> 时，战利品表不会将超出最大堆叠限制的物品尝试进行拆分为较少的堆叠数量。这会阻止超过最大堆叠数目导致在生成模式下的潜影盒中物品丢失或使区块崩溃而出现错误（因为玩家一直在尝试发送过大的包，导致最终会被踢出服务器）</li>
</ul>
<h3 id="tnt-entity-height-nerf" tabindex="-1"><a class="header-anchor" href="#tnt-entity-height-nerf" aria-hidden="true">#</a> tnt-entity-height-nerf</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>disabled</code></li>
<li><strong>描述</strong>: 服务器移除已激活的TNT最大高度的值。设定为 <code v-pre>disabled</code> 以禁用此项。</li>
</ul>
<h2 id="hopper" tabindex="-1"><a class="header-anchor" href="#hopper" aria-hidden="true">#</a> hopper</h2>
<h3 id="cooldown-when-full" tabindex="-1"><a class="header-anchor" href="#cooldown-when-full" aria-hidden="true">#</a> cooldown-when-full</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 当漏斗已满时，是否要暂时停止加入新物品以替代不断尝试往里塞东西。</li>
</ul>
<h3 id="disable-move-event" tabindex="-1"><a class="header-anchor" href="#disable-move-event" aria-hidden="true">#</a> disable-move-event</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 为漏斗禁用全部 <code v-pre>InventoryMoveItemEvent</code> 事件。此项可以显著提高性能，但是会影响使用此事件的插件，例如领地或保护插件。</li>
</ul>
<h3 id="ignore-occluding-blocks" tabindex="-1"><a class="header-anchor" href="#ignore-occluding-blocks" aria-hidden="true">#</a> ignore-occluding-blocks</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 漏斗是否会忽略其阻塞的方块。例如在沙子里面塞一个漏斗矿车。启用此项会提高为漏斗放入新物品时的性能。</li>
</ul>
<h2 id="lootables" tabindex="-1"><a class="header-anchor" href="#lootables" aria-hidden="true">#</a> lootables</h2>
<h3 id="auto-replenish" tabindex="-1"><a class="header-anchor" href="#auto-replenish" aria-hidden="true">#</a> auto-replenish</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否会自动填充战利品容器。在启用此项之后，对某些玩家不断跑图（不断生成新区块）以寻找好东西的长期存档的服务器非常有用。</li>
</ul>
<h3 id="max-refills" tabindex="-1"><a class="header-anchor" href="#max-refills" aria-hidden="true">#</a> max-refills</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 设定重新填充战利品的最大次数。</li>
<li><strong>说明</strong>: 默认值 <code v-pre>-1</code> 即无限填充战利品。</li>
</ul>
<h3 id="refresh-max" tabindex="-1"><a class="header-anchor" href="#refresh-max" aria-hidden="true">#</a> refresh-max</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>2d</code></li>
<li><strong>描述</strong>: 容器重新填充战利品最大需要经过多长时间。</li>
</ul>
<h3 id="refresh-min" tabindex="-1"><a class="header-anchor" href="#refresh-min" aria-hidden="true">#</a> refresh-min</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>12h</code></li>
<li><strong>描述</strong>: 容器重新填充战利品最少需要经过多长时间。</li>
</ul>
<h3 id="reset-seed-on-fill" tabindex="-1"><a class="header-anchor" href="#reset-seed-on-fill" aria-hidden="true">#</a> reset-seed-on-fill</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 当每次准备重新填充战利品是否都要随机决定重新填充的新物品种类。</li>
</ul>
<h3 id="restrict-player-reloot" tabindex="-1"><a class="header-anchor" href="#restrict-player-reloot" aria-hidden="true">#</a> restrict-player-reloot</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 是否要防止同一玩家反复回来掠夺同一容器中的战利品 <s>（江湖大盗）</s> 。</li>
</ul>
<h2 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> maps</h2>
<h3 id="item-frame-cursor-limit" tabindex="-1"><a class="header-anchor" href="#item-frame-cursor-limit" aria-hidden="true">#</a> item-frame-cursor-limit</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>128</code></li>
<li><strong>描述</strong>: 每个地图最大标记数量。如果过多可能会使客户端卡顿。</li>
</ul>
<h3 id="item-frame-cursor-update-interval" tabindex="-1"><a class="header-anchor" href="#item-frame-cursor-update-interval" aria-hidden="true">#</a> item-frame-cursor-update-interval</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>10</code></li>
<li><strong>描述</strong>: 物品展示框上的地图标记多久更新一次。设定为 <code v-pre>1</code> 或更低则禁用此更新。</li>
</ul>
<h2 id="max-growth-height" tabindex="-1"><a class="header-anchor" href="#max-growth-height" aria-hidden="true">#</a> max-growth-height</h2>
<h3 id="bamboo" tabindex="-1"><a class="header-anchor" href="#bamboo" aria-hidden="true">#</a> bamboo</h3>
<h4 id="max-1" tabindex="-1"><a class="header-anchor" href="#max-1" aria-hidden="true">#</a> max</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>16</code></li>
<li><strong>描述</strong>: 竹子自然生长能长到多高。</li>
</ul>
<h4 id="min-1" tabindex="-1"><a class="header-anchor" href="#min-1" aria-hidden="true">#</a> min</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>11</code></li>
<li><strong>描述</strong>: 竹子自然生长最起码要长多高。</li>
</ul>
<h3 id="cactus" tabindex="-1"><a class="header-anchor" href="#cactus" aria-hidden="true">#</a> cactus</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>3</code></li>
<li><strong>描述</strong>: 仙人掌自然生长最多能长多高。</li>
</ul>
<h3 id="reeds" tabindex="-1"><a class="header-anchor" href="#reeds" aria-hidden="true">#</a> reeds</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>3</code></li>
<li><strong>描述</strong>: 甘蔗（reeds）自然生长最多能长多高。</li>
</ul>
<h2 id="misc" tabindex="-1"><a class="header-anchor" href="#misc" aria-hidden="true">#</a> misc</h2>
<h3 id="disable-end-credits" tabindex="-1"><a class="header-anchor" href="#disable-end-credits" aria-hidden="true">#</a> disable-end-credits</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 离开末地时是否永不播放终末之诗。</li>
</ul>
<h3 id="disable-relative-projectile-velocity" tabindex="-1"><a class="header-anchor" href="#disable-relative-projectile-velocity" aria-hidden="true">#</a> disable-relative-projectile-velocity</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器在计算射出的箭的速度时是否不计算射手的速度。</li>
</ul>
<h3 id="disable-sprint-interruption-on-attack" tabindex="-1"><a class="header-anchor" href="#disable-sprint-interruption-on-attack" aria-hidden="true">#</a> disable-sprint-interruption-on-attack</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当玩家疾跑时受到攻击是否要停止疾跑。</li>
</ul>
<h3 id="light-queue-size" tabindex="-1"><a class="header-anchor" href="#light-queue-size" aria-hidden="true">#</a> light-queue-size</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>20</code></li>
<li><strong>描述</strong>: 设定每个世界对于非主线程的光更新队列的大小。原版设定此值为 <code v-pre>5</code>，但是实际使用此值会造成许多问题，特别是当使用WorldEdit等插件时。</li>
</ul>
<h3 id="max-leash-distance" tabindex="-1"><a class="header-anchor" href="#max-leash-distance" aria-hidden="true">#</a> max-leash-distance</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>10.0</code></li>
<li><strong>描述</strong>: 缰绳有效的最大距离。如果拴住生物的距离超过此值，则会断开缰绳。</li>
</ul>
<h3 id="redstone-implementation" tabindex="-1"><a class="header-anchor" href="#redstone-implementation" aria-hidden="true">#</a> redstone-implementation</h3>
<blockquote>
<p><strong>注意！</strong><br>
此项所有内容都是实验性的。<br>
如果出现问题，也许会在发布某个补丁的同时永久删除这些内容。</p>
</blockquote>
<ul>
<li><strong>默认值</strong>: <code v-pre>vanilla</code></li>
<li><strong>描述</strong>: 指定服务器的红石实现。以下备选实现方式通过优化功耗计算器、减少方块的数量与形状变化，可以大幅降低由红石引发的延迟。以下是实现列表：
<ul>
<li><strong>vanilla</strong>: 原版实现。</li>
<li><strong>eigencraft</strong>: theosib 开发的 Eigencraft 红石实现。</li>
<li><strong>alternate-current</strong>: Space Walker 开发的 Alternate Current 红石实现。</li>
</ul>
</li>
<li><strong>注意:</strong> 无论是 Eigencraft 还是 Alternate Current 的红石实现方式都修改了红石的行为。通过以下文档了解各自的红石实现。
<ul>
<li>Eigencraft: 目前没有官方文档。但是<a href="https://bugs.mojang.com/browse/MC-81098?focusedCommentId=420777#comment-42077" target="_blank" rel="noopener noreferrer">theosib's comments<ExternalLinkIcon/></a>在Mojira Bug Tracker对此实现进行了概述。</li>
<li><a href="https://github.com/SpaceWalkerRS/alternate-current/blob/main/README.md" target="_blank" rel="noopener noreferrer">Alternate Current<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="shield-blocking-delay" tabindex="-1"><a class="header-anchor" href="#shield-blocking-delay" aria-hidden="true">#</a> shield-blocking-delay</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>5</code></li>
<li><strong>描述</strong>: 玩家举起盾牌与实际格挡伤害之间需要间隔多少Tick。</li>
</ul>
<h3 id="show-sign-click-command-failure-msgs-to-player" tabindex="-1"><a class="header-anchor" href="#show-sign-click-command-failure-msgs-to-player" aria-hidden="true">#</a> show-sign-click-command-failure-msgs-to-player</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 点击告示牌运行命令失败时是否需要向玩家显示失败消息。</li>
</ul>
<h3 id="update-pathfinding-on-block-update" tabindex="-1"><a class="header-anchor" href="#update-pathfinding-on-block-update" aria-hidden="true">#</a> update-pathfinding-on-block-update</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 当某一方块更新时是否要同步更新生物的寻路机制。禁用此选项可以大大提高服务器性能，又几乎完全不影响游戏机制。推荐加载大量的实体时，又建了一个自动农场或红石钟时启用。</li>
</ul>
<h2 id="scoreboards" tabindex="-1"><a class="header-anchor" href="#scoreboards" aria-hidden="true">#</a> scoreboards</h2>
<h3 id="allow-non-player-entities-on-scoreboards" tabindex="-1"><a class="header-anchor" href="#allow-non-player-entities-on-scoreboards" aria-hidden="true">#</a> allow-non-player-entities-on-scoreboards</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 当服务器计算碰撞时，是否要将非玩家实体视作从来未在计分板上出现过。启用此项会增加服务器计算实体碰撞的时间。</li>
</ul>
<h3 id="use-vanilla-world-scoreboard-name-coloring" tabindex="-1"><a class="header-anchor" href="#use-vanilla-world-scoreboard-name-coloring" aria-hidden="true">#</a> use-vanilla-world-scoreboard-name-coloring</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 服务器是否要使用原版计分板为玩家显示名称着色。当在原版服务器和客户端上游玩冒险模式地图很有用。</li>
</ul>
<h2 id="spawn" tabindex="-1"><a class="header-anchor" href="#spawn" aria-hidden="true">#</a> spawn</h2>
<h3 id="allow-using-signs-inside-spawn-protection" tabindex="-1"><a class="header-anchor" href="#allow-using-signs-inside-spawn-protection" aria-hidden="true">#</a> allow-using-signs-inside-spawn-protection</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>描述</strong>: 是否允许玩家在出生点保护内放置告示牌。</li>
</ul>
<h3 id="keep-spawn-loaded" tabindex="-1"><a class="header-anchor" href="#keep-spawn-loaded" aria-hidden="true">#</a> keep-spawn-loaded</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 服务器出生点是否应当始终保持加载状态。</li>
</ul>
<h3 id="keep-spawn-loaded-range" tabindex="-1"><a class="header-anchor" href="#keep-spawn-loaded-range" aria-hidden="true">#</a> keep-spawn-loaded-range</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>10</code></li>
<li><strong>描述</strong>: 出生点区块始终保持加载的距离。</li>
</ul>
<h2 id="tick-rates" tabindex="-1"><a class="header-anchor" href="#tick-rates" aria-hidden="true">#</a> tick-rates</h2>
<h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior" aria-hidden="true">#</a> behavior</h3>
<h4 id="villager" tabindex="-1"><a class="header-anchor" href="#villager" aria-hidden="true">#</a> villager</h4>
<h5 id="validatenearbypoi" tabindex="-1"><a class="header-anchor" href="#validatenearbypoi" aria-hidden="true">#</a> validatenearbypoi</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>-1</code></li>
<li><strong>描述</strong>: 设定村民实体的 <code v-pre>validatenearbypoi</code> 行为的Tick速率。</li>
</ul>
<h4 id="entity-type" tabindex="-1"><a class="header-anchor" href="#entity-type" aria-hidden="true">#</a> <code v-pre>&lt;entity-type&gt;</code></h4>
<h5 id="behavior-name" tabindex="-1"><a class="header-anchor" href="#behavior-name" aria-hidden="true">#</a> <code v-pre>&lt;behavior-name&gt;</code></h5>
<ul>
<li><strong>描述</strong>: 对于特定实体种类设定Tick速率。<code v-pre>-1</code> 与原版保持一致。在Timings中查看实体名称。可能在以后的更新补丁中更改此项。</li>
</ul>
<h3 id="container-update" tabindex="-1"><a class="header-anchor" href="#container-update" aria-hidden="true">#</a> container-update</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>1</code></li>
<li><strong>描述</strong>: 服务器更新容器和物品栏的速率。以Tick为单位。</li>
</ul>
<h3 id="grass-spread" tabindex="-1"><a class="header-anchor" href="#grass-spread" aria-hidden="true">#</a> grass-spread</h3>
<ul>
<li><strong>默认值</strong>: <code v-pre>1</code></li>
<li><strong>描述</strong>: 设定服务器尝试蔓延草方块时的延迟。以Tick为单位。这个数值越高，蔓延的速度就越慢。</li>
</ul>
<h3 id="mob-spawner" tabindex="-1"><a class="header-anchor" href="#mob-spawner" aria-hidden="true">#</a> mob-spawner</h3>
<ul>
<li><strong>默认值</strong>: 1</li>
<li><strong>描述</strong>: 刷怪笼应该多少Tick后计算可用生物生成区并尝试生成生物。设定为 <code v-pre>-1</code> 禁用所有刷怪笼。</li>
</ul>
<h3 id="sensor" tabindex="-1"><a class="header-anchor" href="#sensor" aria-hidden="true">#</a> sensor</h3>
<h4 id="villager-1" tabindex="-1"><a class="header-anchor" href="#villager-1" aria-hidden="true">#</a> villager</h4>
<h5 id="secondarypoisensor" tabindex="-1"><a class="header-anchor" href="#secondarypoisensor" aria-hidden="true">#</a> secondarypoisensor</h5>
<ul>
<li><strong>默认值</strong>: <code v-pre>40</code></li>
<li><strong>描述</strong>: 设定村民实体的 <code v-pre>secondarypoisensor</code> 传感器的Tick速率。</li>
</ul>
<h4 id="entity-type-1" tabindex="-1"><a class="header-anchor" href="#entity-type-1" aria-hidden="true">#</a> <code v-pre>&lt;entity-type&gt;</code></h4>
<h5 id="sensor-name" tabindex="-1"><a class="header-anchor" href="#sensor-name" aria-hidden="true">#</a> <code v-pre>&lt;sensor-name&gt;</code></h5>
<ul>
<li><strong>描述</strong>: 对于特定实体种类设定传感器Tick速率。<code v-pre>-1</code> 与原版保持一致。在Timings中查看实体名称。可能在以后的更新补丁中更改此项。</li>
</ul>
<h3 id="unsupported-settings" tabindex="-1"><a class="header-anchor" href="#unsupported-settings" aria-hidden="true">#</a> unsupported-settings</h3>
<h4 id="fix-invulnerable-end-crystal-exploit" tabindex="-1"><a class="header-anchor" href="#fix-invulnerable-end-crystal-exploit" aria-hidden="true">#</a> fix-invulnerable-end-crystal-exploit</h4>
<ul>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>描述</strong>: 如果设定为<code v-pre>false</code>，则允许生成无敌的末影水晶。修复<a href="https://bugs.mojang.com/browse/MC-108513" target="_blank" rel="noopener noreferrer">MC-108513<ExternalLinkIcon/></a>。</li>
</ul>
</div></template>


