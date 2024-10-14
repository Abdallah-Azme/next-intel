import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations("HomePage");
  return <div>{t("about")}</div>;
}
