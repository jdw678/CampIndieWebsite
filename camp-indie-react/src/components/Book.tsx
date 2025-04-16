import React, { Children, Component, ReactElement } from 'react'

interface Props {
    chapters: ReactElement[]
}

export default function Book(props: Props) {

    
  return (
    <nav>
        <ul>
        {
            props.chapters.map((item: ReactElement) => (
                <li key={item.key}>{item.key}</li>
            ))
        }
        </ul>
    </nav>
  )
}
