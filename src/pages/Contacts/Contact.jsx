

const Contact = () => {
    return (
      <section className="contact" data-page="contact">
  
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
  
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.770464306792!2d90.36453464969917!3d23.802854858150862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713945849026!5m2!1sen!2sbd" 
              width="400" height="300" loading="lazy" title="Google Map"></iframe>
          </figure>
        </section>
  
        <section className="contact-form">
  
          <h3 className="h3 form-title">Contact Form</h3>
  
          <form action="#" className="form" data-form>
  
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
  
              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>
  
            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
  
            <button className="form-btn" type="submit" data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
  
          </form>
  
        </section>
  
      </section>
    );
  };
  
  export default Contact;
  