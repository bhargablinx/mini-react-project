export default function Footer() {
    return (
        <footer className="py-6 px-6 bg-white text-center text-gray-600 border-t">
            <p>
                &copy; {new Date().getFullYear()} DummyVPN. All rights reserved.
            </p>
        </footer>
    );
}
