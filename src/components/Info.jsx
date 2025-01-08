import photo from './../assets/profile.jpg';
import email from './../assets/Mail-Icon.png';
import linkedInIcon from './../assets/linkedin-Icon.png';
import Swal from 'sweetalert2';

const CopyEmail = () => {
    const email = 'delacruzjohnvic21@gmail.com';
    navigator.clipboard.writeText(email);

    Swal.fire({
        title: 'Email Copied to Clipboard',
        showConfirmButton: false,
        timer: 2000,
        position: 'top-end',
        width: '500px',
        backdrop: false,
    });
}

function Info() {
    return (
        <div className='text-center'>
            <img src={photo} className='w-80 m-auto rounded-t-lg mb-4' alt="Photo of myself"  />
            <h1 className='font-extrabold text-xl'>Johnvic Dela Cruz</h1>
            <h2 className='text-sm text-orange-200'>Full-stack Web Developer</h2>
            <small className='text-xs'>delacruzjohnvic21@gmail.com</small>

            <div className='py-3 px-6 flex flex-row justify-center'>
                <button 
                    className='w-60 px-4 py-1 rounded font-bold mx-2 flex justify-center bg-white text-black ' 
                    onClick={CopyEmail}
                >
                    <img src={email} alt="Email Icon" className='w-3 h-3 mr-2 mt-1.5' />
                    Email
                </button>
                <a 
                    className='w-60 px-4 py-1 rounded font-bold mx-2 flex justify-center bg-blue-500 text-white' 
                    href='https://www.linkedin.com/in/johnvic-dela-cruz-b4614b25a/'
                    target='_blank'
                >
                    <img src={linkedInIcon} alt="LinkedIn Icon" className='w-3 h-3 mr-2 mt-1.5' />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info