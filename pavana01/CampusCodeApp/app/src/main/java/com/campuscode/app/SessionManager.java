package com.campuscode.app;

import android.content.Context;
import android.content.SharedPreferences;

public class SessionManager {
    private static final String PREF_NAME = "CampusCodeSession";
    private SharedPreferences prefs;
    private SharedPreferences.Editor editor;

    public SessionManager(Context context) {
        prefs = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        editor = prefs.edit();
    }

    public void saveSession(String token, String name, String uucms, String email, int semester) {
        editor.putString("token", token);
        editor.putString("name", name);
        editor.putString("uucms", uucms);
        editor.putString("email", email);
        editor.putInt("semester", semester);
        editor.putBoolean("isLoggedIn", true);
        editor.apply();
    }

    public boolean isLoggedIn() { return prefs.getBoolean("isLoggedIn", false); }
    public String getToken() { return prefs.getString("token", null); }
    public String getName() { return prefs.getString("name", "Student"); }
    public String getUucms() { return prefs.getString("uucms", ""); }
    public String getEmail() { return prefs.getString("email", ""); }
    public int getSemester() { return prefs.getInt("semester", 1); }

    public void logout() { editor.clear(); editor.apply(); }
}
