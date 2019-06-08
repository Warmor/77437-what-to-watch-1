import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as OperationData} from "~/reducer/data/data";
import {getFavorite} from "~/reducer/favorite/selectors";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import MoviesList from "~/components/movies-list/movies-list";

class PageMyList extends React.PureComponent {
  componentDidMount() {
    this.props.loadFavorite();
  }
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
  loadFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favorite: getFavorite(state)
});
const mapDispatchToProps = (dispatch) => ({
  loadFavorite: () => dispatch(OperationData.loadFavorite())
});

export {PageMyList};

export default connect(mapStateToProps, mapDispatchToProps)(PageMyList);
