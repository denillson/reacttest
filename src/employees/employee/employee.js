import React from 'react';

const employee = (props) => {
    return (
        
        <div class="col-md-4 card-employee" onClick={ props.clicked }>
            <div className="card card-hover text-center rounded-0 shadow">
              <div className="card-body">
                    <div className="avatar">
                    <span className="badge badge-pill badge-success avatar-badge">{props.id}</span>
                        <img className="rounded-circle avatar-img" alt="avatar" src={props.foto}/>
                    </div>
                    <div className="avatar-desc">
                    <h6><strong>{ props.nome }</strong></h6>
                    <h6>{ props.cargo }</h6>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default employee;