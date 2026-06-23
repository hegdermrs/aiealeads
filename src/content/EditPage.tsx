import { useState, useEffect } from "react";
import defaultContent, { type PageContent } from "../content";
import { saveContent, loadContent, mergeContent } from "./ContentProvider";

interface Field {
  key: string;
  label: string;
  type?: "textarea";
  arrayOf?: string[]; // sub-fields for array items
  arrayLabel?: (i: number) => string;
}

interface SectionDef {
  key: keyof PageContent;
  label: string;
  fields: Field[];
}

const SECTIONS: SectionDef[] = [
  {
    key: "hero",
    label: "Hero Section",
    fields: [
      { key: "loaderText", label: "Loader Text" },
      { key: "headline", label: "Headline" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "formButton", label: "Form Button" },
      { key: "learnMore", label: "Learn More Link" },
    ],
  },
  {
    key: "nav",
    label: "Navigation",
    fields: [
      { key: "gapLabel", label: "Gap Link" },
      { key: "whatYouGetLabel", label: "What You Get Link" },
      { key: "storiesLabel", label: "Stories Link" },
      { key: "ctaLabel", label: "CTA Button" },
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
    key: "iceberg",
    label: "Iceberg Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "body2", label: "Body 2", type: "textarea" },
    ],
  },
  {
    key: "gapBehind",
    label: "Behind Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "caption", label: "Caption", type: "textarea" },
    ],
  },
  {
    key: "pillars",
    label: "Pillars Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "items", label: "Pillars", arrayOf: ["title", "body"], arrayLabel: (i: number) => `Pillar ${i + 1}` },
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
      { key: "categories", label: "Categories", arrayOf: ["title", "items"], arrayLabel: (i: number) => `Category ${i + 1}` },
    ],
  },
  {
    key: "fitCheck",
    label: "Fit Check Section",
    fields: [
      { key: "heading", label: "Heading" },
      { key: "forYouLabel", label: "For You Sub-heading" },
      { key: "forYou", label: "For You List", type: "textarea" },
      { key: "notForYouLabel", label: "Not For You Sub-heading" },
      { key: "notForYou", label: "Not For You List", type: "textarea" },
    ],
  },
  {
    key: "stories",
    label: "Stories Section",
    fields: [
      { key: "heading", label: "Heading" },
    ],
  },
  {
    key: "founder",
    label: "Founder Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow" },
      { key: "heading", label: "Heading" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "paragraph3", label: "Paragraph 3 (Ethos)", type: "textarea" },
      { key: "quote", label: "Quote" },
    ],
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
  {
    key: "form",
    label: "Forms",
    fields: [
      { key: "emailLabel", label: "Email Label (sr-only)" },
      { key: "emailPlaceholder", label: "Email Placeholder" },
      { key: "successMessage", label: "Success Message" },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    fields: [
      { key: "tagline", label: "Tagline" },
    ],
  },
];

function joinArray(val: any): string {
  if (Array.isArray(val)) return val.join("\n");
  return "";
}

function splitArray(val: string): string[] {
  return val.split("\n").filter((l) => l.trim());
}

export default function EditPage() {
  const [content, setContent] = useState<PageContent>(defaultContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await loadContent();
      if (data) setContent(mergeContent(defaultContent, data));
      setLoading(false);
    })();
  }, []);

  const update = (section: keyof PageContent, field: string, value: string) => {
    setContent((prev) => {
      const next: any = { ...prev };
      const current = next[section];
      if (Array.isArray(current)) {
        next[section] = splitArray(value);
      } else {
        next[section] = { ...(current ?? {}), [field]: value };
      }
      return next;
    });
    setSaved(false);
  };

  const updateArrayItem = (section: keyof PageContent, field: string, index: number, subField: string, value: string) => {
    setContent((prev) => {
      const next: any = { ...prev };
      const sectionData = { ...(next[section] ?? {}) };
      const arr = [...(sectionData[field] ?? [])];
      if (!arr[index]) arr[index] = {};
      if (subField === "items") {
        arr[index] = { ...arr[index], items: splitArray(value) };
      } else {
        arr[index] = { ...arr[index], [subField]: value };
      }
      sectionData[field] = arr;
      next[section] = sectionData;
      return next;
    });
    setSaved(false);
  };

  const getValue = (section: keyof PageContent, field: string): any => {
    const sec = content[section] as any;
    if (Array.isArray(sec)) return sec;
    return sec?.[field] ?? "";
  };

  const save = async () => {
    setSaving(true);
    const ok = await saveContent(content);
    if (ok) setSaved(true);
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
      {/* Floating save bar */}
      <div className="sticky top-0 z-50 -mx-6 bg-black/80 px-6 py-4 backdrop-blur-lg">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div>
            <a href="/" className="text-sm text-emerald-300 hover:underline">&larr; Back to site</a>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>Page Editor</h1>
          </div>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-emerald-300 disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save All"}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl pt-6">

        {SECTIONS.map((section) => {
          const sectionContent = content[section.key] as any;
          return (
            <div key={section.key} className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="mb-4 text-lg font-semibold text-emerald-300">{section.label}</h2>
              <div className="space-y-4">
                {section.fields.map((field) => {
                  if (field.arrayOf) {
                    // Array of objects (e.g. pillars.items, build.categories)
                    const arr = (sectionContent?.[field.key] ?? []) as any[];
                    return (
                      <div key={field.key}>
                        <label className="mb-3 block text-xs font-medium uppercase tracking-wider text-white/40">
                          {field.label}
                        </label>
                        <div className="space-y-4">
                          {arr.map((item: any, i: number) => (
                            <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                              <p className="mb-3 text-xs font-semibold text-emerald-400">{field.arrayLabel!(i)}</p>
                              {field.arrayOf!.map((subField) => (
                                <div key={subField} className="mb-2 last:mb-0">
                                  <label className="mb-1 block text-[10px] uppercase tracking-wider text-white/30">
                                    {subField}
                                  </label>
                                  {subField === "items" ? (
                                    <textarea
                                      value={Array.isArray(item[subField]) ? item[subField].join("\n") : item[subField] ?? ""}
                                      onChange={(e) => updateArrayItem(section.key, field.key, i, subField, e.target.value)}
                                      rows={4}
                                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                                      placeholder="One per line"
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      value={item[subField] ?? ""}
                                      onChange={(e) => updateArrayItem(section.key, field.key, i, subField, e.target.value)}
                                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  // Simple string field
                  const val = getValue(section.key, field.key);
                  const displayVal = Array.isArray(val) ? joinArray(val) : (typeof val === "string" ? val : "");
                  return (
                    <div key={field.key}>
                      <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-white/40">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          value={displayVal}
                          onChange={(e) => update(section.key, field.key, e.target.value)}
                          rows={3}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                        />
                      ) : (
                        <input
                          type="text"
                          value={displayVal}
                          onChange={(e) => update(section.key, field.key, e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/50"
                        />
                      )}
                    </div>
                  );
                })}
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
