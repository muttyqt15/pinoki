import React from 'react';
import { createRoot } from 'react-dom/client';
const Options = () => {
    return <div>Options Page</div>;
};

const container = document.getElementById('Options');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Options />);