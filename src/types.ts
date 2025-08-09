export type Demo = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  Component: React.FC<{
    auto?: boolean;
    category?: string;
    categorySlug?: string;
  }>;
};

export type Category = {
  name: string;
  slug: string;
  demos: Demo[];
};
