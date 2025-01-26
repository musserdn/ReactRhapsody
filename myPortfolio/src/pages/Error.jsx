import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const randomWidth = () => {
        const number = Math.random() * (300 - 200) + 200;
        return number.toString().split('.')[0];
    };

    return (
        <div id="error-page">
            <h1>Ope! That's no good.</h1>
            <p>Sorry, an unexpected error has occurred. Here is your error and a Doggo: </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img
                className="img-thumbnail"
                src={`https://placedog.net/300/${randomWidth()}`}
                alt="Picture of a Dog"
            />
        </div>
    );
}