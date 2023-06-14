'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Buttom from './buttom'
import Input from './input'
import { BiListPlus } from 'react-icons/bi';
import React, {useState} from 'react'

export default function List(props){
    const [input, setInput] = useState("")

    const handleChange = e => {
        setInput (e.target.value)
    }

    const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })

    setInput('');

};
    return(
        <section className='alinhar' onSubmit={handleSubmit}>
        <Input
        value={input}
        onChange={handleChange}
        />
        <Buttom>
          <a><BiListPlus className='icon'/></a>
        </Buttom>
      </section>
    )
}