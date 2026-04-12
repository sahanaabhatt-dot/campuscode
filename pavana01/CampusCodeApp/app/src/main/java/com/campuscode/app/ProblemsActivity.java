package com.campuscode.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;

public class ProblemsActivity extends AppCompatActivity {
    private RecyclerView rvProblems;
    private String subjectName;

    private static final String[][] PROBLEMS = {
        {"Hello World","Sum of Two Numbers","Even or Odd","Factorial","Fibonacci","Prime Check","Array Operations","Sorting","Searching","Recursion"},
        {"Stack Implementation","Queue Implementation","Linked List","Binary Tree","Graph","Hashing","Dynamic Programming","Greedy Algorithm","Backtracking","Divide and Conquer"}
    };

    private static final String[] DIFFICULTIES = {"easy","easy","easy","medium","medium","medium","hard","hard","medium","hard"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_problems);

        subjectName = getIntent().getStringExtra("subject");
        if (subjectName == null) subjectName = "Problems";

        TextView tvTitle = findViewById(R.id.tvTitle);
        tvTitle.setText(subjectName);
        findViewById(R.id.btnBack).setOnClickListener(v -> finish());

        rvProblems = findViewById(R.id.rvProblems);

        List<Problem> problems = new ArrayList<>();
        String[] titles = PROBLEMS[0];
        for (int i = 0; i < titles.length; i++) {
            problems.add(new Problem(i + 1, titles[i], DIFFICULTIES[i % DIFFICULTIES.length]));
        }

        ProblemAdapter adapter = new ProblemAdapter(problems, problem -> {
            Intent intent = new Intent(this, CodeEditorActivity.class);
            intent.putExtra("problemTitle", problem.title);
            intent.putExtra("problemId", problem.id);
            intent.putExtra("difficulty", problem.difficulty);
            intent.putExtra("subject", subjectName);
            startActivity(intent);
        });
        rvProblems.setLayoutManager(new LinearLayoutManager(this));
        rvProblems.setAdapter(adapter);
    }

    public static class Problem {
        public int id;
        public String title, difficulty;
        public Problem(int id, String title, String difficulty) {
            this.id = id; this.title = title; this.difficulty = difficulty;
        }
    }
}
