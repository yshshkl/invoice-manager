import React, { ReactNode } from "react";
export interface IColumn<T> {
    header: string;
    accessor: keyof T;
    onRender?: () => ReactNode;
}
export interface ITableProps<T> {
    columns: IColumn<T>[];
    data: T[];
}
declare const Table: <T>({ columns, data }: ITableProps<T>) => React.JSX.Element;
export default Table;
