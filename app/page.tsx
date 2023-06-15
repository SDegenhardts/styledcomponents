import Image from 'next/image'
import styles from './page.module.css'
import Buttom from './styled-components/buttom'
import Input from './styled-components/input'
import { BiListPlus } from 'react-icons/bi';
import { useState } from 'react';
// import List from './styled-components/list';


export default function Home() {
 
  const [textInput, setTextInput] = useState

  return (
    // <section>
    //   <List/>
    // </section>
    <section className='alinhar'>
      <Input/>
      <Buttom>
        <a><BiListPlus className='icon'/></a>
      </Buttom>
      
    </section>
  )
}
