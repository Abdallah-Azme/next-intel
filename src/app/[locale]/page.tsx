"use client";
import SelectLanguageButton from "@/components/shared/select-language-button";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/about")}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {t("title")}
      {t("about")}
      <Link href={"/about"}> {t("about")}</Link>
      <SelectLanguageButton />
    </div>
  );
}
