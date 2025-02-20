import { apiInstance } from "@/shared/api/api-instance";
import { ROUTER_PATHS } from "@/shared/constants";
import { useEventCallback } from "@/shared/lib/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useApplayAppInterceptor() {
  const router = useRouter();

  const routerReplace = useEventCallback(router.replace);
  useEffect(() => {
    apiInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 403) {
          return routerReplace(ROUTER_PATHS[403]);
        }
        if (error.response.status === 401) {
          return routerReplace(ROUTER_PATHS.SIGN_IN);
        }
        throw error;
      },
    );
  }, [routerReplace]);
}
