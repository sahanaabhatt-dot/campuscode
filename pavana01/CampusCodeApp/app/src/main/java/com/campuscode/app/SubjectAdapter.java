package com.campuscode.app;

import android.view.*;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class SubjectAdapter extends RecyclerView.Adapter<SubjectAdapter.ViewHolder> {
    private List<String> subjects;
    private OnSubjectClick listener;

    public interface OnSubjectClick { void onClick(String subject); }

    public SubjectAdapter(List<String> subjects, OnSubjectClick listener) {
        this.subjects = subjects;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_subject, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        String subject = subjects.get(position);
        holder.tvName.setText(subject);
        holder.itemView.setOnClickListener(v -> listener.onClick(subject));
    }

    @Override
    public int getItemCount() { return subjects.size(); }

    static class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvName;
        ViewHolder(View view) {
            super(view);
            tvName = view.findViewById(R.id.tvSubjectName);
        }
    }
}
