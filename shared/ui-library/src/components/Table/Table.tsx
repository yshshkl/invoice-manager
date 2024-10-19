import React, { ReactNode } from "react";

import styles from './Table.css'

export interface IColumn<T> {
    header: string; // Display header for the column
    accessor: keyof T; // The key of the data to display in this column
}

export interface ITableProps<T> {
    columns: IColumn<T>[]; // Array of column definitions
    data: T[]; // Array of data (rows)
}

const Table = <T,>({ columns, data }: ITableProps<T>) => {
    console.log('classes - ', styles)
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
                            <td key={column.accessor as string}>{row[column.accessor] as ReactNode}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;