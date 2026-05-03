import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  summary: string;
  year: number;
  impact?: string;
  stacks: string[];
  url?: string;
  badge?: string;
};

interface Props {
  projects: Project[];
  locale: string;
  labels: {
    searchPlaceholder: string;
    searchAria: string;
    filterAria: string;
    allStacks: string;
    impactLabel: string;
    noResults: string;
    viewProject: string;
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

const navigationBtns : Record<string, { previous: string; next: string }> = {
  en: { previous: "← Previous", next: "Next →" },
  ar: { previous: "→ السابق", next: "التالي ←" },
  de: { previous: "← Vorherige", next: "Nächste →" },
};

export default function ProjectExplorer({ projects, labels, locale }: Props) {
  const [query, setQuery] = useState("");
  const [activeStack, setActiveStack] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 3;

  console.log(locale);
  
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
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
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
          onChange={(e) => {
            setActiveStack(e.target.value);
            setCurrentPage(1);
          }}
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
        {filtered.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE).map((project) => (
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
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      position: "relative",
                      width: "fit-content"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c4622d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "inherit";
                    }}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingTop: "4px",
                paddingBottom: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#8c8580",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}
              >
                {project.year}
              </span>
              
              {project.url && (
                <div style={{ marginTop: "16px" }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#1a1612",
                      color: "#f5f0e8",
                      textDecoration: "none",
                      padding: "6px 14px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontWeight: 500,
                      transition: "transform 200ms ease, background 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c4622d";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      const arrow = e.currentTarget.querySelector('.cta-arrow') as HTMLElement;
                      if (arrow) arrow.style.transform = "translate(2px, -2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1a1612";
                      e.currentTarget.style.transform = "translateY(0)";
                      const arrow = e.currentTarget.querySelector('.cta-arrow') as HTMLElement;
                      if (arrow) arrow.style.transform = "translate(0, 0)";
                    }}
                  >
                    {labels.viewProject}
                    <span 
                      className="cta-arrow" 
                      style={{ 
                        transition: "transform 200ms ease",
                        display: "inline-block",
                        fontFamily: "Inter, system-ui, sans-serif"
                      }}
                    >
                      ↗
                    </span>
                  </a>
                </div>
              )}

              {!project.url && project.badge && (
                <div style={{ marginTop: "16px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 12px",
                      borderRadius: "100px",
                      border: "1px solid #e8e3dc",
                      background: "#ede8df",
                      color: "#4a4540",
                      fontSize: "11px",
                      letterSpacing: "0.02em",
                      maxWidth: "220px",
                      textAlign: "right",
                    }}
                  >
                    {project.badge}
                  </span>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </AnimatePresence>

      {filtered.length === 0 && (
        <p style={{ color: "#8c8580", margin: 0, fontStyle: "italic" }}>{labels.noResults}</p>
      )}

      {filtered.length > PROJECTS_PER_PAGE && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid #e8e3dc" }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={{
              padding: "6px 14px",
              background: currentPage === 1 ? "transparent" : "#1a1612",
              color: currentPage === 1 ? "#8c8580" : "#f5f0e8",
              border: currentPage === 1 ? "1px solid #e8e3dc" : "1px solid transparent",
              borderRadius: "4px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontSize: "13px",
              fontFamily: "inherit",
              transition: "all 0.2s"
            }}
          >
            {navigationBtns[locale]?.previous}
          </button>
          
          <span style={{ fontSize: "13px", color: "#4a4540", fontVariantNumeric: "tabular-nums" }}>
            {currentPage} / {Math.ceil(filtered.length / PROJECTS_PER_PAGE)}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(Math.ceil(filtered.length / PROJECTS_PER_PAGE), p + 1))}
            disabled={currentPage === Math.ceil(filtered.length / PROJECTS_PER_PAGE)}
            style={{
              padding: "6px 14px",
              background: currentPage === Math.ceil(filtered.length / PROJECTS_PER_PAGE) ? "transparent" : "#1a1612",
              color: currentPage === Math.ceil(filtered.length / PROJECTS_PER_PAGE) ? "#8c8580" : "#f5f0e8",
              border: currentPage === Math.ceil(filtered.length / PROJECTS_PER_PAGE) ? "1px solid #e8e3dc" : "1px solid transparent",
              borderRadius: "4px",
              cursor: currentPage === Math.ceil(filtered.length / PROJECTS_PER_PAGE) ? "not-allowed" : "pointer",
              fontSize: "13px",
              fontFamily: "inherit",
              transition: "all 0.2s"
            }}
          >
            {navigationBtns[locale]?.next}
          </button>
        </div>
      )}
    </div>
  );
}
