import React from 'react'
import Header from './Header'
import Products from './Products';
class App extends React.Component{

    render(){
        return (
            <div className='main'>
                <Header></Header>
                <Products></Products>
            </div>
        )
    }
}
export default App;