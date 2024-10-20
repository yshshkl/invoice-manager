import React, { ReactNode } from "react";
export interface IColumn<T> {
    header: string;
    accessor: keyof T;
    onRender?: () => ReactNode;
}
export interface ITableProps<T> {
    columns: IColumn<T>[];
    data: T[];
    showActions?: boolean;
    onEditClick?: (id: string) => void;
    onDeleteClick?: (id: string) => void;
}
declare const Table: <T>({ columns, data, showActions, onEditClick, onDeleteClick }: ITableProps<T>) => React.JSX.Element;
export default Table;
