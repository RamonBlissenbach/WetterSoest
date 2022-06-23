package de.nicklasmatzulla.wettersoestapi.handler;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class DailyCache implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        final Map<String, String> query = queryToMap(exchange.getRequestURI().getQuery());
        if (query.containsKey("date")) {
            final String date = query.get("date");
            String response = de.nicklasmatzulla.wettersoestapi.api.DailyCache.getInstance(date, false).getCentralData();
            exchange.sendResponseHeaders(200, response.length());
            exchange.getResponseHeaders().add("Content-type", "application/json");
            final OutputStream outputStream = exchange.getResponseBody();
            outputStream.write(response.getBytes(StandardCharsets.UTF_8));
            outputStream.close();
        }

    }

    public static Map<String, String> queryToMap(String query){
        Map<String, String> result = new HashMap<>();
        for (String param : query.split("&")) {
            String pair[] = param.split("=");
            if (pair.length>1) {
                result.put(pair[0], pair[1]);
            }else{
                result.put(pair[0], "");
            }
        }
        return result;
    }
}
