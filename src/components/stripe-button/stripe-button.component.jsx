import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey='pk_test_FpNKY51YiQDOj7hVUKl40EtJ00ru2RfTzy'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      lable='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      ShippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
     />
  )
}

export default StripeCheckoutButton;
