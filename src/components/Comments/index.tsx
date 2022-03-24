import Image from "next/image";
import Moment from "react-moment";

type CommentsData = {
  comments: {
    name: string;
    comment: string;
    createdAt: string;
  }[];
};

const Comments = ({ comments }: CommentsData) => {
  console.log(comments)
  return (
    <div className="sm:max-w-2xl sm:mx-auto sm:px-4">
      <h3 className="font-bold text-lg mb-2 mt-8">Comments</h3>
      <div
        className="bg-gray-200 shadow-md overflow-y-auto rounded-lg
      flex flex-col items-center space-y-6 p-4 max-h-96
      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {comments.map((comment, i) => (
          <div
            key={i}
            className="bg-white rounded-lg 
          shadow-md max-w-lg w-full relative p-4 flex flex-wrap 
           sm:space-x-4 space-x-2 space-y-1 sm:space-y-0"
          >
            <div className="relative h-10 w-10 ">
              <Image
                src="/images/user-default.png"
                alt="user photo"
                layout="fill"
                objectFit="cover"
                className="rounded-full flex-shrink-0"
              />
            </div>

            <div className="flex flex-col space-y-1 max-w-xs sm:max-w-sm">
              <h4 className="text-gray-900">{comment.name}</h4>
              <Moment className="text-sm text-gray-500" fromNow>
                {comment.createdAt}
              </Moment>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
