import React from 'react'
import { EmailEditor } from '../email-editor/EmailEditor'
import { EmailList } from '../email-list/EmailList'

export const Home = () => {
  return (
    <div style={{
        display:'grid',
        gridTemplateColumns:"1fr .8fr",
        padding:"1rem"
    }}>
        <EmailEditor/>
        <EmailList/>
    </div>
  )
}
