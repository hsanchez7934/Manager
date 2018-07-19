import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {

  pickerRender() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return days.map(day =>
      <Picker
        key={day}
        value={day}
        label={day}
      />);
  }

    render() {
      const { name, phone, shift } = this.props;
      return (
          <View>
            <CardSection>
              <Input
                label="Name"
                placeholder="Jane"
                value={name}
                onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
              />
            </CardSection>

            <CardSection>
              <Input
                label="Phone"
                placeholder="303-333-3333"
                value={phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
              />
            </CardSection>


            <CardSection style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={styles.pickerTextStyle}>
                Select Shift
              </Text>
              <Picker
                selectedValue={shift}
                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                style={{ flex: 1 }}
              >
                {this.pickerRender()}
              </Picker>
            </CardSection>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
