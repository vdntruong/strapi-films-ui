import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";

const FilmsList = () => {
    return (
        <Layout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    Films
                </span>
            </h1>
        </Layout>
    )
}

export default FilmsList;

export async function getStaticProps() {
    const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`)
    console.log({filmsResponse})
    return {
        props: {
            films: filmsResponse
        }
    }
}
