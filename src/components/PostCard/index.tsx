import Image from "next/image";
import Moment from "react-moment";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export const PostCard = ({ post, size = "" }: any) => {
  return (
    <>
      {size === "large" && (
        <Link href={`post/${post.slug}`} passHref>
          <div className="pb-8">
            {/* <div
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
            </div> */}

            <Image
              loading="lazy"
              src={post.featured_image.url}
              width={800}
              height={400}
              objectFit="cover"
              alt={post.title}
              placeholder="blur"
              blurDataURL="/images/default.jpg"
              className="flex-shrink-0 overflow-hidden rounded-md imgHover shadow-md"
            />
            <div>
              <Moment
                format="MMM DD, YYYY"
                className="uppercase text-gray-500 font-semibold my-2 block text-sm"
              >
                {post.createdAt}
              </Moment>
              {/* <div className="cursor-pointer flex flex-col  h-32">
              <h2
                className="font-bold text-lg tracking-wide leading-tight mt-2 hover:text-gray-700
            transition duration-300"
              > */}
              <h2 className="cursor-pointer font-bold text-lg xs:text-2xl tracking-wide leading-tight hover:text-gray-700  transition duration-300">
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
        </Link>
      )}

      {size === "medium" && (
        <Link href={`post/${post.slug}`} passHref>
          <div
            className="pb-4 2xl:pb-8 lg:grid 
        overflow-hidden lg:grid-cols-2 flex gap-4 items-start flex-col"
          >
            {/* <div
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
            </div> */}
            <Image
              loading="lazy"
              src={post.featured_image.url}
              width={1000}
              height={600}
              objectFit="cover"
              alt={post.title}
              placeholder="blur"
              blurDataURL="/images/default.jpg"
              className="flex-shrink-0 overflow-hidden rounded-md imgHover 
                shadow-md"
            />
            <div className="cursor-pointer">
              <h2
                className="font-bold text-lg tracking-wide leading-tight hover:text-gray-700
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
        </Link>
      )}

      {size === "small" && (
        <Link href={`post/${post.slug}`} passHref>
          <div
            className="pb-8 sm:pb-0
         relative flex-grow overflow-hidden"
          >
            {/* <div
              className="relative w-full rounded-md shadow-md
          overflow-hidden h-56 sm:h-44 imgHover"
            >
              <Image
                src={post.featured_image.url}
                layout="fill"
                objectFit="cover"
                alt={post.title}
                className=""
              />
            </div> */}
            <Image
              loading="lazy"
              src={post.featured_image.url}
              width={1000}
              height={600}
              objectFit="cover"
              alt={post.title}
              placeholder="blur"
              blurDataURL="/images/default.jpg"
              className="flex-shrink-0 overflow-hidden rounded-md imgHover shadow-md"
            />
            <div className="cursor-pointer flex flex-col  h-32">
              <h2
                className="font-bold text-lg tracking-wide leading-tight mt-2 hover:text-gray-700
            transition duration-300"
              >
                {post.title}
              </h2>
              <Moment
                format="MMM DD, YYYY"
                className="uppercase text-gray-500 font-semibold block my-2 text-sm"
              >
                {post.createdAt}
              </Moment>
              <button className="btnRead group mt-auto">
                <span className="block">Read Article</span>
                <BsArrowRight
                  size={18}
                  className="group-hover:animate-bounceRight"
                />
              </button>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
