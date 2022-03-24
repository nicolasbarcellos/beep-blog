import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import client from "../../services/client";
import {
  GetCommentsByPostQuery,
  GetFeaturedPostsQuery,
  GetPostBySlugQuery,
} from "../../services/generated/graphql";
import {
  GET_COMMENTS_BY_POST,
  GET_FEATURED_POSTS,
  GET_POST_BY_SLUG,
} from "../../services/queries";

import { BsArrowLeft } from "react-icons/bs";
import Moment from "react-moment";
import Image from "next/image";
import { PostContent } from "../../components/PostContent";
import { PostDetailsData } from "../../types";
import { PostAuthor } from "../../components/PostAuthor";
import { CommentsForm } from "../../components/CommentsForm";
import Head from "next/head";
import Comments from "../../components/Comments";

interface PostType extends PostDetailsData {
  comments: {
    name: string;
    comment: string;
    createdAt: string;
  }[];
}

export default function PostDetails({ post, comments }: PostType) {
  console.log(comments)
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Beep Blog | {post.title}</title>
      </Head>
      <div className="container pt-8">
        <button
          className=" flex items-center space-x-2 text-[color:var(--blue)]
    font-medium group"
          onClick={() => router.push("/")}
        >
          <BsArrowLeft size={18} className="group-hover:animate-bounceRight" />
          <span>Back</span>
        </button>

        <div className="block w-full my-6 ">
          <Image
            placeholder="blur"
            blurDataURL="/images/default.jpg"
            src={post.featured_image.url}
            width={1500}
            height={600}
            layout="responsive"
            objectFit="cover"
            alt={post.title}
            priority
          />
        </div>

        <div className="">
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <div className="flex items-center space-x-2 mb-12">
            <Moment
              format="MMM DD, YYYY"
              className="uppercase text-gray-500 font-semibold block text-sm"
            >
              {post.createdAt}
            </Moment>
            <span>—</span>
            <span>7 min read</span>
          </div>
        </div>

        <PostContent post={post} />
        <PostAuthor author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments comments={comments} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await client.request<GetFeaturedPostsQuery>(
    GET_FEATURED_POSTS,
    { first: 4 }
  );

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts: postArr } = await client.request<GetPostBySlugQuery>(
    GET_POST_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  );

  const { comments } = await client.request<GetCommentsByPostQuery>(
    GET_COMMENTS_BY_POST,
    {
      slug: "introducing-jsx",
    }
  );

  console.log(comments);

  if (!postArr.length) {
    return {
      notFound: true,
    };
  }

  const post = postArr.pop();

  return {
    props: {
      post,
      comments,
    },
    revalidate: 3600, // 1 min
  };
};
