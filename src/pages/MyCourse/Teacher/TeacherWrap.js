import { Button } from '@mui/material'
import { Form } from 'formik'
import styled from 'styled-components'

export const TeacherWrapper = styled.div``

export const FormWrapper = styled(Form)`
  padding: 2rem;
  .form-control {
    padding: 1rem;
    #description-field {
      height: 150px !important;
      width: 100%;

      resize: none;
      &:focus {
        outline: 1px solid blue;
      }
    }

    #select-field {
      height: 3rem;
      min-width: 300px;
      padding: 0.5rem;
      border-radius: 5px;
      background: #fff;
      text-align: center;
    }
    .input-field {
      width: 100%;
    }
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BetterButton = styled(Button)`
  display: inline-block;
  padding: 10rem;
  font-size: 2rem;
  color: white;
`
export const ButtonWrapper = styled.div`
  min-height: 100px;
  background-color: pink;
`
