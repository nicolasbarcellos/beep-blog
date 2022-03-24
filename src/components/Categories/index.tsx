export type CategoriesType = {
  name: string;
};

type CategoriesData = {
  categories: CategoriesType[];
};

export const Categories = ({ categories }: CategoriesData) => {
  return (
    <div className=" overflow-x-hidden">
      <div className="flex">
        {categories.map((categorie) => (
          <ul key={categorie.name}>
            <li className=''>
              <a
                href={`/posts/categories/${encodeURIComponent(
                  categorie.name.toLowerCase()
                )}`}
              >
                {categorie.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
