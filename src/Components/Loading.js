import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRocket} from "@fortawesome/free-solid-svg-icons"

import React from 'react'

export default function Loading() {
  return (
    <div>
        <FontAwesomeIcon className="loading" style={{width:"20vh",color:"white"}} icon={faRocket} />
    </div>
  )
}
