import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classNames from './drawer.css'
import { Flex } from "antd";

interface CustomDrawerProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    showLoading?: boolean;
    variant?: 'm' | 'l';
}

const Drawer: React.FC<CustomDrawerProps> = ({
    visible,
    onClose,
    children,
    title,
    showLoading,
    variant
}) => {
    if (!visible) return null

    return ReactDOM.createPortal(
        <div className={classNames.drawer}>
            <div className={classNames.overlay}></div>
            <div className={`${classNames.content}`}>
                {showLoading && <Flex className={classNames.loader} vertical align="center"><LoadingOutlined spin /></Flex>}
                <div className={classNames.header}>
                    <h3>{title}</h3>
                    <button className={classNames.closeButton} onClick={onClose}>
                        <CloseOutlined />
                    </button>
                </div>
                <div className={classNames.body}>{children}</div>
            </div>
        </div>, document.body
    )
}

export default Drawer