import React from 'react'
import Hello from '../components/hello'
const Home = () => {
  console.log('What type of component is this?');

  return (
    <main>
        <div className="text-4xl underline">Welcome to Next.js!</div>
        <Hello />
    </main>
    
  )
}

export default Home