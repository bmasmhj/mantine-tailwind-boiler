import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/tiptap/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
           <Router>
           <MantineProvider>
                <Notifications />
                <App />
            </MantineProvider>
           </Router>
    </React.StrictMode>,
)
