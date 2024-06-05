import Link from "next/link";
import "@/app/_css/not-found.css";
export default function notFound() {
    return (
        <div
            className="app"
            id="app"
            style={{
                backgroundImage:
                    'url("https://static.garmincdn.com/com.garmin.static-pages/images/hiking-rock.jpg")',
            }}
        >
            <div className="app__content">
                <div className="app__error-description">
                    <h1 className="app__heading">
                        Sorry, we can't find that page.
                    </h1>
                    <p className="app__subheading">
                        Let us help you find your way.
                    </p>
                    <Link href="/" className="app__button">
                        Explore the site
                    </Link>
                    <p className="app__error-code">Page not found</p>
                </div>
            </div>
        </div>
    );
}
