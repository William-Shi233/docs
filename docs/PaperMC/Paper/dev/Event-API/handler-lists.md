# Handler 列表

每个可以被监听的 `Event`（事件）都有一个 `HandlerList` 来包含所有的监听器与其监听的事件。    
该列表常常用于在事件被调用时，同时调用监听器。  

## 为一个事件获取handler列表

要为一个事件获取handler列表，你可以在具体的事件类中调用 `getHandlerList()`。

```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        HandlerList handlerList = event.getHandlerList();
        // ...
    }
    
    // Or:
    
    public ExampleListener() {
        // Access the handler list through the static getter
        HandlerList handlerList = PlayerJoinEvent.getHandlerList();
        // ...
    }
}
```

## 注销一个监听器

要注销一个监听器，你可以在监听器中注册的 `HandlerList` 中调用 `unregister()`。

```java
public class ExampleListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        HandlerList handlerList = event.getHandlerList();
        handlerList.unregister(this);
        // ...
    }
    
    // 或者：
    
    public ExampleListener() {
        // 通过静态getter访问handler列表
        HandlerList handlerList = PlayerJoinEvent.getHandlerList();
        handlerList.unregister(this);
        // 的确，这是一个愚蠢的例子...
    }
}
```

为了更易于使用，你可以在基于 `Listener` 或 `Plugin` 上进行注销。  
而且，你也可以通过在 `HandlerList` 中调用 `unregisterAll()` 以注销某一特定事件中的所有监听器。  