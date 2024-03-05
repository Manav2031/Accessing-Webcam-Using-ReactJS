import React, {useCallback, useRef, useState} from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import './styles.css'

const videoConstraints = {
    width: 540,
    facingMode: 'environment'
}

const Camera = () => {

    const webcamRef = useRef(null)
    const [url, setUrl] = useState(null)
    const [output, setOutput] = useState(null)

    const capturePhoto = useCallback(async() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setUrl(imageSrc)
        const blob = await fetch(imageSrc).then((res) => res.blob());
        const formData = new FormData();
        formData.append("image_file", blob);
        
        try {
            const response = await axios.post(
                "https://itechseed-ocr-task.onrender.com/ocr", 
                formData
            )
            console.log(response);
            setOutput(response.data.text)
        } catch (error) {
            console.error(error);
        }
    }, [webcamRef])

    const onUserMedia = (e) => {
        console.log(e)
    }

  return (
    <div className="webcam-container">
        <Webcam
        className="webcam-preview"
        ref = {webcamRef}
        screenshotFormat = "image/jpeg"
        screenshotQuality = {1}
        videoConstraints = {videoConstraints}
        onUserMedia = {onUserMedia}
        mirrored = {false} 
        />
        <br /> <br />
        <button onClick={capturePhoto} className="capture-button"> Capture </button>
        <br /> <br />
        <button className="refresh-button" onClick={() => {setUrl(null); setOutput(null)}}> Refresh </button>
        {url && (
            <div>
                <br /> <br />
                <img className="screenshot-img" src={url} alt="Screenshot" />
            </div>
        )}
        {output && (
            <div className="output-container">
                { output } 
            </div>
        )}
    </div>
  )
}

export default Camera