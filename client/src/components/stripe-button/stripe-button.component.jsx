import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import logo from "../../assets/logo/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MkmTYFXaIik9w9nvLo8JcS5h8GG2kexIE19WIeAQRpMliGrvINoJmKJ1fMFFK33HiqxH520Cxq5VdRbZbVxFVef00cV6waTjp";

  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: " + JSON.parse(error));
        alert(
          "There was a problem with your payment. Please make sure you used the provided credit card"
        );
      });
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
