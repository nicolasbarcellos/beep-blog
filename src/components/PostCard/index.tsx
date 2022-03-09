import Image from "next/image";
import Moment from "react-moment";
import { BsArrowRight } from "react-icons/bs";

export const PostCard = ({ post, size = "" }: any) => {
  return (
    <>
      {size === "large" && (
        <div className="">
          <div
            className="relative w-full h-56 xs:h-96 overflow-hidden rounded-md flex-shrink-0 shadow-md
          imgHover"
          >
            <Image
              src={post.featured_image.url}
              layout="fill"
              objectFit="cover"
              alt={post.title}
              className="flex-shrink-0"
            />
          </div>
          <div>
            <Moment
              format="MMM DD, YYYY"
              className="uppercase text-gray-500 font-semibold my-2 block text-sm"
            >
              {post.createdAt}
            </Moment>
            <h2 className="font-bold text-lg xs:text-2xl tracking-wide leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm xs:text-base mb-4 mt-2">
              {post.exerpect}
            </p>
            <button className="btnRead group">
              <span>Read Article</span>
              <BsArrowRight
                size={18}
                className="group-hover:animate-bounceRight"
              />
            </button>
          </div>
        </div>
      )}

      {size === "medium" && (
        <div
          className="pb-8 sm:grid sm:items-center sm:h-56 h-96
        overflow-hidden sm:grid-cols-2 flex gap-4 items-start flex-col"
        >
          <div
            className="relative w-full rounded-md shadow-md self-start 
          overflow-hidden h-56 xs:h-full  imgHover"
          >
            <Image
              src={post.featured_image.url}
              layout="fill"
              objectFit="cover"
              alt={post.title}
              className=""
            />
          </div>
          <div className="cursor-pointer">
            <h2
              className="font-bold text-lg tracking-wide leading-tight my-2 hover:text-gray-700
            transition duration-300"
            >
              {post.title}
            </h2>
            <Moment
              format="MMM DD, YYYY"
              className="uppercase text-gray-500 font-semibold my-2 block text-sm"
            >
              {post.createdAt}
            </Moment>
            <button className="btnRead group">
              <span>Read Article</span>
              <BsArrowRight
                size={18}
                className="group-hover:animate-bounceRight"
              />
            </button>
          </div>
        </div>
      )}

      {size === "small" && (
        <div
          className="
        overflow-hidden"
        >
          <div
            className="relative w-full rounded-md shadow-md self-start 
          overflow-hidden h-56 sm:h-44 imgHover"
          >
            <Image
              src={post.featured_image.url}
              layout="fill"
              objectFit="cover"
              alt={post.title}
              className=""
            />
          </div>
          <div className="cursor-pointer">
            <h2
              className="font-bold text-lg tracking-wide leading-tight my-2 hover:text-gray-700
            transition duration-300"
            >
              {post.title}
            </h2>
            <Moment
              format="MMM DD, YYYY"
              className="uppercase text-gray-500 font-semibold my-2 block text-sm"
            >
              {post.createdAt}
            </Moment>
            <button className="btnRead group">
              <span>Read Article</span>
              <BsArrowRight
                size={18}
                className="group-hover:animate-bounceRight"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
