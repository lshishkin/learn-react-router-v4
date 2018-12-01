import React, {Fragment} from 'react'
import {Link, Route, Redirect} from "react-router-dom"
import Writer from './Writer'
import {NotFound} from '../Errors'

export default ({match: {url}, writers}) =>
    <Fragment>
        <ul>
            {writers.map(({id, name}) =>
                <li key={id}>
                    <Link to={`${url}/${id}`}>{name}</Link>
                </li>)}
        </ul>

        <Route path={url} render={() => <h1>Please select a writer from above</h1>}/>
        <Route path={`${url}/:writerId`} render={
            props => {
                console.log(props.match.url)
                const writer=writers.find(writer => writer.id === props.match.params.writerId)
                if(!writer){
                    return <NotFound/>
                }

                return <Writer {...props}   {...writer}/>
            }
        }
        />
    </Fragment>