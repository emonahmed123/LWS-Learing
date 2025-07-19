import { useEffect, useState } from 'react';

const useGithub = (username) => {
    console.log(username)
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    useEffect(() => {


        const fetchData = async () => {

            try {

                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );

                const responseData = await response.json()

                setUser(responseData)
                setLoading(false)
            }
            catch (error) {
                {
                    setError(error.message)
                    console.log(error)
                    setLoading(false)
                }
            }

        }


        fetchData()


    }, [username])

    console.log(user)

    return {
        loading,
        user,
        error
    }
};

export default useGithub;