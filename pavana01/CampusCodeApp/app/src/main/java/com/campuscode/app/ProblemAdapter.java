package com.campuscode.app;

import android.graphics.Color;
import android.view.*;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class ProblemAdapter extends RecyclerView.Adapter<ProblemAdapter.ViewHolder> {
    private List<ProblemsActivity.Problem> problems;
    private OnProblemClick listener;

    public interface OnProblemClick { void onClick(ProblemsActivity.Problem problem); }

    public ProblemAdapter(List<ProblemsActivity.Problem> problems, OnProblemClick listener) {
        this.problems = problems;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_problem, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        ProblemsActivity.Problem p = problems.get(position);
        holder.tvNum.setText(String.valueOf(p.id));
        holder.tvTitle.setText(p.title);
        holder.tvDiff.setText(p.difficulty.substring(0, 1).toUpperCase() + p.difficulty.substring(1));
        int color = p.difficulty.equals("easy") ? Color.parseColor("#4ADE80") :
                    p.difficulty.equals("medium") ? Color.parseColor("#FBBF24") : Color.parseColor("#F87171");
        holder.tvDiff.setTextColor(color);
        holder.itemView.setOnClickListener(v -> listener.onClick(p));
    }

    @Override
    public int getItemCount() { return problems.size(); }

    static class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvNum, tvTitle, tvDiff;
        ViewHolder(View view) {
            super(view);
            tvNum = view.findViewById(R.id.tvProblemNum);
            tvTitle = view.findViewById(R.id.tvProblemTitle);
            tvDiff = view.findViewById(R.id.tvDifficulty);
        }
    }
}
