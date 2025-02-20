import { useTheme } from "@/features/theme";
import clsx from "clsx";

export function AppLayout({ children }: { children?: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={clsx(theme)}>
      <div className={clsx(
        "text-slate-900", 
        "dark:text-white dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-700/30"
      )}>
        {children}
      </div>
    </div>
  );
}
