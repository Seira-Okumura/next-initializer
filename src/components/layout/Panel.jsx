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
      <style global jsx>{`
        .card {
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

Panel.Text = MDBCardText;
