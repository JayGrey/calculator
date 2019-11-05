import * as React from 'react';

interface DisplayProps {
    displayText: string;
}

export const Display = (props: DisplayProps) => {
    return (
        <p id="display" className="text-right text-light border border-primary rounded p-1 mt-2">{props.displayText}</p>
    );
};