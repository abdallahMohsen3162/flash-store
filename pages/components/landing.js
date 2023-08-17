import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faBook,faCheck } from "@fortawesome/free-solid-svg-icons";
const Landing = () => {
    return(
        <div className="landing">

            <div className="title-land">
                    <h1>فلاش <span className="store22">ستور</span></h1>

            </div>

            <br /><br /><br />

            <div className="container">

                <div className="row text-center g-5 intro-land">

                <div className="block col-lg-4 col-md-4 col-sm-12">
                    <span className="before">1</span>
                    <FontAwesomeIcon icon={faBook} />
                    <p className="intro-text">معنا</p>
                </div>
                    
               

                <div className="block col-lg-4 col-md-4 col-sm-12">
                    <span className="before">2</span>
                    < FontAwesomeIcon icon={faPen}/>
                    <p className="intro-text">طريق</p>
                    
                </div>

                
                <div className="block col-lg-4 col-md-4 col-sm-12">
                    <span className="before">3</span>
                    <FontAwesomeIcon icon={faCheck} />
                    <p className="intro-text"> النجاح</p>
                </div>
                

                </div>
            </div>
            
        </div>
    )
}
export default Landing;