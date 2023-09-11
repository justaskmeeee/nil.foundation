import { InferType, number, shape, string } from "prop-types";

const meta = shape({
    page: number.isRequired,
    pageCount: number,
    total: number,
    totalPages: number,
}).isRequired;

export type Meta = InferType<typeof meta>;
