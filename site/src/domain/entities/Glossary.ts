import { InferType, shape, string } from "prop-types";

const glossary = shape({
    word: string.isRequired,
    description: string.isRequired,
    slug: string.isRequired,
    paragraphs: string.isRequired,
    letter: string.isRequired,
    createdAt: string.isRequired,
    updatedAt: string.isRequired,
    publishedAt: string.isRequired,
    createdBy: string.isRequired,
    updatedBy: string.isRequired,
}).isRequired;

export type Glossary = InferType<typeof glossary>;
