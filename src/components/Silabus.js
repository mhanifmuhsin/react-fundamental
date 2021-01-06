import React from 'react'
import './Silabus.css'

/**
 * Silabus.js merupakan Component yang menangani konten Silabus
 */
const Silabus = ()=>{
    return(
        <div >
            <div className='slb-header'>
            <h1>Materi Pembelajaran</h1>
            </div>
            <div className='slb-body'>
            <h2>Dasar</h2>
            <ul>
                <li>Create React App</li>
                <li>Functional Component</li>
                <li>Class Component</li>
                <li>Props dan State</li>
                <li>useState dan useEffect</li>
                <li>setState dan Component Lifecycle Method</li>
                <li>Conditional Rendering</li>
                <li>List dan Keys</li>
                <li>Membuat Form</li>
            </ul>
            <h2>Tingkat Mahir</h2>
            <ul>
                <li>Context</li>
                <li>High Order Component</li>
                <li>Render Props</li>
                <li>Refs</li>
                <li>Error Boundaries</li>
                <li>Portals</li>
                <li>HTTP Request</li>
                <li>Hooks</li>
            </ul>
            <h2>Ecosytem</h2>
            <ul>
                <li>State Management</li>
                <li>Routing</li>
                <li>Styling</li>
                <li>Forms</li>
                <li>Testing</li>
                <li>Misc</li>
                <li>Next Step</li>
            </ul>
            </div>
        </div>
    )
}

export default Silabus