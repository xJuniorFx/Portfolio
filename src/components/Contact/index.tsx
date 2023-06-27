import styles from './Contact.module.scss'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import { useState, useEffect} from 'react';
import emailjs from '@emailjs/browser'
import classNames from 'classnames';

const Contact = () =>{

    const formInitialsDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const initialStatus ={
        success: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialsDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState(initialStatus);
    const [showMessage, setShowMessage] = useState(false);


    const onFormUpdate = (category: string, value: string) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    /*
    template_1dhcvv4
    service_89fjnr5
    0XQxzgMxCTTqO6Jrb
    */

    const handleSubmit = (event:any)=> {
        event.preventDefault();
        setButtonText('Sending...')

        emailjs.send(
            'service_89fjnr5', 'template_1dhcvv4',
            {
                from_name: formDetails.firstName + formDetails.lastName,
                to_name: 'Junior F',
                from_email: formDetails.email,
                to_email: 'juniorfernandessilva1@gmail.com',
                from_phone: formDetails.phone,
                message: formDetails.message,
            },
            '0XQxzgMxCTTqO6Jrb'
            )
            .then(()=>{
                setButtonText('send')
                setStatus({ success: true.toString(), message: 'Message sent successfully'});
                setFormDetails(formInitialsDetails)
                setShowMessage(true);
            }, (error)=>{
                setButtonText('send')
                console.log(error);
                setStatus({ success: false.toString(), message: 'Something went wrong, please try again later.'});
                setShowMessage(true);
            })
    }

    useEffect(() => {
        if (showMessage) {
          const timeout = setTimeout(() => {
            setShowMessage(false);
          }, 3000);
    
          return () => clearTimeout(timeout);
        }
      }, [showMessage]);

    return(
        <section className={styles.contact} id='contact'>
            
                <div className={styles.row}>
                    <div className={styles.contact_info}>
                        <h1 className={styles.subTitle}>Contact <span>Me</span></h1>
                        <p>juniorfernandessilva1@gmail.com</p>
                        <p>(48) 98847-5105</p>
                        <div className={styles.socialNetwork}>
                        <a href='https://github.com/xJuniorFx' target="_blank"><img className={styles.network} src={github}></img></a>
                        <a href='https://www.linkedin.com/in/juniorfs/' target="_blank"><img className={styles.network} src={linkedin} ></img></a>
                        </div>
                    </div>
                    <div className={styles.form_field}>
                        <h2 className={styles.subTitle}>Get in <span>Touch</span></h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form_complements}>
                                <div>
                                    <input 
                                        type='text' 
                                        value={formDetails.firstName} 
                                        placeholder='First Name'
                                        pattern="[A-Za-z]+"
                                        minLength={3}
                                        maxLength={15}
                                        onChange={(e)=> onFormUpdate('firstName', e.target.value)}
                                        required 
                                    />
                                </div>
                                <div >
                                    <input 
                                        type='text' 
                                        value={formDetails.lastName} 
                                        placeholder='Last Name'
                                        pattern="[A-Za-z]+"
                                        minLength={3}
                                        maxLength={15}
                                        onChange={(e)=> onFormUpdate('lastName', e.target.value)} 
                                        required
                                    />
                                </div>
                                <div>
                                    <input 
                                        type='email' 
                                        value={formDetails.email} 
                                        placeholder='Your Email address'
                                        onChange={(e)=> onFormUpdate('email', e.target.value)}
                                        required 
                                    />
                                </div>
                                <div>
                                    <input 
                                        type='tel' 
                                        value={formDetails.phone} 
                                        placeholder='(22) 55555-4444'
                                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                        onChange={(e)=> onFormUpdate('phone', e.target.value)} 
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.text_input}>
                                <textarea 
                                    rows={6}
                                    cols={7}
                                    value={formDetails.message} 
                                    placeholder='Message'
                                    minLength={5}
                                    maxLength={200}
                                    onChange={(e)=> onFormUpdate('message', e.target.value)} 
                                />
                            </div>
                            <div className={styles.successMsg}>
                                <button className={styles.btn} type='submit'><span>{buttonText}</span></button>
                                {showMessage &&
                                    <p className={classNames({[styles.danger]: status.success === 'false', [styles.success]: status.success === 'true'})}>{status.message}</p>
                                }
                            </div>
                            
                           
                        </form>
                    </div>
                </div>
            
        </section>
    )
}

export default Contact;