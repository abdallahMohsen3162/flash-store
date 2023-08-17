"use client";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Landing from './components/landing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCoffe,faHouse  } from '@fortawesome/free-solid-svg-icons';
import Book_list from './components/bookslist';
export default function Home() {
  return (
    <>
    <main>
      < Navbar />
      < Landing />
      < Book_list />
      

      
    </main>
    </>
  );
};

