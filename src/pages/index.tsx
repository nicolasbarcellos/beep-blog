import { GetStaticProps } from "next";
import Head from "next/head";
import {
  GET_BUSINESS_POSTS,
  GET_CATEGORIES,
  GET_FEATURED_POSTS,
  GET_LAST_POST,
  GET_POSTS,
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
import { fetchData } from "../../utils/fetchData";

type HomeProps = {
  data: {
    categories: CategoriesType[];
    // allPosts: any;
    featuredPosts: any;
    latestPost: any;
    businessPosts: any;
  };
};

const Home = ({ data }: HomeProps) => {
  console.log(data.businessPosts)
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
        grid="3/1"
      />
      <PostWrapper
        posts={{
          businessPosts: data.businessPosts,
        }}
        grid="2/2"
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { posts: allPosts } = await client.request<GetPostsQuery>(GET_POSTS);
  const { categories } = await fetchData(GET_CATEGORIES);

  const { posts: featuredPosts } = await fetchData(GET_FEATURED_POSTS, {
    first: 3,
  });

  const { posts: latestPost } = await fetchData(GET_LAST_POST);

  const [{ posts: firstBusinessPost }, { posts: restBusinessPost }] =
    await Promise.all([
      fetchData(GET_BUSINESS_POSTS, { first: 1 }),
      fetchData(GET_BUSINESS_POSTS, { first: 4 }),
    ]);

  return {
    props: {
      data: {
        // allPosts,
        categories,
        featuredPosts,
        latestPost,
        businessPosts: {
          firstBusinessPost,
          restBusinessPost,
        },
      },
    },
    revalidate: 3600,
  };
};

export default Home;
