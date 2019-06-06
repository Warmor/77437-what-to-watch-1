import React from 'react';
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";


class PageMyList extends React.PureComponent {
  render() {
    return <>
      <div className="user-page">
        <Header headerTitle={`My list`} withAuth/>
        <div>My list</div>
        <Footer/>
      </div>
    </>;
  }
}

export default PageMyList;
