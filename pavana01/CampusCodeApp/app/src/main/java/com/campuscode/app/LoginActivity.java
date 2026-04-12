package com.campuscode.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import org.json.JSONObject;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class LoginActivity extends AppCompatActivity {
    private EditText etUucms, etPassword;
    private Button btnLogin;
    private TextView tvRegister;
    private ExecutorService executor = Executors.newSingleThreadExecutor();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        etUucms = findViewById(R.id.etUucms);
        etPassword = findViewById(R.id.etPassword);
        btnLogin = findViewById(R.id.btnLogin);
        tvRegister = findViewById(R.id.tvRegister);

        btnLogin.setOnClickListener(v -> login());
        tvRegister.setOnClickListener(v -> startActivity(new Intent(this, RegisterActivity.class)));
    }

    private void login() {
        String uucms = etUucms.getText().toString().trim().toUpperCase();
        String password = etPassword.getText().toString().trim();

        if (uucms.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
            return;
        }

        btnLogin.setEnabled(false);
        btnLogin.setText("Logging in...");

        executor.execute(() -> {
            try {
                JSONObject json = new JSONObject();
                json.put("uucms", uucms);
                json.put("password", password);

                String response = ApiClient.post("/auth/login", json.toString(), null);
                JSONObject res = new JSONObject(response);

                runOnUiThread(() -> {
                    try {
                        if (res.has("token")) {
                            JSONObject user = res.getJSONObject("user");
                            new SessionManager(this).saveSession(
                                res.getString("token"),
                                user.getString("name"),
                                user.getString("uucms"),
                                user.getString("email"),
                                user.getInt("semester")
                            );
                            startActivity(new Intent(this, DashboardActivity.class));
                            finish();
                        } else {
                            Toast.makeText(this, res.getString("message"), Toast.LENGTH_LONG).show();
                        }
                    } catch (Exception e) {
                        Toast.makeText(this, "Login failed", Toast.LENGTH_SHORT).show();
                    }
                    btnLogin.setEnabled(true);
                    btnLogin.setText("Login");
                });
            } catch (Exception e) {
                runOnUiThread(() -> {
                    Toast.makeText(this, "Cannot connect to server", Toast.LENGTH_LONG).show();
                    btnLogin.setEnabled(true);
                    btnLogin.setText("Login");
                });
            }
        });
    }
}
