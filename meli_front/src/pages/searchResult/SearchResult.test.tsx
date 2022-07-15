import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import { SearchComponent } from '../../components/search/SearchComponent';

test('Search Result Component', () => {
    render(
        <Router>
            <SearchComponent />,
        </Router>,
    );
});