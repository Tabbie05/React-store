import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {FilterProvider} from './Components/FilterContext.jsx'
createRoot(document.getElementById('root')).render(
   <FilterProvider>
    <App />
   </FilterProvider>
    
)
