import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd"
import React from "react"

const Button: React.FC<AntdButtonProps> = ({ children, ...rest }) => {
    return <AntdButton {...rest}>{children}</AntdButton>
}

export default Button