import React from 'react';
import ReactDOM from 'react-dom/client';
import '@unocss/reset/tailwind-compat.css';

import Base from './Base';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Base />
    </React.StrictMode>,
);
