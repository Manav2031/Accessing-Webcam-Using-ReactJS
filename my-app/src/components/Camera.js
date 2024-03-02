import React, {useCallback, useRef, useState} from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 540,
    facingMode: 'environment'
}

const Camera = () => {

    const webcamRef = useRef(null)
    const [url, setUrl] = useState(null)

    const capturePhoto = useCallback(async() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setUrl(imageSrc)
    }, [webcamRef])

    const onUserMedia = (e) => {
        console.log(e)
    }

  return (
    <>
        <Webcam
        ref = {webcamRef}
        screenshotFormat = "image/jpeg"
        screenshotQuality = {1}
        videoConstraints = {videoConstraints}
        onUserMedia = {onUserMedia}
        mirrored = {false} 
        />
        <br /> <br />
        <button onClick={capturePhoto}> Capture </button>
        <br /> <br />
        <button onClick={() => setUrl(null)}> Refresh </button>
        {url && (
            <div>
                <br /> <br />
                <img src={url} alt="Screenshot" />
            </div>
        )}
    </>
  )
}

export default Camera