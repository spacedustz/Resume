import React from "react";
import {ViewContainer} from "../styles/container/ViewContainer.ts";
import MarkdownComponent from "../MarkdownComponent.tsx";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm";
import {Intro} from "../styles/text/Intro.ts";

const Introduce: React.FC = () => {
    return (
        <div style={{all: 'initial'}}>
            <ViewContainer>
                <div style={{padding: "30px"}}>
                    <ReactMarkdown
                        components={MarkdownComponent}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        remarkPlugins={[gfm]}
                        children={Intro.content}
                    >
                    </ReactMarkdown>
                </div>
            </ViewContainer>
        </div>
    )
}

export default Introduce;