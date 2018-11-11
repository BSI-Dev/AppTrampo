import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import AppRegistry from 'react-native';

class DatePickerComponent extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return(
      <DatePicker
        style={styles.datePicker}
        
        mode="date"
        placeholder="Data de Nascimento"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
        dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
        },
        dateInput: {
            marginLeft: 36
        }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}

export default DatePickerComponent;