package de.nicklasmatzulla.wettersoestapi.util;

import com.google.gson.JsonObject;
import de.nicklasmatzulla.wettersoestapi.api.WeatherBoxCache;

import java.util.ArrayList;

public class CentralValues {

    public static String getFinalJson(ArrayList<WeatherBoxCache> weatherBoxCaches) {
        Double temperature = 0D;
        Double pressure = 0D;
        Double humidity = 0D;
        Double precipitation = 0D;
        Double lux = 0D;
        Double uv = 0D;
        for (WeatherBoxCache weatherBoxCache : weatherBoxCaches) {
            temperature = temperature+weatherBoxCache.temperature;
            pressure = pressure+weatherBoxCache.pressure;
            humidity = humidity+weatherBoxCache.humidity;
            precipitation = precipitation+weatherBoxCache.precipitation;
            lux = lux+weatherBoxCache.lux;
            uv = uv+weatherBoxCache.uv;
        }
        final int entries = weatherBoxCaches.size();

        temperature = temperature/entries;
        pressure = pressure/entries;
        humidity = humidity/entries;
        precipitation = precipitation/entries;
        lux = lux/entries;
        uv = uv/entries;

        final JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("temperature", temperature);
        jsonObject.addProperty("pressure", pressure);
        jsonObject.addProperty("humidity", humidity);
        jsonObject.addProperty("precipitation", precipitation);
        jsonObject.addProperty("lux", lux);
        jsonObject.addProperty("uv", uv);
        return jsonObject.toString();
    }

}
