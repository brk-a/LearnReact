import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Cryptocurrencies, CryptoDetails, Homepage, News, Exchanges } from './components'

import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
          <Navbar/>
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Homepage/>}></Route>
                <Route exact path='/exchanges' element={<Exchanges/>}></Route>
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}></Route>
                <Route exact path='/cryptocurrencies/:coinId' element={<CryptoDetails/>}></Route>
                <Route exact path='/news' element={<News/>}></Route>
              </Routes>
            </div>
          </Layout>


        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            NF Crypto <br/>
            Putting the <i>cry</i> in crypto since a long time ago <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to={`/`}>Home</Link>
            <Link to={`/exchanges`}>Exchanges</Link>
            <Link to={`/news`}>News</Link>
          </Space>
        </div>

        </div>
    </div>
  )
}

export default App