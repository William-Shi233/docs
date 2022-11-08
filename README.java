package com.poikcue.docs;

import org.bukkit.Bukkit;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.Objects;

public class docs extends JavaPlugin {
    private static docs instance;

    public void onEnable() {
        instance = this;
        PluginManager pm = getServer().getPluginManager();
        pm.registerEvents(new docs(), this);
        saveDefaultConfig();
        getLogger().info("Welcome");

    }

    public static docs getInstance(){
        return instance;
    }
}
