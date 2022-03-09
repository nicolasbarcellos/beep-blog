import { memo } from "react";
import { PostCard } from "../PostCard";

const PostWrapper = ({ posts, grid = {} }: any) => {
  const gridLayers = {
    big: "3/1",
    medium: "2/2",
  };

  return (
    <>
      {grid === gridLayers.big && (
        <>
          <div className="grid-big">
            <div>
              <h2 className="font-bold my-4 uppercase">Most Recent</h2>
              {posts.latestPost?.map((post: any) => (
                <PostCard key={post.slug} size="large" post={post} />
              ))}
            </div>

            <div>
              <h2 className="font-bold my-4 uppercase">Featured</h2>
              {posts.featuredPosts?.map((post: any) => (
                <PostCard key={post.slug} size="medium" post={post} />
              ))}
            </div>
          </div>
          <div className="dividerLine"></div>
        </>
      )}

      {grid === gridLayers.medium && (
        <>
          <h2 className="font-bold my-4 uppercase">Business</h2>
          <div className="grid-medium">
            <div>
              {posts.businessPosts.firstBusinessPost?.map((post: any) => (
                <PostCard key={post.slug} size="large" post={post} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 overflow-hidden ">
              {posts.businessPosts.restBusinessPost?.map((post: any) => (
                <PostCard key={post.slug} size="small" post={post} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default memo(PostWrapper);
