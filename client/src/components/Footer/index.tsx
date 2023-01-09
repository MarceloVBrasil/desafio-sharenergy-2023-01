import "./Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            &copy; Marcelo Brasil - {new Date().getFullYear()}
        </footer>
    )
}
