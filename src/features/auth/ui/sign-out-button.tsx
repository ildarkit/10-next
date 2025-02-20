import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";
import { GetTranslationFn, Translations } from "@/shared/lib/i18n";

export function SignOutButton<T extends Translations<string>>({
  t,
  className 
}: { 
  t: GetTranslationFn<T>, 
  className?: string 
}) {
  const { signOut, isLoading } = useSignOut();
  return (
    <UiButton
      isLoading={isLoading}
      className={className}
      variant="outlined"
      onClick={() => signOut()}
    >
      {t("sign-out")}
    </UiButton>
  );
}
