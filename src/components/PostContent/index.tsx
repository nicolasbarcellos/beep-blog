import { PostDetailsData } from "../../types/postData";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { useEffect } from "react";

export const PostContent = ({ post }: PostDetailsData) => {
  return (
    <div className="container">
      <RichText
        content={post.content.raw}
        renderers={{
          p: ({ children }) => (
            <p className="text-gray-500 mb-8 text-lg">{children}</p>
          ),
          h2: ({ children }) => (
            <h2 className="font-bold text-2xl mb-4">{children}</h2>
          ),
          bold: ({ children }) => (
            <strong className="font-bold text-[color:var(--blue)]">
              {children}
            </strong>
          ),
          a: ({ children, openInNewTab, href, rel, ...rest }) => (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
              href={href}
              rel={rel || "noopener noreferrer"}
              target={openInNewTab ? "_blank" : "_self"}
              {...rest}
              className="font-semibold text-[color:var(--blue)] cursor-pointer"
            >
              {children}
            </a>
          ),
          img: ({ src = "/images/default.jpg", altText, height, width }) => (
            <div className="flex items-center justify-center my-10">
              <Image
                src={src}
                alt={altText}
                height={height}
                width={width}
                objectFit="cover"
              />
            </div>
          ),
          code_block: ({ children }) => {
            return (
              <pre
                className="line-numbers rounded-md shadow-md 
              !my-6"
              >
                <code className="language-js">{children}</code>
              </pre>
            );
          },
        }}
      />
      <div className="dividerLine"></div>
    </div>
  );
};
