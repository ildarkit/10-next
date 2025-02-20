import { useLang } from "..";
import { createI18nModule } from "@/shared/lib/i18n";
import type { Translations } from "@/shared/lib/i18n";

export function useTranslations() {
  const { lang } = useLang();
  const translate = (translations: Translations<string>) => {
    return createI18nModule(translations)(lang);
  };
  return { translate };
}


