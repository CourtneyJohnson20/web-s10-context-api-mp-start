import React, { useContext } from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'
import { TodoContext } from '../context/quotesContext'


export default function App() {
  
  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
      />
      <QuoteForm
      />
    </div>
  )
}
