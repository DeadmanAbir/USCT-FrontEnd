import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {

    "process.env.VITE_APP_FIREBASE_API_KEY" : JSON.stringify(process.env.VITE_APP_FIREBASE_API_KEY),
    
    "process.env.VITE_APP_AUTH_DOMAIN":JSON.stringify(process.env.VITE_APP_AUTH_DOMAIN),
    
    "process.env.VITE_APP_PROJECT_ID":JSON.stringify(process.env.VITE_APP_PROJECT_ID),
    "process.env.VITE_APP_STORAGE_BUCKET":JSON.stringify(process.env.VITE_APP_STORAGE_BUCKET),
    "process.env.VITE_APP_MESSAGING_ID":JSON.stringify(process.env.VITE_APP_MESSAGING_ID),
    "process.env.VITE_APP_APP_ID":JSON.stringify(process.env.VITE_APP_APP_ID),
    "process.env.VITE_APP_BACKEND_URL" : JSON.stringify(process.env.VITE_APP_BACKEND_URL)
    
    }
})
