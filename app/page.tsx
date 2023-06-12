import Image from 'next/image'
import styles from './page.module.css'
import Buttom from './styled-components/buttom'
import Input from './styled-components/input'
import { BiListPlus } from 'react-icons/bi';


export default function Home() {
  return (
    <section className='alinhar'>
      <Input/>
      <Buttom>
        <a href="http://youtube.com"><BiListPlus className='icon'/></a>
      </Buttom>
    </section>
  )
}
