import { Link } from 'react-router-dom'



function Page404 () {

    return (
        <div className="kasa-error">
            
            <a  className="kasa-error-number">404</a>
            <span className="kasa-error-text">Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/' className="kasa-return-text">Retourner sur la page d'accueil</Link>
            
        </div>
      );





}

export default Page404