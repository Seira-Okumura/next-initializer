import React from 'react';

import { MDBCard, MDBContainer, MDBCardTitle, MDBCardText } from 'mdbreact';

export default function Panel({
  title,
  children,
  className = '',
}) {
  return (
    <div className={className}>
      <MDBCard>
        {title && <MDBCardTitle>{title}</MDBCardTitle>}
        {children}
      </MDBCard>
    </div>
  );
}

Panel.Text = MDBCardText;
