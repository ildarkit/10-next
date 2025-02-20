import { useTranslations } from "@/features/i18n";

export const useI18n = () => {
  const { translate } = useTranslations();
  return translate({
    title: {
      en: "Sign in",
      ru: "Вход",
    },
    "sign-in": {
      en: "Sign in",
      ru: "Войти",
    },
    "sign-out": {
      en: "Sign out",
      ru: "Выход",
    },
    "sign-in-success": {
      en: "Sign in success",
      ru: "Вы вошли",
    },
    "sign-in-error": {
      en: "Wrong username or password",
      ru: "Неверное имя пользователя или пароль",
    },
    "password-label": {
      en: "Password",
      ru: "Пароль",
    },
    "required-form-field": {
      en: "This field is required",
      ru: "Это поле обязательное"
    },
  } as const);
};
