import './skill.css'
export default function Contact(){


    return (
        <>
            <div className="contact-main">
                <div className="contact-d">
                   <div>
                        <h1>Want to start a new project ?</h1>
                   </div>
                </div>
                <div className="r-contact">
                    <h2 className="mid-c">Contact me on</h2>
                    <div className="r-i-contact">
                        
                        <div>
                            <a href='' >
                                <img className="contact-img" src='../../public/instagram.jfif '/>
                                <p>Instagram</p>
                            </a>
                        </div>
                        <div>
                           <a href="" >
                                <img className="contact-img" src='../../public/linkedin.png '/>
                                <p>Linkedin</p>
                           </a>
                        </div>
                    </div>
                        <h2 className="mid-c">OR</h2>
                    <div className="r-u-p">
                        <img className="contact-img" src='../../public/phone.png'/>
                        <p >Phone: 9860465452</p>
                    </div>
                    
                        
                    <div className="r-u-p">
                        <img className="contact-img" src='../../public/gmail.jfif'></img>
                        <p >Gmail:khulimulirabin@gmail.com</p>
                    </div>

                </div>
            </div>
        </>
    )
}