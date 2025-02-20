import { SessionProvider } from "@/entities/session";
import { I18nProvider } from "@/features/i18n";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { ReactNode, useEffect, useState } from "react";
import { useApplayAppInterceptor } from "../interceptors/app-interceptor";
import { api } from "@/shared/api";
import { ComposeChildren } from "@/shared/lib/react";

export const loadAppLoaderData = async () => {
  try {
    const [ session, theme, lang ] = await Promise.all([
      api.getSession(),
      api.getTheme(),
      api.getLang(),
    ]);
    return { session, theme, lang };
  } catch {
    return {};
  }
};

export function AppLoader({
  children,
  data: defaultData,
}: {
  children?: ReactNode;
  data?: Awaited<ReturnType<typeof loadAppLoaderData>>;
}) {
  console.log("defaultData", defaultData)
  const [data, setData] = useState(defaultData);
  const session = data?.session;
  const theme = data?.theme;
  const lang = data?.lang;

  const isData = session && theme && lang;

  const [isLoading, setIsLoading] = useState(!isData);

  useApplayAppInterceptor();

  useEffect(() => {
    if (isData) {
      return;
    }
    setIsLoading(true);

    loadAppLoaderData()
      .then(setData)
      .finally(() => {
        setIsLoading(false);
      })
      .catch(() => {});
  }, [isData]);

  return (
    <>
      <UiPageSpinner isLoading={isLoading} />
      {!isLoading ? (
        <ComposeChildren>
          <SessionProvider value={{ session }} />
          <I18nProvider value={{ ...lang }} />
          {children}
        </ComposeChildren>
      ) : null}
    </>
  );
}
