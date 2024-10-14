import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function SelectLanguageButton() {
  const pathname = usePathname();
  const locale = pathname.split("/").at(1);
  const router = useRouter();
  const handleLocaleChange = (newLocale: "en" | "ar") => {
    router.push("/", { locale: newLocale }); // Assuming '/' is the current route
  };

  return (
    <Select defaultValue={locale || ""} onValueChange={handleLocaleChange}>
      <SelectTrigger
        className={cn(
          buttonVariants({ size: "default", variant: "default" }),
          "w-fit"
        )}
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
