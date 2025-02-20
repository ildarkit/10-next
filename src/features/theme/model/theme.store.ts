import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { api } from "@/shared/api";

export type Theme = "light" | "dark";

type ThemeStore = {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
};

export const { useStore: useTheme, Provider: ThemeProvider } =
  createStoreContext(({ theme }: { theme?: Theme }) =>
    create<ThemeStore>((set) => ({
      theme,
      setTheme: async (theme) => {
        await api.setTheme({ theme });
        set({ theme });
      },
    })));
