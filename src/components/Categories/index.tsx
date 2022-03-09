import { BsArrowLeft, BsSearch } from "react-icons/bs";

export type CategoriesType = {
  name: string;
};

type CategoriesData = {
  categories: CategoriesType[];
};

export const Categories = ({ categories }: CategoriesData) => {
  return (
    <div className="container overflow-x-hidden">
      <div>
        <BsArrowLeft />
        <h2>Blog</h2>
      </div>
      <div>
        {categories.map((categorie) => (
          <span key={categorie.name}>{categorie.name}</span>
        ))}
      </div>
      <label>
        <input type="text" />
        <span>Search</span>
        <BsSearch />
      </label>
    </div>
  );
};
