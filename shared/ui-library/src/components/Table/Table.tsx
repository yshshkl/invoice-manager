import React, { ReactNode } from "react";

import styles from './Table.css'
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex } from "antd";

export interface IColumn<T> {
    header: string; // Display header for the column
    accessor: keyof T; // The key of the data to display in this column
    onRender?: () => ReactNode;
}

export interface ITableProps<T> {
    columns: IColumn<T>[]; // Array of column definitions
    data: T[]; // Array of data (rows)
    showActions?: boolean;
    onEditClick?: (id: string) => void
    onDeleteClick?: (id: string) => void
}

const Table = <T,>({ columns, data, showActions, onEditClick, onDeleteClick }: ITableProps<T>) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.header}>{column.header}</th>
                    ))}
                    {showActions && <th>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            column.onRender ? <td key={column.accessor as string}>{column.onRender()}</td> : <td key={column.accessor as string}>{row[column.accessor] as ReactNode}</td>
                        ))}
                        {showActions && <td><Flex gap={10}>{onEditClick && <EditOutlined onClick={() => onEditClick(row['id'])} />}{onDeleteClick && <DeleteOutlined onClick={() => onDeleteClick(row['id'])} />}</Flex></td>}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;