import '../CSS/Footer.css'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='flex  gap-24'>
                    <div className="links">
                        <h1>Links</h1>
                        <ul>
                            <li>PSDtuts-Photoshop tutorials</li>
                            <li>NETtuts-Web development and design tutorials</li>
                            <li>Vectortuts-Illustrator and Vector tutorials</li>
                            <li>Flashtuts-Adobe Flash tutorials</li>
                        </ul>
                    </div>
                    <div className="follow-up">
                        <h1>Follow our Updates</h1>
                        <ul>
                            <li>Subscribe to RSS Feed</li>
                            <li>What is RSS?</li>
                            <li>Email Updates</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright mb-16">
                    <p className='flex gap-2'>Copyright<FaRegCopyright className='mt-1' />2000</p>
                    <p>All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer