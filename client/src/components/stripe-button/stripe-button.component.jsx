import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/logo/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MkmTYFXaIik9w9nvLo8JcS5h8GG2kexIE19WIeAQRpMliGrvINoJmKJ1fMFFK33HiqxH520Cxq5VdRbZbVxFVef00cV6waTjp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="King's Collection"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
