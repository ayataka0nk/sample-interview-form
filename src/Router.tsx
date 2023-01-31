import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { InterviewPage } from './pages/Interview'
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InterviewPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
