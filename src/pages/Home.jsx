import React, {useEffect} from 'react'
import Product from '../Components/Product'
import Cart from '../Components/Cart'


const Home = () => {

    useEffect(()=>{
        document.title = 'Perfume || House'
    })
    return (
        <>
            <main className = 'container py-4'>
           
                <section className = 'row'>
                    <div className = 'col-lg-8'>
                        <Product/>
                    </div>
                    <div className = 'col-lg-4'>
                        <Cart/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
