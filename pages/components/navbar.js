import { useRef, useEffect, useState } from "react";
import { faBasketShopping, faHouse, faBook, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Navbar = () => {
    const [user, setuser] = useState(false);
    let ref = useRef(null);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 60){
                ref.current.classList.add("scroll-nav");
            }else{
                ref.current.classList.remove("scroll-nav");
            }
        })
    },[])
    return(
        <nav className="navbar navbar-expand-lg sticky-top" ref={ref}>
        <div className="container-fluid nav-container">
            <Link className="navbar-brand" href="#">فلاش <span className="title-store">ستور</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {
                (user)?(
                    <li className="nav-item">
                        <Link className="nav-link basket-container" href="#">
                        <FontAwesomeIcon icon={faUserPlus}  className="fa-class"/>إنشاء حساب
                        </Link>
                    </li>

                ):(
                    <li className="nav-item">
                        <Link className="nav-link basket-container" href="#">
                        <FontAwesomeIcon icon={faUser}  className="fa-class"/>اسم المستخدم
                        </Link>
                    </li>
                )
            }
            

            <li className="nav-item">
                <Link className="nav-link basket-container" href="#">
                    <span className="basket-value">0</span>
                <FontAwesomeIcon icon={faBasketShopping} className="fa-class"/>السلة</Link>
            </li>




                
            <li className="nav-item">
            <Link className="nav-link" href="#"><FontAwesomeIcon icon={faBook} className="fa-class"/> الكتب</Link>
            </li>


            <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="#">
                <FontAwesomeIcon icon={faHouse} className="fa-class" />الرئيسية
            </Link>
            </li>


            </ul>
            </div>
        </div>
</nav>
    )
}

export default Navbar;