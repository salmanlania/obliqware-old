// import React, { useState } from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// // import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

// const Contact = () => {
//     useDocTitle('Obliqware | Your Success We Declare - Send us a message')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [errors, setErrors] = useState([])

//     const clearErrors = () => {
//         setErrors([])
//     }

//     const clearInput = () => {
//         setFirstName('')
//         setLastName('')
//         setEmail('')
//         setPhone('')
//         setMessage('')
//     }

//     // const sendEmail = (e) => {
//     //     e.preventDefault();
//     //     document.getElementById('submitBtn').disabled = true;
//     //     document.getElementById('submitBtn').innerHTML = 'Loading...';
//     //     let fData = new FormData();
//     //     fData.append('first_name', firstName)
//     //     fData.append('last_name', lastName)
//     //     fData.append('email', email)
//     //     fData.append('phone_number', phone)
//     //     fData.append('message', message)

//     //     axios({
//     //         method: "post",
//     //         url: process.env.REACT_APP_CONTACT_API,
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type':  'application/json'
//     //         }
//     //     })
//     //     .then(function (response) {
//     //         document.getElementById('submitBtn').disabled = false;
//     //         document.getElementById('submitBtn').innerHTML = 'send message';
//     //         clearInput()
//     //         //handle success
//     //         Notiflix.Report.success(
//     //             'Success',
//     //             response.data.message,
//     //             'Okay',
//     //         );
//     //     })
//     //     .catch(function (error) {
//     //         document.getElementById('submitBtn').disabled = false;
//     //         document.getElementById('submitBtn').innerHTML = 'send message';
//     //         //handle error
//     //         const { response } = error;
//     //         if(response.status === 500) {
//     //             Notiflix.Report.failure(
//     //                 'An error occurred',
//     //                 response.data.message,
//     //                 'Okay',
//     //             );
//     //         }
//     //         if(response.data.errors !== null) {
//     //             setErrors(response.data.errors)
//     //         }
            
//     //     });
//     // }
//     const sendEmail = (e) => {
//         e.preventDefault();
//         document.getElementById('submitBtn').disabled = true;
//         document.getElementById('submitBtn').innerHTML = 'Loading...';
    
//         let fData = new FormData();
//         fData.append('first_name', firstName);
//         fData.append('last_name', lastName);
//         fData.append('email', email);
//         fData.append('phone_number', phone);
//         fData.append('message', message);
    
//         axios.post(process.env.REACT_APP_CONTACT_API, fData, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(function (response) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'Send Message';
//             clearInput();
//             Notiflix.Report.success(
//                 'Success',
//                 response.data.message,
//                 'Okay'
//             );
//         })
//         .catch(function (error) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'Send Message';
    
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx
//                 if (error.response.status === 500) {
//                     Notiflix.Report.failure(
//                         'An error occurred',
//                         error.response.data.message,
//                         'Okay'
//                     );
//                 }
//                 if (error.response.data.errors) {
//                     setErrors(error.response.data.errors);
//                 }
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 Notiflix.Report.failure(
//                     'No Response',
//                     'The server did not respond. Please try again later.',
//                     'Okay'
//                 );
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 Notiflix.Report.failure(
//                     'Error',
//                     error.message,
//                     'Okay'
//                 );
//             }
//         });
//     }
    
//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
//                 <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

//                 <form onSubmit={sendEmail}>

//                     <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//                         <div className="flex">
//                             <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
//                         </div>
//                         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//                                 <div>
//                                     <input 
//                                         name="first_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="First Name*" 
//                                         value={firstName}
//                                         onChange={(e)=> setFirstName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.first_name}</p>
//                                     }
//                                 </div>
                                
//                                 <div>
//                                     <input 
//                                         name="last_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="Last Name*"
//                                         value={lastName}
//                                         onChange={(e)=> setLastName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.last_name}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input 
//                                         name="email"
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="email" 
//                                         placeholder="Email*"
//                                         value={email}
//                                         onChange={(e)=> setEmail(e.target.value)}
//                                         onKeyUp={clearErrors}   
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.email}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input
//                                         name="phone_number" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="number" 
//                                         placeholder="Phone*"
//                                         value={phone}
//                                         onChange={(e)=> setPhone(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.phone_number}</p>
//                                     }
//                                 </div>
//                         </div>
//                         <div className="my-4">
//                             <textarea 
//                                 name="message" 
//                                 placeholder="Message*" 
//                                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                 value={message}
//                                 onChange={(e)=> setMessage(e.target.value)}
//                                 onKeyUp={clearErrors}
//                             ></textarea>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.message}</p>
//                             }
//                         </div>
//                         <div className="my-2 w-1/2 lg:w-2/4">
//                             <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
//                                     focus:outline-none focus:shadow-outline">
//                                 Send Message
//                             </button>
//                         </div>
//                 </div>
//                 </form>
//                         <div
//                             className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
//                             <div className="flex flex-col text-white">
                                
//                                 <div className="flex my-4 w-2/3 lg:w-3/4">
//                                     <div className="flex flex-col">
//                                         <i className="fas fa-map-marker-alt pt-2 pr-2" />
//                                     </div>
//                                     <div className="flex flex-col">
//                                         <h2 className="text-2xl">Office Address</h2>
//                                         <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
//                                     </div>
//                                 </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <div className="flex flex-col">
//                         <i className="fas fa-phone-alt pt-2 pr-2" />
//                         </div>

//                         <div className="flex flex-col">
//                         <h2 className="text-2xl">Call Us</h2>
//                         <p className="text-gray-400">Tel: 08055384406</p>
                        
//                             <div className='mt-5'>
//                                 <h2 className="text-2xl">Send an E-mail</h2>
//                                 <p className="text-gray-400">info@mld.ng</p>
//                             </div>
                       
//                         </div>
//                     </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
//                         </a>
//                         <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//                         </a>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             <Footer />
//         </>


//     )
// }

// export default Contact;
import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';
const hrefMapLink = 'https://maps.app.goo.gl/S9AGZDKgPsWMCeUAA'

const Contact = () => {
    useDocTitle('Obliqware | Your Success We Declare - Send us a message');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        const data = {
            name: firstName,
            lname: lastName,
            email: email,
            number: phone,
            message: message
        };

        axios.post(process.env.REACT_APP_CONTACT_API, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success(
                'Success',
                'Your message has been sent successfully!',
                'Okay'
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
    
            if (error.response) {
                if (error.response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        'There was an issue sending your message. Please try again later.',
                        'Okay'
                    );
                } 
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            } else if (error.request) {
                Notiflix.Report.failure(
                    'No Response',
                    'The server did not respond. Please try again later.',
                    'Okay'
                );
            } else {
                Notiflix.Report.failure(
                    'Error',
                    error.message,
                    'Okay'
                );
            }
        });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && errors.name && 
                                        <p className="text-red-500 text-sm">{errors.name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input 
                                        name="lname" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && errors.lname &&
                                        <p className="text-red-500 text-sm">{errors.lname}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors && errors.email &&
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && errors.number &&
                                        <p className="text-red-500 text-sm">{errors.number}</p>
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea 
                                    name="message" 
                                    placeholder="Message*" 
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && errors.message &&
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                }
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <a href={hrefMapLink} target='_blank' className="text-gray-400">Karachi, Pakistan</a>
                                </div>
                            </div>
                    
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <a href='tel:+923462488254' className="text-gray-400">Tel: +92 346 2488254</a>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <a className="text-gray-400" href='mailto:obliqware@gmail.com'>obliqware@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.928.257-1.56 1.584-1.56h1.693V3.295c-.293-.038-1.296-.128-2.462-.128-2.438 0-4.108 1.486-4.108 4.214v2.348H8v3.209h2.104v8.196h3.293z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/enlighteneering-ltd" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M19.625 3H4.367C3.613 3 3 3.613 3 4.367v15.258C3 20.387 3.613 21 4.367 21h15.257C20.387 21 21 20.387 21 19.625V4.367C21 3.613 20.387 3 19.625 3zM8.756 18.506H5.913V9.686h2.844v8.82zM7.335 8.507h-.019c-.967 0-1.593-.683-1.593-1.537 0-.87.641-1.537 1.626-1.537.985 0 1.593.666 1.611 1.537 0 .854-.626 1.537-1.625 1.537zm11.163 10h-2.843v-4.754c0-1.196-.428-2.011-1.501-2.011-.82 0-1.308.553-1.522 1.086-.078.189-.097.451-.097.715v4.964h-2.843s.038-8.045 0-8.82h2.843v1.248c.378-.582 1.053-1.41 2.565-1.41 1.875 0 3.289 1.238 3.289 3.902v5.08z"/></svg>
                                </a>
                                <a href="https://www.instagram.com/enlighteneering" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='fill-current font-black hover:animate-pulse'><path d="M12.004 7.308c-2.596 0-4.696 2.102-4.696 4.695s2.1 4.695 4.696 4.695c2.593 0 4.695-2.1 4.695-4.695s-2.102-4.695-4.695-4.695zm0 7.733c-1.679 0-3.042-1.364-3.042-3.038 0-1.674 1.364-3.038 3.042-3.038 1.673 0 3.038 1.364 3.038 3.038 0 1.674-1.364 3.038-3.038 3.038zm6.091-7.874c-.615 0-1.113.498-1.113 1.111 0 .616.498 1.112 1.113 1.112.615 0 1.113-.496 1.113-1.112 0-.614-.498-1.111-1.113-1.111zm3.229 1.131c-.073-1.539-.423-2.9-1.545-4.022-1.122-1.122-2.481-1.471-4.022-1.545-1.586-.09-6.348-.09-7.933 0-1.54.073-2.901.422-4.023 1.544-1.122 1.123-1.471 2.483-1.545 4.022-.09 1.586-.09 6.349 0 7.934.073 1.539.423 2.899 1.545 4.021 1.122 1.123 2.482 1.472 4.023 1.546 1.586.09 6.347.09 7.933 0 1.54-.073 2.9-.423 4.022-1.545 1.122-1.122 1.471-2.482 1.545-4.021.09-1.585.09-6.347 0-7.933zm-2.035 9.612c-.334.858-1.048 1.572-1.906 1.906-1.319.524-4.448.403-5.379.403-.931 0-4.064.117-5.379-.403-.859-.334-1.573-1.048-1.907-1.906-.524-1.318-.403-4.448-.403-5.379 0-.931-.118-4.064.403-5.379.334-.858 1.048-1.572 1.907-1.906 1.318-.524 4.447-.403 5.379-.403.93 0 4.063-.117 5.379.403.858.334 1.572 1.048 1.906 1.906.524 1.318.404 4.448.404 5.379 0 .93.119 4.064-.404 5.379z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
