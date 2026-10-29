import { redirect } from "next/navigation";
import { japaneseCustomParts } from "@/data/japanese-custom-parts";

export default function JapaneseIndex() {
  redirect(japaneseCustomParts.path);
}
