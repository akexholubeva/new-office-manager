import React, { Component } from 'react';

class Filters extends Component {
  render () {
    return (
      <form className="filters">
        <p>Выберите Ваш офис</p>
        <p><input name="office" type="radio" value="lermontova" onChange={this.handleChanged} />ул.Лермонтова 29
        <input name="office" type="radio" value="abc" onChange={this.handleChanged} />ТЦ ABC
        <input name="office" type="radio" value="neman" onChange={this.handleChanged} />ТД Неман</p>
        <p>Выберите Время</p>
        <p><input name="time" type="radio" value="before20:00" onChange={this.handleChanged} />до 20:00
        <input name="time" type="radio" value="after20:00" onChange={this.handleChanged} />после 20:00</p>
      </form>
    );
  }
}

export default Filters;
