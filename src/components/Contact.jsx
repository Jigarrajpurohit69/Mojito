import React from 'react'
import { socials } from '../../constants'

const Contact = () => {
    return (
        <footer id='contact' >
            <img src="/public/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'
            />
            <img src="/public/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

            <div className='content' >
                <h2>
                    Where to Find us 
                </h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, qwerert bvlt,#404,los anglaes ,ca 1234</p>
                </div>

                <div>
                    <h3>Contact us</h3>
                    <p>jigarrajpurohit82@gmail.com</p>
                </div>

                <div>
                    <h3>
                        Socials
                    </h3>
                    <div className="flex-center gap-5 " > 
                        {socials.map((social) => { 
                            <a 
                            key={social.name}
                            href={social.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={social.name}
                            >
                                <img src={social.icon}  />
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
