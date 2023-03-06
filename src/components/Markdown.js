import React from "react";
import { marked } from "marked";

const Markdown = ({ text }) => {
    const html = marked(text);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
