import { lazy } from 'react'
import { Home } from 'pages'
const Shop = lazy(() => import('pages/Shop'))
const Blog = lazy(() => import('pages/Blog'))
const Contact = lazy(() => import('pages/Contact'))
const Wishlist = lazy(() => import('pages/Wishlist'))
const Search = lazy(() => import('pages/Search'))
const ProductPage = lazy(() => import('pages/ProductPage'))
const Checkout = lazy(() => import('pages/Checkout'))
const Cart = lazy(() => import('pages/Cart'))
const NewProducts = lazy(() => import('pages/Home/NewProducts'))
const Auth = lazy(() => import('pages/auth'))
const ForgotPassword = lazy(() => import('pages/auth/ForgotPassword'))
const UserProfile = lazy(() => import('pages/UserProfile'))

export const RoutesArray = [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shop/:id',
    element: <ProductPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/newProducts',
    element: <NewProducts />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <Auth />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
]
