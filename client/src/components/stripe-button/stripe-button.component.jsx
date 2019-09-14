import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_FpNKY51YiQDOj7hVUKl40EtJ00ru2RfTzy';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.',
        );
      });
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      ShippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
