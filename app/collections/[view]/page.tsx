import { GetStaticPaths, GetStaticProps } from "next";

interface PageProps {
  view: string; // Expecting the `view` parameter directly, not wrapped in `params`
}

export default function ViewPage({ view }: PageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Current View: {view}</h1>
      <p className="text-gray-600">
        This page dynamically renders content based on the view: Grid, List, or
        Table.
      </p>
    </div>
  );
}

// Step 1: Define `getStaticPaths` to generate dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { view: "Grid" } },
      { params: { view: "List" } },
      { params: { view: "Table" } },
    ],
    fallback: false, // Only allow these paths; show 404 for others
  };
};

// Step 2: Fetch the `view` parameter for the page
export const getStaticProps: GetStaticProps = async (context) => {
  const { view } = context.params as { view: string };

  return {
    props: {
      view, // Pass `view` as a prop to the page component
    },
  };
};
