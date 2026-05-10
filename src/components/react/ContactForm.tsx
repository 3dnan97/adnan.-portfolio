import { useMemo, useState } from "react";

type Labels = {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  requiredError: string;
  emailInvalidError: string;
  success: string;
  error: string;
};

interface Props {
  accessKey: string;
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

export default function ContactForm({ accessKey, toEmail, locale, labels }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    if (!accessKey.trim()) {
      setStatus("error");
      return;
    }

    if (botcheck.trim()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `Portfolio contact from ${name.trim()}`,
          from_name: name.trim(),
          replyto: email.trim(),
          to: toEmail,
          botcheck,
        }),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderBottomColor = "#c4622d";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderBottomColor = "#3a3630";
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px", maxWidth: "780px", width: "100%", minWidth: 0 }} noValidate>
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        checked={Boolean(botcheck)}
        onChange={(e) => setBotcheck(e.target.checked ? "1" : "")}
      />

      <label style={{ display: "grid", gap: "6px" }}>
        <span style={{ color: "#999089", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
        <span style={{ color: "#999089", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
        <span style={{ color: "#999089", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
          disabled={status === "sending"}
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
            opacity: status === "sending" ? 0.65 : 1,
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
          {status === "sending" ? labels.sending : labels.submit}
        </button>
      </div>

      {status === "success" && (
        <p style={{ margin: 0, color: "#8c8580", fontSize: "13px" }}>{labels.success}</p>
      )}
      {status === "error" && (
        <p style={{ margin: 0, color: "#c4622d", fontSize: "13px" }}>{labels.error}</p>
      )}
    </form>
  );
}
