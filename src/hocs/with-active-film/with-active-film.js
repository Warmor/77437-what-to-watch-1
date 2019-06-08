import React, {PureComponent} from 'react';

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
      };
      this.setActiveFilm = this.setActiveFilm.bind(this);
      this.removeActiveFilm = this.removeActiveFilm.bind(this);
    }

    setActiveFilm() {
      this.setState({
        isActive: true,
      });
    }

    removeActiveFilm() {
      this.setState({
        isActive: false,
      });
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.state.isActive}
        setActiveFilm={this.setActiveFilm}
        removeActiveFilm={this.removeActiveFilm}
      />;
    }
  }

  WithActiveFilm.propTypes = {};
  return WithActiveFilm;
};

export default withActiveFilm;
