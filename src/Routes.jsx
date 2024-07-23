import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projeto from './components/pages/SrMackfly'
import PecaOnline from './components/pages/PecaOnline'
import Contato from './components/pages/Contato'
import Sobre from './components/pages/Sobre'
import NavBar from './components/NavBar'
import Error from './components/layout/Error'

export default function SrMackfly(){
    return(
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path='/SrMackfly' element={<Projeto />} />
                <Route path='/SrMackfly/pecaOnline' element={<PecaOnline />} />
                <Route path='/SrMackfly/contato' element={<Contato />} />
                <Route path='/SrMackfly/sobre' element={<Sobre />} />
                <Route path='/SrMackfly/error' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}