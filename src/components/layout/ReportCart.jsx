import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCol>
      {/* <MDBCard style={{ width: "22rem" }}> */}
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
        </MDBCardBody>
      {/* </MDBCard> */}
    </MDBCol>
  )
}

export default CardExample;