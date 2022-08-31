import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function header() {
    return (
                <div className='Header'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"className='Header_logo'>
                    </img>
                    <   div className='Header_search'>
                    <input className='Header_searchInput' type="text"/>
                    <SearchIcon className='Header_searchIcon'/>
                    </div>
                    <div className='Headernav'>
                        <div className='Header_option'>
                            <span className="Header_optionLineone">
                            Hello Guest
                            </span>
                            <span className="Header_optionLinetwo">
                            Sign IN
                         </span>
                            </div>
                            </div>
                         <div className='Header_option'>
                                <span className="Header_optionLineone">
                             Return 
                                </span>
                                <   span className="Header_optionLinetwo">
                                & Order
                                </span>
                            </div>
                            <div className='Header_option'>
                                <span className="Header_optionLineone">
                                 Your
                                </span>
                                <span className="Header_optionLinetwo">
                                Prime
                                </span>
                                </div>
                                <div className='Header_optionBasket'>
                                   <ShoppingCartIcon />
                                    <span className="Header_optionBasketcount">0</span>
                                </div>

                        </div>
            
             )
}
