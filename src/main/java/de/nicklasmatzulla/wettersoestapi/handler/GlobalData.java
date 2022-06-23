package de.nicklasmatzulla.wettersoestapi.handler;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import de.nicklasmatzulla.wettersoestapi.api.ApiCache;
import de.nicklasmatzulla.wettersoestapi.util.CentralValues;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class GlobalData implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        final String response = CentralValues.getFinalJson(ApiCache.getInstance().weatherBoxes);
        exchange.sendResponseHeaders(200, response.length());
        exchange.getResponseHeaders().add("Content-type", "application/json");
        final OutputStream outputStream = exchange.getResponseBody();
        outputStream.write(response.getBytes(StandardCharsets.UTF_8));
        outputStream.close();
    }
}
