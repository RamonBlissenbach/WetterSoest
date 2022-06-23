package de.nicklasmatzulla.wettersoestapi.api;

import de.nicklasmatzulla.wettersoestapi.util.CentralValues;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class DailyCache {
    private static HashMap<String, DailyCache> dates = new HashMap<>();
    public HashMap<Integer, ArrayList<WeatherBoxCache>> caches = new HashMap<>();

    public DailyCache(String date) {
        DailyCache.dates.put(date, this);
    }

    public void addEntry(WeatherBoxCache weatherBoxCache) {
        final Integer hour = getCurrentHour();
        if (!this.caches.containsKey(hour))
            this.caches.put(hour, new ArrayList<>());
        this.caches.get(hour).add(weatherBoxCache);
    }

    public String getCentralData() {
        final ArrayList<WeatherBoxCache> weatherBoxCaches = new ArrayList<>();
        for (ArrayList<WeatherBoxCache> weatherBoxCacheArrayList : caches.values()) {
            for (WeatherBoxCache weatherBoxCache : weatherBoxCacheArrayList) {
                weatherBoxCaches.add(weatherBoxCache);
            }
        }
        return CentralValues.getFinalJson(weatherBoxCaches);
    }

    public static DailyCache getInstance(String date, boolean createNew) {
        if (dates.containsKey(date))
            return dates.get(date);
        if (createNew)
            return new DailyCache(date);
        return null;
    }

    public static Integer getCurrentHour() {
        return Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
    }

    public static String getDate() {
        return DateTimeFormatter.ofPattern("dd.MM.yyyy").format(LocalDateTime.now());
    }
}
