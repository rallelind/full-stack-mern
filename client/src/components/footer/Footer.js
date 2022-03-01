import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


 

const Footer = () => {
    const companyInfo = [
        {id: 1, companyInfo: "About Us", productInfo: "How does it work?"}, 
        {id: 2, companyInfo: "Our offerings", productInfo: "Work from everywhere"},
        {id: 3, companyInfo: "Blog", productInfo: "Where do i park the van?"},
        {id: 4, companyInfo: "Careers"},
        {id: 5, companyInfo: "Newsroom"},
    ]
    

    return (
        <footer className="footer">
            <div className="footerEle">
            <h3>Vanli</h3>
            <br/>
            <table>
                <tbody>
                <tr>
                    <th>Company</th>
                    <th>Product</th>
                </tr>
                {companyInfo.map((ele, i) =>
                <tr key={i}>
                    <td>{ele.companyInfo}</td>
                    <td>{ele.productInfo}</td>
                </tr>
                )}   
                </tbody>
            </table>
            <br/>
                    <div>
                        <FaTwitter className="icons"/>
                        <FaFacebook className="icons"/>
                        <FaYoutube className="icons"/>
                        <FaInstagram className="icons"/>
                    </div>
                </div>
            <p id="copyright">© 2022 Vanli All rights reserved.</p>
        </footer>
    )
}

export default Footer
