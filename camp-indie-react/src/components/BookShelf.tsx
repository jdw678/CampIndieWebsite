import React, { useState } from 'react'
import Book from './Book'
import Prologue from './Books/Genesis/Prologue'
import '../css/bookshelf.css'

export default function Bookshelf() {

  return (
    <div className='bookshelf'>
        <Book title="Genesis" chapters={[
            <Prologue key="Prologue"/>
        ]}/>
    </div>
  )
}
