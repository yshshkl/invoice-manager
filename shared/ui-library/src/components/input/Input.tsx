import { Input as AntdInput, InputProps as AntdInputProps } from "antd"
import React from "react"
import classes from './input.css'

const Input: React.FC<AntdInputProps> = ({ children, className, ...rest }) => {
    return <AntdInput className={`${classes.input} ${className}`} {...rest}>{children}</AntdInput>
}

export default Input