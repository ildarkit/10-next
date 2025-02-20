import { useSession } from "@/entities/session";
import { api } from "@/shared/api";
import { ROUTER_PATHS } from "@/shared/constants";
import { useState } from "react";
import { useToasts } from "@/shared/lib/toasts";
import { useRouter } from "next/router";
import { GetTranslationFn, Translations } from "@/shared/lib/i18n";

export function useSignIn<T extends Translations<string>>(t: GetTranslationFn<T>) {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setCurrentSession = useSession((s) => s.setCurrentSession);

  const signIn = (signInDto: api.SignInDto) => {
    setIsLoading(true);
    api
      .signIn(signInDto)
      .then((resp) => {
        if (resp === undefined)
          return Promise.reject();
      })
      .then(async () => {
        setCurrentSession(await api.getSession());
        addToast({
          message: t("sign-in-success"),
          type: "success",
        });
      })
      .then(() => {
        router.push(ROUTER_PATHS.BOARDS);
      })
      .catch(() => {
        setError(t("sign-in-error"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    error,
    signIn,
  };
}
