import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const IssueBody = ({ issueBody }) => {
  return (
    <Content>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={issueBody}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return inline ? (
              <code
                style={{
                  background:
                    "linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )",
                  padding: "2px",
                  borderRadius: "3px",
                }}
                {...props}
              >
                {children}
              </code>
            ) : match ? (
              <SyntaxHighlighter
                style={nord}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children)
                  .replace(/\n$/, "")
                  .replace(/\n&nbsp;\n/g, "")
                  .replace(/\n&nbsp\n/g, "")}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                style={nord}
                language="textile"
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },
          blockquote({ node, children, ...props }) {
            return (
              <div
                style={{
                  background: "#f0f0f0",
                  padding: "1px 15px",
                  borderRadius: "10px",
                }}
                {...props}
              >
                {children}
              </div>
            );
          },
          img({ node, ...props }) {
            return (
              <img
                style={{ maxWidth: "50%", height: "auto" }}
                src={props.src.replace("../../../../public/", "/")}
                alt="MarkdownRenderer__Image"
              />
            );
          },
          em({ node, children, ...props }) {
            return (
              <span style={{ fontStyle: "italic" }} {...props}>
                {children}
              </span>
            );
          },
        }}
      >
        {issueBody
          .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
          .replace(/\*\*/gi, "@$_%!^")
          .replace(/@\$_%!\^/gi, "**")
          .replace(/<\/?u>/gi, "*")}
      </ReactMarkdown>
      <ReactMarkdown>{issueBody}</ReactMarkdown>
    </Content>
  );
};

export default IssueBody;

const Content = styled.div`
  margin-top: 40px;
  padding: 10px 10px;
  line-height: 1.4em;

  img {
    max-width: 100%;
  }

  code > span {
    color: #ccccff;
  }
`;
