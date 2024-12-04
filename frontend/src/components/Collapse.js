import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function useToggleSection() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            
            <button onClick={toggleCollapse}>Afficher/Masquer</button>

            <Collapse in={isCollapsed}>
                <div>
                    <p>Test</p>
                </div>
            
            </Collapse>

        </div>
    );

}

export default useToggleSection;