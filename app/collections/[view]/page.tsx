import { GetStaticPaths, GetStaticProps } from 'next';

interface PageProps {
  params: {
    view: string;
  };
}

export default function ViewPage({ params }: PageProps) {
  const { view } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Current View: {view}</h1>
      <p className="text-gray-600">
        This page dynamically renders content based on the view: Grid, List, or Table.
      </p>
    </div>
  );
}

// Step 1: Define `getStaticPaths` to specify valid paths for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { view: 'Grid' } },
      { params: { view: 'List' } },
      { params: { view: 'Table' } },
    ],
    fallback: false, // If fallback is false, only these paths will be generated
  };
};

// Step 2: Define `getStaticProps` to fetch data based on the view parameter
export const getStaticProps: GetStaticProps = async (context) => {
  const { view } = context.params as { view: string };

  // Pass the `view` as a prop to the page
  return {
    props: {
      params: {
        view,
      },
    },
  };
};
