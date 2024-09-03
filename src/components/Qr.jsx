import { useState } from "react";
import QRCode from "react-qr-code"
import "./Qr.css"

function Qr(){

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')
    function handleGenerateQrCode(){
        setQrCode(input)
    }


return(
<>
<div className="input-btn">
    <input onChange={(e) => setInput(e.target.value)} type="text" name="generate" placeholder="Enter you value" />
<button className="btn" disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate Qr</button>
</div>
<div>
    <QRCode
    className="qr"
    id="qr-code-value" value={qrCode}
    />
</div>

</>
);
}
export default Qr;