# 永久数据容器（PDC）

::: danger 
译者不是一名 Java 开发者。对于开发部分的翻译无法保证完全正确。  
建议您阅读[原文档](https://docs.papermc.io/paper/dev/pdc)，将本文（中文翻译）作为参考。  
如果您是 Java 开发者并熟悉 Bukkit 开发，您可以帮助改进此文档。  
您可以在 [GitHub Issue](https://github.com/poikcue/docs/issues/new) 留言或提交 [PR](https://github.com/poikcue/docs)    
:::

永久数据容器（Persistent Data Container）（PDC）是在存储对象上存储各种自定义数据的方式；例如物品，实体和方块。  
以下是 PDC 支持的类的完整列表：

- [Chunk](#chunk)
- [World](#world)
- [Entity](#entity)
- [TileState](#tilestate)
- [ItemMeta](#itemmeta)
- [Structure](#structure)

## 它是用来干什么的？
在之前，开发者借助于各式各样的方式在物体上存储自定义数据：

- NBT tags（NBT标签）：需要通过反射来访问内部，且长远来看通常是不可靠的。
- Lore与物品名：很容易发生冲突，并且读取速度也慢。

PDC的优点就是它允许以一个更可靠、性能更好的方式在物品上存储任意数据。PDC 也不依赖于访问服务器内部，因此在未来的版本中就更不太可能出现问题。同时，它也无需手动追踪数据的生命周期，用一个实体来举例，PDC 会在实体卸载时被保存。

## 添加数据
要在 PDC 上存储数据，首先需要做一些事。第一件事是用于标记数据的 `NamespacedKey`，第二件事是用于你想要在物品上存储数据的 `PersistentDataContainer`。第三件事则是数据本身。

```java
// 创建一个 NamespacedKey
NamespacedKey key = new NamespacedKey(pluginInstance, "example-key");

ItemStack item = new ItemStack(Material.DIAMOND);
// ItemMeta 实现 PersistentDataHolder，所以我们可以从中获取数据
ItemMeta meta = item.getItemMeta();
meta.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");
item.setItemMeta(meta);
```

::: tip

多次使用 `NamespacedKey` 对象是不错的做法。它们使用以下任意一个方式构造：

- 一个 `Plugin` 实例和一个 `String` 标识符
- 一个 `String` 命名空间（namespace）和一个 `String` 标识符

通常优先考虑前者，因为它将自动使用插件的命名空间，不过，如果你想使用一个不同的命名空间或想从其它插件获取数据时，那么你可以选择后者。

:::


## 获取数据
要从 PDC 从获取数据，你需要知道 `NamespacedKey` 和数据的 `PersistentDataType`。

```java
// 创建 NamespacedKey
NamespacedKey key = new NamespacedKey(pluginInstance, "example-key");

ItemStack item = ...; // 检索之前的物品
// 从 PDC 获取数据
PersistentDataContainer container = item.getItemMeta().getPersistentDataContainer();
if (container.has(key, PersistentDataType.STRING)) {
    String value = container.get(key, PersistentDataType.STRING);
    // 用 value 做些事情。
    player.sendMessage(Component.text(value));
}
```

## 数据类型

PDC 支持众多数据类型，如：
- `Byte`, `Byte Array`
- `Double`
- `Float`
- `Integer`, `Integer Array`
- `Long`, `Long Array`
- `Short`
- `String` 
- 以及`Tag Containers`。Tag Containers 是相互嵌套 PDC 的方式。
要创建一个新的 PersistentDataContainer，你可以使用：
  ```java
  // 获取已有的 container
  PersistentDataContainer container = ...;
  // 创建一个新的 container
  PersistentDataContainer newContainer = container.getAdapterContext().newPersistentDataContainer();
  ```
  
### 自定义数据类型

你可以在 PDC 原生适配器中存储各种数据，不过，如果你需要更复杂的数据类型，那么你可以实现你自己的 `PersistentDataType` 并用此代替。`PersistentDataType` 的作用是将复杂的数据类型“分解”为多个原生适配器支持的东西（见上），反之亦然。  

以下是一个用此方式处理UUID的例子：

```java
public class UUIDDataType implements PersistentDataType<byte[], UUID> {
     @Override
     public Class<byte[]> getPrimitiveType() {
         return byte[].class;
     }

     @Override
     public Class<UUID> getComplexType() {
         return UUID.class;
     }

     @Override
     public byte[] toPrimitive(UUID complex, PersistentDataAdapterContext context) {
         ByteBuffer bb = ByteBuffer.wrap(new byte[16]);
         bb.putLong(complex.getMostSignificantBits());
         bb.putLong(complex.getLeastSignificantBits());
         return bb.array();
     }

     @Override
     public UUID fromPrimitive(byte[] primitive, PersistentDataAdapterContext context) {
         ByteBuffer bb = ByteBuffer.wrap(primitive);
         long firstLong = bb.getLong();
         long secondLong = bb.getLong();
         return new UUID(firstLong, secondLong);
     }
 }
```

::: tip

为了使用你自己的 `PersistentDataType`，你必须将该实例传递给 set/get/has 方法。
```java
container.set(key, new UUIDDataType(), uuid);
```

:::

## 存储在不同的对象上

- ##### Chunk
    - `Chunk#getPersistentDataContainer()`
- ##### World
    - `World#getPersistentDataContainer()`
- ##### Entity
    - `Entity#getPersistentDataContainer()`
- ##### TileState
    - 稍微有些复杂，因为你需要将方块转换至继承 `TileState` 的东西上。  
      不适用于所有方块，只适用于方块实体。
      ```java
        Block block = ...;
        if (block.getState() instanceof Chest chest) {
            chest.getPersistentDataContainer().set(key, PersistentDataType.STRING, "I love Tacos!");
            chest.update();
        }
      ```
- ##### Structure
    - `Structure#getPersistentDataContainer()`
- ##### ItemMeta
    - `ItemMeta#getPersistentDataContainer()`
