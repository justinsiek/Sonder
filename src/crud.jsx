import React, { useState, useEffect } from 'react';
import { db } from './firebase'
import { doc, addDoc, collection, updateDoc, deleteDoc, getDocs } from 'firebase/firestore'
import Card from './Card';

const Crud = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [fetchData, setFetchData] = useState()

    const dbref = collection(db, 'CRUD')

    const add = async () => {
        const adddata = await addDoc(dbref, { Name: name, Email: email, Phone: phone })
        if (adddata) {
            alert("Data Added Successfully")
            window.location.reload()
        } else {
            alert("Error Occured To add the data")
        }
    }
    const fetch = async () => {
        const snapshot = await getDocs(dbref)
        const fetchdata = snapshot.docs.map((doc => ({ id: doc.id, ...doc.data() })))
        setFetchData(fetchdata)
        console.log(fetchdata)
    }
    useEffect(() => {
        fetch()
    }, [])

    const passData = async (id) => {
        const matchId = fetchData.find((data) => {
            return data.id === id
        })
        setName(matchId.Name)
        setEmail(matchId.Email)
        setPhone(matchId.Phone)

    }

    const update = async () => {
        const updateref = doc(dbref, id)
        try {
            const updatedata = await updateDoc(updateref, { Name: name, Email: email, Phone: phone })
        }
        catch (error) {
            alert(error, "Update Error occured")
        }
    }
    const del = async (id) => {
        const delref = doc(dbref, id)
        try {
            await deleteDoc(delref)
        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <div>
                <h2>Add / Update Form</h2>
                <div>
                    <input type='text' placeholder='Full Name' autoComplete="Off" value={name} onChange={(e => setName(e.target.value))}></input>
                </div>
                <div>
                    <input type='email' placeholder='E-mail' autoComplete="Off" value={email} onChange={(e => setEmail(e.target.value))}></input>
                </div>
                <div>
                    <input type='text' placeholder='Phone Number' autoComplete="Off" value={phone} onChange={(e => setPhone(e.target.value))}></input>
                </div>
                <button onClick={add}>Add</button>
                <button>Update</button>
            </div>
            <div>
                <h2>CRUD Database</h2>
                <div>
                    {fetchData?.map((data) => {
                        return (
                            <Card text={data.Name} />
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Crud



/*{
                    fetchData.map((data) =>{
                        return(
                            <>
                            <div>
                                <h3>Name: {data.Name} </h3>
                                <h3>E-mail: {data.Email}  </h3>
                                <h3>Phone: {data.Phone}  </h3>
                                <button onClick={() => passData (data.id)}>update</button>
                                <button onClick ={() => del (data.id)}>Delete</button>
                            </div>  
                            </>
                        )
                    })
                }
                
                {
                    fetchData?.map((data) =>{
                        return (
                            <Card text={data.Name} /> 
                        )
                    })
                }
                
                
                
                
                
                */