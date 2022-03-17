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
import { Categories, CategoriesType } from "../components/Categories";
import {
  GetBusinessPostsQuery,
  GetCategoriesQuery,
  GetFeaturedPostsQuery,
  GetLatestPostQuery,
  GetPostsQuery,
} from "../services/generated/graphql";
import PostWrapper from "../components/PostsWrapper";
import { fetchData } from "../utils/fetchData";

type HomeProps = {
  data: {
    categories: CategoriesType[];
    featuredPosts: any;
    latestPost: any;
    businessPosts: any;
    technologyPosts: any;
    postsDemoWorld: any;
    postsDemoSafety: any;
  };
};

const Home = ({ data }: HomeProps) => {
  return (
    <div className="container overflow-x-hidden">
      <Head>
        <title>Beep Blog</title>
      </Head>

      <Categories categories={data.categories} />
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
  const { posts: postsDemoWorld } = await fetchData(GET_POSTS, { first: 8 });
  const { posts: postsDemoSafety } = await fetchData(GET_POSTS, { first: 4 });
  const { categories } = await fetchData(GET_CATEGORIES);

  const { posts: featuredPosts } = await fetchData(GET_FEATURED_POSTS, {
    first: 3,
  });

  const { posts: latestPost } = await fetchData(GET_LAST_POST);

  const [{ posts: twoTechnologyPost }, { posts: restTechnologyPost }] =
    await Promise.all([
      fetchData(GET_TECHNOLOGY_POSTS, { first: 2 }),
      fetchData(GET_TECHNOLOGY_POSTS, { first: 3 }),
    ]);

  const [{ posts: firstBusinessPost }, { posts: restBusinessPost }] =
    await Promise.all([
      fetchData(GET_BUSINESS_POSTS, { first: 1 }),
      fetchData(GET_BUSINESS_POSTS, { first: 4 }),
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
    revalidate: 3600,
  };
};

export default Home;
