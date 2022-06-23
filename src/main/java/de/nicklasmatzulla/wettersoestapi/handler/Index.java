package de.nicklasmatzulla.wettersoestapi.handler;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class Index implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        final String response = "<h1>API Index</h1><br>/api/v1/globalData<br>/api/v1/dailyData?date=dd.MM.yyyy";
        exchange.sendResponseHeaders(200, response.length());
        final OutputStream outputStream = exchange.getResponseBody();
        outputStream.write(response.getBytes(StandardCharsets.UTF_8));
        outputStream.close();
    }
}
