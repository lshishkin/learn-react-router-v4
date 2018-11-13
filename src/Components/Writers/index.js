import React,{Fragment} from 'react'
import {Link, Route} from "react-router-dom"
import Writer from './Writer'

export  default  ({match:{url},writers})=>
    <Fragment>
<ul>
    {writers.map(({id,name})=>
    <li key={id}>
        <Link to={`${url}/${id}`}>{name}</Link>
    </li>)}
</ul>
        <Route path={`${url}/:writweId`} render={()=><Writer/>} />
    </Fragment>