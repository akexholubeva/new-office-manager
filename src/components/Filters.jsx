import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  state = {
    tags: ['lermontova', 'abc', 'neman', 'before20', 'after20'],
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
        <form className="filters">
          <p>Выберите Ваш офис</p>
          <p>
            <label htmlFor="address1">
              <input name="office" type="radio" value="lermontova" onChange={this.onAddressChanged} id="address1" />ул.Лермонтова 29
            </label>
            <label htmlFor="address2">
              <input name="office" type="radio" value="abc" onChange={this.onAddressChanged} id="address2" />ТЦ ABC
            </label>
            <label htmlFor="address3">
              <input name="office" type="radio" value="neman" onChange={this.onAddressChanged} id="address3" />ТД Неман
            </label>
          </p>
          <p>Выберите время</p>
          <p>
            <label htmlFor="time1">
              <input name="time" type="radio" value="before20" onChange={this.onTimeChanged} id="time1" />до 20:00
            </label>
            <label htmlFor="time2">
              <input name="time" type="radio" value="after20" onChange={this.onTimeChanged} id="time2" />после 20:00
            </label>
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
