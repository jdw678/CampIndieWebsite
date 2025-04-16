import React from 'react'
import Book from './Book'
import Prologue from './Books/Genesis/Prologue'
import '../css/bookshelf.css'

export default function BookShelf() {
  return (
    <div>
        <Book chapters={[
            <Prologue key="Prologue"/>
        ]}/>
    </div>
  )
}
