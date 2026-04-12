package com.campuscode.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import org.json.JSONObject;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class RegisterActivity extends AppCompatActivity {
    private EditText etName, etUucms, etEmail, etPhone, etPassword;
    private Spinner spinnerSemester;
    private Button btnRegister;
    private TextView tvLogin;
    private ExecutorService executor = Executors.newSingleThreadExecutor();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        etName = findViewById(R.id.etName);
        etUucms = findViewById(R.id.etUucms);
        etEmail = findViewById(R.id.etEmail);
        etPhone = findViewById(R.id.etPhone);
        etPassword = findViewById(R.id.etPassword);
        spinnerSemester = findViewById(R.id.spinnerSemester);
        btnRegister = findViewById(R.id.btnRegister);
        tvLogin = findViewById(R.id.tvLogin);

        String[] semesters = {"Semester 1","Semester 2","Semester 3","Semester 4","Semester 5","Semester 6"};
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, semesters);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerSemester.setAdapter(adapter);

        btnRegister.setOnClickListener(v -> register());
        tvLogin.setOnClickListener(v -> { startActivity(new Intent(this, LoginActivity.class)); finish(); });
    }

    private void register() {
        String name = etName.getText().toString().trim();
        String uucms = etUucms.getText().toString().trim().toUpperCase();
        String email = etEmail.getText().toString().trim();
        String phone = etPhone.getText().toString().trim();
        String password = etPassword.getText().toString().trim();
        int semester = spinnerSemester.getSelectedItemPosition() + 1;

        if (name.isEmpty() || uucms.isEmpty() || email.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please fill all required fields", Toast.LENGTH_SHORT).show();
            return;
        }

        btnRegister.setEnabled(false);
        btnRegister.setText("Registering...");

        executor.execute(() -> {
            try {
                JSONObject json = new JSONObject();
                json.put("name", name);
                json.put("uucms", uucms);
                json.put("email", email);
                json.put("phone", phone);
                json.put("password", password);
                json.put("semester", semester);

                String response = ApiClient.post("/auth/register", json.toString(), null);
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
                        Toast.makeText(this, "Registration failed", Toast.LENGTH_SHORT).show();
                    }
                    btnRegister.setEnabled(true);
                    btnRegister.setText("Register");
                });
            } catch (Exception e) {
                runOnUiThread(() -> {
                    Toast.makeText(this, "Cannot connect to server", Toast.LENGTH_LONG).show();
                    btnRegister.setEnabled(true);
                    btnRegister.setText("Register");
                });
            }
        });
    }
}
