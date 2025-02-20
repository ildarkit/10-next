import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { api } from "@/shared/api";

export type Lang = "ru" | "en";

type LangStore = {
  lang?: Lang;
  setLang: (lang: Lang) => void;
};

export const { useStore: useLang, Provider: I18nProvider } = 
  createStoreContext(({ lang }: { lang?: Lang }) => 
    create<LangStore>((set) => ({
      lang,
      setLang: async (lang) => {
        await api.setLang({ lang });
        set({ lang });
      },
    })),
  );
