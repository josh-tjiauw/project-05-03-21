import React from 'react';
import HomeModal from '../components/modal';

export default function Home(props) {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">Hey</div>
        <div className="col-9">Hi</div>
      </div>
    </div>
    <HomeModal />
    </>
  );
}
