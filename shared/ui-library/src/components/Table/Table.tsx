import React, { ReactNode } from "react";

import styles from './Table.css'
import { DeleteOutlined } from "@ant-design/icons";

export interface IColumn<T> {
    header: string; // Display header for the column
    accessor: keyof T; // The key of the data to display in this column
    onRender?: () => ReactNode;
}

export interface ITableProps<T> {
    columns: IColumn<T>[]; // Array of column definitions
    data: T[]; // Array of data (rows)
}

const Table = <T,>({ columns, data }: ITableProps<T>) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.header}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            column.onRender ? <td key={column.accessor as string}>{column.onRender()}</td> : <td key={column.accessor as string}>{row[column.accessor] as ReactNode}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;