import React, { Component } from 'react'

import EmployeeDetails from './details/employeeDetails'
import Employee from './employee/employee'


class Employees extends Component {

    state = {
        dataEmployee : [],
        showDetailsEmployee : false,
        selectedDetailEmployee : null
    }

    componentDidMount(){
        fetch( 'https://api.jsonbin.io/b/5c3658fc7b31f426f8547474' )
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            this.setState({
                dataEmployee : json
            });
});
    }
    

    handleClickCard = (index) => {
        let employeeSelected = {...this.state.dataEmployee[index]}

        this.setState({
            showDetailsEmployee : true,
            selectedDetailEmployee : employeeSelected
        })
    }


  render() {

    let employeeSelected = null

    if( this.state.showDetailsEmployee ){
         employeeSelected = (
             <EmployeeDetails
                 id = {this.state.selectedDetailEmployee.id}
                 foto = {this.state.selectedDetailEmployee.foto}
                 nome = {this.state.selectedDetailEmployee.nome}
                 cargo = {this.state.selectedDetailEmployee.cargo}
                 idade = {this.state.selectedDetailEmployee.idade}
             />
         )  
    }

    return (
      <div>
        { employeeSelected }

        <div className="employee-wrap">
            {
                this.state.dataEmployee.map((employee, index) => {
                    return (
                        <Employee
                            id = {employee.id}
                            foto = {employee.foto}
                            nome = {employee.nome}
                            cargo = {employee.cargo}
                            idade = {employee.idade}
                            clicked={
                                () => this.handleClickCard(index)
                            }
                        />
                    )
                })
            }
        </div>
      </div>
    )
  }
}

export default Employees;