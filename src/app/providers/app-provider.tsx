import { ComposeChildren } from "@/shared/lib/react";
import { Toasts } from "@/shared/lib/toasts";
import { Confirmations } from "@/widgets/confirmations";

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
    <ComposeChildren>
      <Confirmations />
      <Toasts config={{ lifeTime: 3000 }} />
      {children}
    </ComposeChildren>
  );
}
