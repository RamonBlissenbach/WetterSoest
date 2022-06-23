package de.nicklasmatzulla.wettersoestapi.api;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.util.ArrayList;

public class WeatherBoxCache {
    public Double latitude;
    public Double longitude;
    public Double temperature;
    public Double pressure;
    public Double humidity;
    public Double precipitation;
    public Double lux;
    public Double uv;

    public static ArrayList<WeatherBoxCache> create(ApiCache apiCache) {
        final ArrayList<WeatherBoxCache> caches = new ArrayList<>();
        final JsonArray data = apiCache.apiCache;
        for (JsonElement entry : apiCache.apiCache) {
            final JsonObject obj = entry.getAsJsonObject();
            final WeatherBoxCache weatherBoxCache = new WeatherBoxCache(
                    obj.get("latitude").getAsNumber().doubleValue(),
                    obj.get("longitude").getAsNumber().doubleValue(),
                    obj.get("temperature").getAsNumber().doubleValue(),
                    obj.get("pressure").getAsNumber().doubleValue(),
                    obj.get("humidity").getAsNumber().doubleValue(),
                    obj.get("precipitation").getAsNumber().doubleValue(),
                    obj.get("lux").getAsNumber().doubleValue(),
                    obj.get("uv").getAsNumber().doubleValue()
            );
            caches.add(weatherBoxCache);
        }
        return caches;
    }

    public WeatherBoxCache(Double latitude, Double longitude, Double temperature, Double pressure, Double humidity, Double precipitation, Double lux, Double uv) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.precipitation = precipitation;
        this.lux = lux;
        this.uv = uv;
    }
}
