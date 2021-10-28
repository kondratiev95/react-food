export const Footer = () => {
    return (
        <footer className="page-footer brown lighten-1">
            <div class="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a 
                        className="grey-text text-lighten-4 right" 
                        href="https://github.com/kondratiev95/react-food"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    )
}