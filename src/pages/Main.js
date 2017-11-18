import React from 'react'
import localStorage from 'localStorage'

const Main = () => (
<h2 className='ui center aligned icon header'>
    <i className='circular teal users icon' />
    Welcome again, {localStorage.getItem('username')}
</h2>
)

export default Main
