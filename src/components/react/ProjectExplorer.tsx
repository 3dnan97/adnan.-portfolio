import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  summary: string;
  year: number;
  impact?: string;
  stacks: string[];
};

interface Props {
  projects: Project[];
  labels: {
    searchPlaceholder: string;
    searchAria: string;
    filterAria: string;
    allStacks: string;
    impactLabel: string;
    noResults: string;
  };
}

const inputStyle: React.CSSProperties = {
  flex: "1 1 260px",
  border: "1px solid #e8e3dc",
  background: "#faf7f2",
  padding: "10px 14px",
  fontSize: "14px",
  borderRadius: "4px",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#1a1612",
  outline: "none",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};

const selectStyle: React.CSSProperties = {
  flex: "1 1 180px",
  border: "1px solid #e8e3dc",
  background: "#faf7f2",
  padding: "10px 14px",
  fontSize: "14px",
  borderRadius: "4px",
  fontFamily: "Inter, system-ui, sans-serif",
  color: "#1a1612",
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238c8580' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  cursor: "pointer",
  outline: "none",
};

export default function ProjectExplorer({ projects, labels }: Props) {
  const [query, setQuery] = useState("");
  const [activeStack, setActiveStack] = useState("all");

  const stacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.stacks.forEach((stack) => set.add(stack)));
    return ["all", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesStack = activeStack === "all" || project.stacks.includes(activeStack);
      const matchesText =
        normalized.length === 0 ||
        project.title.toLowerCase().includes(normalized) ||
        project.summary.toLowerCase().includes(normalized) ||
        project.stacks.join(" ").toLowerCase().includes(normalized);
      return matchesStack && matchesText;
    });
  }, [projects, query, activeStack]);

  return (
    <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchAria}
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#c4622d";
            (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(196,98,45,0.1)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor = "#e8e3dc";
            (e.target as HTMLInputElement).style.boxShadow = "none";
          }}
        />
        <select
          value={activeStack}
          onChange={(e) => setActiveStack(e.target.value)}
          aria-label={labels.filterAria}
          style={selectStyle}
          onFocus={(e) => {
            (e.target as HTMLSelectElement).style.borderColor = "#c4622d";
            (e.target as HTMLSelectElement).style.boxShadow = "0 0 0 3px rgba(196,98,45,0.1)";
          }}
          onBlur={(e) => {
            (e.target as HTMLSelectElement).style.borderColor = "#e8e3dc";
            (e.target as HTMLSelectElement).style.boxShadow = "none";
          }}
        >
          {stacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack === "all" ? labels.allStacks : stack}
            </option>
          ))}
        </select>
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        {filtered.map((project) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "14px",
              borderTop: "1px solid #e8e3dc",
              paddingTop: "16px",
              paddingBottom: "4px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(22px, 6vw, 28px)",
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h3>
              <p style={{ marginTop: "8px", color: "#4a4540", fontSize: "15px", lineHeight: 1.55 }}>
                {project.summary}
              </p>
              {project.impact && (
                <p
                  style={{
                    marginTop: "6px",
                    color: "#c4622d",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  ↗ {labels.impactLabel}: {project.impact}
                </p>
              )}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "12px" }}>
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    style={{
                      display: "inline-flex",
                      padding: "3px 10px",
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      border: "1px solid #e8e3dc",
                      background: "#ede8df",
                      color: "#4a4540",
                      borderRadius: "100px",
                    }}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#8c8580",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                paddingTop: "4px",
                whiteSpace: "nowrap",
              }}
            >
              {project.year}
            </div>
          </motion.article>
        ))}
      </AnimatePresence>

      {filtered.length === 0 && (
        <p style={{ color: "#8c8580", margin: 0, fontStyle: "italic" }}>{labels.noResults}</p>
      )}
    </div>
  );
}
