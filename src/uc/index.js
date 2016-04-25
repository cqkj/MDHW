import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './routes/Home';
import Reservation from './routes/Reservation';
import ReservationImfor from './routes/ReservationImfor';
import Addresses from './routes/Addresses';

// import Account from './routes/Account';
// import AccountHome from './routes/Account/partials/Home';
// // import Logo from './routes/Account/partials/Logo';
// import Edit from './routes/Account/partials/Edit';
// import AccountAddress from './routes/Account/partials/Address';
// import PetName from './routes/Account/partials/PetName';
// import Gender from './routes/Account/partials/Gender';
// import Email from './routes/Account/partials/Email';
// import RealName from './routes/Account/partials/RealName';
// import Signature from './routes/Account/partials/Signature';
// import BindAccount from './routes/Account/partials/BindAccount';
// import Phone from './routes/Account/partials/Phone';

import Rczp from './routes/Rczp';
import RczpNav from './routes/Rczp/partials/Nav';
import RczpResumePre from './routes/Rczp/partials/ResumePre';
import RczpComment from './routes/Rczp/partials/Comment';
import RczpPost from './routes/Rczp/partials/Post';
import RczpResume from './routes/Rczp/partials/Resume';

import Cysj from './routes/Cysj';
import CysjNav from './routes/Cysj/partials/Nav';
import CysjPublish from './routes/Cysj/partials/Publish';
import CysjPublished from './routes/Cysj/partials/Published';
import CysjCollection from './routes/CYSJ/partials/Collection';
import CysjDelivered from './routes/CYSJ/partials/Delivered';

import Srdz from './routes/Srdz';
import SrdzNav from './routes/Srdz/partials/Nav';
import SrdzBuyer from './routes/Srdz/partials/Buyer';
import SrdzSeller from './routes/Srdz/partials/Seller';
import SrdzFollow from './routes/Srdz/partials/Follow';

import Zb from './routes/Zb';
import ZbNav from './routes/Zb/partials/Nav';
import ZbPublish from './routes/Zb/partials/Publish';
import ZbPublished from './routes/Zb/partials/Published';
import ZbCollection from './routes/Zb/partials/Collection';

import Zc from './routes/Zc';
import ZcNav from './routes/Zc/partials/Nav';
import ZcOrder from './routes/Zc/partials/Order';
import ZcFollowed from './routes/Zc/partials/Follow';
import ZcSupport from './routes/Zc/partials/Support';

import App from './App';
import Test from './routes/Test';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {
        // <Route path="/account" component={Account}>
        //   <IndexRoute component={AccountHome} />
        //   <Route path="/account/edit" component={Edit} />
        //   {
        //     /*
        //     <Route path="/account/logo" component={Logo} />
        //     <Route path="/account/updatepw" component={UpdatePW} />
        //     <Route path="/account/address" component={AccountAddress} />
        //     <Route path="/account/petname" component={PetName} />
        //     <Route path="/account/gender" component={Gender} />
        //     <Route path="/account/email" component={Email} />
        //     <Route path="/account/realname" component={RealName} />
        //     <Route path="/account/signature" component={Signature} />
        //     <Route path="/account/bindaccount" component={BindAccount} />
        //     <Route path="/account/phone" component={Phone} />
        //     */
        //   }
        // </Route>
      }
      <Route path="/rczp" component={Rczp}>
        <IndexRoute component={RczpNav} />
        <Route path="/rczp/preview" component={RczpResumePre} />
        <Route path="/rczp/comment" component={RczpComment} />
        <Route path="/rczp/post" component={RczpPost} />
        <Route path="/rczp/resume" component={RczpResume} />
      </Route>
      <Route path="/cysj" component={Cysj}>
        <IndexRoute component={CysjNav} />
        <Route path="/cysj/publish" component={CysjPublish} />
        <Route path="/cysj/published" component={CysjPublished} />
        <Route path="/cysj/collection" component={CysjCollection} />
        <Route path="/cysj/delivered" component={CysjDelivered} />
      </Route>
      <Route path="/Srdz" component={Srdz}>
        <IndexRoute component={SrdzNav} />
        <Route path="/Srdz/buyer" component={SrdzBuyer} />
        <Route path="/Srdz/seller" component={SrdzSeller} />
        <Route path="/Srdz/follow" component={SrdzFollow} />
      </Route>
      <Route path="/zb" component={Zb}>
        <IndexRoute component={ZbNav} />
        <Route path="/zb/publish" component={ZbPublish} />
        <Route path="/zb/published" component={ZbPublished} />
        <Route path="/zb/collection" component={ZbCollection} />
      </Route>
      <Route path="/zc" component={Zc}>
        <IndexRoute component={ZcNav} />
        <Route path="/zc/follow" component={ZcFollowed} />
        <Route path="/zc/support" component={ZcSupport} />
        <Route path="/zc/order" component={ZcOrder} />
      </Route>
      <Route path="/address" component={Addresses} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/reservationImfor" component={ReservationImfor} />
      <Route path="/test" component={Test} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);
