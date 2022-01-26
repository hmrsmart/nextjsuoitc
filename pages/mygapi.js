// src/App.js
import { GoogleApiProvider } from 'react-gapi'
import { MyDriveComponent } from '../components/mydrivecomponent'
import { MyAuthComponent } from '../components/myauthcomponent'

export function MyGapi() {
  return (
    <GoogleApiProvider clientId={process.env.GOOGLE_ID}>
      // ...
      <MyAuthComponent/>
      // ...
      <MyDriveComponent/>
      // ...
    </GoogleApiProvider>
  )
}