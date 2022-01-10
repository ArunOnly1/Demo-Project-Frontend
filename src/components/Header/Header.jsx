import React from 'react'
import { useSelector } from 'react-redux'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'

import { HeaderWrapper } from './Header-Wrap'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const Header = () => {
  const {
    loggedInUser: { name },
  } = useSelector((state) => state.user)

  // const userName = nameCapitalizer(name)
  return (
    <HeaderWrapper>
      <h1 className='title'>
        <Link to='/home' className='link'>
          Super Tutor
        </Link>
      </h1>
      <ul>
        {/* <li>Home</li> */}
        <li>
          <Link to='/market' className='link'>
            Market Place
          </Link>
        </li>
        <li>
          <Link to='/mycourses' className='link'>
            My Courses
          </Link>
        </li>
        <li>userName</li>
        <li>
          <Button>
            <ArrowDropDownCircleOutlinedIcon />
          </Button>
        </li>
      </ul>
    </HeaderWrapper>
  )
}

export default Header
