import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Prism from "prismjs";

import { PostDetailsData } from "../../types";

export const PostContent = ({ post }: PostDetailsData) => {
  return (
    <div className="">
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
                loading="lazy"
                src={src}
                alt={altText}
                height={height}
                width={width}
                placeholder="blur"
                blurDataURL="/images/default.jpg"
                objectFit="cover"
              />
            </div>
          ),
        }}
      />
      <div className="dividerLine"></div>
    </div>
  );
};
