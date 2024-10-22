import React, { ReactNode } from "react";
interface CustomDrawerProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    showLoading?: boolean;
    variant?: 'm' | 'l';
}
declare const Drawer: React.FC<CustomDrawerProps>;
export default Drawer;
