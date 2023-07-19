import { useRouter } from "next/router";

import { SharkInfoPage } from "@/components";
import { SHARK_INFO } from "@/constants";

const SharkPage = () => {
  const nextRouter = useRouter();
  let slug = nextRouter.query.shark;
  const sharkInfoProp = convertSlugToSharkInfoProp(slug);

  return <SharkInfoPage shark={SHARK_INFO[`${sharkInfoProp}`]} />;
};

export default SharkPage;

const convertSlugToSharkInfoProp = (slug) => {
  const splitName = slug.split("-");
  const endIndex = splitName.length - 1;
  const sharkType = splitName.slice(0, endIndex).join("");

  return sharkType;
};
