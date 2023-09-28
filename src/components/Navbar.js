import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

import "../Styles/styles.css"

const Navbar = () => {

    const navigate= useNavigate();
    const {cartData} = useSelector((store)=>store.CartReducer)

    return(
        <>
            <nav id = "navBar">
                <div className="menu">
                    <Link
                        to="/"
                        style={{
                            fontSize: '20px',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            color: "#000",
                            fontWeight:'550',
                        }}
                    >
                        TeeRex Store
                    </Link>
                    <div className='rightnav'>
                        <span className='Products'>
                            <Link className='linkp' to="/">Products</Link>
                        </span>
                        <i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"35px" , cursor:"pointer"}} 
                            onClick={() => { navigate("/cart") }}
                        >
                            <span id='cart_item_count'>{cartData.length?cartData.length:""}</span>
                        </i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;