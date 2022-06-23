package de.nicklasmatzulla.wettersoestapi.api;

import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ApiCache {
    private static ApiCache instance;
    public JsonArray apiCache;
    public ArrayList<WeatherBoxCache> weatherBoxes;

    public ApiCache() {
        ApiCache.instance = this;
        new Thread(() -> {
            while (true) {
                try {
                    refreshApiCache();
                    Thread.sleep(300000);
                } catch (InterruptedException | IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }).start();
    }

    public void refreshApiCache() throws IOException {
        Logger.getGlobal().log(Level.INFO, "Refreshing API data...");
        final URL apiURL = new URL("https://urbanedaten-soest.de/nodered/weather2");
        final URLConnection connection = apiURL.openConnection();
        final InputStream websiteInputStream = connection.getInputStream();
        String body = IOUtils.toString(websiteInputStream, StandardCharsets.UTF_8);
        this.apiCache = JsonParser.parseString(body).getAsJsonArray();
        this.weatherBoxes = WeatherBoxCache.create(this);
        for (WeatherBoxCache cache : this.weatherBoxes)
            DailyCache.getInstance(DailyCache.getDate(), true).addEntry(cache);
    }

    public static ApiCache getInstance() {
        return instance;
    }
}
