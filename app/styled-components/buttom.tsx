'use client'

import React, { Children, useState } from 'react'

import styled from 'styled-components'

export default function Buttom({children,}: { children: React.ReactNode}) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background-color: #fffffffb;
    border: none;
    font-size: 1em;
    padding: 1em 2em;
    
    &:hover {
        box-shadow: 0 0 9px black;
    }
    a {
        text-decoration: none;
        color: #000000;
        &:hover {
            transition: 0.3s;
            color: #4e4901;
        }
    }
    .icon{
        width: 3em;
        height: 3em;
    }

`