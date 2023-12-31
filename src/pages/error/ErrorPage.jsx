import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="h-[60dvh] w-full ">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Go home</Link>
        </div>
    );
}

export default ErrorPage;
