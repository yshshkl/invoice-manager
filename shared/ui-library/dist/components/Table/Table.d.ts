import React from "react";
export interface IColumn<T> {
    header: string;
    accessor: keyof T;
}
export interface ITableProps<T> {
    columns: IColumn<T>[];
    data: T[];
}
declare const Table: <T>({ columns, data }: ITableProps<T>) => React.JSX.Element;
export default Table;
