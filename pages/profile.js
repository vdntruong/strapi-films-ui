import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";
import { getIdFromLocalCookie, getTokenFromServerCookie } from "@/lib/auth";
import { useFetchUser } from "@/lib/authContext";
import { useRouter } from "next/router";
import { useState } from "react";

const Profile = ({ avatar }) => {
    const { user, loading } = useFetchUser();
    const [image, setImage] = useState(null);
    const router = useRouter();

    const uploadToSClient = (e) => {
        if (e.target.files && e.target.files[0]) {
            const tmpImage = e.target.files[0]
            setImage(tmpImage);
        }
    }

    const uploadToServer = async () => {
        const formData = new FormData();
        const file = image;
        formData.append('inputFile', file)
        formData.append('user_id', await getIdFromLocalCookie());
        try {
            const responseData = await fetcher('/api/upload',
                {
                    method: 'POST',
                    body: formData,
                }
            );
            console.log({responseData})

            if (responseData.message === 'success') {
                alert('done done done')
                router.reload('/profile')
            }

        } catch (error) {
            console.error(JSON.stringify(error));
            alert('failed failed failed')
        }
    }

    return (
        <Layout user={user}>
            <>
                <h1 className="text-5xl font-bold">
                    Welcome back{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        {user}
                    </span>
                    <span>✌✌✌</span>
                </h1>
                {avatar === 'default_avatar_zjzmxt' && (
                    <div>
                        <h4>Select an image to upload</h4>
                        <input type="file" onChange={uploadToSClient} />
                        <butotn className='md:p-2 rounded py-2 text-black bg-purple-200 p-2' type='submit' onClick={uploadToServer}>
                            Set Profile Image
                        </butotn>
                    </div>
                )}
                {avatar && (
                    <img src={`https://res.cloudinary.com/dllncczbq/image/upload/${avatar}`} alt="Profile Image" />
                )}
            </>
        </Layout>
    )

}

export default Profile;

export async function getServerSideProps({ req }) {
    const jwt = getTokenFromServerCookie(req);
    if (!jwt) {
        return {
            redirect: {
                destination: '/',
            }
        }
    }

    const response = fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            }
        })
    const avatar = response.avatar ? response.avatar : 'default_avatar_zjzmxt'
    return {
        props: {
            avatar,
        }
    }
}