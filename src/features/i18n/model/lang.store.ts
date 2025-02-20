import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { api } from "@/shared/api";

export type Lang = "ru" | "en";

type LangMap = { [T in Lang]: T };
type LangKey = keyof LangMap;
type LangStore = {
  lang?: LangKey;
  setLang: (lang: LangKey) => void;
};

export const { useStore: useLang, Provider: I18nProvider } = 
  createStoreContext(({ lang }: { lang?: LangKey }) => 
    create<LangStore>((set) => ({
      lang,
      setLang: async (lang) => {
        await api.setLang({ lang });
        set({ lang });
      },
    })),
  );
