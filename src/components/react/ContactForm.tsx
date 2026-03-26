import { useMemo, useState } from "react";

type Labels = {
  name: string;
  email: string;
  message: string;
  submit: string;
  requiredError: string;
  emailInvalidError: string;
  success: string;
};

interface Props {
  toEmail: string;
  locale: "en" | "de" | "ar";
  labels: Labels;
}

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ toEmail, locale, labels }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const isRtl = locale === "ar";

  const inputBase: React.CSSProperties = useMemo(
    () => ({
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #3a3630",
      color: "#f5f0e8",
      padding: "10px 0",
      fontSize: "15px",
      fontFamily: "Inter, system-ui, sans-serif",
      direction: isRtl ? "rtl" : "ltr",
      textAlign: isRtl ? ("right" as const) : ("left" as const),
      outline: "none",
      transition: "border-color 200ms ease",
    }),
    [isRtl],
  );

  const validate = () => {
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = labels.requiredError;
    if (!email.trim()) nextErrors.email = labels.requiredError;
    else if (!emailRegex.test(email.trim())) nextErrors.email = labels.emailInvalidError;
    if (!message.trim()) nextErrors.message = labels.requiredError;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()}\nEmail: ${email.trim()}`);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderBottomColor = "#c4622d";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderBottomColor = "#3a3630";
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px", maxWidth: "780px", width: "100%", minWidth: 0 }} noValidate>
      <label style={{ display: "grid", gap: "6px" }}>
        <span style={{ color: "#5a5450", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {labels.name}
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputBase}
          aria-invalid={Boolean(errors.name)}
          onFocus={focusStyle}
          onBlur={blurStyle}
        />
      </label>
      {errors.name && <p style={{ margin: "-12px 0 0", color: "#c4622d", fontSize: "12px" }}>{errors.name}</p>}

      <label style={{ display: "grid", gap: "6px" }}>
        <span style={{ color: "#5a5450", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {labels.email}
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputBase}
          aria-invalid={Boolean(errors.email)}
          onFocus={focusStyle}
          onBlur={blurStyle}
        />
      </label>
      {errors.email && <p style={{ margin: "-12px 0 0", color: "#c4622d", fontSize: "12px" }}>{errors.email}</p>}

      <label style={{ display: "grid", gap: "6px" }}>
        <span style={{ color: "#5a5450", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {labels.message}
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ ...inputBase, resize: "vertical", minHeight: "100px" }}
          aria-invalid={Boolean(errors.message)}
          onFocus={focusStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
          onBlur={blurStyle as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
        />
      </label>
      {errors.message && <p style={{ margin: "-12px 0 0", color: "#c4622d", fontSize: "12px" }}>{errors.message}</p>}

      <div style={{ display: "flex", justifyContent: isRtl ? "flex-start" : "flex-end" }}>
        <button
          type="submit"
          style={{
            border: "1px solid #f5f0e8",
            background: "transparent",
            color: "#f5f0e8",
            padding: "12px 28px",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "Inter, system-ui, sans-serif",
            transition: "background 200ms ease, color 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = "#f5f0e8";
            (e.target as HTMLButtonElement).style.color = "#1a1612";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "transparent";
            (e.target as HTMLButtonElement).style.color = "#f5f0e8";
          }}
        >
          {labels.submit}
        </button>
      </div>

      {status === "success" && (
        <p style={{ margin: 0, color: "#8c8580", fontSize: "13px" }}>{labels.success}</p>
      )}
    </form>
  );
}
