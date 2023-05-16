import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>     
                {/* <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                        <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                </Route>            */}
                <Route path='/register' element={<Register />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/' element={<Landing />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
