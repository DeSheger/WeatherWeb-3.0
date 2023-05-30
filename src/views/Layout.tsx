import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="layout">
            <div className="layout__main">
                {children}
            </div>
        </div>
    )
}

export default Layout