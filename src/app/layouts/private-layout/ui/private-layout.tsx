import { UiHeader } from "@/shared/ui/ui-header";
import { NavLinks } from "./nav-links";
import { Profile } from "./profile";
import { UpdateLang } from "@/features/i18n";
import { SignOutButton } from "@/features/auth";
import { UpdateTheme } from "@/features/theme";
import { useI18n } from "@/pages/auth";

export function PrivateLayout({ children }: { children?: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader
        links={<NavLinks />}
        right={
          <div className="flex gap-4 items-center ml-auto">
            <Profile />
            <SignOutButton t= { t } />
            <UpdateLang />
            <UpdateTheme />
          </div>
        }
      />
      <main className="grow flex flex-col">{children}</main>
    </div>
  );
}
