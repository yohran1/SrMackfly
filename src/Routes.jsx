import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Projeto from './components/pages/SrMackfly'
import PecaOnline from './components/pages/PecaOnline'
import Contato from './components/pages/Contato'
import Sobre from './components/pages/Sobre'

export default function SrMackfly(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projeto' element={<Projeto />} />
                <Route path='/pecaOnline' element={<PecaOnline />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}