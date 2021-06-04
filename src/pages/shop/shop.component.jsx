import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match})=>{
 console.log(match);
 return(
 <div className='shop-page'>
            <Route exact path = {`${match.path}`} component={CollectionsOverview} />
            <Route path = {`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
        )
};

export default ShopPage;