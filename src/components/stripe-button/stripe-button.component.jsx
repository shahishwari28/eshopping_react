import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IyaqrSDFAdLpOLhiZbUmRQuzmxOBWfQBne0rt8nrO7c3kKfhwsyWxtbgVqOdcKlZR163BZg3PocZxhLyJldjDXl00Vvb9riR0';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
        label = 'Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        ></StripeCheckout>
    );
};

export default StripeCheckoutButton;