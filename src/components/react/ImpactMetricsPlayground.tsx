import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Metric = {
  id: string;
  before: string;
  after: string;
  description: string;
};

interface Props {
  metrics: Metric[];
  labels: {
    baseline: string;
    optimized: string;
  };
}

export default function ImpactMetricsPlayground({ metrics, labels }: Props) {
  const [mode, setMode] = useState<"before" | "after">("after");

  const label = useMemo(() => (mode === "after" ? labels.optimized : labels.baseline), [labels.baseline, labels.optimized, mode]);

  return (
    <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
      <div style={{ display: "inline-flex", gap: "8px" }}>
        <button
          type="button"
          onClick={() => setMode("before")}
          style={{
            border: "1px solid rgba(26,22,18,0.2)",
            background: mode === "before" ? "#1a1612" : "transparent",
            color: mode === "before" ? "#f5f0e8" : "#1a1612",
            padding: "8px 12px",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          {labels.baseline}
        </button>
        <button
          type="button"
          onClick={() => setMode("after")}
          style={{
            border: "1px solid rgba(26,22,18,0.2)",
            background: mode === "after" ? "#1a1612" : "transparent",
            color: mode === "after" ? "#f5f0e8" : "#1a1612",
            padding: "8px 12px",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          {labels.optimized}
        </button>
      </div>

      <motion.div
        layout
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "10px" }}
      >
        {metrics.map((metric) => (
          <motion.article
            key={metric.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ border: "1px solid #e8e3dc", background: "#efe8dd", padding: "12px" }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${metric.id}-${mode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "38px",
                  lineHeight: 1,
                  color: "#1a1612",
                }}
              >
                {mode === "after" ? metric.after : metric.before}
              </motion.div>
            </AnimatePresence>
            <div style={{ marginTop: "4px", fontSize: "12px", color: "#8c8580", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {label}
            </div>
            <p style={{ marginTop: "8px", color: "#4a4540", fontSize: "13px" }}>{metric.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
