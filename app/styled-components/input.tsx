'use client'

import React, { Children, useState } from 'react';
import styled from 'styled-components';

export default function Input() {

    const [textInput, setTextInput] = useState

    return(
        <Myinput onInput={(e) => {setTextInput}} placeholder='Nova Tarefa'/>
    )
}


const Myinput = styled.input`
background-color: #fffffffb;
border: none;
font-size: 1em;
padding: 1em 2em;
width: 60em;
height: 3,2em;

&:hover {
    box-shadow: 0 0 9px;
}

`