import React, { Component } from 'react'
import './Search.styles.scss'

import SearchBox from '../../components/search-box/searchBox.component';
import CardsContainer from '../../components/cardsContainer/cardsContainer.component';

export class SearchPage extends Component {

 
    render() {
        const { mutualFundsList, getSearchInput, bringInForComparision, removeFromComparision } = this.props;
        
        return (
            <div className='search-page'>
                <SearchBox onSubmitSearch={getSearchInput}/>
                <CardsContainer 
                    list = {mutualFundsList} 
                    bringInForComparision={bringInForComparision}
                    removeFromComparision={removeFromComparision}/>
            </div>
        )
    }
}

export default SearchPage
