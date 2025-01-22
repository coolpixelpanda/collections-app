import { notFound } from "next/navigation";
import { collections } from "../../../data/collections";
import { CollectionGrid } from "../../../components/CollectionGrid";
import { CollectionList } from "../../../components/CollectionList";
import { CollectionTable } from "../../../components/CollectionTable";

const CollectionView = ({ params }: { params: { view: string } }) => {
  const { view } = params;

  if (view === "grid") return <CollectionGrid collections={collections} />;
  if (view === "list") return <CollectionList collections={collections} />;
  if (view === "table") return <CollectionTable collections={collections} />;
  return notFound();
};

export default CollectionView;
