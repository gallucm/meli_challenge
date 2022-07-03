
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from "../pages/home/Index";
import { NotFoundPage } from '../pages/notFound/Index';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    )
}
