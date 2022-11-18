import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation updateCourse($updateCourseId: ID!, $evsrOwned: Boolean, $evsrCart: Boolean, $h2POwned: Boolean, $h2PCart: Boolean, $how2Owned: Boolean, $how2Cart: Boolean, $wdbOwned: Boolean, $wdbCart: Boolean, $jsbOwned: Boolean, $jsbCart: Boolean, $js10Owned: Boolean, $js10Cart: Boolean, $hcfullOwned: Boolean, $hcfullCart: Boolean, $hc30Owned: Boolean, $hc30Cart: Boolean, $hcbOwned: Boolean, $hcbCart: Boolean, $pfullOwned: Boolean, $pfullCart: Boolean, $p30Owned: Boolean, $p30Cart: Boolean, $mdbbOwned: Boolean, $mdbbCart: Boolean, $efullOwned: Boolean, $efullCart: Boolean, $r60Owned: Boolean, $r60Cart: Boolean, $nfullOwned: Boolean, $nfullCart: Boolean) {
    updateCourse(id: $updateCourseId, evsrOwned: $evsrOwned, evsrCart: $evsrCart, h2pOwned: $h2POwned, h2pCart: $h2PCart, how2Owned: $how2Owned, how2Cart: $how2Cart, wdbOwned: $wdbOwned, wdbCart: $wdbCart, jsbOwned: $jsbOwned, jsbCart: $jsbCart, js10Owned: $js10Owned, js10Cart: $js10Cart, hcfullOwned: $hcfullOwned, hcfullCart: $hcfullCart, hc30Owned: $hc30Owned, hc30Cart: $hc30Cart, hcbOwned: $hcbOwned, hcbCart: $hcbCart, pfullOwned: $pfullOwned, pfullCart: $pfullCart, p30Owned: $p30Owned, p30Cart: $p30Cart, mdbbOwned: $mdbbOwned, mdbbCart: $mdbbCart, efullOwned: $efullOwned, efullCart: $efullCart, r60Owned: $r60Owned, r60Cart: $r60Cart, nfullOwned: $nfullOwned, nfullCart: $nfullCart) {
      _id
      username
      email
      password
      evsrCart
      evsrOwned
      h2pCart
      h2pOwned
      how2Cart
      how2Owned
      wdbCart
      wdbOwned
      jsbCart
      jsbOwned
      js10Cart
      js10Owned
      hcfullCart
      hcfullOwned
      hc30Cart
      hc30Owned
      hcbCart
      hcbOwned
      pfullCart
      pfullOwned
      p30Cart
      p30Owned
      mdbbCart
      mdbbOwned
      efullCart
      efullOwned
      r60Cart
      r60Owned
      nfullCart
      nfullOwned
    }
  }
`;