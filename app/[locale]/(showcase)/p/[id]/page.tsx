import { notFound, permanentRedirect } from "next/navigation";
import { SupportedLangs } from "@/i18n/types";
import queryShowcaseById from "@/lib/api/query.showcase";

type Props = {
  params: { id: string, locale: SupportedLangs }
}

export default async function ProductDetail({ params }: Props) {
  const product = await queryShowcaseById(params.id, "ph");

  if(!product){
    return notFound();
  }
  return permanentRedirect(`/${params.locale}/products/${product.slug}`);
}