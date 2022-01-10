import {
  Alert,
  Button,
  CardActions,
  CardContent,
  Popover,
  Snackbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { courseRemover } from '../../services'
import {
  BetterCard,
  BetterTypography,
  ClickableCardMedia,
  DeleteConfirmationWrapper,
  StatusWrapper,
} from './CourseCardWrap'

import { isCourseDeleted } from '../../redux/slices/courseSlice'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CourseCard = ({ _id, title, description, category }) => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    loggedInUser: { role },
  } = useSelector((state) => state.user)

  let isError = Boolean(errorMessage)

  const isStudent = role === 'student' ? true : false
  const isTeacher = role === 'teacher' ? true : false

  const handleDelete = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDeleteConfirm = async () => {
    try {
      await courseRemover(_id)
      dispatch(isCourseDeleted())
      handleClose()
    } catch (error) {
      setErrorMessage('Could not perform delete! Something went wrong')
      handleClose()
    }
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    isError = false
  }
  return (
    <>
      {
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar>
      }
      <BetterCard sx={{ maxWidth: 345 }}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <BetterTypography>
            Are you sure you want to delete?
            <DeleteConfirmationWrapper>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleDeleteConfirm}>Yes</Button>
            </DeleteConfirmationWrapper>
          </BetterTypography>
        </Popover>

        <ClickableCardMedia
          component='img'
          height='140'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6DX9l8pRw9V60TYklqoSluT1xQKaJqRcGg&usqp=CAU'
          alt={title}
          onClick={() => push(`/course/${_id}`)}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography gutterBottom component='div'>
            {category.toUpperCase()}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description.substring(0, 49)}
          </Typography>
        </CardContent>
        {isTeacher && (
          <CardActions>
            <Button size='small'>Edit</Button>
            <Button size='small' onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        )}

        {isStudent && <StatusWrapper>enrolled</StatusWrapper>}
      </BetterCard>
    </>
  )
}

export default CourseCard
