import Layout from "@/components/Layout";
import { useFetchUser } from "@/lib/authContext";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user}>
      <h1 className='font-bold text-5xl'>
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Strapi Film Reviews
        </span>
      </h1>
    <br/>
      <p>
        This is a sample website created by {' '}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          gay developers {' '}
        </span>
        for {' '}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          gay users
        </span>
      </p>
    </Layout>
  )
}
