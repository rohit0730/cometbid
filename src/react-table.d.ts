import { TableInstance, Row } from "react-table";

declare module "react-table" {
    export interface TableInstance<D extends object = {}> {
        canPreviousPage: boolean;
        canNextPage: boolean;
        page: Row<D>[];
        nextPage: () => void;
        previousPage: () => void;
    }
}
