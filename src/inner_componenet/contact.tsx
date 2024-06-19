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
                            <a href='https://www.instagram.com/rabin_kh12?igsh=OXI5aHJ0ZTFzNjNm&utm_source=qr' >
                                <img className="contact-img" src='/instagram.jfif '/>
                                <p>Instagram</p>
                            </a>
                        </div>
                        <div>
                           <a href="https://www.linkedin.com/in/rabin-khulimuli-271016167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" >
                                <img className="contact-img" src='/linkedin.png '/>
                                <p>Linkedin</p>
                           </a>
                        </div>
                    </div>
                        <h2 className="mid-c">OR</h2>
                    <div className="r-u-p">
                        <img className="contact-img" src='/phone.png'/>
                        <p >+977 9860465452</p>
                    </div>
                    <div>
                     <a className='gmail-logo' href="https://mail.google.com/mail/?view=cm&to=khulimulirabin@gmail.com&su=SUBJECT&body=BODY&bcc=">
                        <img  className="contact-img" src='/gmail.jfif'></img>
                        </a>
                    </div>
                        
                    

                </div>
            </div>
        </>
    )
}
