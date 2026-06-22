import { useState, useEffect } from "react";
import defaultContent, { type PageContent } from "../content";

const SECTIONS: { key: keyof PageContent; label: string; fields: { key: string; label: string; type?: "textarea" }[] }[] = [
  {
    key: "hero",
    label: "Hero Section",
    fields: [
      { key: "headline", label: "Headline" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "formButton", label: "Form Button" },
      { key: "learnMore", label: "Learn More Link" },
    ],
  },
  {
    key: "gap",
    label: "The Gap Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "quote", label: "Quote" },
    ],
  },
  {
    key: "pillars",
    label: "Pillars Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    key: "audit",
    label: "Audit Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow" },
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    key: "build",
    label: "Build Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    key: "founder",
    label: "Founder Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "quote", label: "Quote" },
    ],
  },
  {
    key: "fitCheck",
    label: "Fit Check Section",
    fields: [{ key: "heading", label: "Heading" }],
  },
  {
    key: "replay",
    label: "Bottom CTA Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow" },
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
];

export default function EditPage() {
  const [content, setContent] = useState<PageContent>(defaultContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/.netlify/functions/load-content");
        if (!res.ok) return;
        const data = await res.json();
        if (data && Object.keys(data).length) setContent(mergeContent(defaultContent, data));
      } catch {}
      setLoading(false);
    })();
  }, []);

  const update = (section: keyof PageContent, field: string, value: string) => {
    setContent((prev) => {
      const next: any = { ...prev };
      next[section] = { ...next[section], [field]: value };
      return next;
    });
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    try {
      const res = await fetch("/.netlify/functions/save-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) setSaved(true);
    } catch {}
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
        <p className="text-xl text-white/50">Loading editor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <a href="/" className="mb-2 inline-block text-sm text-emerald-300 hover:underline">&larr; Back to site</a>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>Page Editor</h1>
            <p className="mt-1 text-sm text-white/50">Edit text content for every section of the landing page.</p>
          </div>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-emerald-300 disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save All"}
          </button>
        </div>

        {SECTIONS.map((section) => {
          const sectionContent = content[section.key] as Record<string, string>;
          return (
            <div key={section.key} className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="mb-4 text-lg font-semibold text-emerald-300">{section.label}</h2>
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key}>
                    <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/40">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        value={sectionContent[field.key] ?? ""}
                        onChange={(e) => update(section.key, field.key, e.target.value)}
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                      />
                    ) : (
                      <input
                        type="text"
                        value={sectionContent[field.key] ?? ""}
                        onChange={(e) => update(section.key, field.key, e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="pb-10 text-center">
          <button
            onClick={save}
            disabled={saving}
            className="rounded-full bg-emerald-400 px-10 py-4 text-base font-semibold text-black transition-all hover:bg-emerald-300 disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "All changes saved!" : "Save All Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

function mergeContent(base: any, overrides: any): any {
  const result = { ...base };
  for (const key of Object.keys(overrides)) {
    const val = overrides[key];
    if (val && typeof val === "object" && !Array.isArray(val) && typeof result[key] === "object" && !Array.isArray(result[key])) {
      result[key] = mergeContent(result[key], val);
    } else {
      result[key] = val;
    }
  }
  return result;
}
