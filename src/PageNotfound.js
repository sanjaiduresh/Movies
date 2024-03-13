import React from 'react'
import { Link } from "react-router-dom";

export default function PageNotfound() {
    return (
        <div className='page-not-found'>
            <h1>Page Not Found</h1>
            <h2><Link to="/portal/home"> Back to home Page</Link></h2>
            <img src="https://assets.materialup.com/uploads/c13818e8-9e42-4f4d-b657-38743a81b270/preview.gif" alt="" />

        </div>
    )
}
