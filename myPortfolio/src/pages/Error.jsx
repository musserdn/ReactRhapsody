
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    console.error(error);

    return (
        <main className="container py-5 text-center">
            <p className="text-uppercase fw-semibold text-primary mb-2">
                Error
            </p>

            <h1 className="display-5 fw-bold mb-3">
                Ope! That's no good.
            </h1>

            <p className="lead mb-3">
                Sorry, an unexpected error has occurred.
            </p>

            <p className="text-secondary mb-4">
                <i>
                    {error?.statusText ||
                        error?.message ||
                        'An unexpected error occurred.'}
                </i>
            </p>

            <img
                className="img-thumbnail rounded shadow-sm"
                src="https://placedog.net/300/250"
                alt="A dog"
                width="300"
                height="250"
                loading="lazy"
            />
        </main>
    );
}
