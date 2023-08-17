import Image from "next/image";
import book_img from "../../styles/images/book.jpeg"
import {useState} from 'react';
const Book = () => {
    const [amount, setamount] = useState(0);
    return(
        <div className="card col-lg-3 col-md-4 col-sm-6">
            <Image 
            src={book_img}
            className="card-img-top" 
            alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="book-action">
                    <button onClick={()=>setamount(amount+1)}>+</button>
                    <button className="btn-book"> 
                    <span className='amount'>{amount}</span>
                    شراء
                    </button>
                    <button onClick={()=>setamount(Math.max(0, amount-1))}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Book;