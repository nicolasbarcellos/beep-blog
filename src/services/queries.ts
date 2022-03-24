import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPosts($first: Int) {
    posts(first: $first) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      createdAt
      slug
      title
      featured_image {
        url
      }
      content {
        raw
      }
    }
  }
`;

export const GET_LAST_POST = gql`
  query getLatestPost {
    posts(last: 1) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_COMMENTS_BY_POST = gql`
  query getCommentsByPost($slug: String) {
    comments(where: { post: { slug: $slug } }, orderBy: createdAt_DESC) {
      name
      createdAt
      comment
    }
  }
`;

export const GET_WORLD_POSTS = gql`
  query getWorldPosts {
    posts(where: { categories_some: { name: "World" } }) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_BUSINESS_POSTS = gql`
  query getBusinessPosts($first: Int) {
    posts(where: { categories_some: { name: "Business" } }, first: $first) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_TECHNOLOGY_POSTS = gql`
  query getTechnologyPosts($first: Int) {
    posts(where: { categories_some: { name: "Technology" } }, first: $first) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_FEATURED_POSTS = gql`
  query getFeaturedPosts($first: Int) {
    posts(where: { featured_post: true }, first: $first) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      exerpect
      createdAt
      slug
      title
      featured_image {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories(orderBy: id_DESC) {
      name
    }
  }
`;
