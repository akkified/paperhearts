import React from 'react'
import { doSocialLogin } from "@/app/actions"

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button 
            className='btn btn-dash pb-0.5 pl-1 pr-1'
            type="submit" name='action' value="google">
            Sign In
        </button>
    </form>
  )
}

export default LoginForm
