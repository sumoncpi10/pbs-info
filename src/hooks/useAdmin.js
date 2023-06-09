import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            // fetch(`https://ancient-sierra-92602.herokuapp.com/admin/${email}`, {
            //     method: 'GET',
            //     headers: {
            //         'content-type': 'application/json',
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         setAdmin(data.admin);
            //         setAdminLoading(false);
            //     })
            fetch(`https://pbsofficeinfosql.onrender.com/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data[0]);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [admin]
}

export default useAdmin;