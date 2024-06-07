import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar/>




            <div class="container mt-5">
                <div class="row g-3">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div class="row">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                                <table class="table table-dark table-striped table-hover">

                                    <thead>
                                        <tr>
                                            
                                            <th scope="col">Title</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Publisher Year</th>
                                             
                                            <th scope="col">Price</th>
                                             
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                             
                                            <td>To Kill a Mockingbird</td>
                                            <td>Harper Lee</td>
                                             
                                            <td>1999</td>
                                            <td>$9.99</td>
                                             
                                        </tr>



                                        <tr>
                                             
                                            <td>1984</td>
                                            <td>George Orwell</td>
                                             
                                            <td>1984</td>
                                            <td>$9.99</td>
                                             
                                        </tr>








                                        <tr>
                                             
                                            <td>The Great Gatsby</td>
                                             
                                            <td>Scribner</td>
                                            <td>2003 </td>
                                            <td>$16.00</td>
                                             
                                        </tr>









                                        <tr>
                                             
                                            <td>The Catcher in the Rye</td>
                                             
                                            <td>Little, Brown and Company</td>
                                            <td>1888</td>
                                            <td>$8.99</td>
                                             
                                        </tr>









                                        <tr>
                                             
                                            <td>Pride and Prejudice</td>
                                            <td> Jane Austen</td>
                                            
                                            <td>1958</td>
                                            <td>$7.99</td>
                                            
                                        </tr>










                                        <tr>
                                           
                                            <td>To the Lighthouse</td>
                                            <td>Virginia Woolf</td>
                                            
                                            <td>1986 </td>
                                            <td>$16.99</td>
                                           
                                        </tr>










                                        <tr>
                                            
                                            <td>Moby-Dick</td>
                                            <td>Herman Melville</td>
                                          
                                            <td>1866</td>
                                            <td>$12.99</td>
                                             
                                        </tr>











                                        <tr>
                                             
                                            <td>The Lord of the Rings</td>
                                            <td> J.R.R. Tolkien</td>
                                             
                                            <td>1986</td>
                                            <td>$20.00</td>
                                             
                                        </tr>












                                        <tr>
                                             
                                            <td>Crime and Punishment</td>
                                            <td>Fyodor Dostoevsky</td>
                                             
                                            <td>1869</td>
                                            <td>$9.99</td>
                                             
                                        </tr>











                                        <tr>
                                             
                                            <td>The Picture of Dorian Gray</td>
                                            <td>Oscar Wilde</td>
                                             
                                            <td>1997 </td>
                                            <td>$4.00</td>
                                             
                                        </tr>












                                    </tbody>
                                </table>



                            </div>
                        </div>


                    </div>
                </div>





            </div>
        </div>
    )
}

export default ViewAll