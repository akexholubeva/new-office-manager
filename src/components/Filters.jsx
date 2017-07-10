import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  state = {
    tags: [],
  };
  onAddressChanged = (event) => {
    const addresses = ['lermontova', 'abc', 'neman'];
    const newTags = [
      ...this.state.tags.filter((item => !addresses.includes(item))),
      event.target.value,
    ];
    this.setState({ tags: newTags }, () => {
      this.props.onFilterChange(newTags);
    });
  }
  onTimeChanged = (event) => {
    const time = ['before20', 'after20'];
    const newTags = [
      ...this.state.tags.filter((item => !time.includes(item))),
      event.target.value,
    ];
    this.setState({ tags: newTags }, () => {
      this.props.onFilterChange(newTags);
    });
  }
  render () {
    return (
      <div>
        <form className="radio">
          <p>Выберите Ваш офис</p>
          <p>
            <input name="office" type="radio" value="lermontova" onChange={this.onAddressChanged} id="address1" />
            <label htmlFor="address1" className="label">ул.Лермонтова 29</label>
            <input name="office" type="radio" value="abc" onChange={this.onAddressChanged} id="address2" />
            <label htmlFor="address2" className="label">ТЦ ABC</label>
            <input name="office" type="radio" value="neman" onChange={this.onAddressChanged} id="address3" />
            <label htmlFor="address3" className="label">ТД Неман</label>
          </p>
          <p>Выберите время</p>
          <p>
            <input name="time" type="radio" value="before20" onChange={this.onTimeChanged} id="time1" />
            <label htmlFor="time1" className="label">до 20:00</label>
            <input name="time" type="radio" value="after20" onChange={this.onTimeChanged} id="time2" />
            <label htmlFor="time2" className="label">после 20:00</label>
          </p>
        </form>
      </div>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
