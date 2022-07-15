import { render } from '@testing-library/react';
import { ProductDetailPage } from './Index';

import { BrowserRouter as Router } from 'react-router-dom';

test('renders ProductDetailPage', () => {
    render(
        <Router>
            <ProductDetailPage />,
        </Router>,
    );
});