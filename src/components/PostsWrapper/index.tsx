import { memo } from "react";
import { PostCard } from "../PostCard";

const PostWrapper = ({ posts, grid = "" }: any) => {
  return (
    <>
      {grid === "initial" && (
        <>
          <div className="grid-default">
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

      {grid === "business" && (
        <>
          <h2 className="font-bold my-4 uppercase">Business</h2>
          <div className="grid-default">
            <div>
              {posts.businessPosts.firstBusinessPost?.map((post: any) => (
                <PostCard key={post.slug} size="large" post={post} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              {posts.businessPosts.restBusinessPost?.map((post: any) => (
                <PostCard key={post.slug} size="small" post={post} />
              ))}
            </div>
          </div>
          <div className="dividerLine"></div>
        </>
      )}

      {grid === "technology" && (
        <>
          <h2 className="font-bold my-4 uppercase">Technology</h2>
          <div className="grid-default">
            <div className="flex gap-5 sm:flex-col md:flex-row">
              {posts.technologyPosts.twoTechnologyPost?.map((post: any) => (
                <PostCard key={post.slug} size="large" post={post} />
              ))}
            </div>
            <div className="">
              {posts.technologyPosts.restTechnologyPost?.map((post: any) => (
                <PostCard key={post.slug} size="medium" post={post} />
              ))}
            </div>
          </div>
          <div className="dividerLine"></div>
        </>
      )}

      {grid === "world" && (
        <>
          <h2 className="font-bold my-4 uppercase">World</h2>
          <div className="grid-small">
            {posts.postsDemoWorld?.map((post: any) => (
              <PostCard key={post.slug} size="small" post={post} />
            ))}
          </div>
          <div className="dividerLine"></div>
        </>
      )}

      {grid === "safety" && (
        <>
          <h2 className="font-bold my-4 uppercase">Safety</h2>
          <div className="grid-small">
            {posts.postsDemoSafety?.map((post: any) => (
              <PostCard key={post.slug} size="small" post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default memo(PostWrapper);
