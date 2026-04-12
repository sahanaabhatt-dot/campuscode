package com.campuscode.app;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.ArrayList;
import java.util.List;

public class DashboardActivity extends AppCompatActivity {
    private SessionManager session;
    private TextView tvWelcome, tvUserName, tvSolved, tvRate;
    private LinearLayout semesterContainer;
    private RecyclerView rvSubjects;
    private int currentSemester = 1;

    // Syllabus data
    private static final String[][] SUBJECTS = {
        {"C Programming","Data Structures","Mathematics","Digital Electronics"},
        {"C++ Programming","Data Structures","DBMS","Networking"},
        {"Java Programming","Operating Systems","Software Engineering","Web Technology"},
        {"Python Programming","Computer Networks","Microprocessors","Compiler Design"},
        {"Design and Analysis of Algorithms","R Programming","Cloud Computing","Cybersecurity"},
        {"Artificial Intelligence","PHP and MySQL","Data Mining","Android Development"}
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);

        session = new SessionManager(this);
        if (!session.isLoggedIn()) {
            startActivity(new Intent(this, LoginActivity.class));
            finish();
            return;
        }

        tvWelcome = findViewById(R.id.tvWelcome);
        tvUserName = findViewById(R.id.tvUserName);
        tvSolved = findViewById(R.id.tvSolved);
        tvRate = findViewById(R.id.tvRate);
        semesterContainer = findViewById(R.id.semesterContainer);
        rvSubjects = findViewById(R.id.rvSubjects);

        tvWelcome.setText("Welcome, " + session.getName() + "!");
        tvUserName.setText(session.getUucms());

        currentSemester = session.getSemester();
        buildSemesterTabs();
        loadSubjects(currentSemester);
        updateStats();

        findViewById(R.id.navProblems).setOnClickListener(v ->
            startActivity(new Intent(this, ProblemsActivity.class)));
        findViewById(R.id.navProfile).setOnClickListener(v ->
            startActivity(new Intent(this, ProfileActivity.class)));
    }

    private void buildSemesterTabs() {
        semesterContainer.removeAllViews();
        for (int i = 1; i <= 6; i++) {
            final int sem = i;
            Button btn = new Button(this);
            btn.setText("Sem " + i);
            btn.setTextSize(12);
            LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT);
            params.setMargins(0, 0, 8, 0);
            btn.setLayoutParams(params);
            btn.setBackgroundResource(i == currentSemester ? R.drawable.btn_active : R.drawable.btn_inactive);
            btn.setOnClickListener(v -> {
                currentSemester = sem;
                buildSemesterTabs();
                loadSubjects(sem);
            });
            semesterContainer.addView(btn);
        }
    }

    private void loadSubjects(int semester) {
        String[] subjects = SUBJECTS[semester - 1];
        List<String> list = new ArrayList<>();
        for (String s : subjects) list.add(s);

        SubjectAdapter adapter = new SubjectAdapter(list, subject -> {
            Intent intent = new Intent(this, ProblemsActivity.class);
            intent.putExtra("subject", subject);
            intent.putExtra("semester", semester);
            startActivity(intent);
        });
        rvSubjects.setLayoutManager(new LinearLayoutManager(this));
        rvSubjects.setAdapter(adapter);
    }

    private void updateStats() {
        android.content.SharedPreferences prefs = getSharedPreferences("SolvedProblems", MODE_PRIVATE);
        int solved = prefs.getInt("totalSolved", 0);
        int total = prefs.getInt("totalProblems", 100);
        int rate = total > 0 ? (solved * 100 / total) : 0;
        tvSolved.setText(String.valueOf(solved));
        tvRate.setText(rate + "%");
    }

    @Override
    protected void onResume() {
        super.onResume();
        updateStats();
    }
}
