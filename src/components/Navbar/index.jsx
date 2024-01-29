import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { removeFromCart, getTotals } from 'features/slices/cartSlice'
import {
  logo,
  account,
  heart_icon,
  search,
  cart_icon,
  close_cart,
  delete_x,
} from 'assets/scripts/index'
import { getUserById } from 'features/slices/authSlice'
import menuIcon from 'assets/images/menu-icon.svg'
import MobileNav from 'components/MobileNavbar'
const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const userID = localStorage.getItem('userId')
  const jwtToken = localStorage.getItem('token')
  const userName = useSelector((state) => state.user.userName)
  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishList.wishListItems)
  const [showModal, setShowModal] = useState(false)
  const notNavbar = ['/login', '/register', '/forgot_password']
  const [isModalOpen, setModalOpen] = useState(false)

  function handleButtonClick() {
    setModalOpen(!isModalOpen)
  }

  useEffect(() => {
    dispatch(getTotals())
    dispatch(getUserById(Number(userID)))
  }, [cart, dispatch, userID])

  const handleShowModal = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  if (notNavbar.includes(location?.pathname)) {
    return null
  }

  return (
    <div className='navbar container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <p>Furniro</p>
      </div>
      <div className={`navbar_list d-none d-md-flex`}>
        <ul>
          <li>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' activeclassname='active'>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' activeclassname='active'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeclassname='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='acc-fav-cart d-none d-md-flex'>
        {jwtToken ? (
          <Link to='userProfile'>
            <span>{userName}</span>
          </Link>
        ) : (
          <Link to='/auth'>
            <img src={account} alt='account' />
          </Link>
        )}
        <Link to='/search'>
          <img src={search} alt='search' />
        </Link>
        <Link to='/wishlist' style={{ position: 'relative' }}>
          <img src={heart_icon} alt='heart' />
          <span className='qty'>{wishlist.length}</span>
        </Link>
        <button
          onClick={handleShowModal}
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          <img src={cart_icon} alt='cart' />
          <div className='qty'>{cart.cartTotalQty}</div>
        </button>
      </div>
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='modal-title'>Shopping Cart</div>
              <img
                className='class="btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                src={close_cart}
                onClick={handleCloseModal}
                alt='close-cart'
              />
            </div>
            <div className='modal-body'>
              {cart?.cartItems?.length === 0 ? (
                <h4 className='text-center text-warning fw-semibold'>
                  {' '}
                  Cart is empty
                </h4>
              ) : (
                cart?.cartItems?.map((item) => {
                  return (
                    <div
                      className='modal-cart-product d-flex justify-content-between align-items-center'
                      key={item.id}
                    >
                      <div className='modal-cart-product-img'>
                        {/* <img src={img4} alt='cart-product-img' /> */}
                      </div>
                      <div className='modal-cart-product-details'>
                        <p>{item?.name}</p>
                        <span>{item?.cartQty}</span>
                        <span className='times'>&nbsp; X &nbsp;</span>
                        <span className='modal-cart-product-price'>
                          $ {item?.price}
                        </span>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className='modal-cart-product-remove-btn'
                      >
                        <img src={delete_x} alt='delete_x' />
                      </button>
                    </div>
                  )
                })
              )}
            </div>
            <div className='modal-footer'>
              <Link to='/cart'>
                <button>Cart</button>
              </Link>

              <Link to='/checkout'>
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='menu-icon d-flex d-md-none' onClick={handleButtonClick}>
        <img src={menuIcon} alt='Furniro' />
      </div>

      {isModalOpen && (
        <MobileNav setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
      )}
    </div>
  )
}

export default Navbar
