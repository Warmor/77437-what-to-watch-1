import React, {PureComponent} from 'react';

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeFilm: null,
      };
      this.timeOutList = {};
      this.setActiveFilm = this.setActiveFilm.bind(this);
      this.removeActiveFilm = this.removeActiveFilm.bind(this);
    }

    setActiveFilm(item) {
      this.timeOutList[item.id] = setTimeout(() => {
        this.setState({
          activeFilm: item,
        });
        clearTimeout(this.timeOutList[item.id]);
        delete this.timeOutList[item.id];
      }, 1000);
    }

    removeActiveFilm(item) {
      clearTimeout(this.timeOutList[item.id]);
      delete this.timeOutList[item.id];
      this.setState({
        activeFilm: null,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeFilm={this.state.activeFilm}
        setActiveFilm={this.setActiveFilm}
        removeActiveFilm={this.removeActiveFilm}
      />;
    }
  }

  WithActiveFilm.propTypes = {};
  return WithActiveFilm;
};

export default withActiveFilm;
