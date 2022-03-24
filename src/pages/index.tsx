import { GetStaticProps } from "next";
import Head from "next/head";
import {
  GET_BUSINESS_POSTS,
  GET_CATEGORIES,
  GET_FEATURED_POSTS,
  GET_LAST_POST,
  GET_POSTS,
  GET_TECHNOLOGY_POSTS,
} from "../services/queries";
import client from "../services/client";
import { CategoriesType } from "../components/Categories";
import {
  GetBusinessPostsQuery,
  GetCategoriesQuery,
  GetFeaturedPostsQuery,
  GetLatestPostQuery,
  GetPostsQuery,
} from "../services/generated/graphql";
import PostWrapper from "../components/PostsWrapper";
import { PostDetailsData } from "../types";
import { Loader } from "../components/Loader";

type HomeProps = {
  data: {
    categories: CategoriesType[];
    featuredPosts: PostDetailsData;
    latestPost: PostDetailsData;
    businessPosts: PostDetailsData;
    technologyPosts: PostDetailsData;
    postsDemoWorld: PostDetailsData;
    postsDemoSafety: PostDetailsData;
  };
};

const Home = ({ data }: HomeProps) => {
  return (
    <div className="container overflow-x-hidden">
      <Head>
        <title>Beep Blog</title>
      </Head>
      <PostWrapper
        posts={{
          latestPost: data.latestPost,
          featuredPosts: data.featuredPosts,
        }}
        grid="initial"
      />
      <PostWrapper
        posts={{
          businessPosts: data.businessPosts,
        }}
        grid="business"
      />

      <PostWrapper
        posts={{
          technologyPosts: data.technologyPosts,
        }}
        grid="technology"
      />

      <PostWrapper
        posts={{
          postsDemoWorld: data.postsDemoWorld,
        }}
        grid="world"
      />

      <PostWrapper
        posts={{
          postsDemoSafety: data.postsDemoSafety,
        }}
        grid="safety"
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts: postsDemoWorld } = await client.request<GetPostsQuery>(
    GET_POSTS,
    { first: 8 }
  );
  const { posts: postsDemoSafety } = await client.request<GetPostsQuery>(
    GET_POSTS,
    { first: 4 }
  );
  const { categories } = await client.request<GetCategoriesQuery>(
    GET_CATEGORIES
  );

  const { posts: featuredPosts } = await client.request<GetFeaturedPostsQuery>(
    GET_FEATURED_POSTS,
    {
      first: 3,
    }
  );

  const { posts: latestPost } = await client.request<GetLatestPostQuery>(
    GET_LAST_POST
  );

  const [{ posts: twoTechnologyPost }, { posts: restTechnologyPost }] =
    await Promise.all([
      client.request<GetPostsQuery>(GET_TECHNOLOGY_POSTS, { first: 2 }),
      client.request<GetPostsQuery>(GET_TECHNOLOGY_POSTS, { first: 3 }),
    ]);

  const [{ posts: firstBusinessPost }, { posts: restBusinessPost }] =
    await Promise.all([
      client.request<GetBusinessPostsQuery>(GET_BUSINESS_POSTS, { first: 1 }),
      client.request<GetBusinessPostsQuery>(GET_BUSINESS_POSTS, { first: 4 }),
    ]);

  return {
    props: {
      data: {
        postsDemoWorld,
        postsDemoSafety,
        categories,
        featuredPosts,
        latestPost,
        businessPosts: {
          firstBusinessPost,
          restBusinessPost,
        },
        technologyPosts: {
          twoTechnologyPost,
          restTechnologyPost,
        },
      },
    },
    revalidate: 60,
  };
};

export default Home;
