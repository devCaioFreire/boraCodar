import { Routes, Route } from 'react-router-dom'
import { SignInLayout } from '../layout/SignInLayout'
import { SignUpLayout } from '../layout/SignUpLayout'
import { Dashboard } from '../pages/Dashboard'
import { Recovery } from '../pages/Recovery'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { PrivateRoute } from './PrivateRoutes'

export function Router() {
    return (
        <Routes>

            <Route path='/' element={<SignInLayout />}>
                <Route path='/' element={<SignIn />} />
            </Route>

            <Route path='/' element={<SignUpLayout />}>
                <Route path='/register' element={<SignUp />} />
                <Route path='/recovery' element={<Recovery />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} >
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>

        </Routes >
    )
}