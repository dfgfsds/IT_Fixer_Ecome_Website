export default function ContactMapSection() {
    return (
        <div className="gt-map-section fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="gt-map-items">
                            <div className="googpemap">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4671.60101581816!2d80.20644067577216!3d13.029560213603451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679d6ab3d5df%3A0x839987fa009cec26!2sIT%20Fixer!5e1!3m2!1sen!2sin!4v1792403650272!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}