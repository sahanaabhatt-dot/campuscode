package com.campuscode.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;

public class ProfileActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        SessionManager session = new SessionManager(this);

        ((TextView) findViewById(R.id.tvName)).setText(session.getName());
        ((TextView) findViewById(R.id.tvUucms)).setText(session.getUucms());
        ((TextView) findViewById(R.id.tvEmail)).setText(session.getEmail());
        ((TextView) findViewById(R.id.tvSemester)).setText("Semester " + session.getSemester());

        android.content.SharedPreferences prefs = getSharedPreferences("SolvedProblems", MODE_PRIVATE);
        ((TextView) findViewById(R.id.tvSolved)).setText(String.valueOf(prefs.getInt("totalSolved", 0)));

        findViewById(R.id.btnBack).setOnClickListener(v -> finish());
        findViewById(R.id.btnLogout).setOnClickListener(v -> {
            session.logout();
            startActivity(new Intent(this, LoginActivity.class));
            finishAffinity();
        });
    }
}
