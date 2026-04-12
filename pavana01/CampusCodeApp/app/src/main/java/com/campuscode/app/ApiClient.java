package com.campuscode.app;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.MediaType;
import okhttp3.Response;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class ApiClient {
    public static final String BASE_URL = "http://10.0.2.2:5000/api"; // 10.0.2.2 = localhost for emulator
    public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");

    private static OkHttpClient client = new OkHttpClient.Builder()
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .build();

    public static String post(String endpoint, String json, String token) throws IOException {
        RequestBody body = RequestBody.create(json, JSON);
        Request.Builder builder = new Request.Builder()
                .url(BASE_URL + endpoint)
                .post(body);
        if (token != null) builder.addHeader("Authorization", "Bearer " + token);
        try (Response response = client.newCall(builder.build()).execute()) {
            return response.body().string();
        }
    }

    public static String get(String endpoint, String token) throws IOException {
        Request.Builder builder = new Request.Builder().url(BASE_URL + endpoint).get();
        if (token != null) builder.addHeader("Authorization", "Bearer " + token);
        try (Response response = client.newCall(builder.build()).execute()) {
            return response.body().string();
        }
    }
}
