import { render, screen,  } from '@testing-library/react';
import { NotFoundPage } from './Index';

import { BrowserRouter as Router } from 'react-router-dom';

test('renders Not Found Page', () => {
    render(
        <Router>
            <NotFoundPage />,
        </Router>,
    );
});

test('contains h1 with text "Parece que la página no existe"', () => {
    render(
        <Router>
            <NotFoundPage />,
        </Router>,
    );
    
    const h1 = screen.getByText('Parece que la página no existe');
    const h1Value = h1.textContent;

    expect(h1Value).toBe('Parece que la página no existe');

});

test('contains span with text "Ir a la pagina principal"', () => {
    render(
        <Router>
            <NotFoundPage />,
        </Router>,
    );
    
    const span = screen.getByText('Ir a la pagina principal');
    const spanValue = span.textContent;

    expect(spanValue).toBe('Ir a la pagina principal');

});
