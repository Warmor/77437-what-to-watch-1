import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import MoviesList from "~/components/movies-list/movies-list";
import {getFavorite} from "~/reducer/favorite/selectors";

class PageMyList extends React.PureComponent {
  render() {
    return <>
      <div className="user-page">
        <Header headerTitle={`My list`} withAuth/>
        <MoviesList films={this.props.favorite}/>
        <Footer/>
      </div>
    </>;
  }
}

PageMyList.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favorite: getFavorite(state)
});

export {PageMyList};

export default connect(mapStateToProps)(PageMyList);
