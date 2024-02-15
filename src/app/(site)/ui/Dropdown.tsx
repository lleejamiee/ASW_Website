import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import React, { useRef } from "react";

const TRANSITION = 150;

export interface DropdownProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
}

export const DropdownComponent: React.FC<DropdownProps> = ({
    className,
    children,
    isOpen,
}) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            className={className}
            in={isOpen}
            nodeRef={nodeRef}
            timeout={TRANSITION}
            unmountOnExit
        >
            <div className={classNames("Dropdown")}>{children}</div>
        </CSSTransition>
    );
};
