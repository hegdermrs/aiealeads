import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import defaultContent, { type PageContent } from "../content";

export { defaultContent };
export type { PageContent };

const ContentContext = createContext<PageContent | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PageContent>(defaultContent);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/.netlify/functions/load-content");
        if (!res.ok) return;
        const data = await res.json();
        if (data && Object.keys(data).length) setContent(mergeContent(defaultContent, data));
      } catch {}
    })();
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}

export function useContentValue(path: string): string {
  const ctx = useContext(ContentContext);
  const obj = ctx ?? defaultContent;
  let val: any = obj;
  for (const key of path.split(".")) {
    if (val == null) return "";
    val = val[key as keyof typeof val];
  }
  return typeof val === "string" ? val : "";
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
