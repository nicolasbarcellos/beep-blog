import Image from "next/image";

type PostAuthorData = {
  author: {
    bio: string;
    name: string;
    id: string;
    photo: {
      url: string;
    };
  };
};

export const PostAuthor = ({ author }: PostAuthorData) => {
  return (
    <div className="container">
      <div className="flex w-full justify-center">
        <div
          className="flex items-center space-x-4 flex-wrap xs:flex-nowrap  justify-center text-center 
        xs:text-left"
        >
          <div className="flex-shrink-0">
            <Image
              src={author.photo.url}
              width={100}
              height={100}
              objectFit="cover"
              alt={`Photo by ${author.name}`}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">{author.name}</h2>
            <p className="max-w-md text-md text-gray-500">{author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
