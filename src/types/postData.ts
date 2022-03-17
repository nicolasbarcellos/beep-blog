import { ElementNode } from "@graphcms/rich-text-types";

export type PostDetailsData = {
  post: {
    author: {
      bio: string;
      name: string;
      id: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    slug: string;
    title: string;
    featured_image: {
      url: string;
    };
    content: {
      raw: {
        children: ElementNode[];
      };
    };
  };
};
