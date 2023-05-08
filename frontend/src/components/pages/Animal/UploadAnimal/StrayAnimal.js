import React, { useState } from 'react'
import { MdSubtitles, MdOutlinePlace, MdPlace } from 'react-icons/md'
import { TbZip } from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './StrayAnimal.css'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const StrayAnimal = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [landmark, setLandmark] = useState('')
    const [zip, setZip] = useState('')
    const [image, setImage] = useState('')

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                500,
                500,
                'JPEG',
                60,
                0,
                (uri) => {
                    resolve(uri)
                },
                'base64',
            )
        }
        )

    const uploadAvatar = async (event) => {
        try {
            const file = event.target.files[0]
            const img = await resizeFile(file)
            setImage(img);
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const _data = { name, address, landmark, image, zip }
        if (name === '' || address === '' || landmark === '' || zip === '' || image === '') {
            return toast.error('All fields are mandatory', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        await axios.post('http://localhost:8000/helpanimals', _data)
            .then((res) => {
                toast.success(res.data.msg, {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/')
            })
            .catch((err) => {
                toast.error('somrthing wrong while add stray animal', {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <>
            <ToastContainer />
            <div className='strayanimal_main' >
                <div className='strayanimal_main_parent'>
                    <div className='motivation1'>

                    </div>
                    <div className="strayanimal_parent" id='bgfit'>
                        <div><MdSubtitles /> <input type="text" placeholder='Name of animal' onChange={(e) => setName(e.target.value)} /></div>
                        <div><MdPlace /><input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} /></div>
                        <div><MdOutlinePlace /><input type="text" placeholder='Landmark' onChange={(e) => setLandmark(e.target.value)} /></div>
                        <div><TbZip /><input type="text" placeholder='Pin code' onChange={(e) => setZip(e.target.value)} /></div>

                        <div id='fileupload'><h6>Upload the land image:</h6><input type="file" accept='image/*' onChange={uploadAvatar} /></div>
                        <button onClick={handleSubmit}>Save Animal</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StrayAnimal