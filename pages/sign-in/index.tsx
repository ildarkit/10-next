import { getOpenLayout } from "@/app/pub/get-open-layout";
import { SignInPage } from "@/pages/auth";
import { setPageLayout } from "@/shared/lib/next";

export default setPageLayout(SignInPage, getOpenLayout);
