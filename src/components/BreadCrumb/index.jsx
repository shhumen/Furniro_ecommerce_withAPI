import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { right_arrow } from 'assets/scripts'

const BreadCrumb = () => {
  const location = useLocation()

  const paths = location.pathname.split('/').filter((path) => path !== '')

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    ...paths.map((path, index) => {
      const pathTo = `/${paths.slice(0, index + 1).join('/')}`
      return { label: path, link: pathTo }
    }),
  ]

  return (
    <div className='breadcrumb'>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && (
            <span className='separator'>
              {' '}
              <img src={right_arrow} alt='' />{' '}
            </span>
          )}
          <Link className='home_s' to={breadcrumb.link}>
            {' '}
            {breadcrumb.label}{' '}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default BreadCrumb
