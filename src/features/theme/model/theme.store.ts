import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { api } from "@/shared/api";

export type Theme = "light" | "dark";

type ThemeStore = {
  theme?: Theme;
  //loadTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export const { useStore: useTheme, Provider: ThemeProvider } =
  createStoreContext(({ theme }: { theme?: Theme }) =>
    create<ThemeStore>((set) => ({
      theme,
      //loadTheme: async () => {
      //  const data = await api.getTheme();
      //  const theme = data.theme ?? get().theme;
      //  set({ theme });
      //},
      setTheme: async (theme) => {
        await api.setTheme({ theme });
        set({ theme });
      },
    })));
