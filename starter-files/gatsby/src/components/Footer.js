import React from 'react';

export default function Footer() {
  return (
    <p style={{ textAlign: 'center' }}>
      &copy; Slick's Slices {new Date().getFullYear()}
    </p>
  );
}
