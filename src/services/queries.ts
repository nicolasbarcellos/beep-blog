import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query getPosts {
    posts {
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
