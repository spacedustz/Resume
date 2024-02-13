import React from "react";
import {ViewContainer} from "../styles/container/ViewContainer.ts";
import ReactMarkdown from "react-markdown";
import MarkdownComponent from "../MarkdownComponent.tsx";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import gfm from "remark-gfm";
import {TechStack} from "../styles/text/TechStack.ts";

const TechStacks: React.FC = () => {
    return (
        <div style={{all: 'initial'}}>
            <ViewContainer>
                <div style={{padding: "30px"}}>
                    <ReactMarkdown
                        components={MarkdownComponent}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        remarkPlugins={[gfm]}
                        children={TechStack.content}
                    >
                    </ReactMarkdown>
                </div>
            </ViewContainer>
        </div>
    );
};

export default TechStacks;