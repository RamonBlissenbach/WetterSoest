package de.nicklasmatzulla.wettersoestapi;

import com.sun.net.httpserver.HttpServer;
import de.nicklasmatzulla.wettersoestapi.api.ApiCache;
import de.nicklasmatzulla.wettersoestapi.handler.DailyCache;
import de.nicklasmatzulla.wettersoestapi.handler.GlobalData;
import de.nicklasmatzulla.wettersoestapi.handler.Index;

import java.io.IOException;
import java.net.InetSocketAddress;

public class WetterSoestAPI {
    private static WetterSoestAPI instance;
    private final HttpServer httpServer;

    public static void main(String[] args) {
        try {
            new ApiCache();
            new WetterSoestAPI();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public WetterSoestAPI() throws IOException {
        WetterSoestAPI.instance = this;
        this.httpServer = HttpServer.create(new InetSocketAddress(44217), 0);
        this.httpServer.createContext("/", new Index());
        this.httpServer.createContext("/api/v1/globalData", new GlobalData());
        this.httpServer.createContext("/api/v1/dailyData", new DailyCache());
        this.httpServer.setExecutor(null);
        this.httpServer.start();
    }

    public static WetterSoestAPI getInstance() {
        return instance;
    }
}
