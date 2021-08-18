import { BrowserRouter, Route } from 'react-router-dom'
import Admin from './pages/admin'
import Student from './pages/student'
import DeveloperCreate from './pages/studentCreate'
import Students from './pages/students'
import StudentUpdate from './pages/studentUpdate'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Students} />
      <Route path="/detalhes/:id" component={Student} />
      <Route path="/novo" component={DeveloperCreate} />
      <Route path="/admin" component={Admin} />
      <Route path="/edit/:id" component={StudentUpdate} />
    </BrowserRouter>
  )
}

export default Routes