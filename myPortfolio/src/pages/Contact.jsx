import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, phone, message });
        // Reset form fields if needed
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };
    return (
        <div class="container text-left bg-secondary bg-gradient py-5">
            <div className="row align-items-start">
                <div className="col">
                    <h1 className="text-light">Contact Page</h1>
                    <p className="text-light">
                        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                    </p>
                </div>
                <div className="col">
                <div className="d-flex justify-content-center">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="icon-link mx-auto">
                            <i className="bi bi-chat-square-text text-primary" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <h3>Let's Get in Touch</h3>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="txtName"
                                        className="form-control"
                                        placeholder="Your Name *"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="txtEmail"
                                        className="form-control"
                                        placeholder="Your Email *"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="txtPhone"
                                        className="form-control"
                                        placeholder="Your Phone Number *"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <textarea
                                        name="txtMsg"
                                        className="form-control"
                                        placeholder="Your Message *"
                                        style={{ width: '100%', height: '150px' }}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    name="btnSubmit"
                                    className="btnContact btn btn-primary"
                                    value="Send Message"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}