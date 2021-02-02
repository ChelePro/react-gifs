import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            

            <section>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                <span class="navbar">Buscador de Gifs</span>
                    
                </div>
            </nav>



            </section>

            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}
