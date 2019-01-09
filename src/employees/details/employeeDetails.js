import React from 'react';

const employee = (props) => {
    return (
        <div className="employeeDetails col-md-12 card-employee" onClick={ props.clicked}>
            <div className="card shadow rounded-0">
                <div className="card-body ">
                <div className="avatar">
                    <img className="rounded-circle avatar-img" alt="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                </div>
                   <div className="avatar-header-desc">
                        <h6 className="title-desc-name">NOME: <strong className="str-desc">{props.nome}</strong> </h6>
                        <h6 className="title-desc-name">CARGO: <strong className="str-desc">{props.cargo} </strong></h6>
                        <h6 className="title-desc-name">IDADE: <strong className="str-desc">{props.idade} </strong></h6>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default employee
