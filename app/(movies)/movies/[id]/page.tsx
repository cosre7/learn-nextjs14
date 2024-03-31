import { Suspense } from "react";
import MovieInfo from "../../../../\bcomponents/movie-info";
import MovieVideos from "../../../../\bcomponents/movie-videos";


export default async function MovieDetail({params: {id}} : {params: {id: string}}) {

    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        {/* <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense> */}
    </div>
}