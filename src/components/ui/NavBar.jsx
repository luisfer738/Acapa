import Image from 'next/image';
import Logo from './../../../public/logo.svg';

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-body">
            <div className="container-fluid">
                <a className="navbar-brand d-flex" href="#">
                <Image 
                    src={Logo} 
                    height={57} 
                    width={94} 
                    className="d-inline-block align-top" 
                    alt="logo"
                />{' '}
                <h3 className='align-items-center my-auto'>Ecoturistico</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {
                            ['Catalogo','Nuestros Sabedores','Sobre Nosotros'].map( text => (
                                <li className="nav-item" key={ text }>
                                    <a className="nav-link active" aria-current="page" href="#">{ text }</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

