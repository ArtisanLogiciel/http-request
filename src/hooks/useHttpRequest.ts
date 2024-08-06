import { create } from "zustand";

type HttpRequestStore = {
  url: string;
  headers: Record<string, string> | null;
  body: string | null;
  setUrl: (url: string) => void;
  setHeaders: (headers: Record<string, string> | null) => void;
  setBody: (body: string | null) => void;
};

export const useHttpRequest = create<HttpRequestStore>((set) => ({
  url: "",
  headers: {} as Record<string, string> | null,
  body: null,
  setUrl: (url) => set({ url }),
  setHeaders: (headers) => set({ headers: headers ?? undefined }),
  setBody: (body) => set({ body }),
}));
