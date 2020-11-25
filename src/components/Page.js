import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Page({label, text}) {
    return(<>
                <Header />
                    <main>
                        <h1>{label}</h1>
                        <p>{text}</p>
                    </main> 
                <Footer />
            </>)
}

export default Page;