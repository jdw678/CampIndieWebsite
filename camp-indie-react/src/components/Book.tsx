import React, { Children, Component, ReactElement, useState } from 'react'
import '../css/book.css'

interface Props {
    chapters: ReactElement[]
    title: String
}

export default function Book(props: Props) {


    
  return (
    <div className='book'>
      <h2 className='book-title'>{props.title}</h2>
      <div className="highlight"></div>
      <ul className='chapters-list'>
      {
          props.chapters.map((item: ReactElement) => (
            <>
              <li key={item.key} className='chapter'>
                <p>{item.key}</p>
                <div className="highlight highlight-secondary"></div>
              </li>
            </>
          ))
      }
      </ul>
    </div>
  )
}
