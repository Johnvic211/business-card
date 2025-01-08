import photo from './../assets/profile.jpg';
import email from './../assets/Mail-Icon.png';
import linkInIcon from './../assets/In-Icon.png';

const CopyEmail = () => {
    const email = 'delacruzjohnvic21@gmail.com';
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
}

function Info() {
    return (
        <div className='text-center'>
            <img src={photo} className='w-80 m-auto rounded-t-lg mb-4' alt="Photo of myself"  />
            <h1 className='font-extrabold text-xl'>Johnvic Dela Cruz</h1>
            <h2 className='text-sm text-orange-200'>Full-stack Developer</h2>
            <small className='text-xs'>delacruzjohnvic21@gmail.com</small>
            <div className='py-3 px-6 flex flex-row justify-center'>
                <button 
                    className='custom-btn bg-white text-black ' 
                    onClick={CopyEmail}
                >
                    <img src={email} alt="Email Icon" className='w-3 h-3 mr-2 mt-1.5' />
                    Email
                </button>
                <a 
                    className='custom-btn bg-blue-500 text-white' 
                    href='https://www.linkedin.com/in/johnvic-dela-cruz-b4614b25a/'
                    target='_blank'
                >
                    <img src={linkInIcon} alt="LinkedIn Icon" className='w-3 h-3 mr-2 mt-1.5' />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info