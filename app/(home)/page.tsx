import Link from "next/link";

export const metadata = {
    title: 'Home',
}

export const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

async function getMovies() {
    const response = await (fetch(API_URL))
    const json = await response.json()
    return json
}

export default async function HomePage() {
    // 임의로 3초동안 백엔드 서버를 지연시키는 프로세스 
    // await new Promise(resolve => setTimeout(resolve, 1000))

    const movies = await getMovies()
    return (
        <div>
            {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    )
}