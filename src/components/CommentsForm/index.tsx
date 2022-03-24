import { submitComment } from "../../utils/submitComment";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loading } from "../Loading";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

type CommentsFormData = {
  slug: string;
};

type FormValues = {
  name: string;
  email: string;
  comment: string;
};

export const CommentsForm = ({ slug }: CommentsFormData) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ mode: "onChange" });

  const sendComment: SubmitHandler<FormValues> = async (data, event) => {
    event?.preventDefault();

    try {
      await submitComment({ ...data, slug });
      toast.success("Comment send to review");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(sendComment)} className="pt-12">
      <h2 className="font-bold text-lg mb-2">Post a reply</h2>
      <div className="grid-default">
        <div className="">
          <textarea
            className="bg-gray-200 p-2 rounded-md w-full h-40"
            id="comment"
            placeholder="Comment"
            required
            {...register("comment", { required: "Please enter a comment" })}
          />
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment.message}</p>
          )}
        </div>

        <div className="flex flex-col justify-between flex-1 h-40 ">
          <input
            className="bg-gray-200 p-2 rounded-md"
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Required min 3 characteres",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <input
            className="bg-gray-200 p-2 rounded-md"
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          {isSubmitting ? (
            <Loading disabled>Send to review</Loading>
          ) : (
            <Button disabled={!isValid}>Post Reply</Button>
          )}
        </div>
      </div>
    </form>
  );
};
