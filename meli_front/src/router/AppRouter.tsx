
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from '../components/header/HeaderComponent';

import { HomePage } from "../pages/home/Index";
import { NotFoundPage } from '../pages/notFound/Index';
import { ProductDetailPage } from '../pages/productDetail/Index';
import { SearchResultPage } from '../pages/searchResult/Index';

export const AppRouter = () => {

    return (
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/items" element={<SearchResultPage />} />
                <Route path="/items/:id" element={<ProductDetailPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}
