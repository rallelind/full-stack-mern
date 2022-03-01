import React from 'react';
import Button from '../utils/Button';
import Van4 from "../../imgs/van4.png"
import Van5 from "../../imgs/van5.png"
import Vesterhavet2 from "../../imgs/vesterhavet2.png"
import Table from "react-bootstrap/Table"
import "../../pricing.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"



const Pricing = () => {

    return (
        <div>
        <Header />
        <div id="container">
            <div className="card">
                <img alt="van" src={Van4} className="IMG"/>
                <h2>Rent For A Day</h2>
                <Button 
                    text="Price"
                />
            </div>
            <div className="card">
                <img alt="van" src={Vesterhavet2} className="IMG"/>
                <h2>Rent For A Week</h2>
                <Button 
                    text="Price"
                />
            </div>
            <div className="card">
                <img alt="van" src={Van5} className="IMG"/>
                <h2>Rent For A Month</h2>
                <Button 
                    text="Price"
                />
            </div>
            <div className="center">
                <Table className="table" responsive="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Pricing
