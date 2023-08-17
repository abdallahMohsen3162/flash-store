import '@/styles/globals.css';

import {useEffect} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />


export default function App({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.js");
  }, [])
  return <Component {...pageProps} />
}
