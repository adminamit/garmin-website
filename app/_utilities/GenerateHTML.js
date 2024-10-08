import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import Image from "next/image";
import Link from "next/link";

export const serialize = (children) =>
    children.map((node, i) => {
        if (Text.isText(node)) {
            let text = (
                <span
                    dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
                />
            );

            if (node.bold) {
                text = <strong key={i}>{text}</strong>;
            }
            if (node.break) {
                text = <br key={i} />;
            }

            if (node.code) {
                text = <code key={i}>{text}</code>;
            }

            if (node.italic) {
                text = <em key={i}>{text}</em>;
            }

            if (node.underline) {
                text = <u key={i}>{text}</u>;
            }

            if (node.text === "") {
                text = <br />;
            }

            return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
            return null;
        }

        switch (node.type) {
            case "h1":
                return <h1 key={i}>{serialize(node.children)}</h1>;
            case "h2":
                return <h2 key={i}>{serialize(node.children)}</h2>;
            case "h3":
                return <h3 key={i}>{serialize(node.children)}</h3>;
            case "h4":
                return <h4 key={i}>{serialize(node.children)}</h4>;
            case "h5":
                return <h5 key={i}>{serialize(node.children)}</h5>;
            case "h6":
                return <h6 key={i}>{serialize(node.children)}</h6>;
            case "blockquote":
                return (
                    <blockquote key={i}>{serialize(node.children)}</blockquote>
                );
            case "ul":
                return <ul key={i}>{serialize(node.children)}</ul>;
            case "ol":
                return <ol key={i}>{serialize(node.children)}</ol>;
            case "li":
                return <li key={i}>{serialize(node.children)}</li>;
            case "link":
                return (
                    <Link
                        href={escapeHTML(node.url)}
                        key={i}
                        target={node.newTab ? "_blank" : null}
                    >
                        {serialize(node.children)}
                    </Link>
                );
            case "upload":
                return (
                    <Image
                        key={i}
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${node.value.url}`}
                        width={0}
                        height={0}
                        unoptimized
                    />
                );
            default:
                return <p key={i}>{serialize(node.children)}</p>;
        }
    });
