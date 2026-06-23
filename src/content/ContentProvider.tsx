import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import defaultContent, { type PageContent } from "../content";

const STORAGE_KEY = "aiea-content";

const ContentContext = createContext<PageContent | null>(null);

async function loadFromServer(): Promise<PageContent | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("/.netlify/functions/load-content", { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && Object.keys(data).length) return mergeContent(defaultContent, data);
  } catch {}
  return null;
}

function loadFromLocal(): PageContent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PageContent>(defaultContent);

  useEffect(() => {
    (async () => {
      // Try server first, fall back to localStorage
      const server = await loadFromServer();
      if (server) {
        setContent(server);
        return;
      }
      const local = loadFromLocal();
      if (local) setContent(mergeContent(defaultContent, local));
    })();
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
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

export function useContent(): PageContent {
  const ctx = useContext(ContentContext);
  return ctx ?? defaultContent;
}

export async function saveContent(content: PageContent): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("/.netlify/functions/save-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (res.ok) return true;
  } catch {}

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return true;
  } catch {
    return false;
  }
}

export async function loadContent(): Promise<PageContent | null> {
  const server = await loadFromServer();
  if (server) return server;
  return loadFromLocal();
}

export function mergeContent(base: any, overrides: any): any {
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
