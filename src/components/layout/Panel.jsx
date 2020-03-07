import React from 'react';

import { MDBCard, MDBContainer, MDBCardTitle, MDBCardText } from 'mdbreact';

export default function Panel({
  title,
  children,
}) {
  return (
    <MDBContainer>
      <MDBCard>
      {title && <MDBCardTitle>{title}</MDBCardTitle>}
      {children}
      </MDBCard>
      <style jsx>{`
        
      `}</style>
    </MDBContainer>
  );
}

Panel.Text = MDBCardText;
