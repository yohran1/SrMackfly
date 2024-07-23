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
                <Route path='/srmackfly' element={<Projeto />} />
                <Route path='/srmackfly/pecaOnline' element={<PecaOnline />} />
                <Route path='/srmackfly/contato' element={<Contato />} />
                <Route path='/srmackfly/sobre' element={<Sobre />} />
                <Route path='/srmackfly/error' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}