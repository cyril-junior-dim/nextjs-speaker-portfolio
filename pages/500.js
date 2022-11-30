import { Navbar } from "../components";

export default function Custom500() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "80vh"
            }}>
                <h1 style={{
                    textAlign: "center",
                    margin: "auto"
                }}>500 | Internal Server Error</h1>
            </div>
        </div>
    )
}